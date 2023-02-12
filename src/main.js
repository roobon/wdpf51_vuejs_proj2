import { createApp } from "vue"; //CreateApp
import App from "./App.vue"; // main component
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import News from "./pages/News.vue";
import Products from "./pages/Products.vue";
import Search from "./pages/Search.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
  { path: "/products", component: Products },
  { path: "/search", component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

createApp(App).use(router).mount("#app");
