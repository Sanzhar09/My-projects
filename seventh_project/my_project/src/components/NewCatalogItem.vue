<style scoped>
.catalog {
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 5px;
}
.catalog_add {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
}
.catalog_btn_fav:focus {

    fill:red;
}
.btn_add_fav {
    border-radius: 15px;
    background-color: transparent;
    border: 1px solid red;
}
</style>
<template>
    <div class="catalog">
       <img :src=" require( '../assets/' + picture_data.image) " alt="">
            <div class="catalog_add">
                <img class="catalog_btn_fav" src="../assets/heartFav.svg" alt="" @click="addToFav(picture_data)">
                <button class="btn_add_fav" @click="addToFav(picture_data)" >Добавить  в Избранное</button>
            </div>
    </div>
</template>

<script>
export default {
    name:"NewCatalogItem",
    props: {
        picture_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
            return{
            
            }
    },
    methods: {
        sendDataToParent() {
            this.$emit('sendId',this.picture_data.id)
        },
        addToFav(item) {
      let favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
      if (!favoriteItems.some((i) => i.id === item.id)) {
        favoriteItems.push(item);
        localStorage.setItem("favorite", JSON.stringify(favoriteItems));
      }
        }
        
    }
     
}

</script>