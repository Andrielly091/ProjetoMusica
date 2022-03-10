<template>
  <div class="card" id="telaLogin">
    <form class="formulario">
      <img src="../assets/logo.png" />
      <p class="palavras">
        Por favor, insira seus <br />
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
  margin-top: 320%;
  width: 400px;
  height: 800%;
  margin-left: 800%;
  background: white;
  border-radius: 2%;
}
.input1 {
  margin-left: 12%;
  margin-top: 1%;
  border-radius: 10px;
  padding: 10px 10px;
  border: 1px solid #23c5d7;
  width:70%;
}
.input2 {
  margin-left: 12%;
  margin-top: 1%;
  border-radius: 10px;
  padding: 10px 10px;
  border: 1px solid #23c5d7;
  width:70%;
}
#paragrafo1 {
  margin-left: 12%;
  margin-top: 6%;
  color: #23c5d7;
 
}
#paragrafo2 {
  margin-left: 12%;
  margin-top: 7%;
  color: #23e3d7;
}
.botao2 {
  margin-left: 18%;
  margin-top: 6%;
  padding: 10px 10px;
  color: white;
  background: #23e3d7;
  border: 1px solid #23e3d7;
  border-radius: 10px;
  width: 62%;
}
.botao {
  margin-left: 18%;
  margin-top: 5%;
  padding: 8px 8px;
  color: white;
  background: #2277d2;
  border: 1px solid #2277d2;
  border-radius: 10px;
  width: 62%;
  margin-bottom:40px;
}
.palavras {
  margin-left: 0%;
  margin-top: -9%;
  color: #23c5d7;
  font-weight: bold;
  text-align:center;
}
img{
  height: 70%;
  width:60%;
  margin-left: 19%;
  margin-top: 3%;
}
</style>
