let openShopping = document.querySelector(".shopping");
let shoppC = document.querySelector(".shoppC");
let myCart = document.querySelector("#myCart");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let Detlist = document.querySelector(".Det-list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
openShopping.addEventListener("click", () => {
    myCart.classList.toggle("active");
});
shoppC.addEventListener("click", () => {
    myCart.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
    myCart.classList.remove("active");
});

let DetailsListSection = document.querySelector("#Details_list_section")
let CloseDetails = document.querySelector("#Close_Details")

CloseDetails.addEventListener("click", () =>{
    DetailsListSection.classList.remove("ActiveDetListSec")
})

let products = [
    {
        id: 1,
        name: "g PRODUCT NAME 1",
        image: "./Assets/images/Air-Force/1.png",
        price: 1200,
        Oldprice: 1250,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 2,
        name: "original backpack die",
        image: "./Assets/images/backpack/1.png",
        price: 200,
        Oldprice: 230,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 3,
        name: "Nike super star",
        image: "./Assets/images/Nike-Running/1.png",
        price: 127,
        Oldprice: 150,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 4,
        name: "women fashion bag",
        image: "./Assets/images/women-bag/1.png",
        price: 130,
        Oldprice: 200,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 5,
        name: "backpack die",
        image: "./Assets/images/backpack/1.png",
        price: 220,
        Oldprice: 300,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 6,
        name: "Nike star",
        image: "./Assets/images/Nike-Running/1.png",
        price: 120,
        Oldprice: 470,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 7,
        name: "women bag",
        image: "./Assets/images/women-bag/2.png",
        price: 823,
        Oldprice: 1020,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 8,
        name: "young women bag",
        image: "./Assets/images/women-bag/3.png",
        price: 530,
        Oldprice: 700,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 9,
        name: "Air force 02",
        image: "./Assets/images/Air-Force/2.png",
        price: 1880,
        Oldprice: 1900,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 10,
        name: "adidas 02 shoes",
        image: "./Assets/images/adidas-shoes/2.png",
        price: 2300,
        Oldprice: 2600,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 11,
        name: "Back pack 4",
        image: "./Assets/images/backpack/4.png",
        price: 1900,
        Oldprice: 2200,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 12,
        name: "boots 2",
        image: "./Assets/images/boots-shoes/2.png",
        price: 1500,
        Oldprice: 1700,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 13,
        name: "young women bag",
        image: "./Assets/images/men-shoes/2.png",
        price: 764,
        Oldprice: 810,
        class: "men",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 14,
        name: "young women bag",
        image: "./Assets/images/Nike-Running/2.png",
        price: 100,
        Oldprice: 130,
        class: "air",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 15,
        name: "young women bag",
        image: "./Assets/images/sport-shoes/2.png",
        price: 300,
        Oldprice: 590,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 16,
        name: "young women flat shoe",
        image: "./Assets/images/women flat/2.png",
        price: 1000,
        Oldprice: 2220,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 17,
        name: " women High hills 02",
        image: "./Assets/images/women hills/2.png",
        price: 1290,
        Oldprice: 5550,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 18,
        name: "young women 04 bag ",
        image: "./Assets/images/women-bag/4.png",
        price: 700,
        Oldprice: 800,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 19,
        name: "adidas 03 shoes",
        image: "./Assets/images/adidas-shoes/3.png",
        price: 1090,
        Oldprice: 1800,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 20,
        name: "04 Air Force",
        image: "./Assets/images/Air-Force/4.png",
        price: 710,
        Oldprice: 930,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 21,
        name: "back pack 04",
        image: "./Assets/images/backpack/4.png",
        price: 10,
        Oldprice: 30,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 22,
        name: "new boots",
        image: "./Assets/images/boots-shoes/3.png",
        price: 125,
        Oldprice: 300,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:23,
        name: "Men 4 Shoes",
        image: "./Assets/images/men-shoes/4.png",
        price: 720,
        Oldprice: 800,
        class: "men",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:24,
        name: "Run with Nike",
        image: "./Assets/images/Nike-Running/4.png",
        price: 2200,
        Oldprice: 3000,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 25,
        name: "Make sport 02",
        image: "./Assets/images/sport-shoes/2.png",
        price: 3000,
        Oldprice: 3000,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 26,
        name: "03 women flat",
        image: "./Assets/images/women flat/3.png",
        price: 110,
        Oldprice: 130,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:27,
        name: "She stands higher",
        image: "./Assets/images/women hills/2.png",
        price: 80,
        Oldprice: 100,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 28,
        name: "best hand bags",
        image: "./Assets/images/women-bag/2.png",
        price: 800,
        Oldprice: 1110,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 29,
        name: "addidas classic",
        image: "./Assets/images/adidas-shoes/5.png",
        price: 190,
        Oldprice: 200,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 30,
        name: "Air Force 05",
        image: "./Assets/images/Air-Force/5.png",
        price: 998,
        Oldprice: 1133,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:31,
        name: "Go backpack 5",
        image: "./Assets/images/backpack/5.png",
        price: 100,
        Oldprice: 130,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:32,
        name: "Air force 6",
        image: "./Assets/images/Air-Force/6.png",
        price: 1009,
        Oldprice: 1300,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 33,
        name: "Air force 8",
        image: "./Assets/images/Air-Force/8.png",
        price: 390,
        Oldprice: 405,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 34,
        name: "Boots 06 model",
        image: "./Assets/images/boots-shoes/6.png",
        price: 300,
        Oldprice: 400,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 35,
        name: "Air force type 07",
        image: "./Assets/images/Air-Force/7.png",
        price: 1790,
        Oldprice: 2000,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 36,
        name: "Be a man",
        image: "./Assets/images/men-shoes/5.png",
        price: 400,
        Oldprice: 558,
        class: "men",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 37,
        name: "real boots 7",
        image: "./Assets/images/boots-shoes/7.png",
        price: 1220,
        Oldprice: 1300,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 38,
        name: "The boots go",
        image: "./Assets/images/boots-shoes/8.png",
        price: 660,
        Oldprice: 700,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 39,
        name: "Love the nike",
        image: "./Assets/images/Nike-Running/6.png",
        price: 2200,
        Oldprice: 2400,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 40,
        name: "More Excercises",
        image: "./Assets/images/sport-shoes/5.png",
        price: 590,
        Oldprice: 840,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 41,
        name: "It's Low",
        image: "./Assets/images/women flat/8.png",
        price: 400,
        Oldprice: 440,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:42,
        name: "Just Boots",
        image: "./Assets/images/boots-shoes/9.png",
        price: 990,
        Oldprice: 1100,
        class: "classic",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 43,
        name: "She goes higher",
        image: "./Assets/images/women hills/8.png",
        price: 300,
        Oldprice: 370,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },,
    {
        id: 44,
        name: "9 goes higher",
        image: "./Assets/images/women hills/9.png",
        price: 450,
        Oldprice: 600,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 45,
        name: "She loves bags",
        image: "./Assets/images/women-bag/8.png",
        price: 640,
        Oldprice: 700,
        class: "women",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 46,
        name: "Save all stress",
        image: "./Assets/images/backpack/14.png",
        price: 150,
        Oldprice: 400,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 47,
        name: "Solid boots",
        image: "./Assets/images/men-shoes/16.png",
        price: 1500,
        Oldprice: 2000,
        class: "men",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 48,
        name: "Sport style",
        image: "./Assets/images/sport-shoes/9.png",
        price: 800,
        Oldprice: 955,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id: 49,
        name: "She Hangs Bags",
        image: "./Assets/images/women-bag/14.png",
        price: 110,
        Oldprice: 130,
        class: "bags",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },
    {
        id:50,
        name: "Last sleakers",
        image: "./Assets/images/sport-shoes",
        price: 400,
        Oldprice: 500,
        class: "sport",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro? ",
    },

];

let listCards = [];

function detailsApp() {
    products.forEach((value, key) => {
        let newDivD = document.createElement("div");
        newDivD.classList.add("item", "tab-content");
        newDivD.id = value.id;
        newDivD.innerHTML = `
        <h1 class="title">${value.name}</h1>

        <div class="DetContentWrapper">

            <div class="DetContentimage">
                <img src="${value.image}">
            </div>

            <div class="DetContentInfo">
                <h1 class="title">Product Details</h1>

                <p class="Text">${value.ParaText}</p>

                <div class="price">
                    <span>
                        <b>Old Cost</b> 
                        <del>${value.Oldprice.toLocaleString()}$</del> 
                    </span>
                    <span>
                        <b>New Cost</b> 
                        <p>${value.price.toLocaleString()}$</p>
                    </span>
                </div>
                
                
                <button class="DetContentbtn"  onclick="addToCard(${key})">Add To Card</button>
            </div>
        </div>
            `;
        Detlist.appendChild(newDivD);
    });
}
detailsApp();

function initApp() {
    listCard.innerHTML = "";

    let count = 0;
    let totalPrice = 0;
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add(
            "item",
            value.class,
            "store-product",
            "tab-links",
            "Pproduct",
            "gap-2"
        );
        // newDiv.addEventListener("click", opentab(value.id))

        newDiv.innerHTML = `
        <div class="imag display">
        <img src="${value.image}">
        </div>
        <div class="cardcont display">
        <b class="Brand ">##${value.class}</b>
            <div class="cont display">
                <h2 class="title mt-3">${value.name}</h2>
                <div class="prices display gap-2">
                    <del>${value.Oldprice.toLocaleString()}$</del>
                    <span class="price">${value.price.toLocaleString()}$</span>
                </div>
                <div class="btnss display gap-3  mt-3 ">
                <a href="#Details_list_section" class="btnssBtn display" onclick="opentab(${value.id})">
                    <i class="fas fa-eye"></i>
                </a>
            
                <span class="btnssBtn display" onclick="addToCard(${key})"><i class="fas fa-shopping-cart"></i></span>
                
            </div>
            </div>

            

        </div>
        `;
        list.appendChild(newDiv);

    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
initApp();
function addToCard(key) {
    const mesages = document.getElementById("mesages");

    let newDIVMessage = document.createElement("div");
    newDIVMessage.classList.add("messageMess")
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        newDIVMessage.innerHTML = `${listCards[key].name}   <b>added</b>`;
        newDIVMessage.classList.add("active");
        setTimeout(() => {
            newDIVMessage.classList.remove("active");
        }, 4000);
        console.log(listCards[key]);
    } else {
        // alert(listCards[key].name + ' alredy exist');
        newDIVMessage.innerHTML =`${listCards[key].name}   <b>alreedy exist</b>`;
        newDIVMessage.classList.add("active");
        setTimeout(() => {
            newDIVMessage.classList.remove("active");
        }, 3000);
    }
    mesages.appendChild(newDIVMessage);
    reloadCard();
    // changeDelete();
}

function reloadCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div class="img">
                    <img src="${value.image}"/>
                </div>
                <h4> ${value.name}</h4>
                <div>${value.price.toLocaleString()}$</div>
                <div class="display lastd">
                    <div class="display lastdd">
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1
                        })">-</button>
                            <div class="count">${value.quantity}</div>
                            <button onclick="changeQuantity(${key}, ${value.quantity + 1
                        })">+</button>
                    </div>
                    <button class="changeDelete" onclick="changeDelete(${key})">remove</button>
                </div>`;

            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString()+"$";
    // quantity.innerText = count;

    let NuberfI = document.querySelectorAll(".NumberOfItems");
    NuberfI.forEach((NuberfICompos) => {
        let intergercount = count
        NuberfICompos.innerHTML = intergercount
        
    })

}
function changeDelete(key, quantity) {

    const mesages = document.getElementById("mesages");

    let newDIVMessage = document.createElement("div");
    newDIVMessage.classList.add("messageMess")
    quantity = 0;

    if (quantity == 0) {
        // alert(listCards[key].name);
        newDIVMessage.innerHTML = `${listCards[key].name} <b>removed</b>`;
        
        newDIVMessage.classList.add("active");
        setTimeout(() => {
            newDIVMessage.classList.remove("active");
        }, 3000);
        delete listCards[key];
    }
    mesages.appendChild(newDIVMessage);
    reloadCard();

}
// total
function changeDeleteAll() {
    const mesages = document.getElementById("mesages");

    let newDIVMessage = document.createElement("div");
    newDIVMessage.classList.add("messageMess")

    listCards = [];

    newDIVMessage.innerHTML = ` Your cart have been cleared`;
    newDIVMessage.classList.add("active");
    setTimeout(() => {
        newDIVMessage.classList.remove("active");
    }, 3000);


    mesages.appendChild(newDIVMessage);
    reloadCard();

}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        // alert(listCards[key].name);
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;

        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}



setInterval(() => {
    if (document.querySelector(".quantity").innerHTML == "0") {
        body.classList.remove("active");
        // listCard.style.background = "red"
    }
    if (count == 0) {
        listCard.classList.add("active");
            alert("ooo")
        }0
});
