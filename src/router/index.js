import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import StartRally from '@/views/rally/StartRally';
import FormStep2 from '@/components/FormStep2';
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
      children: [
        { path: 'step1', component: StartRally },
        { path: 'step2', component: FormStep2 },
      ]
    },
  ],
});
