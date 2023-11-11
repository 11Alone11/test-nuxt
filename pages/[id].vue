<template>
  <div v-if="data">
    <h1>Детали карточки</h1>
    <Card :id="data.id" :title="data.title" :image="data.image" />
    <p>ID карточки: {{ cardId }}</p>
  </div>
  <div v-else>
    <p>Карточка не найдена.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { items } from "../data/items";
import Card from "../components/Card.vue"; // Путь к вашему компоненту карточки

const route = useRoute();
const cardId = route.params.id;

const data = items.find((item) => item.id === +cardId);

// Здесь может быть логика для получения данных карточки по cardId
</script>

<style>
/* Ваши стили для страницы деталей карточки */
</style>
