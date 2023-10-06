const btns = document.querySelectorAll(".btnFilter");
const storeProducts = document.querySelectorAll(".store-product");
let logoWrapper = document.querySelector("#logoWrapper");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    // console.log(filter);
    // alert(filter);

    storeProducts.forEach((product) => {
      if (filter == "all") {
        document.getElementById("EndSearch").classList.remove("active")
        product.style.display = "flex"
        logoWrapper.style.display = "none"
        logoWrapper.classList.add("active")
        document.getElementById("alllogo").style.display = "flex"
      } else {
        document.getElementById("EndSearch").classList.remove("active")
        logoWrapper.classList.remove("active")
        logoWrapper.style.display = "flex"
        document.getElementById("alllogo").style.display = "none"
        e.target.classList.add("active");

        setInterval(() => {
          e.target.classList.remove("active");
        }, 2000);

        if (product.classList.contains(filter)) {

          logoWrapper.style.display = "flex"
          product.style.display = "flex"
        } else {
          product.style.display = "none"

        }
      }

    })

  })
}


// Search filter here =============================> 
// const search = document.getElementById("search")
// search.addEventListener("keyup", (e) => {
//     e.preventDefault();

//     const SearchValue = search.value.toLowerCase().trim()
//     for (let i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(SearchValue)) {
//             storeProducts[i].style.display = "flex"
//         } else if (SearchValue == "") {
//             storeProducts[i].style.display = "flex"
//         } else {
//             storeProducts[i].style.display = "none"
//         }

//     }
// })













let filterLink = document.getElementsByClassName("filterLink");
//   let tabcontents = document.getElementsByClassName("tab-content");

function activefilterLink() {
  for (filterLink of filterLinks) {
    filterLink.classList.remove("active");
  }
  //   for (tabcontent of tabcontents) {
  //     tabcontent.classList.remove("active-tab");
  //   }
  event.currentTarget.classList.add("active");

  //   document.getElementById(tabname).classList.add("active-tab");

}








// function search() {
//   let filter = document.getElementById("find").value.toUpperCase();
//   let item = document.querySelectorAll(".Pproduct")

//   let H3 = document.getElementsByClassName("title")

//   for (var i = 0; i <= H3.length; i++) {

//     const a = item[i].getElementsByClassName("title")[0]

//     let value = a.innerHTML || a.innerText || a.textContent

//     if (value.toUpperCase().indexOf(filter) > -1) {
//       item[i].style.display = "flex"

//     } else {
//       // alert(value)
//       item[i].style.display = "none"
//     }

//   }
// }







$(document).ready(function () {
  $("#filter").keyup(function () {

    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;


    // Loop through the comment list
    $(".list .Pproduct").each(function () {
      
      // If the list item does not contain the text phrase fade it out
       if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).fadeOut();

          // Show the list item if the phrase matches and increase the count by 1
        } else {
          $(this).show();
          count++;
        }
      });
 


    // Update the count
    var numberItems = count;
    if (numberItems == 0) {
      document.getElementById("EndSearch").classList.add("active")
    }else{
      
      document.getElementById("EndSearch").classList.remove("active")
    }
    // $("#filter-count").text("Number of Filter = " + count);

  });
});





























































//   let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let Detlist = document.querySelector('.Det-list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000,
//         class:"gown",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000,
//         class:"jewelry",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000,
//         class:"shirt",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000,
//         class:"watch",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000,
//         class:"gown",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000,
//         class:"shirt",
//         ParaText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam architecto sit dignissimos quisquam nesciunt enim quia autem molestiae porro?",
//     }
// ];


// let listCards = [];

// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item', value.class, "store-product");
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();

// function addToCard(key) {
//     if (listCards[key] == null) {
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//         body.classList.add('active');
//     } else {
//         alert(listCards[key].name + ' alredy exist');
//     }
//     reloadCard();
//     // changeDelete();
// }
// function reloadCard() {
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;

//     listCards.forEach((value, key) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if (value != null) {

//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                     <br/>
//                     <button onclick="changeDelete(${key})">remove</button>
//                 </div>`;
//             listCard.appendChild(newDiv);
//         }

//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeDelete(key) {

//     delete listCards[key];

//     reloadCard();
// }
// function changeQuantity(key, quantity) {
//     if (quantity == 0) {
//         delete listCards[key];
//     } else {
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }

//     reloadCard();
// }





