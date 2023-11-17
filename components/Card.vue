<script setup lang="ts">
defineProps({
  id: Number,
  title: String,
  image: String,
});
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <NuxtImg
      format="webp"
      fit="cover"
      quality="70"
      loading="lazy"
      :src="image"
      :alt="title"
      height="200px"
      cover
    ></NuxtImg>
    <NuxtLink :to="`/${id}`"
      ><v-card-title> {{ title }}</v-card-title></NuxtLink
    >
    <!-- <v-card-subtitle> {{ id }}</v-card-subtitle> -->
  </v-card>
</template>
<!-- <div
    class="max-w-xs flex flex-col gap-4 p-4 border rounded-lg border-black border-4"
  >
    <p class="id">{{ id }}</p>
    <p class="title">{{ title }}</p>
    <NuxtImg
      loading="lazy"
      :src="image"
      :alt="title"
      class="w-full object-cover h-48"
    />
    <NuxtLink :to="`/${id}`">This is card number {{ id }}</NuxtLink>
  </div> -->
