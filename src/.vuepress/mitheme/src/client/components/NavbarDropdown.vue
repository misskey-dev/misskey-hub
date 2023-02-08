<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs, watch, nextTick } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import type { NavbarItem, ResolvedNavbarItem } from '../../shared'

const props = defineProps<{
  item: Exclude<ResolvedNavbarItem, NavbarItem>
}>()

const { item } = toRefs(props)

const dropdownAriaLabel = computed(
  () => item.value.ariaLabel || item.value.text
)

const open = ref(false)
const dropdownEl = ref<HTMLUListElement>();
const rootEl = ref<HTMLDivElement>();
const route = useRoute()

const onHover = async () => {
  await nextTick();

  if (!rootEl.value || !dropdownEl.value) return;

  const rootBR = rootEl.value.getBoundingClientRect();

  let left = rootBR.left;
  const top = rootBR.top + rootEl.value.offsetHeight;

  let width = dropdownEl.value.scrollWidth;

  if (width > window.innerWidth) {
    width = window.innerWidth;
    left = 0;
  } else {
    if (left + width - window.scrollX > window.innerWidth) {
      left = window.innerWidth - width + window.scrollX;
    }

    if (left < 0) {
      left = 0;
    }
  }

  dropdownEl.value.style.top = `${top}px`;
  dropdownEl.value.style.left = `${left}px`;

  if (width) dropdownEl.value.style.width = `${width}px`;
  else dropdownEl.value.style.width = '';
};

watch(open, value => {
  if (value) onHover();
});

watch(
  () => route.path,
  () => {
    open.value = false
  }
)

/**
 * Open the dropdown when user tab and click from keyboard.
 *
 * Use event.detail to detect tab and click from keyboard.
 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
 */
const handleDropdown = (e): void => {
  const isTriggerByTab = e.detail === 0
  if (isTriggerByTab) {
    open.value = !open.value
  } else {
    open.value = false
  }
}

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
  arr[arr.length - 1] === item
</script>

<template>
  <div class="navbar-dropdown-wrapper" ref="rootEl" :class="{ open }" @touchstart.self="onHover" @mouseover.self="onHover">
    <button
      class="navbar-dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="handleDropdown"
      @touchstart="onHover"
      @mouseover="onHover"
    >
      <template v-if="item.icon" >
        <component :is="item.icon" class="tabler-icon _icon_middle" />
      </template>
      <span class="title">{{ item.text }}</span>
      <span class="arrow down" />
    </button>

    <button
      class="navbar-dropdown-title-mobile"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="open = !open"
    >
      <template v-if="item.icon" >
        <component :is="item.icon" class="tabler-icon _icon_middle" />
      </template>
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>

    <DropdownTransition>
      <ul v-show="open" class="navbar-dropdown" ref="dropdownEl">
        <li
          v-for="child in item.children"
          :key="child.text"
          class="navbar-dropdown-item"
        >
          <template v-if="child.children">
            <h4 class="navbar-dropdown-subtitle">
              <AutoLink
                v-if="child.link"
                :item="child"
                @focusout="
                  isLastItemOfArray(child, item.children) &&
                    child.children.length === 0 &&
                    (open = false)
                "
              />

              <span v-else>{{ child.text }}</span>
            </h4>

            <ul class="navbar-dropdown-subitem-wrapper">
              <li
                v-for="grandchild in child.children"
                :key="grandchild.link"
                class="navbar-dropdown-subitem"
              >
                <AutoLink
                  :item="grandchild"
                  @focusout="
                    isLastItemOfArray(grandchild, child.children) &&
                      isLastItemOfArray(child, item.children) &&
                      (open = false)
                  "
                />
              </li>
            </ul>
          </template>

          <template v-else>
            <AutoLink
              :item="child"
              @focusout="
                isLastItemOfArray(child, item.children) && (open = false)
              "
            />
          </template>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<style lang="scss">
@import '../styles/_mixins';
@import '../styles/_variables';

.navbar-dropdown-wrapper {
  cursor: pointer;

  .navbar-dropdown-title {
    display: block;
    font-size: 0.9rem;
    font-family: inherit;
    cursor: inherit;
    padding: inherit;
    line-height: 1.4rem;
    background: transparent;
    border: none;
    font-weight: 500;
    color: var(--c-text);

    &.router-link-active,
    &:hover {
      border-color: transparent;
      color: var(--c-text-accent);
    }

    .arrow {
      vertical-align: middle;
      margin-top: -1px;
      margin-left: 0.4rem;
    }
  }

  &:hover {
    .navbar-dropdown-title {
      border-color: transparent;
      color: var(--c-text-accent);
    }
  }

  .navbar-dropdown-title-mobile {
    @extend .navbar-dropdown-title;
    display: none;
    font-weight: 600;
    font-size: inherit;

    &:hover {
      color: var(--c-text-accent);
    }
  }

  .navbar-dropdown {
    cursor: auto;
    list-style: none;
		background-color: var(--c-bg-navbar-dropdown);
		border: none;
		border-radius: 8px;
		box-shadow: 0px 4px 32px var(--c-bg-navbar-dropdown-shadow);

    .navbar-dropdown-item {
      color: inherit;
      line-height: 1.7rem;

      .navbar-dropdown-subtitle {
        margin: 0.45rem 0;
        padding: 1rem 0 0.3rem 0;
        font-size: 0.9rem;

        & > span {
          padding: 0 1.5rem 0 1.25rem;
        }

        & > a {
          font-weight: inherit;
          &.router-link-active {
            &::after {
              display: none;
            }
          }
        }
      }

      .navbar-dropdown-subitem-wrapper {
        margin: 0;
        padding: 0;
        list-style: none;

        .navbar-dropdown-subitem {
          font-size: 0.9em;
        }
      }

      a {
        display: block;
        line-height: 1.1rem;
        position: relative;
        border-bottom: none;
        font-weight: 400;
        margin-bottom: 0;
        padding: 0.25rem 1.5rem 0.25rem 1.25rem;

        &:hover {
          color: var(--c-text-accent);
        }

        &.router-link-active {
          color: var(--c-text-accent);

          &::after {
            content: '';
            width: 0;
            height: 0;
            border-left: 5px solid var(--c-text-accent);
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            position: absolute;
            top: calc(50% - 3px);
            left: 9px;
          }
        }
      }

      &:first-child .navbar-dropdown-subtitle {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar-dropdown-wrapper {
    &.open .navbar-dropdown-title {
      margin-bottom: 0.5rem;
    }

    .navbar-dropdown-title {
      display: none;
    }

    .navbar-dropdown-title-mobile {
      display: block;
    }

    .navbar-dropdown {
      width: 100% !important;
      padding: 1rem 0;
      border-radius: 8px 0 0 8px;
      @include dropdown_wrapper;

      .navbar-dropdown-item {
        margin-bottom: 6px;

        .navbar-dropdown-subtitle {
          margin-top: 15px;
          border-top: 0;
          padding-top: 0;
          padding-bottom: 0;
        }

        .navbar-dropdown-subtitle,
        & > a {
          font-size: 15px;
        }

        .navbar-dropdown-subitem {
          font-size: 14px;
          padding-left: 1rem;
        }
      }
    }
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .navbar-dropdown-wrapper {
    height: 1.8rem;

    &:hover .navbar-dropdown,
    &:active .navbar-dropdown,
    &.open .navbar-dropdown {
      // override the inline style.
      display: flex !important;
    }

    &.open:blur {
      display: none;
    }

    .navbar-dropdown {
      display: none;
      flex-wrap: wrap;
      flex-direction: column;
      width: auto;
      max-width: 100vw;
      // Avoid height shaked by clicking
      height: auto !important;
      box-sizing: border-box;
      max-height: calc(100vh - 2.7rem);
      overflow: auto;
      position: fixed;
      top: 100%;
      background-color: var(--c-bg-navbar-dropdown);
      padding: 0.6rem 0;
      text-align: left;
      border-radius: 8px;
      white-space: break-spaces;
      margin: 0;
    }

    .navbar-dropdown-item {
      max-width: 17rem;
    }
  }
}
</style>
