import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/common/Main';
import Login from '../components/common/Login';
import Introduction from '../components/common/Introduction';
import Matching from '../components/matching/Start';
import Study from '../components/study/Start';

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
		path:'/intro'
		,name: 'Introduction'
		,component: Introduction
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