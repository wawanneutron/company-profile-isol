<template>
  <section>
    <general-hero
      image="/images/banner/cs.webp"
      title="Manage Services"
      :subtitle="locales.services['manage-service-hero-title']"
    />

    <section-manage-services />
  </section>
</template>

<script>
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    meta: {
      title: 'Manage Service'
    }
  }),

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
