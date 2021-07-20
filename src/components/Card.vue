<template>
    <div class="card">
        <div class="movie-pic">
          <img :src="getThumbnail()" alt=""/>
          <div class="movie-desc">
            <h3>{{title}}</h3>
            <h3>{{original_title}}</h3>
            <p>{{original_language}}</p>
            <p>{{vote_average}}</p>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        poster_path: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number
    },
    methods: {
      getThumbnail () {
        return 'https://image.tmdb.org/t/p/original/' + this.poster_path; 
      }
    }
}

</script>

<style lang="scss" scoped>
      .card {
    width: 20%;
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

  }

  .movie-pic img{
    width: 100%;
  }

  .movie-desc {
    margin-top: 25px;
    height: 20%;
    color: #FFF;
    display: none;
  }
</style>