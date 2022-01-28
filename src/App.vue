<script setup lang="ts">
import { ref } from "vue";

const seconds = ref(0);
const minutes = ref(0);
const hours = ref(0);
const setSeconds = () => {
  seconds.value++;
  if (seconds.value === 60) {
    minutes.value++;
    seconds.value = 0;
  }
};
setInterval(setSeconds, 1000);
</script>

<template>
  <div class="container">
    <div>
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png" />
      </router-link>
      <h5>{{ minutes + ":" + seconds }}</h5>
      <ul>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/counter">Counter</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  gap: 2rem;
}
.container div {
  border-radius: 30px;
  padding: 1em;
  box-shadow: 0 10px 1px 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: min(95%, 50rem);
  margin: auto;
}
ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  padding: 0;
}

img {
  border: solid 1px white;
  border-radius: 25px;
}
img:hover {
  border-color: black;
}
</style>
