import { createWebHistory, createRouter } from "vue-router";
import Main from '@/views/Main';
import Login from '@/views/Login';
import Matching from '@/views/Matching';
import Study from '@/views/Study';

const routes = [
	{
		path: '/'
		,name: 'Main'
		,component: Main
	},
	{
		path:'/login'
		,name: 'Login'
		,component: Login
	},
	{
		path:'/matching'
		,name: 'Matching'
		,component: Matching
	},
	{
		path:'/study'
		,name: 'Study'
		,component: Study
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;