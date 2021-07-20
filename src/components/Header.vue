<template>
  <div class="header-box">
    <div class="top-logo-box"><img src="../assets/Netflix-logo.png" alt=""></div>
    <div class="top-searchbar-box">
        <input type="text" @keyup.enter="searchInput()" v-model="movie" placeholder="Search here :)">
    </div>
  </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {movie:null}
    },
    methods: {
        searchInput () {
            this.$emit ('searchinput', this.movie)
            console.log('ciao');
        }
    }
}
</script>

<style lang="scss">
    .header-box {
        height: 75px;
        background: #1B1B1B;
        display: flex;
        padding: 15px;
        align-items: center;
        justify-content: space-between;
    }

    .top-logo-box img {
        width: 30%;
    }
    .top-searchbar-box {
        background: #000;
        border: 1px solid #FFF;
    }
    .top-searchbar-box input {
        background: #000;
        color: #FFF;
        border: 0;
    }
    .top-searchbar-box button {
        background: #000;
        color: #FFF;
        border: 0 0 0 1px;
    }
</style>
