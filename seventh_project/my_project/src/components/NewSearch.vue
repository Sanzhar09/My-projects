
<style scoped>
    .search {
        height: 200px;
        background-image: url('../assets/background.png');
        background-position: center;
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }
    .search_content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .search_content_input {
        width: 566px;
        height: 40px;
        padding-left: 25px;
    }
</style>
<template>
    <div class="search">
        <div class="search_content">
            <input class="search_content_input"
             type="text"
             placeholder="Поиск"
            />
            <img src="../assets/search.png" alt="">
        </div>
    </div>
</template>