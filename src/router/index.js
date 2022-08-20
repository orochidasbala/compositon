import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailsLanguages'
import AddNew from '../views/AddForm'
import Tag from '../views/LangTag'

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
    props: true
  },
  {
    path: '/addnew',
    name: 'Addnew',
    component: AddNew
  },
  {
    path: '/tags/:tag',
    name : "Tag",
    component: Tag,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
