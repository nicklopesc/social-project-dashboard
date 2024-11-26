<template>
    <v-progress-linear :value="progress" height="20" color="green" />
  </template>
  
  <script>
  export default {
    props: {
      progress: Number,
    },
  };
  </script>
  