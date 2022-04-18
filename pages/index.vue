<template>
  <div class="home-view">
    <Hero />
    <AdBanner />
    <HighlightExhibitions />
    <TrendingService />
    <FeaturedExhibitonThemes />
    <TrendingDestinationServices />
    <OtherInfo />
    <Partnership />
    <BottomInfo />
  </div>
</template>

<script>
import Hero from "~/components/home/Hero.vue"
import AdBanner from "~/components/home/AdBanner.vue"
import HighlightExhibitions from "~/components/home/HighlightExhibitions.vue"
import TrendingService from "~/components/home/TrendingService.vue"
import FeaturedExhibitonThemes from "~/components/home/FeaturedExhibitonThemes.vue"
import TrendingDestinationServices from "~/components/home/TrendingDestinationServices.vue"
import OtherInfo from "~/components/home/OtherInfo.vue"
import Partnership from "~/components/home/Partnership.vue"
import BottomInfo from "~/components/home/BottomInfo.vue"

export default {
  name: 'IndexPage',
  head:{
    title : 'home',
  },
  components: {
    Hero,
    AdBanner,
    HighlightExhibitions,
    TrendingService,
    FeaturedExhibitonThemes,
    TrendingDestinationServices,
    OtherInfo,
    Partnership,
    BottomInfo,
  },
  data() {
    return {

    };
  }
}
</script>
<style lang="scss" scoped>
.home-view{
  // height: 500vh;
}
</style>
