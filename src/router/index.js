import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import StartRally from '@/views/rally/StartRally';
import RallyFormStep1 from '@/components/RallyFormStep1';
import RallyFormStep2 from '@/components/RallyFormStep2';
import RallyFormStep3 from '@/components/RallyFormStep3';
// import RallyOptions from '@/components/RallyOptions';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
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
        // { path: 'step1', name: 'step1', component: RallyOptions },
        { path: 'step1', name: 'step1', component: RallyFormStep1 },
        { path: 'step2', name: 'step2', component: RallyFormStep2 },
        { path: 'step3', name: 'step3', component: RallyFormStep3 },
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
      component: SignUp,
    },
    {
      path: '/rallyshowpage',
      name: 'IndividualRally',
      component: RallyShowPage,
    }
  ],
});
