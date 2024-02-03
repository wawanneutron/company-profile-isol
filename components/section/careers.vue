<template>
  <section class="section-careers">
    <v-carousel
      cycle
      :interval="4000"
      :show-arrows="false"
      height="100vh"
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in banners" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
import { CAREERS } from '@/data/general'
export default {
  data: () => ({
    banners: CAREERS
  })
}
</script>
