<style scoped>
.navbar {
    border-right: 2px solid #DAE9F4;
    width: 300px;
    padding-top: 20px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
li {
    list-style: none;
}
a {
    margin: 0;
}
.navLogo {
 margin-bottom: 32px; 
}
.navList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
}
.navItems {
    display: flex;
    align-items: center;
    gap: 12px;
}
.navText {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #4F5864;
}
.navInfo {
    background: #75B6F2;
    box-shadow: 0px 8.88889px 10.6667px rgba(117, 182, 242, 0.15);
    border-radius: 12px;
    max-width: 136px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 22px;
    margin-left: 31px;
    margin-top: 24px;
}
.navInfoText {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;

}


</style>


<template>
    <div class="navbar">
        <div class="navLogo">
            <img src="./images/Burger.svg" alt="">
        </div>
        <div>
            <ul class="navList">
                <li class="navItems"><img src="./images/Main.svg" alt=""><span class="navText">Главная</span></li>
                <li class="navItems"><img src="./images/Tickets.svg" alt=""><span class="navText">Билеты</span></li>
                <li class="navItems"><img src="./images/Prokat.svg" alt=""><span class="navText">Прокат</span></li>
                <li class="navItems"><img src="./images/School.svg" alt=""><span class="navText">Школа</span></li>
                <li class="navItems"><img src="./images/Star.svg" alt=""><span class="navText">Развлечения</span></li>
                <li class="navItems"><img src="./images/Hotels.svg" alt=""><span class="navText">Отели</span></li>
                <li class="navItems"><img src="./images/Restaurants.svg" alt=""><span class="navText">Рестораны</span></li>
                <li class="navItems"><img src="./images/Shop.svg" alt=""><span class="navText">Магазин</span></li>
                <li class="navItems"><img src="./images/Children.svg" alt=""><span class="navText">Детям</span></li>
                <li class="navItems"><img src="./images/Parking.svg" alt=""><span class="navText">Паркинг</span></li>
            </ul>
            <a class="navInfo"> <img src="./images/Info.svg" alt=""><span class="navInfoText">Инфо</span></a>
        </div>
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