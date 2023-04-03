import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Contact from "../views/Contact.vue";
import NewContact from "../views/NewContact.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import ContentLayout from "../layouts/ContentLayout.vue";
import EditContact from "../views/EditContact.vue";
const routes = [
  {
    path: "/",
    name: "ContentLayout",
    component: ContentLayout,
    meta: { requiresAuth: true }, // requires authentication to access this route
    children: [
      {
        path: "",
        redirect: "/Contact",
      },
      {
        path: "Contact",
        component: Contact,
      },
      {
        path: "NewContact",
        component: NewContact,
      },
      {
        path: "EditContact",
        component: EditContact,
      },
    ],
  },
  {
    path: "/Auth",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// authentication guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // replace with your own authentication logic
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/Auth");
  } else {
    next();
  }
});

export default router;
