<template>
  <div>
    <v-btn
      depressed
      fab
      size="24"
      class="hidden-md-and-up transparent"
      @click="state.drawer = true"
    >
      <v-icon size="36" color="white">mdi-menu</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="state.drawer"
      absolute
      temporary
      right
      width="380"
      height="100vh"
      class="px-6 pt-4 primary"
    >
      <div class="d-flex">
        <v-btn
          depressed
          fab
          size="24"
          class="hidden-md-and-up transparent ml-auto"
          @click="state.drawer = false"
        >
          <v-icon size="36" color="white"> mdi-close </v-icon>
        </v-btn>
      </div>

      <v-list nav class="h7--xxsmall dark--text text--lighten-4 py-6">
        <v-list-item-group v-model="state.group" active-class="text--accent-4">
          <div v-for="(item, i) of items.menu" :key="i">
            <template v-if="item.key === 'about' || item.key === 'services'">
              <menu-bar-manage-dropdown-mobile
                :title="item.name"
                :items="item.sub_items"
                :menuDropdown="items.menu_dropdown"
                @on:action-submenu="onActionSubmenu"
              />
            </template>

            <template v-else>
              <v-list-item active-class="sidebar__item-active">
                <v-list-item-title @click="onGo(item.path)" class="p--large"
                  >{{ item.name }}
                </v-list-item-title>
              </v-list-item>
            </template>
          </div>

          <v-divider class="mt-10" color="#868e96"></v-divider>
          <!-- bilingual -->
          <menu-bar-bilingual class="pt-6" />
        </v-list-item-group>

        <div class="d-flex justify-center pt-6">
          <general-logo-isol maxWidth="200" />
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { MENU_NAVBAR, DROPDOWN_MENU_MOBILE } from '@/data/general'

export default {
  data: () => ({
    items: {
      menu: MENU_NAVBAR,
      menu_dropdown: DROPDOWN_MENU_MOBILE
    },

    state: {
      drawer: false,
      group: null
    }
  }),

  methods: {
    onGo(path) {
      this.$router.push(path)
    },

    onActionSubmenu(path) {
      console.log(path)

      this.$router.push(path)
    }
  }
}
</script>
