<template>
  <footer
    class="footer"
    :class="{ 'primary lighten-2': isCareer, primary: !isCareer }"
  >
    <v-container grid-list-lg py-0>
      <div class="d-md-flex justify-space-between footer__section">
        <section class="footer__section_logo d-flex mr-md-8 mb-10 mb-md-0">
          <div class="d-flex flex-column justify-space-between mb-4 mb-md-0">
            <general-logo-isol-light
              maxWidth="160"
              class="pl-4 pl-md-0 mb-6 mb-md-0"
            />
            <div class="d-flex">
              <v-img
                v-for="(item, i) in items.socials"
                :key="i"
                class="contain full-width pointer footer__img"
                max-width="60"
                max-height="30"
                :src="item.icon"
                :alt="item.name"
                :title="item.name"
                @click="onSocial(item.url)"
              />
            </div>
          </div>
        </section>

        <section class="footer__section_company pb-2 pb-md-0">
          <ul class="ml-md-4">
            <h4 class="mb-4 mb-md-8 h3--large weight-600">Company</h4>
            <li v-for="(item, i) in items.company" :key="i" class="mb-4">
              <n-link class="text-decoration-none white--text" :to="item.url">
                <span class="white--text p--large">{{ item.name }}</span>
              </n-link>
            </li>
          </ul>
        </section>

        <section class="footer__section_services pb-2 pb-md-0">
          <ul class="ml-md-4">
            <h4 class="mb-4 mb-md-8 mt-8 mt-md-0 h3--large weight-600">
              Services
            </h4>
            <li v-for="(item, i) in items.services" :key="i" class="mb-4">
              <n-link class="text-decoration-none white--text" :to="item.url">
                <span class="white--text p--large">{{ item.name }}</span>
              </n-link>
            </li>
          </ul>
        </section>

        <section class="footer__section_career pb-2 pb-md-0">
          <ul class="ml-md-4">
            <h4 class="mb-4 mb-md-8 mt-8 mt-md-0 h3--large weight-600">
              Career
            </h4>
            <li v-for="(item, i) in items.careers" :key="i" class="mb-4">
              <n-link class="text-decoration-none white--text" :to="item.url">
                <span class="white--text p--large">{{ item.name }}</span>
              </n-link>
            </li>
          </ul>
        </section>

        <section class="footer__section_contact pb-2 pb-md-0">
          <ul class="ml-md-8">
            <h4 class="mb-4 mb-md-8 mt-8 mt-md-0 h3--large weight-600">
              Get in Touch with Us
            </h4>
            <li v-for="(item, i) in items.contact" :key="i" class="mb-4">
              <div @click="onContact(item)" class="d-flex align-start pointer">
                <v-icon
                  class="white--text mr-3 material-icons-outlined"
                  size="22"
                >
                  {{ item.icon }}
                </v-icon>
                <span class="white--text p--large">{{ item.name }}</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </v-container>
    <v-divider color="#3d3f4e" />

    <section class="footer__subfooter">
      <p class="h8--supersmall weight-500 white--text text-center">
        PT Infra Solusi Indonesia - © {{ isYear }} All Rights Reserved
      </p>
    </section>
  </footer>
</template>

<script>
import { FOOTER } from '@/data/general'
export default {
  data: () => ({
    items: {
      company: FOOTER.company,
      services: FOOTER.services,
      careers: FOOTER.careers,
      contact: FOOTER.contact,
      socials: FOOTER.socials
    }
  }),

  computed: {
    isYear() {
      let yearNow = new Date().getFullYear()

      if (yearNow !== Number(2023)) {
        return `2023 - ${yearNow}`
      }

      return '2023'
    },

    isCareer() {
      return this.$route.name === 'careers'
    }
  },

  methods: {
    onSocial(url) {
      if (url) {
        window.open(url)
      }
    },

    onContact(item) {
      if (item.key == 'email') window.location.href = `mailto:${item.name}`

      if (item.key == 'location') window.open(item.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 50px;
  color: #fff;

  &__img {
    &:hover {
      transform: scale(1.6);
      transition: all 0.1s ease-in;
    }
    transition: all 0.1s ease-out;
  }

  &__subfooter {
    padding: 20px 0;
  }

  &__section {
    margin-bottom: 50px;
    &_contact {
      width: 30%;

      @media (max-width: 600px) {
        width: 80%;
      }
    }
  }

  ul {
    list-style-type: none;
  }

  span {
    &:hover {
      text-decoration: underline;
      color: #a7a7a7;
    }
  }
}

.bg-blue-dark {
  background-color: #09273b;
}

.bg-blue-light {
  background-color: #09273b;
}
</style>
