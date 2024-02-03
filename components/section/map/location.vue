<template>
  <section class="section-map">
    <h1
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      class="text-center primary--text h1--xxlarge mb-8"
    >
      {{ locales.landing['location-header-title'] }}
    </h1>

    <v-tooltip top color="transparent">
      <template v-slot:activator="{ on, attrs }">
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          class="section-map__img text-center"
          v-bind="attrs"
          v-on="on"
        >
          <img
            src="/images/maps/map-indonesia.svg"
            :class="{ 'full-width': !isMobile }"
            alt="map-indonesia"
          />

          <div class="java-island pointer bounce" @click="onShowMap('java')">
            <img src="/images/maps/pin.svg" alt="pin" />
          </div>

          <div class="batam-island pointer bounce" @click="onShowMap('batam')">
            <img src="/images/maps/pin.svg" alt="pin" />
          </div>
        </div>
      </template>
      <div>
        <v-alert dense dark border="left" type="warning">
          <p class="p--xlarge white--text weight-500">
            {{ locales.landing['location-alert-map'] }}
          </p>
        </v-alert>
      </div>
    </v-tooltip>

    <modal-map
      :headerTitle="locales.landing['location-header-title']"
      :purpose="purpose"
      :dialog="dialog"
      @close="onCloseDialog()"
    />
  </section>
</template>

<script>
import screen from '@/mixins/screen.js'
import lang from '@/mixins/lang'

export default {
  mixins: [screen, lang],
  data: () => ({
    dialog: false,

    purpose: {
      island: '',
      src: ''
    },

    src_java: '/images/maps/map-show1.svg',
    src_batam: '/images/maps/map-show2.svg'
  }),

  methods: {
    onShowMap(island) {
      if (island === 'java') {
        this.dialog = true

        this.purpose.island = island
        this.purpose.src = this.src_java
      }

      if (island === 'batam') {
        this.dialog = true

        this.purpose.island = island
        this.purpose.src = this.src_batam
      }
    },

    onCloseDialog() {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.section-map {
  &__img {
    position: relative;
    overflow: auto;

    .java-island {
      position: absolute;
      bottom: 18%;
      left: 30%;
    }

    .batam-island {
      position: absolute;
      top: 25%;
      left: 17%;
    }

    @media (max-width: 59em) {
      .java-island {
        position: absolute;
        bottom: 18%;
        left: 94%;
      }

      .batam-island {
        position: absolute;
        top: 25%;
        left: 55%;
      }
    }
  }
}

.bounce {
  animation: bounce 1.3s ease infinite;
}
@keyframes bounce {
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-15%);
  }
  90% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(-7%);
  }
  97% {
    transform: translateY(0%);
  }
  99% {
    transform: translateY(-3%);
  }
  100% {
    transform: translateY(0);
  }
}

.v-image__image {
  background-size: 100% 100%;
}
</style>
