<template>
  <div class="text-center">
    <span v-if="!value" class="fa faa-passing animated">
      <img
        width="100px"
        class="masthead-avatar"
        src="~/assets/img/profile.png"
        alt=""
      />
      <img
        width="100px"
        class="masthead-avatar"
        src="~/assets/img/profile.png"
        alt=""
      />
      <img
        width="100px"
        class="masthead-avatar"
        src="~/assets/img/profile.png"
        alt=""
      />
      <div>少々お待ちください。</div>
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
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>

<style scoped></style>
