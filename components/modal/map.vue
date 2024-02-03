<template>
  <v-dialog v-model="dialog" fullscreen persistent max-width="700">
    <div class="white">
      <div class="py-7 pb-4 mx-8 d-flex align-center justify-space-between">
        <h1 class="text-center primary--text h1--large">{{ headerTitle }}</h1>

        <v-btn @click="onClose" depressed fab small class="primary">
          <v-icon size="30">mdi-close</v-icon>
        </v-btn>
      </div>
    </div>

    <v-divider class="gray lighten-2"></v-divider>

    <v-card class="elevation-0 overflow-auto">
      <section-map-pin :purpose="purpose" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    purpose: Object,
    headerTitle: String
  },

  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>
