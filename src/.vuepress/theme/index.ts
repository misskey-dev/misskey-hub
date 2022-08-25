import type { ThemeObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { DefaultThemeOptions, Theme } from 'vuepress'

const localTheme = (options: DefaultThemeOptions): Theme => ({
  name: 'vuepress-theme-local',
  extends: defaultTheme(options),
  layouts: {
		Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
})

export default localTheme
