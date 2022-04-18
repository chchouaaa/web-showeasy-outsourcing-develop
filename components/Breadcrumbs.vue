<template>
  <v-breadcrumbs :items="routes">
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    routes() {
      const { matched } = this.$nuxt.$route;
      const home = {
        text: 'ShowEasy',
        href: '/',
        disabled: false,
      };
      return [home, ...matched.map(({ meta, path }) => {
        const route = {
          text: meta.name,
          href: path,
          disabled: false,
        };
        return route;
      })];
    },
  }
}
</script>