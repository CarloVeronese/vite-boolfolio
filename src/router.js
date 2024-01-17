import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import ProjectIndex from "./pages/projects/ProjectIndex.vue";
import ProjectShow from "./pages/projects/ProjectShow.vue";
import Contact from "./pages/Contact.vue";
import TypeArchive from "./pages/types/Archive.vue";
import NotFound from './pages/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/projects",
      name: "index",
      component: ProjectIndex,
    },
    {
      path: "/projects/:id",
      name: "proects.show",
      props: true,
      component: ProjectShow,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contact,
    },
    {
      path: "/types/:slug",
      name: "types",
      props: true,
      component: TypeArchive,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
      },
  ],
});

export { router };
