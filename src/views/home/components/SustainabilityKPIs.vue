<template>
    <v-card>
      <v-card-title>Indicadores de Sustentabilidade</v-card-title>
      <v-card-subtitle>Indicadores relacionados aos projetos sustentáveis.</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-avatar>
              <v-img src="co2-icon.png" alt="CO2" />
            </v-avatar>
            <p>Redução de CO2: 1200 kg</p>
          </v-col>
          <v-col cols="6">
            <v-avatar>
              <v-img src="water-icon.png" alt="Água" />
            </v-avatar>
            <p>Água economizada: 15000 L</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "SustainabilityKPIs",
  };
  </script>
  