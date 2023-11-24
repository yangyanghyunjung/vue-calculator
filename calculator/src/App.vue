<template>
<CalculatorMachine/>
</template>

<script>
import CalculatorMachine from './components/CalculatorMachine.vue'

export default {
  name: 'App',
  components: {
    CalculatorMachine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
