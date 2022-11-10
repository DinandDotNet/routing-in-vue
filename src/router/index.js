import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/Jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path:'/jobs/:id',
    name:'/JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect
  {
    path:'/all-jobs', 
    redirect: '/jobs'
  },
  //404
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
