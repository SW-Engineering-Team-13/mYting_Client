import Vue from 'vue'
import VueRouter from 'vue-router'
import StudyHome from '../components/StudyHome.vue'
import creategroup from '../components/FormStudyGroup.vue'
import findgroup from '../components/FindStudy.vue'
import mystudylist from '../components/MyStudyList.vue'
import studyprofile from '../components/StudyProfile.vue'
import EditStudyProfile from '../components/EditStudyProfile.vue'
import reservation from '../components/PlaceReservation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
