document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname.split("/").pop(); 

    navLinks.forEach(link => {
        if (link.getAttribute("href").split("/").pop() === currentPath) {
            link.classList.add("active");
        }

        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const cardsData = [
    { image: "./img/Container (1).png", title: "Action" },
    { image: "./img/Container (7).png", title: "Comedy" },
    { image: "./img/Container (8).png", title: "Drama" },
    { image: "./img/Container (2).png", title: "Adventure" },
    { image: "./img/Container (3).png", title: "Horror" }
];

const cardsContainers = document.querySelectorAll(".explore-categories-cards .cards");

function generateProductHTML() {
    let temp1 = cardsData.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <div class="card-arrow">
                <a href="./movies.html">${item.title}</a>
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.02502 15L24.775 15M24.775 15L16.3375 6.5625M24.775 15L16.3375 23.4375" 
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `).join("");    

    // تحديث جميع العناصر المتطابقة
    cardsContainers.forEach(container => {
        container.innerHTML = temp1;
    });
}

generateProductHTML();


const provideData = [
    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Smartphones", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },

    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Tablet", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },

    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Smart TV", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },
    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Smartphones", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },

    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Tablet", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },

    { 
        svg: '<i class="fa fa-mobile"></i>', 
        title: "Smart TV", 
        disc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" 
    },

        ];
        const provideSections = document.querySelectorAll(".provide-cards .cards");

        function generateprovideDataHTML() {
            let temp = provideData.map(item => `
                <div class="card">
                    <div class="card-componanat">
                        <div class="ffa">
                            ${item.svg}
                        </div>
                        <h4>${item.title}</h4>
                    </div>
                    <div class="card-p">
                        <p>${item.disc}</p>
                    </div>
                </div>
            `).join("");    
        
            // تطبيق البيانات على كل عنصر مطابق
            provideSections.forEach(section => {
                section.innerHTML = temp;
            });
        }
        
        generateprovideDataHTML();
        


function toggleText(icon) {
    let card = icon.closest(".card-comp"); 
        let paragraph = card.querySelector(".card-qusetion p");
    let path = icon.querySelector("#toggle-path");

    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block"; 
        path.setAttribute("d", "M23.75 13.75H6.25C5.91848 13.75 5.60054 13.8817 5.36612 14.1161C5.1317 14.3505 5 14.6685 5 15C5 15.3315 5.1317 15.6495 5.36612 15.8839C5.60054 16.1183 5.91848 16.25 6.25 16.25H23.75C24.0815 16.25 24.3995 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3995 13.8817 24.0815 13.75 23.75 13.75Z");
    } else {
        paragraph.style.display = "none"; 
        path.setAttribute("d", "M23.75 14.25H16.25V6.75H13.75V14.25H6.25V16.75H13.75V24.25H16.25V16.75H23.75V14.25Z"); 
    }
}



const choosedata = [
    { title: "Basic Plan", disc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."  ,price:"$9.99",prisp:"/month"},
    { title: "Standard Plan", disc: "Access to a wider selection of movies and shows, including most new releases and exclusive content."  ,price:"$12.99",prisp:"/month"},

    { title: "Premium Plan", disc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing."  ,price:"$14.99",prisp:"/month"},

];

const chooseContainers = document.querySelectorAll(".choose-cards .cards");

function generateChooseHTML() {
    let temp = choosedata.map(item => `
      <div class="card">
        <div class="card-text">
          <h4>${item.title}</h4>
          <p>${item.disc}</p>
        </div>
        <div class="card-price">
          <p>${item.price}<span>/month</span></p>
        </div>
        <div class="card-btns">
          <a class="active">Start Free Trial</a>
          <a>Choose Plan</a>
        </div>
      </div>`).join("");    

    // تحديث كل العناصر التي تطابق المحدد
    chooseContainers.forEach(container => {
        
        container.innerHTML = temp;
    });
}

generateChooseHTML();

function setupCarousel(sectionSelector, leftArrowSelector, rightArrowSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) {
        console.error(`القسم غير موجود: ${sectionSelector}`);
        return;
    }


    const leftArrow = document.getElementById(leftArrowSelector);
    const rightArrow = document.getElementById(rightArrowSelector);
    const cardsContainer = section.querySelector(".cards");

    if (!leftArrow || !rightArrow || !cardsContainer) {
        console.error("عناصر التحكم غير موجودة في: " + sectionSelector);
        return;
    }

    function moveCard(direction) {
        if (direction === "right") {
            let card = cardsContainer.firstElementChild;
            cardsContainer.appendChild(card); // ينقل العنصر الأول إلى النهاية
        } else {
            let card = cardsContainer.lastElementChild;
            cardsContainer.insertBefore(card, cardsContainer.firstElementChild); // ينقل العنصر الأخير إلى البداية
        }
    }

    rightArrow.addEventListener("click", () => moveCard("right"));
    leftArrow.addEventListener("click", () => moveCard("left"));
}

// استدعاء الدالة للقسم المطلوب
setupCarousel(".explore-categories-cards", "arrow-left", "arrow-right");
