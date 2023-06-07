<template>
    <div class="favorite">
      <img :src=" require( '../assets/' + favorite_data.image) " alt="">
      <div>
        <h3>{{ favorite_data.name }}</h3>
        <p>{{ favorite_data.price }}</p>
        <button @click="removeFromFavorites">Удалить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewFavItem',
    props: {
      favorite_data: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    methods: {
      removeFromFavorites() {
        this.$emit('removeFavorite', this.favorite_data.id);
      },
    },
  };
  </script>