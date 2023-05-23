<template>
    <v-div class="text-right theme-button">
        <v-btn @click="toggleTheme">
            <v-icon>mdi-brightness-4</v-icon>
        </v-btn>
    </v-div>
    <v-bottom-navigation
      v-model="value"
      active
      grow
    >
        <v-btn value="home" to="/">
            <v-icon>mdi-home-circle-outline</v-icon>
            Home
        </v-btn>
        <v-btn value="inventory" to="/inventory">
            <v-icon>mdi-package-variant</v-icon>
            Inventory
        </v-btn>
        <!--<v-btn value="metrics" to="/metrics">
            <v-icon>mdi-chart-line</v-icon>
            Metrics
        </v-btn>
        <v-btn value="about" to="/about">
            <v-icon>mdi-help</v-icon>
            About
        </v-btn>-->
    </v-bottom-navigation>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
    name: 'NavigationView',

    setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
};
</script>

<style>
    .theme-button {
        padding:1%
    }
</style>