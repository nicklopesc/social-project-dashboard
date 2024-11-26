<template>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ content }}</v-card-subtitle>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      content: String,
    },
  };
  </script>
  