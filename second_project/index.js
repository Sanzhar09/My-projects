const buttonElem = document.querySelector('.order_submit');
const modalElem = document.querySelector('.modaltwo');
const buttonNav = document.querySelectorAll('.navigation_button');
const catalogContent = document.querySelectorAll('.catalog_wrapper');
const catalogBurger = document.querySelector('.catalog_wrapper_burger');
const catalogSnack = document.querySelector('.catalog_wrapper_snack');
const catalogHotdog = document.querySelector('.catalog_wrapper_hotdog');
const catalogCombo = document.querySelector('.catalog_wrapper_combo');
const catalogShaurma = document.querySelector('.catalog_wrapper_shaurma');
const closeBtn = document.querySelector('.modal_close');
const orderList = document.querySelector('.order_wrap-list');
const closeOrder = document.querySelector('.order_close');
const deliveryYour = document.querySelector('.delivery-your');
const delivery = document.querySelector('.delivery');
const fielsetDel = document.querySelector('.fieldset_delivery');
const fielsetDelYour = document.querySelector('.fieldset_delivery_your');



deliveryYour.addEventListener('click', ()=> {
    fielsetDel.disabled = true;
    fielsetDelYour.disabled = false
})
delivery.addEventListener('click', ()=> {
    fielsetDelYour.disabled = true;
    fielsetDel.disabled = false;

})


const buttonOpen = () => {
    if(modalElem.classList.contains('modal'))
    {
        modalElem.classList.remove('modal')
        modalElem.classList.add('modal_open')
    }
}

const buttonClose = () => {
    if(modalElem.classList.contains('modal_open'))
    {
        modalElem.classList.remove('modal_open')
        modalElem.classList.add('modal')
    }
}

// navigation menu
const selectNav = (e) => {
    for(let i = 0; i<buttonNav.length; i++) {
        buttonNav[i].classList.remove("navigation_button-active")
    }
    e.target.classList.add("navigation_button-active")

}
for(let i = 0; i < buttonNav.length; i++) {
    buttonNav[i].addEventListener('click',selectNav,false)
}

// catalog menu
const hideCatalogContent1 = () => {

    for( let i = 0; i < catalogContent.length; i++) {
        if(catalogBurger.classList.contains('catalog_hide')) {
            catalogBurger.classList.remove('catalog_hide')
            catalogContent[i].classList.add('catalog_hide')
        }
        else {
            catalogContent[i].classList.add('catalog_hide')
        }
    }
}
const hideCatalogContent2 = () => {

    for( let i = 0; i < catalogContent.length; i++) {
        if(catalogSnack.classList.contains('catalog_hide')) {
            catalogSnack.classList.remove('catalog_hide')
            catalogContent[i].classList.add('catalog_hide')
        } 
        else {
            catalogContent[i].classList.add('catalog_hide')
        }
    }
}
const hideCatalogContent3 = () => {

    for( let i = 0; i < catalogContent.length; i++) {
        if(catalogHotdog.classList.contains('catalog_hide')) {
            catalogHotdog.classList.remove('catalog_hide')
            catalogContent[i].classList.add('catalog_hide')
        } 
        else {
            catalogContent[i].classList.add('catalog_hide')
        }
    }
}

const hideCatalogContent4 = () => {

    for( let i = 0; i < catalogContent.length; i++) {
        if(catalogCombo.classList.contains('catalog_hide')) {
            catalogCombo.classList.remove('catalog_hide')
            catalogContent[i].classList.add('catalog_hide')
        } 
        else {
            catalogContent[i].classList.add('catalog_hide')
        }
    }
}
const hideCatalogContent5 = () => {
    for( let i = 0; i < catalogContent.length-1; i++) {
        if(catalogShaurma.classList.contains('catalog_hide')) {
            catalogShaurma.classList.remove('catalog_hide')
            catalogContent[i].classList.add('catalog_hide')
        } 
        else {
            catalogContent[i].classList.add('catalog_hide')
        }
    }
}

//basket
const hideOrder = () => {
    if(orderList.classList.contains('order-open'))
    {
        orderList.classList.remove('order-open')
        closeOrder.innerHTML = 'Равернуть'
    }
    else {
        orderList.classList.add('order-open')
        closeOrder.innerHTML = 'Свернуть'
    }
}