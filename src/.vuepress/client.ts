import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//import 'element-plus/lib/theme-chalk/index.css';

export default defineClientConfig({
	enhance({app, router, siteData}) {
    app.use(ElementPlus, {  })
  },
})
