<template>
  <v-responsive max-width="1365" class="mx-auto">
    <v-container>
      <v-carousel v-model="activeIndex" height="180" class="exhibition-swiper" hide-delimiters cycle>
        <v-carousel-item
          v-for="(caRow, i) in displayCarouselRows"
          :key="`ca_item_${i}`"
        >
          <v-row>
            <v-col v-for="(item,index) in caRow" :key="index" cols="4">
              <v-img width="100%" src="https://picsum.photos/371/180" class="mx-auto" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  name: 'ExhibitionCarousel',
  data: () => ({
    activeIndex: 0,
    carouselItems: Array(15).fill(1),
  }),
  computed: {
    displayCarouselRows() {
      const { carouselItems } = this
      const ret = []
      for (let i = 0; i < carouselItems.length; i += 3) {
        ret.push([carouselItems[i], carouselItems[i+1], carouselItems[i+2]]);
      }
      return ret;
    },
  }
}
</script>

<style lang="scss">
.exhibition-swiper {
  padding: 0 96px;

  .v-window__prev {
    left: auto;
    right: 100%;
  }
  .v-window__next {
    right: auto;
    left: 100%;
  }
}
</style>
