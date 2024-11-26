<template>
    <v-app>
      <v-container>
        
        <v-row>
          <v-col>
            <h1>Default Layout</h1>
          </v-col>
        </v-row>
        <router-view />
      </v-container>
    </v-app>
  </template>
  
  <script>
  
  export default {
    name: 'DefaultLayout',
    
  };
  </script>
  