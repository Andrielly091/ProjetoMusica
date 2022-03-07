<template>
  <div class="card" id="telaLogin">
    <div>
      <img class="logoLogin" src="../assets/logo.png" />
    </div>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <div v-if="exibirAlerta" class="alert alert-danger">
            <strong>Erro!</strong><a> E-mail e/ou senha inválido(s)</a>.
          </div>

          <p class="blog-title" align="center">Bem vindo(a) ao Safira !!</p>

          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="senha"
          />
        </div>

        <div class="row">
          <a v-on:click="login" class="btn btn-danger col-11 mx-auto">ENTRAR</a>
        </div>
        <br />
        <div class="row" align="center">
          <router-link to="/recuperacao-senha" class="esqueceu-a-senha"
            >Esqueceu a senha?</router-link
          >
        </div>
        <div class="row">
          <router-link
            to="/cadastro"
            class="btn btn-outline-danger col-11 mx-auto"
            >CADASTRE-SE AGORA</router-link
          >
        </div>
      </form>
    </div>
  </div>
  <div class="voltar">
    <router-link to="../">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="currentColor"
        class="bi bi-bookmark-x-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
        /></svg
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "LoginItem",
  data() {

  },
  methods: {
    login() {
      this.exibirAlerta = false;
      var emailAdmin = "admin@gmail.com";
      var senhaAdmin = "123456";
      if (this.email === emailAdmin && this.senha === senhaAdmin) {
        this.$router.push({ name: "posts" });
      } else {
        this.exibirAlerta = true;
        this.senha = "";
      }
    },
  },
};
</script>

<style>

        body{
            background: #23c5d7;
            font-family: "Roboto",sans-serif;
        }
    .formulario{
        border:1px solid white;
        margin-top:3%;
        width: 350px;
        height: 730px;
        margin-left: 37%;
        background: white;
        border-radius: 2%;
        
    }
    .input1{
            margin-left: 17%;
            margin-top: -15%;
            border-radius:10px;
            padding: 10px 10px;
            border: 1px solid #23c5d7;
        }
        .input2{
            margin-left: 17%;
            margin-top: -7%;
            border-radius:10px;
            padding: 10px 10px;
            border: 1px solid #23c5d7;
        }
        #paragrafo1{
            margin-left: 17%;
            margin-top: 12%;
            color:#23c5d7;
        }
        #paragrafo2{
            margin-left: 17%;
            margin-top: 7%;
            color: #23e3d7;
        }
        .botao2{
            margin-left:18%; 
            margin-top: 10%; 
            padding: 10px 10px;
           color:white;
           background:#23e3d7;
           border: 1px solid  #23e3d7;
           border-radius: 10px;
           width: 62%;
        }
        .botao{
            margin-left:18%; 
            margin-top: 7%;  
           padding: 8px 8px;
           color:white;
           background:#2277d2;
           border: 1px solid  #2277d2;
           border-radius: 10px;
           width: 62%;
        }
        .palavras{
            margin-left: 17%;
            margin-top: 60%;
            color:#23c5d7;
            font-weight: bold;
        }
</style>
