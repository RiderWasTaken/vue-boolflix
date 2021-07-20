<template>
    <div class="card">
        <div class="movie-pic">
          <img v-if="poster_path" :src="getThumbnail()" alt=""/>
          <img v-if="!poster_path" src="../assets/stockImage.jpg" alt=""/>  
          <div class="movie-desc">
            <h4>{{title || name}}</h4>
            <h6>{{original_title || original_name}}</h6>
            <p><flag :iso="countryFlag"/></p>
            <div>
              <i :class="{fas: starsNum >= 1, far: starsNum < 1}" class="fa-star"></i>
              <i :class="{fas: starsNum >= 2, far: starsNum < 2}" class="fa-star"></i>
              <i :class="{fas: starsNum >= 3, far: starsNum < 3}" class="fa-star"></i>
              <i :class="{fas: starsNum >= 4, far: starsNum < 4}" class="fa-star"></i>
              <i :class="{fas: starsNum == 5, far: starsNum < 5}" class="fa-star"></i>
            </div>
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
      },
      starsNum () {
        return Math.round(this.vote_average/2);
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