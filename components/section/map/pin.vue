<template>
  <section class="pt-6 map">
    <div class="map__island" :class="{ 'full-width': !isMobile }">
      <img
        :src="purpose.src"
        class="mx-auto map__island-img"
        :class="{ 'full-width': !isMobile }"
      />

      <template v-if="purpose.island === 'java'">
        <div v-for="(item, i) in locations" :key="i">
          <v-hover v-slot="{ hover }">
            <div class="hover bounce" :class="item.city">
              <img src="/images/maps/pin.svg" class="pointer pin" alt="pin" />

              <div class="map-marker-info d-none" :class="{ 'd-block': hover }">
                <div class="map-marker-info-inner text-center">
                  <p class="p--default weight-600 text-capitalize">
                    {{ item.city }}
                  </p>
                  <p
                    v-if="item.city === 'tangerang'"
                    class="p--small weight-500"
                  >
                    Head Office
                  </p>

                  <p class="p--small weight-300 mt-2">
                    {{ item.desc1 }}
                  </p>
                  <p class="p--small weight-300 mt-2">
                    {{ item.desc2 }}
                  </p>
                </div>
              </div>
            </div>
          </v-hover>
        </div>
      </template>

      <template v-if="purpose.island === 'batam'">
        <v-hover v-slot="{ hover }">
          <div class="island_batam hover pointer">
            <img src="/images/maps/pin.svg" class="pin" alt="pin" />

            <div class="map-marker-info d-none" :class="{ 'd-block': hover }">
              <div class="map-marker-info-inner text-center">
                <p class="p--small weight-500 mb-2">Batam</p>
                <p class="p--small weight-300">18.145 Homepass</p>
              </div>
            </div>
          </div>
        </v-hover>
      </template>
    </div>
  </section>
</template>

<script>
import { LOCATIONS } from '@/data/general'
import mixins from '@/mixins/screen'

export default {
  mixins: [mixins],
  props: {
    purpose: Object
  },

  data: () => ({
    locations: LOCATIONS
  })
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  .map-marker-info {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    z-index: 1;

    .map-marker-info-inner {
      position: relative;
      background-color: #fff;
      padding: 10px 10px;
      width: 180px;
      border-radius: 10px;

      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);

      &::before {
        content: '';
        display: inline-block;
        position: absolute;

        top: -8px;
        left: 47%;

        width: 15px;
        height: 20px;
        background-color: #fff;

        transform: rotate(-45deg);
      }
    }
  }

  &__island {
    position: absolute;

    &-location {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .pin {
      width: 30px;
    }
    .island_batam {
      position: absolute;
      bottom: 50%;
      left: 44%;
    }

    .tangerang {
      position: absolute;
      bottom: 77%;
      left: 10%;
    }
    .jakarta {
      position: absolute;
      bottom: 82%;
      left: 15%;
    }

    .bekasi {
      position: absolute;
      bottom: 78%;
      left: 17%;
    }

    .cikarang {
      position: absolute;
      bottom: 81%;
      left: 20%;
    }

    .sukabumi {
      position: absolute;
      bottom: 62%;
      left: 16%;
    }

    .purwakarta {
      position: absolute;
      bottom: 70%;
      left: 21%;
    }

    .bandung {
      position: absolute;
      bottom: 62%;
      left: 24%;
    }

    .cirebon {
      position: absolute;
      bottom: 66%;
      left: 30%;
    }

    .kuningan {
      position: absolute;
      bottom: 72%;
      left: 26%;
    }

    .subang {
      position: absolute;
      bottom: 79%;
      left: 24%;
    }

    .tegal {
      position: absolute;
      bottom: 64%;
      right: 60%;
    }

    .purwokerto {
      position: absolute;
      bottom: 54%;
      right: 58%;
    }

    .DIY {
      position: absolute;
      bottom: 44%;
      right: 50%;
    }

    .semarang {
      position: absolute;
      bottom: 62%;
      right: 49%;
    }

    .sukoharjo {
      position: absolute;
      bottom: 52%;
      right: 46%;
    }

    .malang {
      position: absolute;
      bottom: 40%;
      right: 30%;
    }

    .kediri {
      position: absolute;
      bottom: 58%;
      right: 35%;
    }

    .surabaya {
      position: absolute;
      bottom: 48%;
      right: 38%;
    }

    .bali {
      position: absolute;
      bottom: 34%;
      right: 8%;
    }
  }
}

.hover {
  &:hover {
    z-index: 1;
    transform: scale(1.5);
    transition: all 0.3s ease-in;
  }
  transition: all 0.3s ease-out;
}
</style>
