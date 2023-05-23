<template>
  <v-app>
    <NavigationView/>
    
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavigationView from './components/NavigationView.vue'

export default {
  name: 'App',

  components: {
    NavigationView: NavigationView
  },

  data: () => ({
    //
  }),
}
</script>
