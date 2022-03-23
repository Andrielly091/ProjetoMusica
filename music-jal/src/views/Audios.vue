<template>
  <div>
    <h1>Musicas</h1>
    <div class="container">
      <div v-for="d in data" :key="d.artistId">
        <p>{{ d.artistId }}</p>
        <p>{{ d.trackCensoredName }}</p>
        <p>{{ d.previewUrl }}</p>
        <audio controls>
          <source v-bind:src="d.previewUrl" />
          Seu navegador não suporta a tag de áudio.
        </audio>
        <!-- <av-bars audio-src= {{ d.previewUrl }}> </av-bars> -->
      </div>
    </div>
  </div>
</template>

<script>
// import getMusics from "../services/musicApi";
import { data } from "../services/musicsData";

export default {
  name: "AudiosItem",
  data() {
    return {
      data: data,
    };
  },

  async mounted() {
    console.log(data);
    // const fetchMusic = await getMusics(31530843);
    // console.log(fetchMusic);
  },

  methods: {
    sbmtbtn() {
      console.log(this.input);
    },
  },
};
</script>

<style></style>
