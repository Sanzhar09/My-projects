<style scoped>

.catalog_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
}
</style>

<template>
    <div class="catalog_list">
      <NewCatalogItem
        v-for="picture in pictures"
        :key="picture.id"
        :picture_data="picture"
      />
    </div>
  </template>
  
  <script>
  import NewCatalogItem from './NewCatalogItem.vue'
  
  export default {
    name: 'newCatalog',
    components: {
      NewCatalogItem,
    },
    props: {},
    data() {
      return {
        pictures: [
          {
            image: 'pic1.png',
            id: 1,
            name: 'Pic 1',
            price: 100,
          },
          {
            image: 'pic2.png',
            id: 2,
            name: 'Pic 2',
            price: 102,
          },
          {
            image: 'pic3.png',
            id: 3,
            name: 'Pic 3',
            price: 123,
          },
          {
            image: 'pic4.png',
            id: 4,
            name: 'Pic 4',
            price: 1011,
          },
          {
            image: 'pic5.png',
            id: 5,
            name: 'Pic 5',
            price: 200,
          },
          {
            image: 'pic6.png',
            id: 6,
            name: 'Pic 6',
            price: 400,
          },
        ],
      }
    },
    methods: {
    },
  }
  </script>
  