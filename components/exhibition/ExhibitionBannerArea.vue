<template>
  <v-responsive max-width="1365" class="mx-auto">
    <v-container>
        <v-img
          gradient="to top right, rgba(0,0,0,0.5),rgba(0,0,0,0.7)"
          :src="require('@/assets/img/ExhibitionBanner.png')"
          class="hero-img"
        >
        <v-row class="mb-6" :src="require('@/assets/img/ExhibitionBanner.png')">
          <v-col md="4" class="pa-10">
            <div>
              <v-card class="ma-4 rounded-xl" width="80%">
                <v-img
                  :src="require('@/assets/img/logoPic.png')"
                  class="mx-auto"
                ></v-img>
              </v-card>
            </div>
            <div>
              <v-card-text class="pa-2">
                <v-row align="center" class="mx-0">
                  <div class="amber--text text--darken-1 text-h5 ms-4">4.5</div>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="15"
                  ></v-rating>
                </v-row>
                <v-row align="center" class="mx-0">
                  <div class="amber--text text--darken-1 text-h6 ms-4">
                    (344 reviews)
                  </div>
                </v-row>
              </v-card-text>
            </div>
          </v-col>
          <v-col md="8"  class="pa-10">
            <v-card-text>
              <div>
                <v-btn
                  color="warning"
                  class="
                    recommend-tag
                    no-text-transform
                    text-space-1
                    rounded-lg
                    ml-4
                    mt-2
                  "
                >
                  <img class="mr-1" src="~/assets/img/icons/u-award.png" />
                  Recommend
                </v-btn>
                <v-btn
                  style ="border-style:solid;border-color:#FFAC55;"
                  class="
                    warning--text
                    recommend-tag
                    no-text-transform
                    text-space-1
                    rounded-lg
                    ml-4
                    mt-2
                  "
                >
                  Ongoing
                </v-btn>
              </div>
              <div>
                <v-btn
                outlined
                  class="
                    warning--text
                    recommend-tag
                    no-text-transform
                    text-space-1
                    rounded-lg
                    ml-4
                    mt-2
                  "
                >
                  Aerospace, Maritime & Transportation
                </v-btn>
              </div>
             <p></p>
              <div class="white--text text--darken-1 ml-3" style="font-size: 2em; line-height: 30px;">
                CES, International Consumer Electronics Show CES, International
                Consumer Electronics Show CES, International ...
              </div>
              <p></p>
              <div class="white--text text--darken-1 text-h5 ml-3">America．U.S.A．Las Vagas</div>
              <div class="white--text text--darken-1 text-h5 ml-3">2022.02.24 - 2022.02.26</div>
            </v-card-text>
          </v-col>
        </v-row>
        </v-img>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
};
</script>

<style lang="scss">

</style>
