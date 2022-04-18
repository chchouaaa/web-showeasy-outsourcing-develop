<template>
  <div class="partnership">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="row1 mb-5">
          <v-col class="orange--text text--darken-1 text-h4 mt-10 mb-10">
            Partnership
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <v-row>
              <v-col v-for="k in 3" :key="k">
                <v-card flat>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-img
                          :src="require('@/assets/img/partner1.png')"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          :src="require('@/assets/img/partner2.png')"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-container>
        <v-row class="row1 mb-5">
          <v-col class="orange--text text--darken-1 text-h4 mt-10 mb-10">
            Partnership
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="150"
            ></v-img>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </div>
    <div class="phone hidden-sm-and-up">
      <v-container>
        <v-row class="row1 my-5-5">
          <v-col class="orange--text text--darken-1 text-h6 ml-5">
            Partnership
          </v-col>
        </v-row>
        <v-row class="px-5">
          <v-col cols="4">
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="70"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="70"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="70"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="require('@/assets/img/partner2.png')"
              max-height="50"
              max-width="70"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="require('@/assets/img/partner1.png')"
              max-height="50"
              max-width="70"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>