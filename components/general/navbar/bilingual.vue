<template>
  <div class="bilingual">
    <v-menu
      :close-on-content-click="false"
      offset-y
      left
      content-class="bilingual__my-menu"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="ml-6" v-bind="attrs" v-on="on">
          <span class="p--large weight-500 white--text text-uppercase">
            <v-icon class="mr-1 dark--text" color="white">mdi-earth</v-icon>
            {{ getLocales }}
            <v-icon color="white"> mdi-chevron-down </v-icon>
          </span>
        </div>
      </template>
      <v-list class="px-3 py-6">
        <v-list-item
          class="pointer"
          v-for="(item, i) in itemsLanguage"
          :key="i"
          @click="onChangeLanguage(item)"
        >
          <v-list-item-title>
            <span class="white--text p--large weight-500">{{
              item.title
            }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.bilingual {
  &__my-menu {
    margin-top: 40px;
    contain: initial;
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 0;
      right: 16px;
      transform: translateY(-100%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #09273b;
    }
  }
}

.v-menu__content.theme--light.menuable__content__active {
  margin-top: 20px;
  border-radius: 8px;
  margin-left: 15px !important;
}

::v-deep {
  .v-list {
    border-radius: 8px;

    background-color: #09273b !important;
    color: #fff !important;

    &-item__title {
      color: #fff !important;

      &:hover {
        text-decoration: underline;
        color: #a7a7a7 !important;
      }
    }

    .mdi-chevron-down {
      color: #fff !important;
    }
  }
}
</style>
