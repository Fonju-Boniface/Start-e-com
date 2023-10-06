let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let Detlist = document.querySelector(".Det-list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "g PRODUCT NAME 1",
        image: "1.PNG",
        price: 120000,
        class: "gown",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
    {
        id: 2,
        name: "f PRODUCT NAME 2",
        image: "2.PNG",
        price: 120000,
        class: "jewelry",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
    {
        id: 3,
        name: "PRODUCT NAME 3",
        image: "3.PNG",
        price: 220000,
        class: "shirt",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
    {
        id: 4,
        name: "PRODUCT NAME 4",
        image: "4.PNG",
        price: 123000,
        class: "watch",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
    {
        id: 5,
        name: "PRODUCT NAME 5",
        image: "5.PNG",
        price: 320000,
        class: "gown",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
    {
        id: 6,
        name: "PRODUCT NAME 6",
        image: "6.PNG",
        price: 120000,
        class: "shirt",
        ParaText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
    },
];

let listCards = [];





// document.getElementById("find").addEventListener("keyup", function () {
//     let text = document.getElementById("find").value
//     listCards = products.filter(function (a) {
//         if (a.name.includes(text)) {
//             return a.name
//         }
        
//     })
//     if (this.value == "") {
//         initApp(products)
//     }else{
//         if (listCards == "") {
//             document.getElementById("para").style.display = "block"
//             document.getElementById("Pproduct").style.display = ""
//         }else  {
//             initApp(products);

//             document.getElementById("para").style.display = "none"
//             document.getElementById("Pproduct").style.display = "flex"
//         }
//     }

//   })

function detailsApp() {
    products.forEach((value, key) => {
        let newDivD = document.createElement("div");
        newDivD.classList.add("item", "tab-content");
        newDivD.id = value.id;
        newDivD.innerHTML = `
       
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <p>${value.ParaText}</p>
            <button onclick="addToCard(${key})">Add To Card</button>
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
            "col-6",
            "col-sm-2",
            "gap-2"
        );
        // newDiv.addEventListener("click", opentab(value.id))

        newDiv.innerHTML = `
        <div class="imag">
        <img src="${value.image}">
        </div>
        <div class="cardcont display">
        <b class="Brand ">##${value.class}</b>
            <div class="cont display">
                <h2 class="title mt-3">${value.name}</h2>
                <div class="prices display gap-2">
                    <del>2000$</del>
                    <span class="price">${value.price.toLocaleString()}$</span>
                </div>
                <div class="btnss display gap-3  mt-3 ">
                <a href="#" class="btnssBtn display" onclick="opentab(${value.id})">
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
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        newDIVMessage.innerHTML = listCards[key].name + " added";
        setTimeout(() => {
            newDIVMessage.innerHTML = "";
        }, 2000);
        console.log(listCards[key]);
    } else {
        // alert(listCards[key].name + ' alredy exist');
        newDIVMessage.innerHTML = listCards[key].name + " alredy exist";
        setTimeout(() => {
            newDIVMessage.innerHTML = "";
        }, 2000);
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
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1
                })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1
                })">+</button>
                    <br/>
                    <button onclick="changeDelete(${key})">remove</button>
                </div>`;

            listCard.appendChild(newDiv);

            
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    document.querySelector(".ClearShopping").addEventListener("click", () => {
        alert(value);
    });
}
function changeDelete(key) {
    delete listCards[key];
    reloadCard();
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;

        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}

ClearShopping();

setInterval(() => {
    if (document.querySelector(".quantity").innerHTML == "0") {
        body.classList.remove("active");
    }
});
