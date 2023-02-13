export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/game/index.vue'),
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/company.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact.vue'),
  }
];