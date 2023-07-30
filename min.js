document.addEventListener("click", e =>{
    //sprawdza czy klikamy w dropdown button
    const dropdownMenu = e.target.matches("[data-dropdown-button]")
    if(!dropdownMenu && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown;
    if(dropdownMenu) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    });
});

// slide show

let imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
let currentPic = 0;
const interval = 3000;

let timer = setInterval(changeSlide, interval);


// change img using dots

function changeSlide(n) {
    for(let i = 0; i < imgs.length; i++) {
        //reset
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active-dot', '');
    }

    currentPic = (currentPic + 1) % imgs.length;

    if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentPic = n;
    }

    imgs[currentPic].style.opacity = 1;
    dots[currentPic].className += ' active-dot';

}

// humburger



// document.addEventListener("click", e =>{
//     //sprawdza czy klikamy w dropdown button
//     const humburgerMenu = e.target.matches("[data-humburger-button]")
//     if(!humburger && e.target.closest("[data-humburger]") != null) return

//     let currentDropdown;
//     if(humburger) {
//         currentDropdown = e.target.closest("[data-humburger]")
//         currentDropdown.classList.toggle('active');
//     }

//     document.querySelectorAll("[data-humburger].active").forEach(humburger=> {
//         if(humburger === currentDropdown) return
//         humburger.classList.remove('active');
//     });
// });


let humburger = document.getElementById("hum-btn");
let menuMobile = document.getElementById("mobile_menu")

humburger.addEventListener("click", function(){
    if(menuMobile.style.display === "none"){
        menuMobile.style.display = "flex";
        menuMobile.classList.toggle('open');
    }else{
        menuMobile.style.display = "none";
        menuMobile.classList.remove('open');
    }
});


// header text changing

let changeThis = document.getElementsByClassName("header-text");

let headindex = 1;

let text = ["Darmowa Dostawa Od 299PLN!", "Nowa Kolekcja Supreme Dostępna Juz Teraz!", "Sprawdz Nasze Promocje W Zakładce Sale!"];


function change(){
    changeThis[0].innerHTML = text[headindex];
    headindex++
    if(headindex > 2){
        headindex = 0;
    }
}

setInterval(change, 5000);



// roll in mobile menu

const roll = document.getElementById

// document.addEventListener("click", e=>{
//     const toggleMobile = e.target.matches("[toggle-mobile]");
//     if(!toggleMobile && e.target.closest("[data-dropdown-mobile]") != null) return
//     let currentDropdown;
//     if(toggleMobile){
//         currentDropdown = e.target.closest("[data-dropdown-mobile]")
//         currentDropdown.classList.toggle('active');
//     }

//     document.querySelectorAll("[data-dropdown-mobile].active").forEach(dropdown => {
//         if(dropdown === currentDropdown) return
//         dropdown.classList.remove('active');
//     });
// })



// if(child.style.display === "none"){
//     child.style.display = "flex";
//     console.log("click")
// }else{
//     child.style.display = "none"
// }



// modal newsletter

let modal = document.getElementById("myModal")

let closeBtn = document.getElementsByClassName("close")[0];




function showModal(){
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "9";
}

closeBtn.onclick = function(){
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}