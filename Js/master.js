
let mainColor = window.localStorage.getItem("mainColor");

if (mainColor !== null) {

    document.documentElement.style.setProperty('--main-color', mainColor);

    document.querySelectorAll(".list-colors li").forEach(element => {
        element.classList.remove("active");

        if(element.dataset.color === mainColor){
            element.classList.toggle("active");
                }
    })
}
else{
    document.querySelector(".list-colors li").classList.add("active");
}

let showRandomBackground = localStorage.getItem("randomBackground");

if(showRandomBackground !== null){

    document.querySelectorAll(".setting-box .settings-container .option-box .random-background span").forEach(span => {
        span.classList.remove("active");

        if(span.innerHTML === showRandomBackground){
            span.classList.toggle("active");
        }
    })
}
else{
    document.querySelectorAll(".setting-box .settings-container .option-box .random-background span").forEach(span => {
        span.classList.remove("active");

        if(span.innerHTML === 'Yes'){
            span.classList.toggle("active");
            localStorage.setItem("randomBackground", 'Yes');
        }
    })

}

let bulletsOption = localStorage.getItem("bullets-option");

if(bulletsOption !== null){
    document.querySelectorAll(".setting-box .settings-container .option-box .show-bullets span").forEach(span => {
        span.classList.remove("active");}
    );
    if(bulletsOption === 'block'){
        document.querySelector(".nav-bullets").style.display = 'block';
        document.querySelector(".show-bullets .yes").classList.add("active");
    }
    else{
        document.querySelector(".nav-bullets").style.display = 'none';
        document.querySelector(".show-bullets .no").classList.add("active");
        
    }
}
else{
    document.querySelector(".nav-bullets").style.display = 'block';
    document.querySelectorAll(".setting-box .settings-container .option-box .show-bullets span").forEach(span => {
        span.classList.remove("active");}
    );
    document.querySelector(".show-bullets .yes").classList.add("active");
}




//select land-page element
let LP = document.querySelector(".landing-page");

//get Arry of Imgs 
let imgsArry = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

setInterval(() => {
    // Get Random Number

    if(localStorage.getItem("randomBackground") === "Yes"){
           let RandomNumber = Math.floor(Math.random() * imgsArry.length);

        // change background image Url 
        LP.style.backgroundImage = 'url("images/' + imgsArry[RandomNumber] +'")';
    }

},5000)


// create toggle-menu

let button = document.querySelector(".toggle-menu");

let links = document.querySelector(".links");

button.addEventListener("click", (e) => {
e.stopPropagation();
links.classList.toggle("open");
button.classList.toggle("menu-active");
});

document.addEventListener("click", () => {
links.classList.remove("open");
button.classList.remove("menu-active");
});


//open setting-box 

document.querySelector(".setting-box .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open")
}

// set color for each li
document.querySelectorAll(".setting-box .settings-container .option-box .list-colors li").forEach(li =>{
    li.style.backgroundColor = li.dataset.color;
})

// change Main-Color;

let colorSLi = document.querySelectorAll(".setting-box .settings-container .option-box .list-colors li");

colorSLi.forEach(li => {
    
    li.addEventListener("click", (e) => {
    window.localStorage.setItem("mainColor", li.dataset.color);

    let mainColor = window.localStorage.getItem("mainColor");

    document.documentElement.style.setProperty('--main-color', mainColor);

    //remove active class from all colorbtn

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    })

    //Add active class to current color
    e.target.classList.toggle("active");

});
    });


//random background

let randomCLi = document.querySelectorAll(".setting-box .settings-container .option-box .random-background span");

randomCLi.forEach(span => {
    
    span.addEventListener("click", (e) => {
    window.localStorage.setItem("randomBackground", span.innerHTML);
    console.log(localStorage.getItem("randomBackground"));


    //remove active class from all colorbtn

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    })

    //Add active class to current color
    e.target.classList.toggle("active");

});
    });

//show bullets
let blullets = document.querySelectorAll(".setting-box .settings-container .option-box .show-bullets span");

blullets.forEach(span => {
    
    span.addEventListener("click", (e) => {
    //remove active class from all colorbtn

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    })

    document.querySelector(".nav-bullets").style.display = e.target.dataset.display;

    localStorage.setItem("bullets-option", e.target.dataset.display);
    console.log(localStorage.getItem("bullets-option"));

    //Add active class to current color
    e.target.classList.toggle("active");
});
    });


//redset button

document.querySelector(".setting-box .settings-container .reset-options").onclick = function () {
    localStorage.removeItem("mainColor");
    localStorage.removeItem("randomBackground");
    localStorage.removeItem("bullets-option");
    window.location.reload();
}



//scorl 

let skills = document.querySelector(".skills");

window.onscroll = function () {

    let skillOffsetTop = skills.offsetTop;

    let skillOuterHeight = skills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;


    if(windowScrollTop > (skillOffsetTop + skillOuterHeight - windowHeight)){
        let allskills = this.document.querySelectorAll(".our-skills .container .skills .skill .skill-progress span");

        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }

};

//

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click" , (e)=>{
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);

        // create popup-box
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        if (img.alt !== null){
            let imgHeading = document.createElement("h3");
            let imgtext = document.createTextNode(img.alt);
            imgHeading.appendChild(imgtext);
            popupBox.appendChild(imgHeading);
        }

        let popupimg = document.createElement("img");

        popupimg.src = img.src;

        popupBox.appendChild(popupimg);

        let ex = document.createElement("span");
        
        ex.innerText = "X";

        ex.className = "closebtn";
        popupBox.appendChild(ex);

        document.body.appendChild(popupBox);

        }
    )});

// التعامل مع كلاس دينامك

document.addEventListener("click",function (e){
    if(e.target.className == 'closebtn'){
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
})

// Select All Bullets
const Bullets = document.querySelectorAll(".nav-bullets .bullet");
const Links =  document.querySelectorAll(".links li a");
console.log(Links);




function scrollToSomewhere(elements){
    elements.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}

scrollToSomewhere(Bullets);
scrollToSomewhere(Links);

