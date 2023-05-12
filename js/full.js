// spin gear
document.querySelector(".spin .fa-gear").onclick = function () {
    document.querySelector(".fa-gear").classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}   






// select landing bage
let landing = document.querySelector(".landing");

// array of element 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg",];



setInterval(() => {
    
    // get random number
    let randomNum = Math.floor(Math.random() * imgsArray.length);
    
    // change back imgs url
    landing.style.backgroundImage = 'url("imgs/'+imgsArray[randomNum] +'")';
    console.log(randomNum);
    // landing.classList.add('image-fade');
    // setTimeout(()=>{
    //     landing.classList.remove('image-fade');
    // }, 550); 
}, 3000);

// switch colors
const colorsLi = document.querySelectorAll(".color-list li");
// console.log(colorsLi);
colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {
        
        document.documentElement.style.setProperty("--scolor", e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
    });

});


// let mainColor = localStorage.getItem("color-option");
// if (mainColor !== Null) {       
//     document.documentElement.style.setProperty("--scolor", localStorage.getItem("color-option"));


// }

let skills = document.querySelector(".sales");

window.onscroll= function (){
    let top = skills.offsetTop;
    let outer = skills.offsetHeight;
    let windowHeight = this.innerHeight;
    let scroll = this.pageYOffset;
    if (scroll > (top + outer - windowHeight)){
        let boxs = document.querySelectorAll(".sale-box .prog span");
        boxs.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
    // console.log("im here");
    // console.log(outer);
}












