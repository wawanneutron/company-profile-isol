<template>
  <div>
    <p class="text--default text-capitalize mb-2 dark--text" v-if="label">
      {{ label }}
    </p>
    <v-autocomplete
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder"
      hide-details
      @focus="active = true"
      @blur="active = false"
      :class="fontSize"
    >
      <template v-slot:prepend v-if="prepend">
        <v-icon
          v-bind:class="{
            'material-icons-outlined': prependOutline,
            'primary--text': active
          }"
        >
          {{ $attrs['prepend-icon'] }}
        </v-icon>
      </template>

      <template v-slot:prepend-inner v-if="prependInner">
        <v-icon
          v-bind:class="{
            'material-icons-outlined': prependOutline,
            'primary--text': active
          }"
        >
          {{ $attrs['prepend-inner-icon'] }}
        </v-icon>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    required: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => 'Ketik Disini'
    },
    prepend: {
      type: Boolean,
      default: () => false
    },
    prependInner: {
      type: Boolean,
      default: () => false
    },
    prependOutline: {
      type: Boolean,
      default: () => false
    },
    fontSize: {
      type: String,
      default: () => ''
    }
  },

  data: () => ({
    active: false
  })
}
</script>
