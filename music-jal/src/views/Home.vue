<template>
  <div>
    <Cabecalho />
    <Display />
  </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Display from "../components/Display";

export default {
  name: "HomeI",
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

<style></style>
