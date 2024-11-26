<template>
    <v-app-bar app>
      <v-toolbar-title>Dashboard Social</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="darkMode" label="Modo Escuro" />
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        darkMode: false,
      };
    },
  };
  </script>
  