<template>
  <section class="section-management">
    <general-hero
      image="/images/banner/managements.webp"
      :title="locales.about['management-hero-title']"
      :subtitle="locales.about['management-hero-subtitle']"
    />

    <v-container class="section-management__container px-6">
      <h2 class="section-management__title text--primary">
        {{ locales.about['management-hero-title'] }}
      </h2>

      <v-row class="mt-8">
        <v-col cols="12" md="10">
          <v-tabs fixed-tabs centered>
            <v-tab
              class="justify-center text-capitalize"
              v-for="(item, i) in items"
              :key="i"
              @click="onChangeTab(item.title)"
            >
              <p class="text--primary h4--default">{{ item.title }}</p>
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <div v-if="tab === 'commissioner'" class="mt-8 mx-8">
        <div class="mt-4">
          <v-img
            max-width="150"
            src="/images/managements/1.png"
            title="Marlo Budiman"
          >
          </v-img>
          <div class="weight-600 text--primary h4--default mt-2">
            Marlo Budiman
          </div>
          <div class="p-subtitle text--primary">President Commissioner</div>
        </div>

        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <div>
              <v-img
                max-width="150"
                src="/images/managements/2.png"
                title="Johannes"
              >
              </v-img>
              <div class="weight-600 text--primary h4--default mt-2">
                Johannes
              </div>
              <div class="p-subtitle text--primary">Commissioner</div>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div>
              <v-img
                max-width="150"
                src="/images/managements/3.png"
                title="Tanus Susanto"
              >
              </v-img>
              <div class="weight-600 text--primary h4--default mt-2">
                Tanus Susanto
              </div>
              <div class="p-subtitle text--primary">Commissioner</div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-else class="mt-8 mx-8">
        <div class="mt-4">
          <v-img
            max-width="200"
            height="200"
            contain
            src="/images/managements/4.png"
            title="Agus Setiono"
          >
          </v-img>
          <div class="weight-600 text--primary h4--default mt-2">
            Agus Setiono
          </div>
          <div class="p-subtitle text--primary">President Director</div>
        </div>

        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <div>
              <v-img
                max-width="200"
                height="200"
                contain
                src="/images/managements/6.png"
                title="Budi Erawanto"
              >
              </v-img>
              <div class="weight-600 text--primary h4--default mt-2">
                Budi Erawanto
              </div>
              <div class="p-subtitle text--primary">Director</div>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div>
              <v-img
                max-width="200"
                height="200"
                contain
                src="/images/managements/5.png"
                title="Sutrisno Budidharma"
              >
              </v-img>
              <div class="weight-600 text--primary h4--default mt-2">
                Sutrisno Budidharma
              </div>
              <div class="p-subtitle text--primary">Director</div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    tab: 'commissioner',
    items: [
      {
        title: 'Commissioner'
      },
      {
        title: 'Director'
      }
    ],

    meta: {
      title: 'About Managements'
    }
  }),

  methods: {
    onChangeTab(item) {
      let mm = item.toLowerCase()
      this.tab = mm
    }
  }
}
</script>

<style lang="scss" scoped>
.section-management {
  &__container {
    padding: 56px 0 66px 0;
  }
  &__title {
    font-size: 30px;
  }
  .p-subtitle {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
  }
}
</style>
