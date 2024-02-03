<template>
  <section class="section-hero">
    <v-img
      :src="image"
      height="100vh"
      class="section-hero__img"
      aspect-ratio="1"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            size="82"
            indeterminate
            color="primary lighten-1"
          ></v-progress-circular>
        </v-row>
      </template>

      <v-container>
        <div class="section-hero__header white--text">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            class="h1--xxlarge weight-700 mb-4"
          >
            {{ title }}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            class="h2--xlarge weight-300"
          >
            {{ subtitle }}
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            class="h1--large weight-700 mt-12"
          >
            #terbaikuntukbangsa
          </h1>
        </div>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    header: String,
    title: String,
    subtitle: String
  }
}
</script>

<style lang="scss" scoped>
.section-hero {
  margin-top: -104px;

  &__header {
    margin-top: 20%;

    p {
      width: 63%;
    }
    @media (max-width: 59em) {
      margin-top: 40%;

      p {
        width: 90%;
      }
    }
  }
}
</style>
