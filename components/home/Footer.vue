<template>
  <div class="footer grey lighten-3 mt-15">
    <v-container>
      <v-row class="my-13">
        <v-col cols="4">
          <v-img
            max-width="250"
            :src="require('@/assets/img/Footer.png')"
            class="mx-auto my-auto mt-n5"
          ></v-img>
        </v-col>
        <v-col cols="2">
          <v-container>
            <v-row
              class="orange--text text--darken-1 my-3"
            >Showeasy</v-row>
            <v-row
              class="my-1"
            >About Us</v-row>
            <v-row 
              class="my-1"
            >Press</v-row>
            <v-row 
              class="my-1"
            >News</v-row>
            <v-row 
              class="my-1"
            >Recruitment</v-row>
            <v-row 
              class="my-1"
            >Our Partner</v-row>
            <v-row 
              class="my-1"
            >FAQ</v-row>
          </v-container>
        </v-col>
        <v-col cols="2">
          <v-container>
            <v-row
              class="orange--text text--darken-1 my-3"
            >For Exhibitor・Visitor</v-row>
            <v-row 
              class="my-1"
            >Blog</v-row>
            <v-row 
              class="my-1"
            >ShowEasy Advantage</v-row>
            <v-row
              class="orange--text text--darken-1 my-3"
            >For Partner</v-row>
            <v-row 
              class="my-1"
            >Become Partner</v-row>
            <v-row 
              class="my-1"
            >Partner Login/ Log out</v-row>
          </v-container>
        </v-col>
        <v-col cols="2">
          <v-container>
            <v-row
              class="orange--text text--darken-1 my-3"
            >Terms of use</v-row>
            <v-row 
              class="my-1"
            >Terms & Conditions</v-row>
            <v-row 
              class="my-1"
            >Privacy policy</v-row>
            <v-row
              class="orange--text text--darken-1 my-3"
            >Follow Us</v-row>
            <v-row>
              <v-col v-for="k in 3" :key="k">
                <v-img
                  max-width="20"
                  :src="require('@/assets/svg/fb.svg')"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <v-row
              class="orange--text text--darken-1 my-3"
            >Contact us</v-row>
            <v-row
              class="my-1"
            >
              <v-img
                max-width="20"
                :src="require('@/assets/svg/phone.svg')"
              ></v-img>
              &nbsp;&nbsp;886-2-2725-5000
            </v-row>
            <v-row
              class="my-1"
            >
              <v-img
                max-width="20"
                :src="require('@/assets/svg/envelop.svg')"
              ></v-img>
              &nbsp;info@showeasy.com
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <p class="mx-auto grey--text text--lighten-1">© 2022 Showeasy. All Rights Reserved.</p>
      </v-row>
    </v-container>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>