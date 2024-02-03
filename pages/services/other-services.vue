<template>
  <section>
    <general-hero
      image="/images/banner/other.webp"
      title="Other Services"
      :subtitle="locales.services['other-hero-title']"
    />

    <section-other-services />
  </section>
</template>

<script>
import { OUR_CLIENT } from '@/data/general'
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    clients: OUR_CLIENT,

    meta: {
      title: 'Other Services I-Solution'
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
