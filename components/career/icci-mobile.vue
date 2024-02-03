<template>
  <section class="section-culture">
    <v-img src="/images/career/bg-icci.png">
      <div class="container">
        <div class="section-culture__content">
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            class="white--text section-culture__content-text"
          >
            {{ locales.career['icci-title-header'] }}
          </h2>

          <v-row class="mt-10">
            <v-col cols="12">
              <div
                v-for="(item, i) in items"
                :key="i"
                class="section-culture__content-card primary--text text--lighten-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="header-text">{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
                <div class="subtitle">
                  {{ item.subtitle }}
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-img>
  </section>
</template>

<script>
import lang from '@/mixins/lang'
import { ICCI } from '@/data/general'

export default {
  mixins: [lang],

  data: () => ({
    active: 0,

    items: ICCI
  }),

  created() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].subtitle = this.locales.career['icci-desc'][i]
    }
  }
}
</script>

<style lang="scss" scoped>
.section-culture {
  margin-bottom: 120px;
  &__content {
    margin-top: 250px;

    &-card {
      background-color: #fff;
      padding: 50px 26px;
      border-radius: 40px;
      margin-bottom: 30px;
      height: 735px;

      .header-text {
        font-size: 70px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .title {
        font-size: 30px !important;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .subtitle {
        font-size: 30px;
      }
    }
    &-text {
      font-size: 40px;
    }
  }
}
</style>
