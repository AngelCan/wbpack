<template> 
  <div id="app">
    <img src="./assets/logo-instituto-tecnologico-de-merida.png">
    <h1>{{ msg }}</h1>
    <h2>Configuracion de:</h2>
    <ul>
      
      <li><router-link to = "/home">Home</router-link></li>
      <li><router-link to = "/Active_directory">Active_directory</router-link></li>
      <li><router-link to = "/DHCP_Server_service">DHCP_Server_service</router-link></li>
      <li><router-link to = "/Database_Server">Database_Server</router-link></li>
      <li><router-link to = "/Web_server">Web_server</router-link></li>
      <li><router-link to = "/Print_server">Print_server</router-link></li>

    </ul>
    <router-view> </router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Manuales de taller de sistemas operativos'
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    background-color: #11748C;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
