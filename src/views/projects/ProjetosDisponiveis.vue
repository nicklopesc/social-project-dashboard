<template>
    <v-container class="projects-container">
      <h2 class="title">Projetos</h2>
  
      
      <v-row class="filters" dense>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="searchQuery"
            label="Buscar por título ou descrição"
            outlined
            dense
            clearable
            append-icon="mdi-magnify"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedArea"
            :items="uniqueAreas"
            label="Filtrar por área"
            outlined
            dense
            clearable
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedFunding"
            :items="fundingOptions"
            label="Filtrar por valor"
            outlined
            dense
            clearable
          />
        </v-col>
      </v-row>
  
     
      <v-row dense>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card outlined class="project-card">
            
            <v-img :src="project.image" :alt="project.title" height="200px" />
  
           
            <v-card-text class="project-details">
             
              <v-row>
                <v-col>
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-area"><strong>Área:</strong> {{ project.area }}</p>
                </v-col>
              </v-row>
  
            
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <p class="project-objective">
                    <strong>Objetivo:</strong> {{ project.description }}
                  </p>
                </v-col>
              </v-row>

              <v-row class="details-list">
                <v-col cols="12" md="6">
                  <p>
                    <strong>Criado em:</strong>
                    <br />{{ formatDate(project.creationDate) }}
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <p>
                    <strong>Meta de Arrecadação:</strong>
                    <br />{{ formatCurrency(project.targetFunding) }}
                  </p>
                </v-col>
              </v-row>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { projects } from "@/services/api/fakeProjectsApi";
  
  export default {
    data() {
      return {
        projects,
        searchQuery: "",
        selectedArea: "",
        selectedFunding: "",
        fundingOptions: [
          { text: "Menos de R$100.000", value: "low" },
          { text: "Entre R$100.000 e R$200.000", value: "medium" },
          { text: "Mais de R$200.000", value: "high" },
        ],
      };
    },
    computed: {
      uniqueAreas() {
        return ["Todas as Áreas", ...new Set(this.projects.map((p) => p.area))];
      },
      filteredProjects() {
        return this.projects.filter((project) => {
          const matchesSearch =
            project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase());
  
          const matchesArea =
            !this.selectedArea || project.area === this.selectedArea;
  
          const matchesFunding =
            !this.selectedFunding ||
            (this.selectedFunding === "low" && project.targetFunding < 100000) ||
            (this.selectedFunding === "medium" &&
              project.targetFunding >= 100000 &&
              project.targetFunding <= 200000) ||
            (this.selectedFunding === "high" && project.targetFunding > 200000);
  
          return matchesSearch && matchesArea && matchesFunding;
        });
      },
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("pt-BR", options);
      },
      formatCurrency(value) {
        return value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .filters {
    margin-bottom: 20px;
  }
  
  .project-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  .project-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .project-area {
    color: #555;
    margin-bottom: 10px;
  }
  
  .details-list {
    font-size: 0.9rem;
    color: #555;
    margin-top: -10px;
  }
  
  .project-objective {
    font-size: 0.95rem;
    margin-top: 10px;
    color: #444;
  }
  
  .divider-margin {
    margin: 2px 0;
  }
  </style>
  