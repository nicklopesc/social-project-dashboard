import Vue from 'vue';
import VueRouter from 'vue-router';

// import DefaultLayout from '@/layout/DefaultLayout.vue';
import DashboardLayout from '@/layout/DashboardLayout.vue';
import Home from '@/views/DashboardHome.vue';
import CadastrarProjeto from '@/views/register/CadastrarProjeto.vue';
import ProjetosDisponiveis from '@/views/projects/ProjetosDisponiveis.vue';

Vue.use(VueRouter);

export const routes = [

  {
    path: '/',
    component: DashboardLayout, 
    children: [
      {
        path: '', // Rota raiz
        name: 'Home',
        component: Home,
      },
      {
        path: 'dashboard/cadastrar-projeto',
        name: 'CadastrarProjeto',
        component: CadastrarProjeto,
      },
      {
        path: 'dashboard/projetos-disponiveis',
        name: 'ProjetosDisponiveis',
        component: ProjetosDisponiveis,
      },
    ],
  },
  
  // {
  //   path: '/public',
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: '', 
  //       name: 'PublicPage',
  //       component: () => import('@/views/PublicPage.vue'),
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
