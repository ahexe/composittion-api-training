<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../stores/index";

const store = useStore();
const { firstName, lastName, fullName, age, agePlaceholder, myAry, mySumAry } =
  storeToRefs(store);
const { setAge } = store;
</script>

<template>
  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    v-model="firstName"
  />
  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    v-model="lastName"
  />
  <input
    type="number"
    name="age"
    placeholder="Age"
    max="150"
    min="1"
    v-model="agePlaceholder"
    @input.prevent="setAge(agePlaceholder)"
  />
  <h1>{{ fullName }}</h1>
  <h2 v-if="age > 0">{{ age }}</h2>
  <h3>{{ myAry }}</h3>
  <h3>{{ mySumAry }}</h3>
</template>

<style scoped></style>
