<template>
  <a :href="keywordSearchPath" target="_blank" class="tag">
    <span>{{ name }}</span>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    keywordSearchPath() {
      return `https://www.google.com/search?q=${this.name}`
    }
  }
}
</script>

<style scoped>
.tag {
  color: #212529;
  background-color: #ffcc33;
  opacity: 0.7;
  margin-right: 5px;
  padding: 2px 6px;
  font-size: 0.8rem;
  border-radius: 5px;
  display: inline-block;
  margin: 0px 5px 5px 0px;
}
</style>
