/* eslint-disable no-unused-vars */

<template>
  <div>
    <h1>Musicas</h1>
    <div class="cards">
      <div class="card" v-for="d in data" :key="d.artistId">
        
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getMusics } from "../services/musicApi.js"
// eslint-disable-next-line no-unused-vars
import { data, arrCategorias } from "../services/dataMusics";


export default {
  name: "AudiosItem",
  data() {
    return {
      data: data,
    };
  },

  async mounted() {
    const result = await getMusics(31530843);
    console.log(result)
    
  },

  methods: {
    sbmtbtn() {
      console.log(this.input);
    },
  },
};
</script>

<style>
 
</style>