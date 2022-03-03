<template>
  <div class="card" id="telaLogin">
    <form class="formulario">
      <img src="music logo Branco.png" />
      <p class="palavras">
        Por favor insira seus <br />
        dados para se cadastrar!
      </p>
      <p id="paragrafo1">Nome:</p>
      <input class="input1" type="text" />
      <p id="paragrafo2">E-mail:</p>
      <input class="input2" type="email" />
      <p id="paragrafo2">Senha</p>
      <input class="input2" type="password" />
      <button class="botao2">CADASTRO</button>
      <button class="botao">VOLTAR</button>
    </form>
  </div>
  
</template>

<script>
export default {
  name: "CadastroItem",
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    //console.log(this.name)
    
  }
};
</script>

<style scoped>
body {
  background: #23c5d7;
  font-family: "Roboto", sans-serif;
}
.formulario {
  border: 1px solid white;
  margin-top: 3%;
  width: 350px;
  height: 730px;
  margin-left: 37%;
  background: white;
  border-radius: 2%;
}
.input1 {
  margin-left: 17%;
  margin-top: -15%;
  border-radius: 10px;
  padding: 10px 10px;
  border: 1px solid #23c5d7;
}
.input2 {
  margin-left: 17%;
  margin-top: -7%;
  border-radius: 10px;
  padding: 10px 10px;
  border: 1px solid #23c5d7;
}
#paragrafo1 {
  margin-left: 17%;
  margin-top: 12%;
  color: #23c5d7;
}
#paragrafo2 {
  margin-left: 17%;
  margin-top: 7%;
  color: #23e3d7;
}
.botao2 {
  margin-left: 18%;
  margin-top: 10%;
  padding: 10px 10px;
  color: white;
  background: #23e3d7;
  border: 1px solid #23e3d7;
  border-radius: 10px;
  width: 62%;
}
.botao {
  margin-left: 18%;
  margin-top: 7%;
  padding: 8px 8px;
  color: white;
  background: #2277d2;
  border: 1px solid #2277d2;
  border-radius: 10px;
  width: 62%;
}
.palavras {
  margin-left: 17%;
  margin-top: 60%;
  color: #23c5d7;
  font-weight: bold;
}
</style>
