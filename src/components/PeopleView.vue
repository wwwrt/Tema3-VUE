<script setup>
import PersonCard from "./PersonCard.vue";
import SearchName from "./SearchName.vue";
import { useTodoStore } from "../stores/todo";

const todoStore = useTodoStore();
</script>
<template>
  <SearchName></SearchName>
  <div class="flex">
    <PersonCard v-for="list in todoStore.lists" :person="list"></PersonCard>
  </div>
</template>
