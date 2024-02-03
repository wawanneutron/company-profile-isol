<template>
  <div>
    <v-list-group no-action color="primary lighten-1">
      <template v-slot:activator>
        <v-list-item-content>
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
        @click="onEmitAction(item.path)"
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

      <v-list-group
        v-if="title === 'Services'"
        sub-group
        no-action
        color="primary lighten-1"
      >
        <template v-slot:activator>
          <v-list-item-content
            @click="onEmitAction('/services/network-infrastructure')"
          >
            <v-list-item-title class="p--large weight-500"
              >Network Infrastructure</v-list-item-title
            >
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(item, i) in menuDropdown.network.sub_items"
          :key="i"
          class="pl-10"
          @click="onEmitAction(item.path)"
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

      <v-list-group
        v-if="title === 'Services'"
        sub-group
        no-action
        color="primary lighten-1"
      >
        <template v-slot:activator>
          <v-list-item-content
            @click="onEmitAction('/services/manage-services')"
          >
            <v-list-item-title class="p--large weight-500"
              >Manage Service</v-list-item-title
            >
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(item, i) in menuDropdown.service.sub_items"
          :key="i"
          class="pl-10"
          @click="onEmitAction(item.path)"
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
    </v-list-group>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    menuDropdown: Object
  },

  methods: {
    onEmitAction(path) {
      this.$emit('on:action-submenu', path)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .mdi-menu-down {
    color: #fff !important;
  }

  .v-icon {
    color: #fff;
  }
}
</style>
