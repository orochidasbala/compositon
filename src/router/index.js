import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailsLanguages'
import AddNew from '../views/AddForm'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/languages/:id',
    name: "Detail",
    component: Detail,
    // props: true
  },
  {
    path: '/addnew',
    name: 'Addnew',
    component: AddNew
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
