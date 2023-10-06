let Secttablinks = document.getElementsByClassName("Secttab-links");
let Secttabcontents = document.getElementsByClassName("Secttab-content");

function openSecttab(secTtabname) {
    for (Secttablink of Secttablinks) {
        Secttablink.classList.remove("Sect-active-link");
    }
    for (Secttabcontent of Secttabcontents) {
        Secttabcontent.classList.remove("Sect-active-content");
    }
    event.currentTarget.classList.add("Sect-active-link");
  
    document.getElementById(secTtabname).classList.add("Sect-active-content");
  
  }
  
  // Product details tabs and their contents ====================== === =>
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  DetailsListSection.classList.add("ActiveDetListSec")
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");

}

let filterDrop = document.querySelector("#filterDrop")
let filterBox = document.querySelector(".filter-box")
filterDrop.addEventListener("click", () =>{
  filterBox.classList.toggle("active")
})


