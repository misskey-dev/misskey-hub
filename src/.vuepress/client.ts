import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'

export default defineClientConfig({
	enhance({app, router, siteData}) {
    app.use(ElementPlus, {  })
  },
})
