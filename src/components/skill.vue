<template>
  <div class="skill-box">
    <div class="skill-name">{{ name }}</div>
    <div class="star-rating">
      <div :style="starRatingStyle(star)" class="star-rating-front">★★★★★</div>
      <div class="star-rating-back">★★★★★</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    thumbnailUrl: String,
    star: Number
  },
  methods: {
    starRatingStyle(star) {
      return `width: ${star * 20}%`
    }
  }
}
</script>
