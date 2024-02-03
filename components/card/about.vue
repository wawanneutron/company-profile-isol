<template>
  <div class="card_about white">
    <v-container>
      <v-img
        v-if="!isMobile"
        src="/images/timeline.png"
        class="full-width contain mt-n14"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="500"
      />
      <v-img
        v-if="isMobile"
        src="/images/timeline-mobile.png"
        class="full-width contain mt-n14"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
      />
    </v-container>
  </div>
</template>

<script>
import screen from '@/mixins/screen'
export default {
  mixins: [screen]
}
</script>

<style lang="scss" scoped>
.card_about {
  // height: 410px;
  border-radius: 20rem 20rem 0 0 !important;
  margin-top: 116px;

  @media (min-width: 1904px) {
    margin-top: 330px;
  }

  &-wrap {
    position: relative;
    margin-top: 68px;
    &__statusbar-first {
      width: 368px;
      height: 75px;
      background-color: #09273b;
      border-radius: 0px 36px 36px 0px;
    }

    &__statusbar-second {
      width: 368px;
      height: 75px;
      background-color: #a7c051;
      border-radius: 0px 36px 36px 0px;

      position: relative;

      &::after {
        content: '';
        background-color: #fff;
        width: 36px;
        height: 75px;
        display: block;
        position: absolute;
        border-radius: 0px 36px 36px 0;
      }

      &::before {
        content: '2021';
        color: #09273b;
        top: -88%;
        left: 36%;
        font-size: 48px;
        font-weight: 600;
        display: block;
        position: absolute;
        border-radius: 0px 36px 36px 0;
      }
    }

    &__statusbar-third {
      width: 368px;
      height: 75px;
      background-color: #db8f47;
      border-radius: 0px 36px 36px 0px;

      position: relative;

      &::after {
        content: '';
        background-color: #fff;
        width: 36px;
        height: 75px;
        display: block;
        position: absolute;
        border-radius: 0px 36px 36px 0;
      }
    }
  }
}
</style>
