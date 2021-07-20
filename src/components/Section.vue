<template>
  <div class="main-box">
    <div class="cards-box">
      <Card v-for="card in cards" :key="card.id"
      :title="card.title"
      :original_title="card.original_title"
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
        cards: Array
    }
}
</script>

<style lang="scss">
  .main-box {
    width: 100%;
    height: 90vh;
    background: #1B1B2A;
    padding-top: 150px;
  }
  .cards-box {
    width: 95%;
    margin: 0 auto;
    display: flex;
  }
</style>
