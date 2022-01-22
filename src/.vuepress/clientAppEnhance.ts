import { defineClientAppEnhance } from '@vuepress/client';
import Landing from './layouts/Landing.vue';

export default defineClientAppEnhance(({ app }) => {
  app.component('Landing', Landing);
});
