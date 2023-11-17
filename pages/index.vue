<script setup lang="ts">
import { useRoute } from "vue-router";
import Card from "../components/Card.vue";

const route = useRoute();
interface Product {
  id: number;
  title: string;
  url: string;
}
const { pending, data: items } = await useFetch<Product[]>(
  "https://jsonplaceholder.typicode.com/photos?_limit=10"
);
</script>

<template>
  <div>
    <div
      class="container mx-auto bg-slate-300 h-full min-h-screen w-full flex flex-wrap gap-4 p-4 mt-18"
    >
      <div v-if="pending" class="loading">Загрузка...</div>
      <div
        v-else
        class="container mx-auto bg-slate-300 h-full min-h-screen w-full flex flex-wrap gap-4"
      >
        <Card
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :url="item.url"
        />
      </div>
    </div>
  </div>
</template>
