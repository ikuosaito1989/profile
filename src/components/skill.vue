<template>
  <div class="skill-box">
    <div class="skill-name">{{ name }}</div>
    <div class="box">
      <div class="star-rating">
        <div class="star-rating-front">{{ starRating(star) }}</div>
        <div class="star-rating-back">★★★★★</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    },
    star: {
      type: Number,
      default: 0
    }
  },
  methods: {
    starRating(star) {
      return '★'.repeat(star)
    }
  }
}
</script>

<style scoped>
.box {
  height: 37px;
}
.star-rating {
  position: absolute;
  font-size: 25px;
}
.star-rating-back {
  color: #ccc;
}

.star-rating-front {
  position: absolute;
  color: #ffcc33;
  z-index: 100;
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
