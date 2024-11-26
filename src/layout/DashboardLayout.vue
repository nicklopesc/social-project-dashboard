<template>
    <v-app>
      
      <v-navigation-drawer app color="rgba(0, 0, 0, 0.2)" dark>
        <v-list dense>
         
          <v-list-item>
            <v-list-item-avatar>
              <!-- <v-icon color="blue">mdi-view-dashboard</v-icon> -->
            </v-list-item-avatar>
            <v-list-item-title>Projetos</v-list-item-title>
          </v-list-item>
          <v-divider class="mb-2"></v-divider>
  
          
          <v-list-item 
            v-for="item in menuItems" 
            :key="item.title" 
            :to="item.route" 
            active-class="v-list-item--active" 
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
    
      <v-app-bar app dark>
        <v-app-bar-title>Dashboard</v-app-bar-title>
      </v-app-bar>
  
     
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
  { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
  { title: "Cadastrar Projeto", icon: "mdi-folder-plus", route: "/dashboard/cadastrar-projeto" },
  { title: "Projetos Disponíveis", icon: "mdi-folder-open", route: "/dashboard/projetos-disponiveis" },
],

      };
    },
  };
  </script>
  
  <style scoped>
  .v-navigation-drawer {
    width: 240px;
    z-index: 2; 
  }
  
  .v-app-bar {
    z-index: 3; 
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  
  .v-main {
    margin-left: 0px; 
    padding: 10px;
  }
  
  .v-list-item--active {
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  </style>
  