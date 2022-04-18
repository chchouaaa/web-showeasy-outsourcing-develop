<template>
  <v-app>
    <NavBar />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import Footer from "../components/Footer.vue"
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer,
  },
  data () {
    return {
      
    }
  }
}
</script>
