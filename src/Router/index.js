import { createRouter, createWebHistory } from "vue-router";
import Home from "@/View/Home.vue";
import About from "@/View/About.vue";
import Contact from "@/View/contact.vue";
import Service from "@/View/service.vue";
import Northern from "@/View/Northern.vue";
import Eastern from "@/View/Eastern.vue";
import Southern from "@/View/Southern.vue";
import Western from "@/View/Western.vue";
import Kigali from "@/View/Kigali.vue";
import Photos from "@/View/Photos.vue";
import Videos from "@/View/Videos.vue";
import Login from "@/View/Login.vue";
import Register from "@/View/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
  {
    path: "/north",
    name: "North",
    component: Northern,
  },
  {
    path: "/east",
    name: "East",
    component: Eastern,
  },
  {
    path: "/south",
    name: "South",
    component: Southern,
  },
  {
    path: "/west",
    name: "West",
    component: Western,
  },
  {
path:"/Login",
name:"Login",
component:Login,


  },
  {
path:"/Register",
name:"Register",
component:Register,


  },
  {
    path: "/kigali",
    name: "Kigali",
    component: Kigali,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

