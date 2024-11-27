<template>
  <v-container>
   
   

   
    <v-row class="section-blue">
      <v-col cols="12" >
        <div class="section-title">
          <v-icon left>mdi-chart-pie</v-icon>
          <span class="title">Visão Geral do Impacto Social</span>
        </div>
        <ImpactOverview />
      </v-col>
      <v-col cols="12" md="4">
        <div class="section-title">
          <v-icon left>mdi-cash-multiple</v-icon>
          <span class="title">Total Investido</span>
        </div>
        <TotalInvested />
      </v-col>
      <v-col cols="12">
        <div class="section-title">
          <v-icon left>mdi-clipboard-text</v-icon>
          <span class="title">Resumo dos Projetos</span>
        </div>
        <ProjectSummary />
      </v-col>
    </v-row>

    
    <v-divider class="my-4" />
    <v-row class="section-gray">
      <v-col cols="12" md="6">
        <div class="section-title">
          <v-icon left>mdi-progress-check</v-icon>
          <span class="title">Indicadores de Progresso</span>
        </div>
        <ProgressIndicators />
      </v-col>
      <v-col cols="12" md="6">
        <div class="section-title">
          <v-icon left>mdi-earth</v-icon>
          <span class="title">KPIs de Sustentabilidade</span>
        </div>
        <SustainabilityKPIs />
      </v-col>
    </v-row>

 
    <v-divider class="my-4" />
    <v-row class="section-blue">
      <v-col cols="12">
        <div class="section-title">
          <v-icon left>mdi-calendar-clock</v-icon>
          <span class="title">Projetos Recentes</span>
        </div>
        <ProjectList />
      </v-col>
    </v-row>

 
    <v-divider class="my-4" />
    <v-row class="section-gray">
      <v-col cols="12">
        <div class="section-title">
          <v-icon left>mdi-newspaper</v-icon>
          <span class="title">Notícias e Atualizações</span>
        </div>
        <NewsFeed />
      </v-col>
    </v-row>

  
    <v-divider class="my-4" />
    <v-row class="section-blue">
      <v-col cols="12">
        <div class="section-title">
          <v-icon left>mdi-target</v-icon>
          <span class="title">Metas e Expectativas</span>
        </div>
        <GoalsAndExpectations />
      </v-col>
    </v-row>


    <v-divider class="my-4" />
    <v-row class="section-gray">
      <v-col cols="12" md="6">
        <div class="section-title">
          <v-icon left>mdi-action-fast-forward</v-icon>
          <span class="title">Ações Rápidas</span>
        </div>
        <QuickActions />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ImpactOverview from '@/views/home/components/ImpactOverview.vue';
import TotalInvested from '@/views/home/components/TotalInvested.vue';
import ProjectSummary from '@/views/home/components/ProjectSummary.vue';
import ProgressIndicators from '@/views/home/components/ProgressIndicators.vue';
import SustainabilityKPIs from '@/views/home/components/SustainabilityKPIs.vue';
import ProjectList from '@/views/home/components/ProjectList.vue';
import NewsFeed from '@/views/home/components/NewsFeed.vue';
import GoalsAndExpectations from '@/views/home/components/GoalsAndExpectations.vue';
import QuickActions from '@/views/home/components/QuickActions.vue';

export default {
  name: "DashboardHome",
  components: {
    
    ImpactOverview,
    TotalInvested,
    ProjectSummary,
    ProgressIndicators,
    SustainabilityKPIs,
    ProjectList,
    NewsFeed,
    GoalsAndExpectations,
    QuickActions,
  },
};
</script>

<style scoped>

.section-blue {
  background-color: #042940; 
  padding: 15px;
  /* border-radius: 8px; */
}

.section-gray {
  background-color: #f7f7f7; 
  padding: 20px;
  border-radius: 8px;
}


.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.section-title .title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}


.v-icon {
  font-size: 24px;
  color: #fff;
}


.v-divider.my-4 {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
