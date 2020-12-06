import Vue from 'vue'
import store from './store'
import './css/main.css'
import './scss/main.scss'
import './js/common'

window.Vue = Vue

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
  el: '#app',
  store,
})
