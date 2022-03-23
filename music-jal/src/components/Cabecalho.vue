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
      <button v-on:click="telaAudios()">Pesquisar</button>
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
    telaAudios() {
      this.$router.push("/audios");
    },
  },
};
</script>

<style></style>
