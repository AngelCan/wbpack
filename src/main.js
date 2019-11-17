import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Active_directory from './Active_directory.vue'
import DHCP_Server_service from './DHCP_Server_service.vue'
import Database_Server from './Database_Server.vue'
import Web_server from './Web_server.vue'
import Print_server from './Print server.vue'

Vue.use(VueRouter);
const routes = [
  {path: '/Active_directory', component: Active_directory},
  {path: '/DHCP_Server_service', component: DHCP_Server_service},
  {path: '/Database_Server', component: Database_Server},
  {path: '/Web_server', component: Web_server},
  {path: '/Print_server', component: Print_server},
  {path: '/Home', component: Home},
  {path: '/', component: Home}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.component('home', Home);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
