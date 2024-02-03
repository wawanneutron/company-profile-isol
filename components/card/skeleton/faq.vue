<template>
  <v-card class="rounded-xl mx-2 px-8 py-6 mb-6" flat>
    <div class="flex-grow-1">
      <v-skeleton-loader tile height="50" width="80" type="image" />
      <v-skeleton-loader
        class="mt-4 mb-6"
        tile
        height="5"
        width="100%"
        type="text"
      />

      <div class="mb-6">
        <v-skeleton-loader tile height="25" width="105" type="text" />
        <v-skeleton-loader
          class="mmb-2"
          tile
          height="15"
          width="100%"
          type="text"
        />

        <v-skeleton-loader tile height="15" width="60%" type="text" />
        <v-skeleton-loader tile height="15" width="80%" type="text" />
      </div>

      <div class="my-6">
        <v-skeleton-loader tile height="25" width="180" type="text" />
        <v-skeleton-loader
          class="mmb-2"
          tile
          height="15"
          width="100%"
          type="text"
        />

        <v-skeleton-loader tile height="15" width="60%" type="text" />
        <v-skeleton-loader tile height="15" width="80%" type="text" />
      </div>

      <div class="mt-6">
        <v-skeleton-loader tile height="25" width="105" type="text" />
        <v-skeleton-loader
          width="100%"
          height="52"
          type="image"
          class="mb-1 rounded-lg"
        />
        <v-skeleton-loader tile height="5" width="80" type="text" />
      </div>
    </div>
  </v-card>
</template>
