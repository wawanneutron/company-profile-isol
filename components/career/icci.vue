<template>
  <section class="section-culture">
    <v-img src="/images/career/bg-icci.svg">
      <div class="container">
        <div class="section-culture__content">
          <h2
            data-aos="fade-right"
            class="white--text section-culture__content-text"
          >
            {{ locales.career['icci-title-header'] }}
          </h2>

          <div
            class="section-culture__content-container d-flex justify-space-between mt-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              v-for="(item, i) in items"
              :key="i"
              class="section-culture__content-card primary--text text--lighten-2"
              :class="{
                active: active === i,
                'd-flex align-center justify-center': active !== i
              }"
              @click="changeAciveCard(i)"
            >
              <div class="header-text">{{ item.name }}</div>
              <div v-if="active === i">
                <div class="title">{{ item.title }}</div>
                <div class="subtitle">
                  {{ item.subtitle }}
                </div>
              </div>
            </div>
          </div>
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
  },

  methods: {
    changeAciveCard(index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
.section-culture {
  margin-bottom: 120px;
  &__content {
    margin-top: 200px;
    &-text {
      font-size: 40px;
    }

    &-container {
      gap: 20px;
      height: 500px;
    }

    &-card {
      padding: 48px;
      height: 100%;
      width: calc(100% / 6);
      border-radius: 50px;
      background-color: #fff;
      transition: all 500ms ease-in-out;
      overflow: hidden;
      cursor: pointer;

      .header-text {
        font-size: 60px;
        font-weight: bold;
      }

      .title {
        font-size: 28px !important;
        font-weight: bold;
      }

      .subtitle {
        font-size: 22px;
        font-weight: 500;
        margin: 28px 0;
        width: 80%;
      }

      &:hover {
        background-color: #b8d3e4;
      }
    }

    &-card.active {
      width: 100%;
      transition: all 500ms ease-in-out;
    }
  }
}
</style>
