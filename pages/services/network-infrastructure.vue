<template>
  <section>
    <general-hero
      image="/images/banner/nro.webp"
      title="Network Infrastructure"
      :subtitle="locales.services['nro-hero-title']"
    />

    <section-network-infrastructure />
  </section>
</template>

<script>
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    meta: {
      title: 'Network Infrastructure'
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
