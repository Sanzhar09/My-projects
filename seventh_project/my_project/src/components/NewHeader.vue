<style scoped>

a {
    text-decoration: none;
    color: #FFF;
}
.header {
    background-color: #000;
    height: 100px;
    width: 100%;
    padding-top: 40px;
}
.header_content {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.fav {
    display: flex;
    align-items: center;
    gap: 10px;
}
.fav_text {
    color: #FFF;
}
</style>



<template>
    <div class="header">
        <div class="header_content">
            <div>
                <img src="../assets/myLogo.png" alt="">
            </div>
            <div class="fav">
                <img src="../assets/heartFav.svg" alt="">
                <span class="fav_text">
                    <a href="/favor">
                        Избранное
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>