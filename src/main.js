import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Toggler from './components/toggler.vue'
import Films from './components/films.vue'
import Chanels from './components/chanels.vue'
import Modal from './components/modal.vue'


Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Toggler', Toggler)
Vue.component('Films', Films)
Vue.component('Chanels', Chanels)
Vue.component('Modal', Modal)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}).$mount('#app')
