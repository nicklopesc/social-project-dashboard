<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-btn @click="addProject" color="primary" block>Adicionar Projeto</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="viewReports" color="secondary" block>Ver Relatórios</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      addProject() {
        console.log('Adicionando novo projeto');
      },
      viewReports() {
        console.log('Visualizando relatórios');
      }
    },
  };
  </script>
  