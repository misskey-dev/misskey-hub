import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface DefaultThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface MiThemePageFrontmatter {
  navbar?: boolean
  pageClass?: string
}

export interface MiThemeNormalPageFrontmatter
  extends MiThemePageFrontmatter {
	filePath?: string
  home?: false
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}
