<template>
  <div id="app">
    <Header/>
    <Main :cards="cards"/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import Main from '@/components/Section.vue';
export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
      return {
          cards: []
      }
  },
    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=08bc2842c191fdd892778763300bf76e&query=ritorno+al+futuro').then((result) => {
            this.cards = result.data.results;
        })
    }
}
</script>

<style lang="scss">
    // @import "./style/main.scss";
</style>
