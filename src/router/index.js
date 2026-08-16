import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetails from '../views/ProjectDetails.vue';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/project/:id',
      name: 'ProjectDetails',
      component: ProjectDetails
   }
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior() {
      return { top: 0 }; // পেজ চেঞ্জ হলে স্ক্রিন সবসময় উপরে নিয়ে যাবে
   }
});

export default router;