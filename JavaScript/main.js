//Selector Variables

//Sections


//Section Track and display
const aboutUs_find = document.querySelector("#aboutUs");
const ourGames_find = document.querySelector("#ourGames");
const career_find = document.querySelector("#career");

//Trackbar
const trackBar = document.querySelector("#sectionInfo__tracker");
const activeSection = document.querySelector("#sectionInfo__section");
const activeSectionNum = document.querySelector("#sectionInfo__num");

//Slide in animation
const slideInBottoms = document.querySelectorAll(".slide-in-bottom");

//Images
const aboutUsBg = document.querySelector("#aboutUs__bg");
const ourGamesBg = document.querySelector("#ourGames__bg");
const careerBg = document.querySelector("#career__bg");

//Actionlinks
const actionLink = document.querySelectorAll(".actionLink");

//checks if element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Adds classes for entrance animations if element is in view
setTimeout(()=>{
    aboutUsBg.classList.add("fullOpacity");
    setTimeout(()=>{
        aboutUs_find.firstElementChild.childNodes[3].classList.add("aboutUsTextChange");
    },500)
},1500);

let aboutUs_ran = false;
let career_ran = false;

const observer = new IntersectionObserver(entry => {
    if(entry[0].target === aboutUs_find){
        activeSection.innerText = "ABOUT US";
        activeSectionNum.innerText = "01";
        trackBar.style.height = "33%";
    }      
        if(entry[0].target === ourGames_find){
            activeSection.innerText = "OUR GAMES";
            activeSectionNum.innerText = "02";
            trackBar.style.height = "66%";

            if(aboutUs_ran === false){
                for (let i = 0; i <= 2; i++) {
                    setTimeout((index) => {
                        slideInBottoms[index].classList.remove("displayOff");
                    }, 150 * i, i);
                }
                ourGamesBg.classList.add("fullOpacity");
                aboutUs_ran = true;
            }
        }
        
        else if(entry[0].target === career_find){
            activeSection.innerText = "CAREER";
            activeSectionNum.innerText = "03";
            trackBar.style.height = "100%";

            if(career_ran === false){
                for (let i = 3; i <= 5; i++) {
                    setTimeout((index) => {
                        slideInBottoms[index].classList.remove("displayOff");
                    }, 150 * i, i);
                }
                careerBg.classList.add("fullOpacity");
            }
        }
}, {
    threshold:0.95,
})

observer.observe(aboutUs_find);
observer.observe(ourGames_find);
observer.observe(career_find);

//Rotate animation for actionLinks
actionLink.forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        console.log(e.childNodes[1].childNodes[1].childNodes[0]);
        e.childNodes[1].childNodes[1].childNodes[0].classList.add("rotateRight");
        setTimeout(()=>{
            e.childNodes[1].childNodes[1].childNodes[0].classList.remove("rotateRight");
        }, 200)
    })
    e.addEventListener("mouseleave", ()=>{
        e.childNodes[1].childNodes[1].childNodes[0].classList.add("rotateLeft");
        setTimeout(()=>{
            e.childNodes[1].childNodes[1].childNodes[0].classList.remove("rotateLeft");
        }, 200)
    })
})




