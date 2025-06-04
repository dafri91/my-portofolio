import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
    meta: { title: 'About Me' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../pages/Portfolio.vue'),
    meta: { title: 'My Portfolio' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue'),
    meta: { title: 'Contact Me' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: '404 - Page Not Found' }
  }
];

// Navigation guards to update document title
routes.forEach(route => {
  route.beforeEnter = (to, from, next) => {
    document.title = `${to.meta.title} | Dafri Mulya`;
    next();
  }
});

export default routes;