import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
// import Start from '@/views/Start';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/start',
    //   name: 'Rally',
    //   component: Start
    // },
  ],
});
