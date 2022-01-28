<script setup lang="ts"></script>

<template>
  <div class="container">
    <div>
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png" />
      </router-link>
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
