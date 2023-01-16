import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/index.scss';

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
