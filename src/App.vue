<template>
  <v-app>
    <NavigationView/>
    <v-main>
      <HomeView/>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from './views/HomeView.vue'
import NavigationView from './components/NavigationView.vue'

export default {
  name: 'App',

  components: {
    HomeView: HomeView,
    NavigationView: NavigationView
  },

  data: () => ({
    //
  }),
}
</script>
