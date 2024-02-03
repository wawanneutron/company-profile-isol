<template>
  <div>
    <client-only>
      <back-to-top text="Back to top" visibleoffset="500">
        <button
          type="button"
          class="btn primary lighten-1 btn-to-top d-flex justify-center align-center"
        >
          <v-icon color="white" size="30">mdi-chevron-up</v-icon>
        </button>
      </back-to-top>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
/* in your css */
.btn-to-top {
  width: 58px;
  height: 58px;
  padding: 10px 16px;
  border-radius: 50%;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.5);
}
</style>
