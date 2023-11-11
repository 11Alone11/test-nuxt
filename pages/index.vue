<script setup lang="ts">
import { useRoute } from "vue-router";
import Card from "../components/Card.vue"; // Путь к вашему компоненту карточки

const route = useRoute();
import { items } from "../data/items";
</script>

<template>
  <div>
    <div
      class="container mx-auto bg-slate-300 h-full min-h-screen w-full flex flex-wrap gap-4"
    >
      <Card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.image"
      />
    </div>
  </div>
</template>
