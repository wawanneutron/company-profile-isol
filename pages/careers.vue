<template>
  <section>
    <career-hero />
    <career-about />
    <career-icci-mobile v-if="isMobile" />
    <career-icci v-else />
    <career-with-us />
    <career-testimonial />
    <career-program />
  </section>
</template>

<script>
import meta from '@/mixins/meta'
import screen from '@/mixins/screen'

export default {
  mixins: [meta, screen],

  data: () => ({
    meta: {
      title: 'Career'
    }
  }),

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  watch: {
    $route() {
      window.location.reload()
    }
  }
}
</script>
