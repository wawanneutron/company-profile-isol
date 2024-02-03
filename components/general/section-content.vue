<template>
  <div class="section-content container">
    <section class="section-content__focus">
      <h2 class="section-content__title primary--text">What We Focus</h2>

      <div class="d-flex justify-space-between align-center mt-8">
        <p class="primary--text h3--large">
          Customer Premise Equipment (CPE) such Set Top Box (STB), Cable Modem,
          Optical Network Terminal (ONT).
        </p>

        <v-img src="/grid-example.svg" max-width="500"> </v-img>
      </div>
    </section>

    <section class="section-content__services">
      <h2 class="section-content__title primary--text">Services</h2>

      <div class="d-flex justify-space-between align-center mt-8">
        <v-img src="/grid-example.svg" max-width="500"> </v-img>
        <p class="primary--text h3--large">
          We offer a comprehensive range of products and services to fulfill the
          needs of telecommunication industries as our I-Solution business
          expands.
        </p>
      </div>
    </section>

    <section class="section-content__client">
      <h2 class="section-content__title primary--text">Our Clients</h2>
      <div class="mt-8">
        <v-row justify="space-around" class="px-16">
          <v-col cols="12" md="3" v-for="i in 8" :key="i">
            <v-img src="/box.svg"></v-img>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  &__focus,
  &__services,
  &__client {
    padding: 64px 0;
  }

  &__title {
    font-size: 40px;
  }

  p {
    width: 40%;
  }
}
</style>
