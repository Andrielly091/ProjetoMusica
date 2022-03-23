
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

</style>
