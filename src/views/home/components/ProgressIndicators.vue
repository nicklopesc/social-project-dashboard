<template>
    <v-card>
      <v-card-title>Progresso dos Projetos</v-card-title>
      <v-card-subtitle>Visualize o progresso de cada projeto.</v-card-subtitle>
      <v-card-text>
        <v-progress-linear :value="progress" color="blue" />
        <v-progress-linear :value="50" color="green" />
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "ProgressIndicators",
    data() {
      return {
        progress: 70,
      };
    },
  };
  </script>
  