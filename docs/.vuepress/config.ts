import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Misskey Hub',
  description: 'Official website of Misskey project',

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
})
