<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" >
        
          <v-card-title>
            <span class="headline">Cadastro de Projeto</span>
          </v-card-title>

          <v-form @submit.prevent="submitForm" ref="form">
           
            
              <v-card class="informacoes-projetos mb-4"><p class="paragrafo-info">Informações do Projeto</p></v-card>
              <v-divider></v-divider>

              <v-text-field
                v-model="form.title"
                label="Nome do Projeto"
                outlined
                required
                :rules="[rules.required]"
                
              ></v-text-field>

              <v-textarea
                v-model="form.description"
                label="Descrição"
                outlined
                required
                :rules="[rules.required]"
                
              ></v-textarea>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="form.area"
                    :items="areas"
                    label="Área"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.creationDate"
                    label="Data de Criação"
                    type="date"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.targetFunding"
                    label="Meta de Financiamento"
                    type="number"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.image"
                    label="Imagem do Projeto (URL)"
                    type="url"
                    outlined
                    placeholder="URL da imagem"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card class="informacoes-projetos mb-4"><p class="paragrafo-info">Dados Pessoais do Autor</p></v-card>
              

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.projectAuthor"
                    label="Nome do Autor"
                    type="text"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.phone"
                    label="Telefone"
                    type="text"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    type="email"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.cnpj"
                    label="CNPJ"
                    type="text"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card class="informacoes-projetos mb-4"><p class="paragrafo-info">Endereço</p></v-card>
              

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressZipCode"
                    label="CEP"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressStreet"
                    label="Rua"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressNumber"
                    label="Número"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressComplement"
                    label="Complemento"
                    outlined
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressNeighborhood"
                    label="Bairro"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.addressCity"
                    label="Cidade"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="form.addressState"
                    :items="states"
                    label="Estado"
                    outlined
                    required
                    :rules="[rules.required]"
                    
                  ></v-select>
                </v-col>
              </v-row>


            <v-card-actions>
              <v-btn type="submit" color="primary" :loading="loading" block>
                Cadastrar Projeto
              </v-btn>
            </v-card-actions>
          </v-form>
       
      </v-col>
    </v-row>
  </v-container>
</template>




<script>
export default {
  data() {
    return {
      loading: false,
      areas: ["Energia", "Saúde", "Tecnologia", "Agronegócio", "Educação", "Cultura"],
      states: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
      form: {
        title: "",
        description: "",
        area: "",
        creationDate: "",
        targetFunding: "",
        image: "",
        cnpj: "",
        projectAuthor: "",
        phone: "",
        email: "",
        addressStreet: "",
        addressNumber: "",
        addressComplement: "",
        addressNeighborhood: "",
        addressCity: "",
        addressState: "",
        addressZipCode: "",
      },
      rules: {
        required: value => !!value || "Este campo é obrigatório",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log("Dados do projeto:", this.form);
        setTimeout(() => {
          this.loading = false;
          alert("Projeto cadastrado com sucesso!");
          this.resetForm();
        }, 2000);
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    },
    resetForm() {
      this.form = {
        title: "",
        description: "",
        area: "",
        creationDate: "",
        targetFunding: "",
        image: "",
        cnpj: "",
        projectAuthor: "",
        phone: "",
        email: "",
        addressStreet: "",
        addressNumber: "",
        addressComplement: "",
        addressNeighborhood: "",
        addressCity: "",
        addressState: "",
        addressZipCode: "",
      };
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.v-container {
  padding-top: 10px;
}

.v-card {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-weight: bold;
}

.informacoes-projetos {
  padding: 4px;
  background-color: #042940;
}

.paragrafo-info {
  font-size: 18px;
  margin-top: 10px;  
  color: #f7f7f7;
  margin-left: 10px;
}

/* .v-row {
  margin-bottom: -28px;
}

.v-col {
  padding-top: 2px;  
} */

.v-text-field,
.v-select,
.v-textarea {
  margin-bottom: 1px;
}



</style>
