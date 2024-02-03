<template>
  <div class="section-hero__card">
    <form-text-field
      class="text--large primary--text"
      outlined
      hide-details="auto"
      :label="locales.form['name']"
      :placeholder="locales.palaceholder['type-here']"
    />
    <div class="d-flex align-center mt-6">
      <form-text-field
        class="mr-2 text--large primary--text"
        type="number"
        outlined
        hide-details="auto"
        :label="locales.form['phone']"
        :placeholder="locales.palaceholder['type-here']"
      />
      <form-text-field
        class="text--large"
        label="Email"
        outlined
        hide-details="auto"
        :placeholder="locales.palaceholder['type-here']"
      />
    </div>
    <form-text-field
      class="mt-6 text--large primary--text"
      label="Subject"
      outlined
      hide-details="auto"
      :placeholder="locales.palaceholder['type-here']"
    />

    <form-textarea
      class="mt-6 text--large primary--text"
      outlined
      hide-details="auto"
      :label="locales.form['message']"
      :placeholder="locales.palaceholder['type-here']"
    />

    <v-btn block depressed class="mt-6 primary text-capitalize text--large">
      {{ locales.button['send'] }}
    </v-btn>
  </div>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.section-hero__card {
  .text--large {
    font-size: 16px !important;
    font-weight: 500;
  }
}
::v-deep {
  .v-input__control {
    background-color: #fff !important;
  }
}
</style>
