<style scoped>
li {
    list-style: none;
}
.footer {
    background: #212225;
    min-height: 338px;
    padding: 9px 176px 0 162px;
}
.footer_top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 25px;
}
.footer_bottom {
    padding-top: 18px;
   border-top:1px solid #4F5864;
   display: flex;
   justify-content: space-between;
}
.footer_bottom_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #4F5864;
}
.pictures_content_first {
    margin-bottom: 31.5px;
}
.links {
    display: flex;
    gap: 55px;
}
.links_info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.info_title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    color: #FFFFFF;
}

.links_info_content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #A0A7AF;
}
.link_apps:not(:last-child){
    margin-right: 16px;
}
.img_apps {
    border-radius: 50px;
}
</style>
<template>
    <div class="footer">
        <div class="footer_top">
            <div class="apps">
                <ul class="pictures">
                    <li class="pictures_content_first"><img src="./images/Shympic.svg" alt=""></li>
                    <li class="pictures_content"><a href=""><img src="./images/Googleplay.jpg" alt=""></a></li>
                    <li class="pictures_content"><a href=""><img src="./images/Appstore.jpg" alt=""></a></li>
                </ul>
            </div>
            <div class="links">
                <div class="links_info"><h3 class="info_title">Курорт</h3>
                  <li class="links_info_content">Отели</li>
                  <li class="links_info_content">Рестораны</li>
                  <li class="links_info_content">Развлечения</li>
                  <li class="links_info_content">Магазин</li>
                  <li class="links_info_content">Детям</li>
                </div>
                <div class="links_info"><h3 class="info_title">Катания</h3>
                  <li class="links_info_content">Билеты</li>
                  <li class="links_info_content">Прокат</li>
                  <li class="links_info_content">Школа</li>
                  <li class="links_info_content">Паркинг</li>
                </div>
                <div class="links_info"><h3 class="info_title">Инфо</h3>
                  <li class="links_info_content">Погода</li>
                  <li class="links_info_content">Правила</li>
                  <li class="links_info_content">Новости</li>
                  <li class="links_info_content">Как добраться</li>
                  <li class="links_info_content">Тех. поддержка</li>
                </div>
                <div class="links_info"><h3 class="info_title">Контакты</h3>
                  <li class="links_info_content">
                    <a href="" class="link_apps"><img class="img_apps" src="./images/facebook.svg" alt=""></a>
                    <a href="" class="link_apps"><img class="img_apps" src="./images/youtube.svg" alt=""></a>
                    <a href="" class="link_apps"><img class="img_apps" src="./images/instagram.svg" alt=""></a>
                    <a href="" class="link_apps"><img class="img_apps" src="./images/vk.svg" alt=""></a>
                  </li>
                  <li class="links_info_content">info@shymbulak.com</li>
                  <li class="links_info_content">+7 727 331 77 77</li>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <span class="footer_bottom_text">
                © 2022 ТОО «Chimbulak Development»
            </span>
            <span class="footer_bottom_text">
                created by YOKO
            </span>
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