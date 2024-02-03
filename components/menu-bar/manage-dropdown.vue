<template>
  <div>
    <v-list-group no-action color="primary lighten-1">
      <template v-slot:activator>
        <v-list-item-content @click="onEmitSubMenu(path)">
          <v-list-item-title
            class="p--large weight-500"
            v-text="title"
          ></v-list-item-title>
        </v-list-item-content>
      </template>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        class="pl-10"
        @click="onEmitAction(item)"
      >
        <template>
          <v-list-item-content>
            <v-list-item-title
              class="p--large weight-500"
              v-text="item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
    items: Array
  },

  methods: {
    onEmitSubMenu(path) {
      this.$emit('on:action-submenu', path)
    },

    onEmitAction(item) {
      this.$emit('on:action-submenu-items', item)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-icon {
  color: #fff;
}
</style>
