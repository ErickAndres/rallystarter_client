import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import StartRally from '@/views/rally/StartRally';
// import Start from '@/views/Start';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/start',
      name: 'startRally',
      component: StartRally,
    },
  ],
});
