<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-list>
            <v-list-item-group v-for="(project, index) in recentProjects" :key="index">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ project.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ project.status }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="viewProject(project.id)">Ver</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recentProjects: [
          { id: 1, name: 'Projeto A', status: 'Em andamento' },
          { id: 2, name: 'Projeto B', status: 'Concluído' },
        ],
      };
    },
    methods: {
      viewProject(id) {
        console.log(`Visualizando projeto ${id}`);
      }
    },
  };
  </script>
  