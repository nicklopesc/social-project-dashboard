import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'  
import VueRouter from 'vue-router' // Importando o Vue Router
import { routes } from './router' // Importando as rotas do arquivo router

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter) // Registrando o Vue Router

const router = new VueRouter({
  routes, // Usando as rotas definidas
  mode: 'history' // Para evitar o # nas URLs
})

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(), 
  router // Adicionando o Vue Router ao Vue
}).$mount('#app')
