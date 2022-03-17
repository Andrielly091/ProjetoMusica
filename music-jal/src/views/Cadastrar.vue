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
      <button v-on:click="login()" :disabled="!nome || !email || !senha" style="margin-top:10%" class="botao2">CADASTRO</button>
      <button v-on:click="voltar()" class="botao">VOLTAR</button>
    </form>
  </div>
  
</template>

<script>

export default {
  name: "CadastrarItem",
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
    };
  },
  methods: {
    //console.log(this.name)
    login(){
      if(this.nome == 'Andrielly' && this.email == 'projeto@discente.ifpe.edu.br' && this.senha =='amigos123')
      {
        this.$router.push('/');
    }
    },
    voltar(){
      this.$router.push('/login');
    }
    },
};
</script>

<style scoped>
body {
  background: #23c5d7;
  font-family: "Roboto", sans-serif;
}
.formulario {
  border: 1px solid white;
  margin-top: 140%;
  width: 400px;
  height: 800%;
  margin-left: 740%;
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
  color: #23e5d7;
 
}
#paragrafo2 {
  margin-left: 12%;
  margin-top: 7%;
  color: #23e3d7;
}
.botao2 {
  margin-left: 18%;
  margin-top: -8%;
  padding: 10px 10px;
  color: white;
  background: #23e3d7;
  border: 1px solid #23e3d7;
  border-radius: 10px;
  width: 62%;
}
.botao {
  margin-left: 18%;
  margin-top:-35%;
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
