<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useThemeLocaleData } from '../composables'

const emit = defineEmits(['toggle-sidebar'])

const themeLocale = useThemeLocaleData()

const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

let ro: ResizeObserver;

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)

	ro = new ResizeObserver((entries, observer) => {
		document.documentElement.style.setProperty('--globalHeaderHeight', navbar.value.offsetHeight + 'px');
	});

	ro.observe(navbar.value);
})

onBeforeUnmount(() => {
	ro.disconnect();
})

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>

<template>
  <header ref="navbar" class="navbar">
    <ToggleSidebarButton @toggle="emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <NavbarSearch />
    </div>
  </header>
</template>

<style lang="scss">
@import '../styles/_variables';

.navbar {
  --navbar-line-height: calc(
    3.6em - 2 * var(--navbar-padding-v)
  );

  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  transition: background-color var(--t-color), border-color var(--t-color);
  padding: var(--navbar-padding-v) var(--navbar-padding-h);
  line-height: var(--navbar-line-height);
	background-color: var(--c-bg-navbar);
	backdrop-filter: blur(14px);

  .logo {
    height: var(--navbar-line-height);
    margin-right: var(--navbar-padding-v);
    vertical-align: top;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--c-text);
    position: relative;
  }

  .navbar-items-wrapper {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    top: var(--navbar-padding-v);
    right: var(--navbar-padding-h);
    height: var(--navbar-line-height);
    padding-left: var(--navbar-padding-h);
    white-space: nowrap;
    font-size: 0.9rem;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .site-name {
      width: calc(100vw - 9.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

/**
 * navbar-items
 */
.navbar-items {
  display: inline-block;

  a {
    display: inline-block;
    line-height: 1.4rem;
    color: inherit;

    &:hover,
    &.router-link-active {
      color: var(--c-text-accent);
    }
  }

  .navbar-item {
    position: relative;
    display: inline-block;
    margin-left: 1.5rem;
    line-height: var(--navbar-line-height);

    &:first-child {
      margin-left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar-items {
    .navbar-item {
      margin-left: 0;
    }
  }
}

@media (min-width: $MQMobile) {
  .navbar-items a,
  .navbar-items button {
    &:hover,
    &.router-link-active {
      color: var(--c-text);
    }
  }

  .navbar-item > a {
    &:hover,
    &.router-link-active {
      margin-bottom: -2px;
      border-bottom: 2px solid var(--c-text-accent);
    }
  }
}

/**
 * toggle sidebar button
 */
.toggle-sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  display: none;
  padding: 0.6rem;
  cursor: pointer;
}

.toggle-sidebar-button .icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  cursor: inherit;

  span {
    display: inline-block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--c-text);
    transition: transform var(--t-transform);

    &:nth-child(2) {
      margin: 6px 0;
    }
  }
}

@media screen and (max-width: $MQMobile) {
  .toggle-sidebar-button {
    display: block;
  }
}

.DocSearch {
  transition: background-color var(--t-color);
}
</style>
