<template>
  <p style="color:white;font-size:35px; margin-left:4%; margin-top:2%;">Categorias</p>
  <main>
    <div class="sidBar">
      <div class="btnCategory" v-for="categoria in categorias" :key="categoria">
        <p>{{ categoria }}</p>
      </div>
      <h1>Álbuns</h1>
    </div>
    <div class="cards">
      <div class="card" v-for="a in albuns" :key="a.artistId">
        <h2 style="color:white;">{{ a.artistName }}</h2>
        <p style="color:white; text-align:center;">{{ a.collectionName }}</p>
        <img class="imgCard" alt="thumb" v-bind:src=" a.artworkUrl100 " />
      </div>
    </div>
  </main>
</template>

<script>
import { dataAlbum, arrCategorias } from "../services/data";

// console.log("dataAlbum", dataAlbum);

export default {
  name: "DisplayItem",
  data() {
    return {
      categorias: arrCategorias,
      albuns: dataAlbum,
    };
  },
  // mounted() {
  //   const response = dataAlbum();
  //   console.log('response', response);
  //   // this.albuns => { [...response]};
  //   console.log('this.albuns', this.albuns);
  // }
};
</script>

<style>
main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  
}
.btnCategory {
  width: 170px;
  border: solid 1px;
  border-radius: 7px;
  padding: 6px;
  margin-top: 15px;
  background:white;
  margin-left:26%;
  text-align:center;
  
}
.btnCategory p:hover {
  width: 100%;
  color: #fff;
}
.btnCategory:hover {
  background-color: #1ea0c0;
}
.cards {
  width: 80%;
  display: flex;
  flex-flow: wrap;
  
}
.card {
  width: 170px;
  max-height: 270px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:8%;
  margin-left:5%;
}

.imgCard {
  width: 170px;
}
p{
  margin-left:3px;
}
h1{
  font-size:80px;
  margin-top:-350%;
  margin-left:310%;
  color:white;
}

</style>
