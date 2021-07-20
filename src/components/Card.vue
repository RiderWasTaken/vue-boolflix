<template>
    <div class="card">
        <div class="movie-pic">
          <img v-if="poster_path" :src="getThumbnail()" alt=""/>
          <img v-if="!poster_path" src="../assets/stockImage.jpg" alt=""/>  
          <div class="movie-desc">
            <h3>{{title || name}}</h3>
            <h5>{{original_title || original_name}}</h5>
            <p><flag :iso="countryFlag"/></p>
            <p>{{vote_average}}</p>
          </div>
        </div>
      </div>
</template>

<script>
  const languages = {
    en: 'us',
    hi: 'in',
    zh: 'cn',
    ko: 'kr',
    ja: 'jp',
  };
export default {
    name: 'Card',
    props: {
        poster_path: String,
        title: String,
        name: String,
        original_title: String,
        original_name: String,
        original_language: String,
        vote_average: Number
    },
    computed: {
      countryFlag () {
        return languages[this.original_language] ? languages[this.original_language] : this.original_language;
      }
    },
    methods: {
      SearchMoviea () {
        return
      },
      getThumbnail () {
        return 'https://image.tmdb.org/t/p/w500/' + this.poster_path; 
      }
    }
}
</script>

<style lang="scss" scoped>
      .card {
    width: 10%;
    background: #000000;
    height: 75%;
    position: relative;
  }

  .card:hover {
    img {
      opacity: 0.1;
    }
    .movie-desc {
      display: block;
    }
  }
  .movie-desc {
    position: absolute;
    top: 0;
    color: #FFF;
    display: none;
  }

  .movie-pic img{
    width: 100%;
  }

  .flag-icon {
    font-size: 30px;
  }
</style>