import { createRouter, createWebHistory } from 'vue-router';
import services from './views/services.vue';
import HomePage from './views/HomePage.vue'; // Import the HomePage component
import ServiceFormPage from './views/ServiceFormPage.vue'; // Import the ServiceFormPage component

const routes = [
  {
    path: '/',
    redirect: '/Home' // Redirect from root to /home
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomePage // Route for the homepage
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/service-form', // Define the path for the service form
    name: 'ServiceFormPage', // Define a name for the route
    component: ServiceFormPage // Associate the component with the route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
