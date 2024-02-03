<template>
  <v-otp-input
    v-bind="$attrs"
    v-on="$listeners"
    length="4"
    plain
    :type="typeOTP"
  ></v-otp-input>
</template>

<script>
export default {
  props: {
    typeOTP: {
      type: String,
      default: () => 'text'
    }
  }
}
</script>
