<template>
  <div class="col-lg-4 mr-auto mb-3">
    <h4>{{ company }}</h4>
    <div class="mb-2">期間：{{ convertPeriod }}</div>
    <p class="lead">
      {{ jobDescription }}
    </p>
    <div v-if="deliverables">
      <div>
        成果物 :
        <a
          :key="index"
          v-for="(deliverable, index) in deliverables"
          :href="deliverable.url"
          class="mr-1"
          >{{ deliverable.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: String,
    enrollmentPeriod: {
      from: String,
      to: String
    },
    jobDescription: String,
    deliverables: []
  },
  computed: {
    convertPeriod() {
      const to =
        this.enrollmentPeriod.to == null ? '現在' : this.enrollmentPeriod.to
      return `${this.enrollmentPeriod.from} ~ ${to}`
    }
  }
}
</script>
