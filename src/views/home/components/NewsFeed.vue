<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card v-for="(news, index) in newsFeed" :key="index" class="mb-4">
            <v-card-title>{{ news.title }}</v-card-title>
            <v-card-subtitle>{{ news.date }}</v-card-subtitle>
            <v-card-text>{{ news.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsFeed: [
          { title: 'Lançamento do Projeto A', date: '2024-11-10', content: 'Detalhes do projeto A.' },
          { title: 'Conclusão do Projeto B', date: '2024-10-05', content: 'Projeto B concluído com sucesso.' },
        ],
      };
    },
  };
  </script>
  