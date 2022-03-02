<template>
  <div>
    <cabecalho name="junior" />
    <display />
  </div>
</template>

<script>
import Cabecalho from "./components/Cabecalho.vue";
import Display from "./components/Display.vue";

export default {
  components: { Cabecalho, Display },
  data: function () {
    return {
      category: [],
    };
  },
  async mounted() {
    const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=jorge&matheus&attribute=allArtistTerm`;

    const APIResponse = await fetch(getAlbumsAPI);

    const { results } = await APIResponse.json();

    console.log(results);

    const response = results.map(
      ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      }) => ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      })
    );
    return response;
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  color: #1ea0c0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
}
</style>
