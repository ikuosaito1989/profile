<template>
  <div class="text-center">
    <span v-if="!value" class="fa faa-passing animated">
      <i class="fas fa-running s"></i>
      <i class="fas fa-running middre"></i>
      <i class="fas fa-running large"></i>
      <div class="title">少々お待ちください。</div>
    </span>

    <transition name="fade">
      <div v-if="value">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, Object, Boolean],
      default: false
    }
  }
}
</script>

<style scoped>
.s {
  font-size: 1.5rem;
}
.middre {
  font-size: 2.5rem;
}
.large {
  font-size: 3.5rem;
}
.title {
  font-size: 1.5rem;
}
</style>
