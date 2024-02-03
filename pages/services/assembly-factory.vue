<template>
  <section>
    <general-hero
      image="/images/banner/assembly.webp"
      title="Assembly"
      :subtitle="locales.services['assembly-hero-title']"
    />

    <section-asembly-factory />
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
      title: 'Assembly Factory'
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
