<template>
  <form class="formulario">
    <img src="../assets/logo.png" />
    <p style="margin-top: -8%" id="paragrafo1">Usuário</p>
    <input v-model="email" style="margin-top: 1%" class="input1" type="email" />
    <p style="margin-top: %" id="paragrafo2">Senha</p>
    <input
      v-model="senha"
      style="margin-top: 1%"
      class="input2"
      type="password"
    />
    <p style="margin-top: 2%" class="paragrafo3">Esqueceu sua senha?</p>
    <button
      v-on:click="telaPrincipal()"
      :disabled="!email || !senha"
      style="margin-top: 9%"
      class="botao"
    >
      ENTRAR
    </button>
    <button :disabled="!email || !senha" style="margin-top: 7%" class="botao2">
      CRIAR PERFIL
    </button>
    <hr />
    <br />
    <hr class="hr2" />
    <p v-on:click="ajudar()" style="margin-top: -14%" class="sugestao">
      Precisa <br />
      de ajuda!
    </p>
    <p v-on:click="telaCadastro()" style="margin-top: -5%" class="sugestao2">
      Cadastrar
    </p>
  </form>
</template>

<script>
export default {
  name: "LoginItem",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    telaPrincipal() {
      if (
        this.email == "projeto@discente.ifpe.edu.br" &&
        this.senha == "amigos123"
      ) {
        this.$router.push("/");
      } else {
        alert("Login ou senha inválido(s).");
        this.senha = "";
      }
    },
    telaCadastro() {
      this.$router.push("/cadastro");
    },
    ajudar() {
      alert("Acessar e-mail:  musicjal2022@gmail.com");
    },
  },
};
</script>

<style></style>
