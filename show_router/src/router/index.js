import Vue from 'vue'
import Router from 'vue-router'
import TodolistIndex from '../components/todolist_index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TodolistIndex
    }
  ]
})
