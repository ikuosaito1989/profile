<template>
  <a :href="url" :target="target" class="btn btn-outline-light btn-social mx-1">
    <i :class="className" :name="name"></i>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  },
  computed: {
    className() {
      return `${this.prefix} ${this.iconName}`
    }
  }
}
</script>
