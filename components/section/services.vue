<template>
  <section>
    <card-services-desktop v-if="isDesktop" :services="services" />
    <card-services-mobile v-else :services="services" />
  </section>
</template>

<script>
import { SERVICES } from '@/data/general'
import screen from '@/mixins/screen'

export default {
  mixins: [screen],

  data: () => ({
    services: SERVICES
  })
}
</script>
