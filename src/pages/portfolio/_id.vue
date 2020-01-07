<template>
  <div class="modal-body text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Portfolio Modal - Title -->
          <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
            {{ selectedPortfolio.name }}
          </h2>
          <!-- Icon Divider -->
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <!-- Portfolio Modal - Image -->
          <img
            :src="selectedPortfolio.thumbnailUrl"
            class="img-fluid rounded mb-5"
            alt=""
          />
          <!-- Portfolio Modal - Text -->
          <p class="mb-5">
            {{ selectedPortfolio.description }}
          </p>
          <n-link to="/">
            <button class="btn btn-primary" href="#" data-dismiss="modal">
              <i class="fas fa-times fa-fw"></i>
              もどる
            </button>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedPortfolio() {
      return this.$store.getters['portfolios/selectedPortfolio']
    }
  },
  async fetch(context) {
    await context.store.dispatch('portfolios/selectPortfolio', {
      portfolioId: context.params.id
    })
  }
}
</script>
