<template>
  <a :href="`https://${instance.url}/`" target="_blank" class="instance" :lang="instance.langs[0]">
    <div class="instance-title" :class="{ hasName }">
      <template v-if="hasName"><span class="instance-name" v-text="instance.meta.name" /> <span class="instance-url" v-text="uniUrl" /></template>
      <template v-else><span class="instance-url" v-text="uniUrl" /></template>
    </div>
    <div v-if="description" v-text="description"/>
    <div class="instance-registration">{{ ts['instances-list-setting']['registration'] }}: {{ instance.meta.features.registration ? ts['instances-list-setting']['registration-statuses'].open : ts['instances-list-setting']['registration-statuses'].close }}</div>
    <div class="instance-version">{{ instance.repo }} {{ instance.meta.version }}</div>
    <div class="instance-stats">{{ numeral(instance.stats.originalNotesCount).format('0,0') }} notes
      | {{ numeral(instance.stats.originalUsersCount).format('0,0') }} users
      {{ instance.stats.reactionsCount && `| ${numeral(instance.stats.reactionsCount).format('0,0')} reactions` }}</div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import punycode from 'punycode/punycode';
import * as numeral from 'numeral';
import { ts } from './texts';

export default defineComponent({
  name: 'Instances',

  props: {
    instance: {
      type: Object,
      required: true
    },
  },

  components: {
  },

  data() {
    const uniUrl = punycode.toUnicode(this.instance.url);

    return {
      uniUrl,
      hasName: this.instance.meta.name && this.instance.meta.name !== uniUrl,
      numeral,

			ts
    }
  },

  computed: {
    description() {
      if (this.instance.description) {
        const div = document.createElement('div');
        div.innerHTML = this.instance.description.trim();
        const text = div.textContent || '';
        return text.length < 110 ? text : `${text.slice(0, 100)}......`;
      }

      return null;
    }
  },

  methods: {
  },
});
</script>

<style lang="scss" scoped>
.instance {
  display: block;
  color: var(--fg);
  text-decoration: none;

  &:hover {
    color: #fff !important;
  }

  .hasName {
    .instance-name {
      font-weight: 700;
    }
  }

  :not(.hasName) {
    .instance-url {
      font-weight: 700;
    }
  }
}

.instance-title {
  text-decoration: underline;
}

.instance-version,
.instance-registration,
.instance-stats {
  font-size: .8em;
}

</style>
