<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ formattedValue }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],  // Aceita tanto String quanto Number
  },
  computed: {
    // Computed property para garantir que o valor será formatado corretamente
    formattedValue() {
      // Se o valor for um número, você pode formatá-lo, caso necessário
      return typeof this.value === 'number' ? this.value.toLocaleString() : this.value;
    }
  }
};
</script>

<style scoped>

</style>
