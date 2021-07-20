<template>
  <div class="main-box">
      <h1 class="ms-5">{{title}}</h1>
    <div class="cards-box">
      <Card v-for="card in cards" :key="card.id"
      :title="card.title"
      :name="card.name"
      :original_title="card.original_title"
      :original_name="card.original_name"
      :poster_path="card.poster_path" 
      :original_language="card.original_language" 
      :vote_average="card.vote_average" 
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: 'Main',
    components: {
        Card
    },
    props: {
        cards: Array,
        title: String
    }
}
</script>

<style lang="scss">
  .main-box {
    width: 100%;
    padding-top: 50px;
  }
  .cards-box {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
</style>
