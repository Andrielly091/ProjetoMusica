<template>
  <div class="card" id="telaLogin">
    <form class="formulario">
      <img src="../assets/logo.png" />
      <p class="palavras">
        Por favor, insira seus <br />
        dados para se cadastrar!
      </p>
      <p id="paragrafo1">Nome:</p>
      <input v-model="nome" class="input1" type="text" />
      <p id="paragrafo2">E-mail:</p>
      <input v-model="email" class="input2" type="email" />
      <p id="paragrafo2">Senha</p>
      <input v-model="senha" class="input2" type="password" />
      <button
        v-on:click="login()"
        :disabled="!nome || !email || !senha"
        style="margin-top: 10%"
        class="botao2"
      >
        CADASTRO
      </button>
      <button v-on:click="voltar()" class="botao">VOLTAR</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CadastrarItem",
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    //console.log(this.name)
    login() {
      if (
        this.nome == "Andrielly" &&
        this.email == "projeto@discente.ifpe.edu.br" &&
        this.senha == "amigos123"
      ) {
        this.$router.push("/");
      }
    },
    voltar() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
