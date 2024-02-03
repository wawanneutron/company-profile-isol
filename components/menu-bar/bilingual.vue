<template>
  <div>
    <v-list-group no-action color="primary lighten-1">
      <template v-slot:activator>
        <v-list-item-icon>
          <v-icon class="dark--text" color="white" size="24">mdi-earth</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="ml-n4">
          <v-list-item-title class="p--large text-uppercase weight-500">
            {{ getLocales }}
          </v-list-item-title>
        </v-list-item-content>
      </template>
      <v-list-item
        class="pl-10"
        v-for="(item, i) in itemsLanguage"
        :key="i"
        @click="onChangeLanguage(item)"
      >
        <template>
          <v-list-item-content>
            <v-list-item-title class="p--large weight-500" v-text="item.title">
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang]
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
