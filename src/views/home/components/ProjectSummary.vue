<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
          <BaseCard :title="project.name" :content="project.status" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import BaseCard from '@/components/reusable/BaseCard.vue';
  
  export default {
    components: {
        BaseCard
    },
    data() {
      return {
        projects: [
          { id: 1, name: 'Projeto A', status: 'Em andamento' },
          { id: 2, name: 'Projeto B', status: 'Concluído' },
          { id: 3, name: 'Projeto C', status: 'Planejado' },
        ],
      };
    },
  };
  </script>
  