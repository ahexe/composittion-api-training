import { createRouter, createWebHashHistory } from "vue-router";

import RootPage from "./pages/RootPage.vue";
import MyProfile from "./pages/MyProfile.vue";
import TheCounter from "./pages/TheCounter.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: RootPage,
    },
    {
      name: "profile",
      path: "/profile",
      component: MyProfile,
    },
    {
      name: "counter",
      path: "/counter",
      component: TheCounter,
    },
  ],
});

export default router;
