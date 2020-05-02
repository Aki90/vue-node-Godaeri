import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { formatDate } from '@/utils/filters';
import { BootstrapVue } from 'bootstrap-vue';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// Filter
Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
