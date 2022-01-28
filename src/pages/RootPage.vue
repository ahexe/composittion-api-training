<script setup lang="ts">
import { useStore } from "../stores/index";
import { storeToRefs } from "pinia";

const store = useStore();

const { firstName } = storeToRefs(store);
</script>

<template>
  <h1>Welcome {{ firstName }}</h1>
</template>
