<template>
    <NewHeader/>
    <NewSearch/>
    <div>
    <h2>Избранное</h2>
    <div v-if="favorites.length > 0">
      <div v-for="item in favorites" :key="item.id">
        <NewFavItem :favorite_data="item" @removeFavorite="removeFavorite"></NewFavItem>
      </div>
    </div>
    <div v-else>
      <p>В избранном пока нет товаров</p>
    </div>
  </div>
</template>

<script>
import NewFavItem from './NewFavItem.vue';
import NewHeader from './NewHeader.vue';
import NewSearch from './NewSearch.vue';

export default {
  name: 'NewFav',
  components: {
    NewFavItem,
    NewHeader,
    NewSearch
  },
  data() {
    return {
      favorites: [],
    };
  },
  mounted() {
    const fav = JSON.parse(localStorage.getItem('favorite'));
    if (fav !== null) {
      this.favorites = fav;
    }
  },
  methods: {
    removeFavorite(id) {
      const index = this.favorites.findIndex((f) => f.id === id);
      this.favorites.splice(index, 1);
      localStorage.setItem('favorite', JSON.stringify(this.favorites));
    },
  },
};
</script>