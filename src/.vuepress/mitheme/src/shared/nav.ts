/**
 * Base nav item, displayed as text
 */
import type { SVGProps } from '@tabler/icons-vue'
import type { FunctionalComponent } from 'vue'

export interface NavItem {
  icon?: (props: SVGProps) => FunctionalComponent<SVGProps>
  text?: string
  ariaLabel?: string
}

/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
  children: T[]
}

/**
 * Props for `<AutoLink>`
 */
export interface NavLink extends NavItem {
  link: string
  rel?: string
  target?: string
  activeMatch?: string
  noExternalIcon?: boolean
}

/**
 * Navbar types
 */
// user config
export type NavbarItem = NavLink
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>
export type NavbarConfig = (NavbarItem | NavbarGroup | string)[]
// resolved
export type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>

/**
 * Sidebar types
 */
// user config
export type SidebarItem = NavItem & Partial<NavLink>
export type SidebarGroup = SidebarItem &
  NavGroup<SidebarItem | SidebarGroup | string>
export type SidebarGroupCollapsible = SidebarGroup & {
  collapsible?: boolean
}
export type SidebarConfigArray = (
  | SidebarItem
  | SidebarGroupCollapsible
  | string
)[]
export type SidebarConfigObject = Record<string, SidebarConfigArray>
export type SidebarConfig = SidebarConfigArray | SidebarConfigObject
// resolved
export type ResolvedSidebarItem = SidebarItem &
  Partial<NavGroup<ResolvedSidebarItem>> & {
    collapsible?: boolean
  }
