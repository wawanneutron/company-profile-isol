<template>
  <v-container>
    <v-app-bar class="navbar transparent" flat height="80" dense>
      <div class="d-flex align-center">
        <general-logo-isol
          v-if="!isCareer"
          maxWidth="160"
          maxHeight="160"
          class="pt-6"
        />
        <general-logo-isol-light v-else maxWidth="120" maxHeight="120" />
      </div>

      <v-spacer />

      <div class="d-md-flex align-center hidden-md-and-down">
        <div
          v-for="(item, index) in menu"
          :key="index"
          class="mx-4 d-flex align-center justify-space-between pointer"
          @click="onAction(item)"
        >
          <v-menu
            :close-on-content-click="false"
            offset-y
            left
            content-class="navbar__my-menu"
            v-if="item.key === 'about' || item.key === 'services'"
          >
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <span class="white--text p--large weight-500">{{
                  item.name
                }}</span>
                <v-icon color="white" class="ml-1">
                  {{ item.icon }}
                </v-icon>
                <div
                  class="line"
                  v-if="isRouteSubmenu(item.key) && submenu && !isHome"
                ></div>
              </div>
            </template>
            <v-list class="px-3 py-6">
              <template v-if="item.key === 'services'">
                <div v-for="(item, i) in menu_dropdown" :key="i + index">
                  <menu-bar-manage-dropdown
                    :title="item.name"
                    :path="item.path"
                    :items="item.sub_items"
                    @on:action-submenu="onActionSubmenu"
                    @on:action-submenu-items="onActionSubmenuItems"
                  />
                </div>
              </template>

              <v-list-item v-for="(item, index) in item.sub_items" :key="index">
                <v-list-item-title
                  @click="onMenuDropdown(item)"
                  class="pointer p--large weight-500"
                  >{{ item.name }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>

          <div v-else>
            <span class="white--text p--large weight-500">{{ item.name }}</span>
            <div class="line" v-if="isRouteActive(item.path)"></div>
          </div>
        </div>
        <!-- bilingual -->
        <general-navbar-bilingual />
      </div>
      <!-- menu mobile sidebar -->
      <general-navbar-sidebar />
    </v-app-bar>
  </v-container>
</template>

<script>
import { MENU_NAVBAR, DROPDOWN_MENU } from '@/data/general'

export default {
  data: () => ({
    menu: MENU_NAVBAR,
    menu_dropdown: DROPDOWN_MENU,
    key: '',
    submenu: true
  }),

  computed: {
    isCareer() {
      return this.$route.name === 'careers'
    },

    isHome() {
      return this.$route.path === '/'
    }
  },

  methods: {
    onAction(item) {
      if (item.key !== 'about' && item.key !== 'services') {
        this.submenu = false

        this.$router.push(item.path)
      }
    },

    onMenuDropdown(item) {
      if (!item.sub_items) {
        this.key = item.key
        this.submenu = true

        this.$router.push(item.path)
      }
    },

    onActionSubmenu(path) {
      this.key = 'services'
      this.submenu = true

      this.$router.push(path)
    },

    onActionSubmenuItems(item) {
      this.key = 'services'
      this.submenu = true

      this.$router.push(item.path)
    },

    isRouteSubmenu(path) {
      return this.key === path ? true : false
    },

    isRouteActive(path) {
      if (this.$route.path === path) return true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 99;

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
  .line {
    position: absolute;
    height: 3px;
    width: 40px;
    background-color: #fff;
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
.container {
  @media (max-width: 600px) {
    padding: 0 !important;
  }

  @media (max-width: 1264px) {
    padding: 0 !important;
  }
}
</style>
