<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <NuxtLayout>
    <v-app>
      <v-app-bar :elevation="24" rounded>
        <v-breadcrumbs :items="breadcrumbsItems">
          <template v-slot:prepend>
            <v-icon size="small" icon="$vuetify"></v-icon>
          </template>
        </v-breadcrumbs>
        <div></div>

        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
        <v-autocomplete
          :items="items"
          append-inner-icon="mdi-microphone"
          auto-select-first
          class="flex-full-width mt-6"
          density="comfortable"
          item-props
          menu-icon=""
          placeholder="Search Google or type a URL"
          prepend-inner-icon="mdi-magnify"
          rounded
          theme="light"
          variant="solo"
        ></v-autocomplete>
      </v-app-bar>
      <NuxtPage />
      <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div class="input__relative">
          <input name="date" class="input input_grey" type="date" required />
        </div>
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>
        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </div>
        <v-divider></v-divider>
        <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
      </v-footer>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://main--bejewelled-cactus-d4d50b.netlify.app",
  twitterCard: "summary_large_image",
});
const breadcrumbsItems = [
  {
    title: "Home",
    disabled: false,
    href: "/",
  },
  {
    title: "Cards",
    disabled: false,
    href: "/",
  },
];
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>

<style>
.input__relative {
  position: relative;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
.input {
  width: 100%;
  padding: 14px 20px;
  color: #303030;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #fff;
  height: 40px;
  border-radius: 20px;
  border: 1.2px solid #303030;
}
</style>
