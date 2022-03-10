<template>
  <header>
    <div class="information">
    <button>VOLTAR</button>
      <img class="logo" src="../assets/logo.png" />
      <p>Andrielly</p>
    </div>
    <div class="form">
      <input
        type="text"
        v-model="input"
        placeholder="Buscar por Artista ou Banda"
      />
      <button @click="sbmtbtn">Pesquisar</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "CabecalhoI",
  data() {
    return {
      input: "",
    };
  },

  methods: {
    sbmtbtn() {
      console.log(this.input);
    },
  },
};
</script>

<style>
.logo {
  width:75%;
  height:80px;

}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:white;
}
.form {
  margin-right: 50px;
}
.information {
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.information h2 {
  margin-left: 35px;
}
button{
  margin-left:12%;
  padding: 6px 6px;
  border:3px solid #23c5d7;
  background:#23c5d7;
  color:white;
  border-radius:3px;
  
}
p{
  margin-left:15%;
 
}
input{
  margin-left:-65%;
  padding:7px 7px;
 width:110%;
}
</style>
