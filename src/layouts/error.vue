<template>
  <div class="modal-body text-center">
    <div class="container mb-4">
      <img src="~/assets/img/computer_error_bluescreen.png" class="image" />
      <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
      <h3 v-else>人気すぎてHerokuの無料枠を超えたか、普通にバグっています。</h3>
    </div>
    <nuxt-link to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style scoped>
.image {
  height: 300px;
  width: 300px;
}
</style>
