<template>
  <n-link to="/">
    <v-img
      :max-width="maxWidth"
      :max-height="maxHeight"
      src="/images/logo/isol-white.png"
      contain
      alt="Logo I-Solution"
      title="i-solution"
    />
  </n-link>
</template>

<script>
export default {
  props: {
    maxWidth: [String, Number],
    maxHeight: [String, Number]
  }
}
</script>
