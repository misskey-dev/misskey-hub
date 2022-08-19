<script setup lang="ts">
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <Sidebar>
        <template #bottom>
					<MkDots :class="$style.sidebarDots" :space="12"/>
          <MkAd :class="$style.koko9" class="mkAd"/>
        </template>
      </Sidebar>

      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path"/>
      </Transition>
  </div>
</template>

<style lang="scss">
@import '../styles/_mixins';
@import '../styles/_variables';

.page {
  padding-top: var(--globalHeaderHeight);
  padding-left: var(--sidebar-width);
}

.sidebar {
  font-size: 16px;
  width: var(--sidebar-width);
  position: fixed;
  z-index: 10;
  margin: 0;
  top: var(--globalHeaderHeight);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-brand) var(--c-border);
  background-color: var(--c-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color),
    border-color var(--t-color);
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--c-border);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--c-brand);
  }
}

.sidebar-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
}

.theme-container {
  &.sidebar-open {
    .sidebar-mask {
      display: block;
    }

    .navbar > .toggle-sidebar-button .icon {
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
        }

        &:nth-child(2) {
          transform: scale3d(0, 1, 1);
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate3d(6px, -6px, 0);
        }

        &:nth-child(1),
        &:nth-child(3) {
          transform-origin: center;
        }
      }
    }
  }

  &.no-navbar {
    .theme-default-content {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.5rem;
        padding-top: 0;
      }
    }

    .page {
      padding-top: 0;
    }

    .sidebar {
      top: 0;
    }
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .theme-container.no-sidebar {
    .sidebar {
      display: none;
    }

    .page {
      padding-left: 0;
    }
  }
}

.theme-default-content {
  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: calc(0.5rem - var(--globalHeaderHeight));
    padding-top: calc(1rem + var(--globalHeaderHeight));
    margin-bottom: 0;

    &:first-child {
      margin-bottom: 1rem;

      + p,
      + pre,
      + .custom-container {
        margin-top: 2rem;
      }
    }
  }
}

// narrow desktop / iPad
@media (max-width: $MQNarrow) {
  .sidebar {
    font-size: 15px;
    width: var(--sidebar-width-mobile);
  }

  .page {
    padding-left: var(--sidebar-width-mobile);
  }
}

// wide mobile
@media (max-width: $MQMobile) {
  .sidebar {
    top: 0;
    padding-top: var(--globalHeaderHeight);
    transform: translateX(-100%);
  }

  .page {
    padding-left: 0;
  }

  .theme-container {
    &.sidebar-open {
      .sidebar {
        transform: translateX(0);
      }
    }

    &.no-navbar {
      .sidebar {
        padding-top: 0;
      }
    }
  }
}

// narrow mobile
@media (max-width: $MQMobileNarrow) {
  h1 {
    font-size: 1.9rem;
  }
}
</style>

<style lang="scss" module>
.sidebarDots {
	display: block;
	margin: 0 32px 2em 32px;
	width: calc(100% - 64px);
	height: 40px;
	opacity: 0.2;
}

.koko9 {
	display: block;
	margin: 0 32px 32px 32px;

	> img {
		display: block;
		width: 100%;
	}
}

.live2d {
	position: fixed;
	bottom: 0;
	right: 0;
	width: 300px;
	height: 600px;
	border: none;
	pointer-events: none;
}
</style>
