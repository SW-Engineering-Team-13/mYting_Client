import { createWebHistory, createRouter } from "vue-router";

import Main from '@/views/HomeMain';
import Login from '@/views/HomeLogin';
import Matching from '@/views/HomeMatching';

import StudyHome from '@/views/Study/StudyHome.vue'
import creategroup from '@/views/Study/FormStudyGroup.vue'
import findgroup from '@/views/Study/FindStudy.vue'
import mystudylist from '@/views/Study/MyStudyList.vue'
import studyprofile from '@/views/Study/StudyProfile.vue'
import EditStudyProfile from '@/views/Study/EditStudyProfile.vue'
import reservation from '@/views/Study/PlaceReservation.vue'

import MatchHome from '@/views/Matching/MatchHome.vue'
import MatchResult from '@/views/Matching/MatchResult.vue'
import MatchWait from '@/views/Matching/MatchWait.vue'

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
		path: '/study',
		name: 'studyhome',
		component: StudyHome
	},
	{
		path: '/creategroup',
		name: 'creategroup',
		component: creategroup
	},
	{
		path: '/findgroup',
		name: 'findgroup',
		component: findgroup
	},
	{
		path: '/mystudylist',
		name: 'mystudylist',
		component: mystudylist
	},
	{
		path: '/studyprofile',
		name: 'studyprofile',
		component: studyprofile
	},
	{
		path: '/studyprofileEdit',
		name: 'EditStudyProfile',
		component: EditStudyProfile
	},
	{
		path: '/reservation',
		name: 'reservation',
		component: reservation
	},

	{
		path: '/matchhome',
		name: 'MatchHome',
		component: MatchHome
	},
	{
		path: '/matchresult',
		name: 'MatchResult',
		component: MatchResult
	},
	{
		path: '/matchwait',
		name: 'MatchWait',
		component: MatchWait
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;