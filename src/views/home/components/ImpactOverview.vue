<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <StatsPanel title="Total de Projetos" :value="totalProjects" />
        </v-col>
        <v-col cols="12" md="4">
          <StatsPanel title="Total de Beneficiados" :value="totalBeneficiaries" />
        </v-col>
        <v-col cols="12" md="4">
          <StatsPanel title="Investimentos" :value="totalInvested" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <DonutChart :data="impactData" />
        </v-col>
        <v-col cols="12" md="6">
          <ProgressBar :progress="projectProgress" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import StatsPanel from '@/components/reusable/StatsPanel.vue';
  import DonutChart from '@/components/reusable/DonutChart.vue';
  import ProgressBar from '@/components/reusable/ProgressBar.vue';
  
  export default {
    components: {
      StatsPanel,
      DonutChart,
      ProgressBar
    },
    data() {
      return {
        totalProjects: 32,      
      totalBeneficiaries: 1200, 
      totalInvested: 500000,
        // totalProjects: 32,
        // totalBeneficiaries: 5000,
        // totalInvested: 'R$ 1.2M',
        projectProgress: 75,
        impactData: [30, 50, 20], 
      };
    },
  };
  </script>
  