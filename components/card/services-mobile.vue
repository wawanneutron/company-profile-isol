<template>
  <section class="section_services">
    <v-container>
      <h1 class="text-center h1--xxlarge">Our Services</h1>

      <v-row class="justify-center section_services__row">
        <v-col
          cols="12"
          v-for="(item, index) in services"
          :key="index"
          class="section_services_col"
        >
          <v-card class="section_services_card" height="600" flat>
            <v-img
              height="600"
              class="full-width contain"
              :src="item.src_full"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    size="52"
                    indeterminate
                    color="primary lighten-1"
                  ></v-progress-circular>
                </v-row>
              </template>

              <div class="px-6 py-10">
                <h1 class="white--text h1--large weight-700 pb-6">
                  {{ item.title }}
                </h1>
                <p class="white--text h3--large weight-500 mb-6">
                  {{ item.title_about }}
                </p>
                <h2 class="white--text h2--xlarge weight-700 my-6">
                  What We Focus ?
                </h2>
                <p class="white--text h3--large weight-500 pb-14 pb-md-0">
                  {{ item.title_desc }}
                </p>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    services: Array
  }
}
</script>

<style lang="scss" scoped>
.section_services {
  margin: 10rem 0;

  &__row {
    margin-top: 5rem;
  }

  &_card {
    border-radius: 4rem !important;
  }
}
</style>
