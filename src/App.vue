<template>
  <v-app>
    <v-bottom-navigation
      v-model="value"
      active
      grow
    >
    <v-btn value="home">
        <v-icon>mdi-home-circle-outline</v-icon>
        Home
      </v-btn>
      <v-btn value="inventory">
        <v-icon>mdi-package-variant</v-icon>
        Inventory
      </v-btn>
      <v-btn value="metrics">
        <v-icon>mdi-chart-line</v-icon>
        Metrics
      </v-btn>
      <v-btn value="about">
        <v-icon>mdi-help</v-icon>
        About
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <HelloWorld/>
    </v-main>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useTheme } from 'vuetify'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),

  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}
</script>
