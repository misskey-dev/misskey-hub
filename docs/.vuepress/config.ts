import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja-JP',
  title: 'Misskey Hub',
  description: 'Official website of Misskey project',

	theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/misskey-dev/assets/main/favicon.png',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Docs',
        children: ['/troubleshooting.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
  },

	plugins: [['@vuepress/plugin-search']]
})
