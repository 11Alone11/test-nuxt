<script setup lang="ts">
import { useRoute } from "vue-router";
import Card from "../components/Card.vue";

const route = useRoute();
interface Product {
  id: number;
  title: string;
  image: string;
}
const { pending, data: items } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
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
          :image="item.image"
        />
      </div>
    </div>
  </div>
</template>
