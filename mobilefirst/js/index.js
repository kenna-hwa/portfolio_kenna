//커피
const menuCoffee = document.querySelector('.coffee_box_a');
const menuCoffeeBox = document.querySelector('.coffee_menu');

menuCoffee.addEventListener("mouseover", function(){
    menuCoffee.setAttribute('class', 'coffeehover');
    menuCoffeeBox.style.visibility = "visible";
})
menuCoffeeBox.addEventListener("mouseover", function(){
    menuCoffee.setAttribute('class', 'coffeehover');
    menuCoffeeBox.style.visibility = "visible";
})
menuCoffee.addEventListener("mouseout", function(){
    menuCoffee.removeAttribute('class', 'coffeehover')
    menuCoffeeBox.style.visibility = "hidden";
})
menuCoffeeBox.addEventListener("mouseout", function(){
    menuCoffee.removeAttribute('class', 'coffeehover')
    menuCoffeeBox.style.visibility = "hidden";
})

//주방가전
const menuKitchen = document.querySelector('.kitchen_box_a');
const menuKitchenBox = document.querySelector('.kitchen_menu');
const menuKitchenBoxTwo = document.querySelector('.kitchenbreak');

menuKitchen.addEventListener("mouseover", function(){
    menuKitchen.setAttribute('class', 'kichenhover');
    menuKitchenBox.style.visibility = "visible";
    menuKitchenBoxTwo.style.visibility = "visible";
})
menuKitchenBox.addEventListener("mouseover", function(){
    menuKitchen.setAttribute('class', 'kichenhover');
    menuKitchenBox.style.visibility = "visible";
    menuKitchenBoxTwo.style.visibility = "visible";
})
menuKitchen.addEventListener("mouseout", function(){
    menuKitchen.removeAttribute('class', 'kichenhover')
    menuKitchenBox.style.visibility = "hidden";
    menuKitchenBoxTwo.style.visibility = "hidden";
})
menuKitchenBox.addEventListener("mouseout", function(){
    menuKitchen.removeAttribute('class', 'kichenhover')
    menuKitchenBox.style.visibility = "hidden";
    menuKitchenBoxTwo.style.visibility = "hidden";
})

//계절가전
const menuSeason = document.querySelector('.season_box_a');
const menuSeasonBox = document.querySelector('.season_menu');

menuSeason.addEventListener("mouseover", function(){
    menuSeason.setAttribute('class', 'seasonhover');
    menuSeasonBox.style.visibility = "visible";
})
menuSeasonBox.addEventListener("mouseover", function(){
    menuSeason.setAttribute('class', 'seasonhover');
    menuSeasonBox.style.visibility = "visible";
})
menuSeason.addEventListener("mouseout", function(){
    menuSeason.removeAttribute('class', 'seasonhover')
    menuSeasonBox.style.visibility = "hidden";
})
menuSeasonBox.addEventListener("mouseout", function(){
    menuSeason.removeAttribute('class', 'seasonhover')
    menuSeasonBox.style.visibility = "hidden";
})

//고객지원
const menuCustomer = document.querySelector('.customer_box_a');
const menuCustomerBox = document.querySelector('.customer_menu');

menuCustomer.addEventListener("mouseover", function(){
    menuCustomer.setAttribute('class', 'customerhover');
    menuCustomerBox.style.visibility = "visible";
})
menuCustomerBox.addEventListener("mouseover", function(){
    menuCustomer.setAttribute('class', 'customerhover');
    menuCustomerBox.style.visibility = "visible";
})
menuCustomer.addEventListener("mouseout", function(){
    menuCustomer.removeAttribute('class', 'customerhover')
    menuCustomerBox.style.visibility = "hidden";
})
menuCustomerBox.addEventListener("mouseout", function(){
    menuCustomer.removeAttribute('class', 'customerhover')
    menuCustomerBox.style.visibility = "hidden";
})

//VIP 클럽
const menuVipclub = document.querySelector('.vipclub_box_a');
const menuVipclubBox = document.querySelector('.vip_menu');

menuVipclub.addEventListener("mouseover", function(){
    menuVipclub.setAttribute('class', 'viphover');
    menuVipclubBox.style.visibility = "visible";
})
menuVipclubBox.addEventListener("mouseover", function(){
    menuVipclub.setAttribute('class', 'viphover');
    menuVipclubBox.style.visibility = "visible";
})
menuVipclub.addEventListener("mouseout", function(){
    menuVipclub.removeAttribute('class', 'viphover')
    menuVipclubBox.style.visibility = "hidden";
})
menuVipclubBox.addEventListener("mouseout", function(){
    menuVipclub.removeAttribute('class', 'viphover')
    menuVipclubBox.style.visibility = "hidden";
})

//모바일 커피

const mobileCoffee = document.querySelector('.mobile_coffee_box_a');
const mobileCoffeeBox = document.querySelector('.mobile_coffee');

mobileCoffee.addEventListener("mouseover", function(){
    mobileCoffeeBox.style.display = "block";
})
mobileCoffeeBox.addEventListener("mouseover", function(){
    mobileCoffeeBox.style.display = "block";
})
mobileCoffee.addEventListener("mouseout", function(){
    mobileCoffeeBox.style.display = "none";
})
mobileCoffeeBox.addEventListener("mouseout", function(){
    mobileCoffeeBox.style.display = "none";
})

//모바일 주방가전

const mobileKitchen = document.querySelector('.mobile_kitchen_box_a');
const mobileKitchenBox = document.querySelector('.mobile_kitchen');

mobileKitchen.addEventListener("mouseover", function(){
    mobileKitchenBox.style.display = "block";
})
mobileKitchenBox.addEventListener("mouseover", function(){
    mobileKitchenBox.style.display = "block";
})
mobileKitchen.addEventListener("mouseout", function(){
    mobileKitchenBox.style.display = "none";
})
mobileKitchenBox.addEventListener("mouseout", function(){
    mobileKitchenBox.style.display = "none";
})

//모바일 계절가전

const mobileSeason = document.querySelector('.mobile_season_box_a');
const mobileSeasonBox = document.querySelector('.mobile_season');

mobileSeason.addEventListener("mouseover", function(){
    mobileSeasonBox.style.display = "block";
})
mobileSeasonBox.addEventListener("mouseover", function(){
    mobileSeasonBox.style.display = "block";
})
mobileSeason.addEventListener("mouseout", function(){
    mobileSeasonBox.style.display = "none";
})
mobileSeasonBox.addEventListener("mouseout", function(){
    mobileSeasonBox.style.display = "none";
})

//모바일 고객지원

const mobileCustomer = document.querySelector('.mobile_customer_box_a');
const mobileCustomerBox = document.querySelector('.mobile_customer');
const mobileCustomerGuideBox = document.querySelector('.mobile_customer_guide');


mobileCustomer.addEventListener("mouseover", function(){
    mobileCustomerBox.style.display = "block";
    mobileCustomerGuideBox.style.display = "block";
})
mobileCustomerBox.addEventListener("mouseover", function(){
    mobileCustomerBox.style.display = "block";
    mobileCustomerGuideBox.style.display = "block";
})
mobileCustomerGuideBox.addEventListener("mouseover", function(){
    mobileCustomerBox.style.display = "block";
    mobileCustomerGuideBox.style.display = "block";
})
mobileCustomerBox.addEventListener("mouseout", function(){
    mobileCustomerBox.style.display = "none";
    mobileCustomerGuideBox.style.display = "none";
})
mobileCustomerGuideBox.addEventListener("mouseout", function(){
    mobileCustomerBox.style.display = "none";
    mobileCustomerGuideBox.style.display = "none";
})

//모바일 VIP 클럽

const mobileVip = document.querySelector('.mobile_vip_box_a');
const mobileVipBox = document.querySelector('.mobile_vip');

mobileVip.addEventListener("mouseover", function(){
    mobileVipBox.style.display = "block";
})
mobileVipBox.addEventListener("mouseover", function(){
    mobileVipBox.style.display = "block";
})
mobileVip.addEventListener("mouseout", function(){
    mobileVipBox.style.display = "none";
})
mobileVipBox.addEventListener("mouseout", function(){
    mobileVipBox.style.display = "none";
})


//modal
const body = document.querySelector('body'); 
const modal = document.querySelector('.modal_wrap'); 
const closeBtn = document.querySelector('.modal_close_btn');

window.addEventListener('load', () => {
    modal.classList.add('active');

    if (modal.classList.contains('active')) {
        body.style.overflow = 'hidden';
    }
  });

  closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');

      if (!modal.classList.contains('active')) {
        body.style.overflow = 'auto';
    }
  });