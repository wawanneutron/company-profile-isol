<template>
  <section class="primary">
    <general-hero
      image="/images/banner/isol2.png"
      title="Data FAQ Problem IT"
      subtitle="Cari solusi masalah anda disini seputar IT"
    />

    <v-container>
      <div class="my-12">
        <form-dropdown-faq
          :list="items.categories"
          :active="sort"
          @set:active="onSetSort"
          class="mr-0 my-8"
        />

        <card-empty-faq v-if="!isAnyList && !isLoading" />

        <div v-if="isLoading">
          <card-skeleton-faq v-for="i in 3" :key="i" />
        </div>

        <v-card
          v-else
          class="mx-2 px-8 py-6 mb-6 rounded-xl section-faq"
          v-for="(item, index) in items.airtable"
          :key="index"
          data-aos="zoom-in"
          :data-aos-delay="index * 20"
        >
          <div class="h1--xxlarge mb-2 primary--text text--lighten-1">
            {{ index + 1 }}
          </div>
          <v-divider></v-divider>
          <div class="mt-4">
            <h3 class="h5--small primary--text text--lighten-1">Problem</h3>
            <p class="p--xlarge">
              {{ item.fields.flduuP4t3anLHzWUt }}
            </p>
          </div>

          <div class="my-6">
            <h3 class="h5--small primary--text text--lighten-1">
              Cara Mengatasinya
            </h3>
            <p class="p--xlarge">
              {{ item.fields.fldOtXGMA7jRtz2ZF }}
            </p>
          </div>

          <div class="">
            <h3 class="h5--small primary--text text--lighten-1">Catatan</h3>
            <figure class="mt-2">
              <blockquote class="mb-1">
                <p>
                  {{
                    item.fields.fldPerZVn83obpvVW
                      ? item.fields.fldPerZVn83obpvVW
                      : '-'
                  }}
                </p>
              </blockquote>
              <figcaption>
                —Author, <cite>{{ item.fields.fld2JfwerDk5zXB3G.name }}</cite>
              </figcaption>
            </figure>
          </div>
        </v-card>
      </div>
    </v-container>

    <general-back-to-top />
  </section>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  layout: 'empty',
  mixins: [lang],

  data: () => ({
    isLoading: true,
    sort: '',
    token:
      'pate61czTKSd67FPK.12e9789c8e7f9ce32cd7a80622badfcf42be17f235d4392c4501c75e0874e7a7',
    items: {
      airtable: [],
      categories: []
    }
  }),

  computed: {
    isAnyList() {
      return this.items.airtable.length
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },

  created() {
    this.getDataAirtable()
    this.getCategories()
  },

  methods: {
    async getDataAirtable() {
      this.isLoading = true
      const tableId = 'tblFBnOIjqpbhTNFu'

      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      }

      const params = {
        returnFieldsByFieldId: true
      }

      let res = await this.$api.airtable.get(tableId, params, config)
      if (res.status === 200) {
        this.items.airtable = res?.data?.records.filter(
          (x) => x.fields.fldXNJED1l6zPlELN === true
        )
      }

      this.isLoading = false
    },

    async getCategories() {
      const tableId = 'tblIw3pcEaOSYcE4D'
      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      }

      const params = {
        returnFieldsByFieldId: true
      }

      let res = await this.$api.airtable.get(tableId, params, config)
      if (res.status === 200) {
        this.items.categories = res?.data?.records

        console.log(this.items.categories)
      }
    },

    async fetchListByCategory(val) {
      this.isLoading = true

      const tableId = 'tblFBnOIjqpbhTNFu'

      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      }

      const params = {
        returnFieldsByFieldId: true,
        filterByFormula: `${'fld4rpri56NLXW1MD'}='${val}'`
      }

      let res = await this.$api.airtable.get(tableId, params, config)

      if (res.status === 200) {
        this.items.airtable = res?.data?.records.filter(
          (x) => x.fields.fldXNJED1l6zPlELN === true
        )
      }

      this.isLoading = false
    },

    onSetSort(val) {
      this.sort = val

      this.fetchListByCategory(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: -250px !important;
}

blockquote {
  margin: 0;
  font-size: 1.8rem !important;
  line-height: 2.6rem !important;
}
blockquote p {
  padding: 20px;
  background: #eee;
  border-radius: 5px;
}
blockquote p::before {
  content: '\201C';
}
blockquote p::after {
  content: '\201D';
}
</style>
