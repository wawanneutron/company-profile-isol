<template>
  <section class="section-about">
    <general-hero
      image="/images/banner/isol2.png"
      :title="locales.about['profile-hero-title']"
      :subtitle="locales.about['profile-hero-subtitle']"
    />

    <v-container class="section-about__container px-6">
      <h2 data-aos="fade-up" class="section-about__title-visi text--primary">
        {{ locales.about['profile-visi-misi-title-header'] }}
      </h2>

      <aside data-aos="fade-up" class="d-flex justify-space-around">
        <div class="vision">
          <h4 class="text--primary section-about__title-h4">
            {{ locales.about['profile-vision-title'] }}
          </h4>
          <p class="text--primary section-about__subtitle">
            {{ locales.about['profile-vision-desc'] }}
          </p>
        </div>
        <v-divider class="primary mx-4" vertical />
        <div class="mission">
          <h4 class="text--primary section-about__title-h4">
            {{ locales.about['profile-mision-title'] }}
          </h4>
          <p class="text--primary section-about__subtitle">
            {{ locales.about['profile-mision-desc'] }}
          </p>
        </div>
      </aside>

      <h2 data-aos="fade-up" class="section-about__title-company text--primary">
        {{ locales.about['profile-company-title-header'] }}
      </h2>
      <v-row justify="space-around">
        <v-col
          cols="12"
          md="5"
          class="mb-16"
          v-for="(item, index) in aboutProfile"
          :key="index"
        >
          <aside
            data-aos="fade-up"
            :data-aos-delay="index * 50"
            class="d-flex align-center"
          >
            <v-avatar>
              <img :src="item.icon" alt="icon" :title="item.title" />
            </v-avatar>
            <div class="primary--text ml-4">
              <h5 class="section-about__title-h4">{{ item.title }}</h5>
              <p class="p--xlarge">
                {{ item.subtitle }}
              </p>
            </div>
          </aside>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { ABOUT_PROFILE } from '@/data/general'
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    aboutProfile: ABOUT_PROFILE,

    meta: {
      title: 'About Profile'
    }
  }),

  created() {
    for (let i = 0; i < this.aboutProfile.length; i++) {
      this.aboutProfile[i].title =
        this.locales.about['profile-company-title'][i]
      this.aboutProfile[i].subtitle =
        this.locales.about['profile-company-desc'][i]
    }
  },

  watch: {
    $route() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.section-about {
  &__container {
    padding: 56px 0 66px 0;
  }
  &__title-visi {
    font-size: 30px;
    margin-bottom: 56px;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 26px;
  }

  &__title-company {
    font-size: 30px;
    margin: 96px 0 56px 0;
  }

  &__title-h4 {
    font-size: 26px;
    margin-bottom: 12px;
  }
}
</style>
