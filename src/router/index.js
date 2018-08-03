import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import StartRally from '@/views/rally/StartRally';
import RallyFormStep2 from '@/components/RallyFormStep2';
import RallyFormStep3 from '@/components/RallyFormStep3';
import RallyFormStep4 from '@/components/RallyFormStep4';
import RallyOptions from '@/components/RallyOptions';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import RallyShowPage from '@/views/rally/RallyShowPage';

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
        { path: 'step1', name: 'step1', component: RallyOptions },
        { path: 'step2', name: 'step2', component: RallyFormStep2 },
        { path: 'step3', name: 'step3', component: RallyFormStep3 },
        { path: 'step4', name: 'step4', component: RallyFormStep4 },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/rallyshowpage',
      name: 'IndividualRally',
      component: RallyShowPage,
    }
  ],
});
