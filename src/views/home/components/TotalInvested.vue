<template>
    <v-card>
      <v-card-title>
        <v-icon left>mdi-cash-multiple</v-icon>
        Total Investido
      </v-card-title>
      <v-card-subtitle>Valor total investido em projetos sociais</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-subheader class="display-1">{{ totalInvestedFormatted }}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-progress-linear :value="progress" color="blue" height="10"></v-progress-linear>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "TotalInvested",
    data() {
      return {
        totalInvested: 2000000,  
        progress: 80,  
      };
    },
    computed: {
      totalInvestedFormatted() {
        return this.totalInvested.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
      }
    }
  };
  </script>
  
  <style scoped>
 
  .v-card {
    margin-top: 20px;
  }
  </style>
  