<template>
  <header>
    <div class="information">
      <img class="logo" src="../assets/logo.png" />
      <h2>Music JAL</h2>
   </div>
    <div class="form">
      <input
        type="text"
        v-model="input"
        placeholder="Buscar por Artista ou Banda"
      />
      <button @click="sbmtbtn">buscar</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "CabecalhoItem",

  props: {
    name,
  },
  data: function () {
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
  width: 70px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form {
  margin-right: 50px;
}
.information{
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.information h2{
  margin-left: 35px ;
}
</style>
