<template>
  <div class="my-ad-banner mt-10">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="my-5 row1">
          <v-col v-for="k in 3" :key="k">
            <v-img
              max-width="350"
              :src="require('@/assets/img/ADBanner.png')"
              class="rounded-lg"
            ></v-img>
          </v-col>
          <div class="left-arrow">
            <v-img :src="require('@/assets/svg/left-arrow.svg')"></v-img>
          </div>
          <div class="right-arrow">
            <v-img :src="require('@/assets/svg/right-arrow.svg')"></v-img>
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="tablet d-none d-sm-flex d-md-none">
      <v-sheet class="mx-auto" max-width="800">
        <v-slide-group class="pa-4" center-active show-arrows>
          <v-slide-item v-for="n in 3" :key="n">
            <v-card class="ma-4">
              <v-img
                max-width="350"
                :src="require('@/assets/img/ADBanner.png')"
                class="rounded-lg"
              ></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="phone hidden-sm-and-up">
      <v-container>
        <v-row>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 3" :key="n">
                <v-container>
                  <v-row v-for="n in 2" :key="n">
                    <v-card class="ma-4 rounded-xl">
                      <v-img
                        max-width="350"
                        max-height="120"
                        :src="require('@/assets/img/ADBanner.png')"
                        class=""
                      ></v-img>
                    </v-card>
                  </v-row>
                </v-container>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-row>
        <v-row>
          <v-img
            :src="require('@/assets/svg/bottom-nav.svg')"
            max-width="70"
            contain
            class="mx-auto"
          ></v-img>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row1 {
  position: relative;
}
.left-arrow {
  position: absolute;
  top: 40%;
  left: -50px;
}
.right-arrow {
  position: absolute;
  top: 40%;
  right: -20px;
}
</style>