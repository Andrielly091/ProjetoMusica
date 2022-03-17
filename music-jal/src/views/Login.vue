<template>
  <form class="formulario">
         <img src="../assets/logo.png" />
        <p style="margin-top: -8%;" id="paragrafo1">Usuário</p>
        <input style="margin-top: 1%;" class="input1" type="email">
        <p style="margin-top: %;" id="paragrafo2">Senha</p>
        <input style="margin-top: 1%;" class="input2" type="password">
        <p style="margin-top: 2%;" class="paragrafo3">Esqueceu sua senha?</p>
        <button style="margin-top: 9%;" class="botao">ENTRAR</button>
        <button style="margin-top: 7%;" class="botao2">CRIAR PERFIL</button>
      <hr><br>
      <hr class="hr2">
      <p style="margin-top: -14%;" class="sugestao">Precisa <br> de ajuda!</p>
      <p style="margin-top: -5%;" class="sugestao2">Cadastrar</p>

    </form>
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
        }
        .formulario{
  border: 1px solid white;
  margin-top: 5%;
  width: 400px;
  height: 800px;
  margin-left: 35%;
  background: white;
  border-radius: 2%;
        }
        .input1{
            margin-left: 17%;
            border-radius:5px;
            padding: 12px 12px;
            border: 1px solid #23c5d7;
            width:60%;
        }
        .input2{
          margin-top:450%;
            margin-left: 17%;
            border-radius:5px;
            padding: 12px 12px;
            border: 1px solid #23c5d7;
            width:60%;
        }
        #paragrafo1{
            margin-left: 17%;
            margin-top: 52%;
            color:#23c5d7;
        }
        #paragrafo2{
            margin-left: 17%;
            margin-top: 7%;
            color: #23c3d7;
        }
        .paragrafo3{
           margin-left:55%; 
           font-size: 12px;
           margin-top: 1%;
           color:#23c5d7;
           cursor:pointer;
        }
        .botao{
            margin-left:31%; 
            margin-top: 6%;  
           padding: 8px 8px;
           color:white;
           background:#23c5d7;
           border: 1px solid  #23c5d7;
           border-radius: 3px;
           width: 32%;
        }
        .botao2{
            margin-left:37%; 
            margin-top: 5%; 
            padding: 8px 8px;
           color:white;
           background:#2277d2;
           border: 1px solid  #2277d2;
           border-radius: 3px;
           font-family:"Roboto",sans-serif;
           margin-bottom:40px;
        }
      
        hr{
            margin-top: 0%;
            width: 75%;
            border:1px solid lightgray;
            margin-left:12%;
        }
        .hr2{
          width:0%;
            height:75px;
            margin-left:48%;

                  }

        .sugestao{
            margin-top: -17%;
            margin-left: 17%;
            color:#23c5d7;
            cursor:pointer;
        }
        .sugestao2{
            margin-top: -13%;
            margin-left: 58%;
            color: #23c5d7;
             cursor:pointer;
        }
        img{
            height:350px;
            width:75%;
            margin-left: 11%;
            margin-top: 0%;
        }
        
</style>
