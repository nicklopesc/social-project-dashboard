<template>
  <div ref="chart" style="width: 100%; height: 300px;"></div>  
</template>

<script>

import * as echarts from 'echarts';  

export default {
  props: {
    data: Array,
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();  
    });
  },
  watch: {
    data(newData) {
      this.updateChart(newData); 
    }
  },
  methods: {
    initChart() {
      console.log(this.$refs.chart); 
      if (this.$refs.chart) {
        this.chart = echarts.init(this.$refs.chart);  
        this.updateChart(this.data); 
      }
    },
    updateChart(data) {
      const options = {
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: data.map((item, index) => ({ value: item, name: `Categoria ${index + 1}` })),
          },
        ],
      };
      this.chart.setOption(options);  
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();  
    }
  },
};
</script>

<style scoped>

</style>
