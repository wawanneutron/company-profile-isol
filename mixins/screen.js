export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    },

    isTablet() {
      return this.$vuetify.breakpoint.md
    },

    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
