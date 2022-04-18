<template>
  <div class="footer mt-15">
    <div class="computer hidden-sm-and-down grey lighten-3">
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
              <v-row class="orange--text text--darken-1 my-3">Showeasy</v-row>
              <v-row class="my-1">About Us</v-row>
              <v-row class="my-1">Press</v-row>
              <v-row class="my-1">News</v-row>
              <v-row class="my-1">Recruitment</v-row>
              <v-row class="my-1">Our Partner</v-row>
              <v-row class="my-1">FAQ</v-row>
            </v-container>
          </v-col>
          <v-col cols="2">
            <v-container>
              <v-row class="orange--text text--darken-1 my-3"
                >For Exhibitor・Visitor</v-row
              >
              <v-row class="my-1">Blog</v-row>
              <v-row class="my-1">ShowEasy Advantage</v-row>
              <v-row class="orange--text text--darken-1 my-3"
                >For Partner</v-row
              >
              <v-row class="my-1">Become Partner</v-row>
              <v-row class="my-1">Partner Login/ Log out</v-row>
            </v-container>
          </v-col>
          <v-col cols="2">
            <v-container>
              <v-row class="orange--text text--darken-1 my-3"
                >Terms of use</v-row
              >
              <v-row class="my-1">Terms & Conditions</v-row>
              <v-row class="my-1">Privacy policy</v-row>
              <v-row class="orange--text text--darken-1 my-3">Follow Us</v-row>
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
              <v-row class="orange--text text--darken-1 my-3">Contact us</v-row>
              <v-row class="my-1">
                <v-img
                  max-width="20"
                  :src="require('@/assets/svg/phone.svg')"
                ></v-img>
                &nbsp;&nbsp;886-2-2725-5000
              </v-row>
              <v-row class="my-1">
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
          <p class="mx-auto grey--text text--lighten-1">
            © 2022 Showeasy. All Rights Reserved.
          </p>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-container>
              <v-row class="orange--text text--darken-1 my-2 px-15">
                <v-col class=""> Showeasy </v-col>
              </v-row>
              <v-row class="px-15" v-for="text in showEasy" :key="text">
                <v-col class="py-0">{{ text }}</v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col>
            <v-container>
              <v-row class="orange--text text--darken-1 my-2"
                ><v-col>For Exhibitor・Visitor</v-col>
              </v-row>
              <v-row class="my-1"><v-col class="py-0">Blog</v-col></v-row>
              <v-row class="my-1"
                ><v-col class="py-0">ShowEasy Advantage</v-col></v-row
              >
              <v-row class="orange--text text--darken-1 my-3"
                ><v-col>For Partner</v-col></v-row
              >
              <v-row class="my-1"
                ><v-col class="py-0">Become Partner</v-col></v-row
              >
              <v-row class="my-1"
                ><v-col class="py-0">Partner Login/ Log out</v-col></v-row
              >
            </v-container>
          </v-col>
          <v-col>
            <v-container>
              <v-row class="orange--text text--darken-1 my-3"
                ><v-col class="py-0">Terms of use</v-col>
              </v-row>
              <v-row class="my-1"
                ><v-col class="py-0">Terms & Conditions</v-col></v-row
              >
              <v-row class="my-1"
                ><v-col class="py-0">Privacy policy</v-col></v-row
              >
              <v-row class="orange--text text--darken-1 my-3"
                ><v-col class="py-0">Contact us</v-col></v-row
              >
              <v-row class="my-1">
                <v-col class="py-0"
                  ><v-img
                    max-width="20"
                    :src="require('@/assets/svg/phone.svg')"
                  ></v-img>
                  &nbsp;&nbsp;886-2-2725-5000</v-col
                >
              </v-row>
              <v-row class="my-1">
                <v-col class="py-0"
                  ><v-img
                    max-width="20"
                    :src="require('@/assets/svg/envelop.svg')"
                  ></v-img>
                  &nbsp;info@showeasy.com</v-col
                >
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="1" v-for="n in 3" :key="n">
            <v-img max-width="30" :src="require('@/assets/svg/fb.svg')"></v-img>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="mt-10 mb-2">
          <v-img
            max-width="200"
            class="mx-auto"
            :src="require('@/assets/svg/logo.svg')"
          ></v-img>
        </v-row>
        <v-row>
          <p class="mx-auto grey--text text--lighten-1">
            © 2022 Showeasy. All Rights Reserved.
          </p>
        </v-row>
      </v-container>
    </div>

    <div class="phone hidden-sm-and-up grey lighten-5">
      <v-container>
        <v-row v-for="title in titles" :key="title" class="bottom-line">
          <v-col cols="10" class="orange--text text--darken-1 pl-5">{{
            title
          }}</v-col>
          <v-col cols="2">
            <v-img
              :src="require('@/assets/svg/plus.svg')"
              max-width="20"
              contain
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="orange--text text--darken-1 pl-5"
            >Contant us</v-col
          >
        </v-row>
        <v-row class="pl-5">
          <v-img
            max-width="15"
            contain
            :src="require('@/assets/svg/phone.svg')"
          ></v-img>
          &nbsp;&nbsp;886-2-2725-5000
        </v-row>
        <v-row class="pl-5">
          <v-img
            max-width="15"
            contain
            :src="require('@/assets/svg/envelop.svg')"
          ></v-img>
          &nbsp;info@showeasy.com</v-row
        >
        <v-row class="pl-3 my-7">
          <v-col cols="2" v-for="n in 3" :key="n">
            <v-img
              max-width="30"
              contain
              :src="require('@/assets/svg/fb.svg')"
            ></v-img>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="pl-6">
          <v-img
            max-width="150"
            contain
            :src="require('@/assets/svg/logo.svg')"
          ></v-img>
        </v-row>
        <v-row class="pl-6">
          <p class="grey--text text--lighten-1 text-caption">
            © 2022 Showeasy. All Rights Reserved.
          </p>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showEasy: [
      "About Us",
      "Press",
      "News",
      "Recruitment",
      "Our Partner",
      "FAQ",
    ],
    titles: [
      "Showeasy",
      "For Exhibitor・Visitor",
      "For Partner",
      "Terms of use",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.bottom-line {
  position: relative;
}
.bottom-line:after {
  content: "";
  height: 1px; //You can change this if you want smaller/bigger borders
  width: 85%;

  position: absolute;
  left: 5%;
  bottom: 0; // If you want to set a smaller height and center it, change this value

  background-color: #ddd; // The color of your border
}
</style>