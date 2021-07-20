<template>
  <div id="app">
    <Header @searchinput="searchInput($event)"/>
    <Main class="text-light" title="Movies" :cards="cards"/>
    <Main class="text-light" title="TV series" :cards="cardstv"/>
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
          cards: [],
          cardstv: []
      }
  },
  mounted() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=08bc2842c191fdd892778763300bf76e').then((result) => {
            this.cards = result.data.results;
        });
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=08bc2842c191fdd892778763300bf76e').then((result) => {
            this.cardstv = result.data.results;
        });
  },
    methods: {
      searchInput (movieName) {
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: '08bc2842c191fdd892778763300bf76e',
            query: movieName
          }
        }).then((result) => {
            this.cards = result.data.results;
        }),
        axios.get('https://api.themoviedb.org/3/search/tv',{
          params: {
            api_key: '08bc2842c191fdd892778763300bf76e',
            query: movieName
          }
        }).then((result) => {
            this.cardstv = result.data.results;
        })
      }
    }
}
</script>
