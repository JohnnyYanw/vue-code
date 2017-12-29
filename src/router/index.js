import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
	{
		path: '/',
		name: 'Button',
		component: resolve => require(['components/Button'], resolve)
	}
];
const router = new Router({
	mode: 'history',
	routes
});

export default router;
