<template>
  <div id="instances">
    <div class="alert small instances-list-setting-alert" role="alert" @click="showSetting = true">
      <div class="fw-bold" v-text="ts['setting']" />
      <span v-text="ts['orders'][orderBy]" /> 
      - 
      <span v-text="orderDesc ? ts.descending : ts.ascending " /><br>
      <span v-text="repository.join(', ')" /><br>
      <span v-text="language.join(', ')" /><br>
      <span v-text="ts.registration"/> 
      - 
      <span v-text="registrationStatus.map(v => ts['registration-statuses'][v]).join(', ')" /><br>
    </div>
    <div id="instances-list" v-if="!loading">
      <Instance v-for="instance in sorted" :key="instance.url" :instance="instance" :ts="ts" />
    </div>
    <div id="instances-loading" v-text="ts['loading']" v-else/>
  </div>

  <transition :name="'instances-setting'" appear :duration="{ enter: 300, leave: 300 }">
    <div v-if="showSetting" id="instances-setting" @click.self="acceptSetting">
      <div id="setting-content" class="_shadow">
        <div class="container my-2">
          <div class="row">
            <div class="col-12 col-lg-6 mb-3">
              <label for="order-by" class="fw-bold" v-text="ts['order']" />
              <div class="input-group">
                <select class="form-select bg-dark text-light" id="order-by" v-model="orderBy">
                  <option
                    v-for="option in orderOptions"
                    :key="option"
                    :value="option"
                    v-text="ts['orders'][option]" />
                </select>
                <select class="form-select bg-dark text-light" v-model="orderDesc" :aria-label="ts['descending']">
                  <option
                    :value="true"
                    v-text="ts['descending']" />
                  <option
                    :value="false"
                    v-text="ts['ascending']" />
                </select>
              </div>
            </div>
            <div class="col-12 col-lg-6 mb-3">
              <div class="fw-bold" v-text="ts['repository']" />
              <div class="form-check form-check-inline"  v-for="repo in repositories" :key="repo">
                <input class="form-check-input" type="checkbox" :id="`select-${repo}`" :value="repo" v-model="repository" :disabled="this.orderBy === 'reactionsCount' && repo === 'mei23/misskey'">
                <label class="form-check-label" :for="`select-${repo}`" v-text="repo" />
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="fw-bold" v-text="ts['language']" />
              <div class="form-check form-check-inline"  v-for="lang in instanceLanguages" :key="lang">
                <input class="form-check-input" type="checkbox" :id="`select-${lang}`" :value="lang" v-model="language">
                <label class="form-check-label" :for="`select-${lang}`" v-text="lang" />
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="fw-bold" v-text="ts['registration']" />
              <div class="form-check form-check-inline"  v-for="stat in registrationStatuses" :key="stat">
                <input class="form-check-input" type="checkbox" :id="`select-${stat}`" :value="stat" v-model="registrationStatus">
                <label class="form-check-label" :for="`select-${stat}`" v-text="ts['registration-statuses'][stat]" />
              </div>
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-primary ml-auto" @click="acceptSetting" v-text="ts['accept']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Instance from './instance.vue';

const repositories = ['syuilo/misskey', 'mei23/misskey', 'TeamBlackCrystal/misskey', 'mei23/misskey-v11'] as const;
const orderOptions = ['default', 'originalNotesCount', 'originalUsersCount', 'reactionsCount'] as const;
const registrationStatuses = ['open', 'close'] as const;
const instanceLanguages = ['ja', 'en', 'de', 'fr', 'zh', 'ko', 'ru', 'th', 'es'] as const;

export default defineComponent({
  name: 'Instances',

  props: ['ts'],

  components: {
    Instance
  },

  data() {
    return {
      loading: true,
      instances: [] as any[],
      sorted: [] as any[],
      showSetting: false,

      repository: [...repositories],
      orderBy: 'default',
      orderDesc: true,
      registrationStatus: ['open'],
      language: [...instanceLanguages],

      repositories,
      orderOptions,
      instanceLanguages,
      registrationStatuses,
    }
  },

  created() {
    fetch('https://instanceapp.misskey.page/instances.json')
      .then(res => res.json())
      .then(res => {
        this.loading = false;
        this.instances = [...res.instancesInfos];

        this.sort();
      });

  },

  methods: {
    acceptSetting() {
      this.showSetting = false;

      if (this.repository.length === 0) {
        this.repository = [...repositories];
      }

      if (this.orderBy === 'reactionsCount') this.repository = this.repository.filter(r => r !== 'mei23/misskey');

      if (this.registrationStatus.length === 0) {
        this.registrationStatus = [...registrationStatuses];
      }

      this.sort();
    },
    sort() {
      let sorted = this.instances;

      //#region sort order
      sorted = sorted.sort((a, b) => {
        switch (this.orderBy) {
          case 'originalNotesCount':
            return (b.stats.originalNotesCount - a.stats.originalNotesCount) * (this.orderDesc ? 1 : -1);
          case 'originalUsersCount':
            return (b.stats.originalUsersCount - a.stats.originalUsersCount) * (this.orderDesc ? 1 : -1);
          case 'reactionsCount':
            return (b.stats.reactionsCount - a.stats.reactionsCount) * (this.orderDesc ? 1 : -1);
          default:
            return (b.value - a.value) * (this.orderDesc ? 1 : -1);
        }
      });
      //#endregion

      //#region filter repository
      sorted = sorted.filter(instance => {
        return this.repository.includes(instance.repo);
      });
      //#region

      //#region filter language
      sorted = sorted.filter(instance => {
        return this.language.some(condlang => instance.langs.includes(condlang));
      });
      //#region

      //#region filter registration
      if (this.registrationStatus.length == 1) {
        if (this.registrationStatus[0] === 'open') {
          sorted = sorted.filter(instance => {
            return instance.meta.features.registration;
          });
        }
      }
      //#region

      this.sorted = sorted;
    }
  },
});
</script>

<style lang="scss">
#instances {
  margin: 1rem;

  .instance {
    margin-bottom: 1rem;
  }
}

// setting
.instances-list-setting-alert {
  background-color: #2d2d2d;
}

.instances-setting-enter-active, .instances-setting-leave-active {
  transition: opacity 0.3s !important;

  #setting-content {
    transition: transform 0.3s !important;
  }
}
.instances-setting-enter-from, .instances-setting-leave-to {
  pointer-events: none;
  opacity: 0;

  #setting-content {
    transform: scale(0.9);
  }
}

#instances-setting {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  background-origin: border-box;
  text-align: left;

  > * {
    z-index: 1001;
    margin: auto;
  }
}

#setting-content {
  max-width: 1080px;
  width: calc(100vw - 32px);
  background: var(--bg);
  border-radius: var(--radius);
}

:root {
  --accent: rgb(126, 168, 0);
  --accentDarken: rgb(96, 128, 0);
  --accentLighten: rgb(172, 230, 0);
  --focus: rgba(134, 179, 0, 0.3);
  --bg: rgb(35, 35, 35);
  --panel: rgb(45, 45, 45);
  --panelBorder: rgba(0, 0, 0, 0);
  --panelShadow: 0 8px 24px rgb(0 0 0 / 25%);
  --acrylicBg: rgba(35, 35, 35, 0.5);
  --fg: rgb(199, 209, 216);
  --fgTransparentWeak: rgba(199, 209, 216, 0.75);
  --fgTransparent: rgba(199, 209, 216, 0.5);
  --fgHighlighted: rgb(255, 255, 255);
  --radius: 12px;
  --shadow: rgba(0, 0, 0, 0.3);
  --buttonBg: rgba(255, 255, 255, 0.05);
  --buttonHoverBg: rgba(255, 255, 255, 0.1);
}
</style>
