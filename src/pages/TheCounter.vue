<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores";
const store = useStore();
const { counterPlusOne } = store;
const { theCounter } = storeToRefs(store);

const resetCounter = () => {
  let resetConfirm: boolean = confirm("Really ?!");
  if (resetConfirm) {
    store.$reset();
  }
};
</script>

<template>
  <h1>{{ theCounter }}</h1>
  <button @click="counterPlusOne">Add 1</button>
  <button @click="resetCounter">Reset All</button>
</template>
