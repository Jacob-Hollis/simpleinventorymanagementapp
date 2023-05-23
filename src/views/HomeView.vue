<template>
  <v-container>
    <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
    </v-col>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Simple Inventory Management App
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h3 class="headline font-weight-bold mb-5">
          Use the menu below to access inventory, view inventory metrics, and read more about the app.
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',

  data: () => ({
    
  }),
}
</script>
