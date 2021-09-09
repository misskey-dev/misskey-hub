import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Misskey Hub',
  description: 'Official website of Misskey project',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
