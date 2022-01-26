import { createRouter, createWebHistory } from 'vue-router';

let routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/Home.vue'),
	},
	{
		path: '/count',
		name: 'count',
		component: () => import('@/components/Count.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;