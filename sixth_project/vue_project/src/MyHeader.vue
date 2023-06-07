<style scoped>

li {
    list-style: none;
}
.header {
    padding-right: 32px;
}
.list { 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap:32px;
    
}
.items {
    height: 56px;
    display: flex;
    align-items: center;
}
.itemFirst {
    display: flex;
    gap: 32px;
    margin-right: 550px;
}
.itemSecond {
    display: flex;
    gap: 32px;
}
.itemsWeather {
    border: 1px solid #DAE9F4;
    backdrop-filter: blur(2px);
    border-radius: 16px;
    padding: 0 20px 0px 10px;
}
.itemLang {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
    color: #6D7784;
    border: 1px solid #DAE9F4;
    border-radius: 16px;
    padding: 15px 12.5px;
}
.cameraPic {
    margin-right: 15px;
}

.weatherPic {
    margin-right: 15px;
}
.itemsBorder {
    border: 1px solid #DAE9F4;
    padding: 0px 24px 0px 22px;
    border-radius: 16px;
}
.itemCamera {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 21px;
    color: #6D7784;
    line-height: 25px;
    white-space: nowrap;
}
.cameraPic {
    width: 27px;
    height: 27px;
}
.itemSummer {
    background: linear-gradient(118.11deg, #FFD710 -72.69%, #F99909 154.67%);
    box-shadow: 0px 8.88889px 10.6667px rgba(230, 150, 66, 0.15);
    border-radius: 12px;
    padding: 10px 13px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #fff;
    margin-right: 12px;
}
.itemWinter {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #A0A7AF;
}
</style>

<template>
    <div class="header">
        <ul class="list">
             <div class="itemFirst">
                <li class=""> <img src="./images/shymlogo.svg" alt=""></li>
                <li class="items itemsBorder"> <img class="cameraPic" src="./images/cameralogo.svg" alt=""><span class="itemCamera" >LIVE</span></li>
                <li class="items itemsBorder"><img class="weatherPic" src="./images/weatherlogo.svg" alt=""> <span class="itemCamera" >12 C</span></li>
                <li class="items itemsWeather"> <span class="itemSummer" >Лето</span> <span class="itemWinter">Зима</span></li>
                <li class="items itemSearch"><img src="./images/Search.svg" alt=""></li>
            </div>
            <div class="itemSecond">
                <li class="items"><span class="itemLang">RU</span></li>
                <li class="items"><img src="./images/Profile.svg" alt=""></li>
                <li class="items"><img src="./images/Saved.svg" alt=""></li>
                <li class="items"><img src="./images/Cart.svg" alt=""></li>
            </div>
        </ul>
    </div>
  </template>

  <script>
    export default {
        data() {
            return {
            }
        }
    }
</script>