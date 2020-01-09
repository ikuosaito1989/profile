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

<style scoped>
.star-rating {
  position: relative;
  width: 125px;
  font-size: 25px;
  letter-spacing: -1.5px;
  top: -5px;
}
.star-rating-front {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: #ffcc33;
  opacity: 0.7;
}
.star-rating-back {
  color: #ccc;
}
.skill-name {
  font-size: 1.25rem;
  font-weight: 300;
  margin-right: 13px;
}
.skill-box {
  margin: 10px 20px;
  width: 140px;
}
</style>
