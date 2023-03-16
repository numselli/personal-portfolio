import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

const feather = require('feather-icons');
feather.replace();

document.querySelector('body').classList.add('bg-primary-dark');
createApp(App)
	.use(router)
	.use(BackToTop)
	.mount('#app');

// router.go();