<template>
  <div class="flex h-screen justify-center items-center">
    <div v-if="item">
      <h1>Детали карточки</h1>
      <Card :id="item.id" :title="item.title" :image="item.image" />
      <p>ID карточки: {{ cardId }}</p>
    </div>
    <div v-else>
      <p>Карточка не найдена.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Card from "../components/Card.vue"; // Путь к вашему компоненту карточки
interface Product {
  id: number;
  title: string;
  image: string;
}
const route = useRoute();
const cardId = route.params.id;
const { pending, data: item } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${cardId}`
);

// Здесь может быть логика для получения данных карточки по cardId
</script>

<style>
/* Ваши стили для страницы деталей карточки */
</style>
