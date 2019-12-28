<template>
  <a :href="url" :target="target" class="btn btn-outline-light btn-social mx-1">
    <i :class="className" :name="name"></i>
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    prefix: String,
    iconName: String,
    url: String,
    target: String
  },
  computed: {
    className() {
      return `${this.prefix} ${this.iconName}`
    }
  }
}
</script>
