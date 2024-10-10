
// let typed;  // Declare typed variable outside for access in other functions

// function startTyping() {
//   typed = new Typed(".typing", {
//     strings: ["","Alvas Singari Melam","അൽവാസ് ശിങ്കാരിമേളം","ಆಳ್ವಾಸ್ ಸಿಂಗಾರಿ ಮೇಳ","अल्वास् सिंगारि मेलम्"],
//     typeSpeed: 100,   // Typing speed
//     backSpeed: 150,   // Backspacing speed
//     backDelay: 1000,  // Delay before starting to backspace
//     startDelay: 400,  // Delay before typing starts
//     loop: true,
//     showCursor: false,
//   });
// }

// function stopTyping() {
//   if (typed) {
//     typed.destroy();  // Destroy the Typed instance to stop the animation
//   }
// }

// function checkWindowSize() {
//   if (window.innerWidth >= 400) {
//     startTyping();
//   } else {
//     stopTyping();
//   }
// }

// // Check window size on load
// checkWindowSize();

// // Add event listener for window resize
// window.addEventListener("resize", checkWindowSize);

let typed; // Declare typed variable outside for access in other functions

function startTyping() {
  typed = new Typed(".typing", {
    strings: ["", "Alva's Singari Melam"],
    typeSpeed: 100, // Typing speed
    backSpeed: 150, // Backspacing speed
    backDelay: 1000, // Delay before starting to backspace
    startDelay: 400, // Delay before typing starts
    loop: true,
    showCursor: false,
  });
}

function stopTyping() {
  if (typed) {
    typed.destroy(); // Destroy the Typed instance to stop the animation
  }
}

function checkWindowSize() {
  const typingElement = document.querySelector(".typing");

  if (window.innerWidth >= 400) {
    startTyping();
  } else {
    stopTyping();
    typingElement.textContent = "Alva's Singari Melam"; // Directly display text
  }
}

// Check window size on load
window.onload = checkWindowSize;

// Add event listener for window resize
window.addEventListener("resize", checkWindowSize);

// aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i=0; i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",()=>{
            a.classList.remove("not-active")
            for(let i=0;i<totalSection;i++){
                allSection[i].classList.remove("back-section")
            }
            for(let j=0; j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
                navList[j].querySelector("a").classList.add("not-active");

            }
            a.classList.add("active")
            showSection(a)
            if(window.innerWidth<1200){
                asideSectionTogglerBtn()
            }
        })
    }

    function showSection(element){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#"+target).classList.add("active")
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click",()=>{
                asideSectionTogglerBtn();
            })

            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection;i++){
                    allSection[i].classList.toggle("open");
                }
            }

        
