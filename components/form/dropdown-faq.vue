<template>
  <div class="d-flex align-center">
    <p class="text--small mr-3 text-capitalize dark--text text--lighten-4">
      {{ label }}
    </p>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="h8--supersmall text-capitalize gray lighten-2"
          x-small
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <span class="mr-4 dark--text">{{ isActive }}</span>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list class="white rounded-xl">
        <v-list-item v-for="(item, index) in list" :key="index">
          <v-list-item-title
            class="h8--supersmall pointer"
            @click="onSetActive(item?.fields.fldiFvTEHiBny1qvM)"
          >
            {{ item?.fields.fldiFvTEHiBny1qvM }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => 'Semua'
    },
    active: String,
    label: String,
    list: Array
  },

  methods: {
    onSetActive(val) {
      this.$emit('set:active', val)
    }
  },

  computed: {
    isActive() {
      let name = this.name
      let list = this.list.find(
        (x) => x.fields.fldiFvTEHiBny1qvM === this.active
      )

      if (list && list.fields.fldiFvTEHiBny1qvM) {
        name = list.fields.fldiFvTEHiBny1qvM
      }

      return name
    }
  }
}
</script>
