<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">(c) Misskey 2021</div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
