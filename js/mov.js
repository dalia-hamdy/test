



const images = [
    "./img/1bb9f0f9dc2616088f1d1a153008cb7e.png",
    "./img/02aad8dff901b2ed9af793040b85b0dd.png"
];

let currentIndex = 1; 
const banner = document.getElementById("banner");
const midSvg = document.getElementById("mid"); 

function updateBanner() {
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";
    banner.style.backgroundRepeat = "no-repeat";
    
    updateProgressBar();
}

function updateProgressBar() {
    const rects = midSvg.querySelectorAll("rect");  

    rects.forEach((rect, index) => {
        if (index === currentIndex) {
            rect.setAttribute("fill", "#E60000"); 
        } else {
            rect.setAttribute("fill", "#333333"); 
        }
    });
}

document.getElementById("left").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
});

document.getElementById("right").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
});

updateBanner();



const cardsData1 = [
    { image: "./img/Container (1).png", title: "Action" },
    { image: "./img/Container (7).png", title: "Comedy" },
    { image: "./img/Container (8).png", title: "Drama" },
    { image: "./img/Container (2).png", title: "Adventure" },
    { image: "./img/Container (3).png", title: "Horror" }
];

const cardsContainer1 = document.querySelector(".cardcontainer .cards");
const cardsContainer2 = document.querySelector(".cardcontainer2 .cards");


function generateProductHTML() {
    let temp = cardsData1.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <div class="card-arrow">
                <a href="./playlist.html">${item.title}</a>
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.02502 15L24.775 15M24.775 15L16.3375 6.5625M24.775 15L16.3375 23.4375" 
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `).join("");    

    cardsContainer1.innerHTML = temp;
}

generateProductHTML();
function generateProductHTML2() {
    let temp = cardsData1.map(item => `
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

    cardsContainer2.innerHTML = temp;
}

generateProductHTML2();





function setupCarousel(sectionSelector, leftArrowSelector, rightArrowSelector, indicatorSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) {
        console.error(`القسم غير موجود: ${sectionSelector}`);
        return;
    }

    const leftArrow = section.querySelector(leftArrowSelector);
    const rightArrow = section.querySelector(rightArrowSelector);
    const cardsContainer = section.querySelector(".cards");
    const indicators = section.querySelectorAll(indicatorSelector);

    if (!leftArrow || !rightArrow || !cardsContainer || indicators.length === 0) {
        console.error("عناصر التحكم غير موجودة في: " + sectionSelector);
        return;
    }

    let activeIndex = 0;

    function moveCard(direction) {
        let card;
        if (direction === "right") {
            card = cardsContainer.firstElementChild;
            cardsContainer.appendChild(card);
            updateIndicator(1);
        } else {
            card = cardsContainer.lastElementChild;
            cardsContainer.insertBefore(card, cardsContainer.firstElementChild);
            updateIndicator(-1);
        }
    }

    function updateIndicator(direction) {
        activeIndex = (activeIndex + direction + indicators.length) % indicators.length;
        indicators.forEach((rect, index) => {
            rect.setAttribute("fill", index === activeIndex ? "#E60000" : "#333333");
        });
    }

    rightArrow.addEventListener("click", () => moveCard("right"));
    leftArrow.addEventListener("click", () => moveCard("left"));

    updateIndicator(0);
}

// استدعاء الدالة
setupCarousel(".section1", "#left1", "#right1", "#mid1 rect");
setupCarousel(".section2", "#left2", "#right2", "#mid2 rect");
setupCarousel(".section3", "#left3", "#right3", "#mid3 rect");
setupCarousel(".section4", "#left4", "#right4", "#mid4 rect");
setupCarousel(".section5", "#left5", "#right5", "#mid5 rect");
setupCarousel(".section11", "#left11", "#right11", "#mid11 rect");
setupCarousel(".section22", "#left22", "#right22", "#mid22 rect");
setupCarousel(".section33", "#left33", "#right33", "#mid33 rect");
setupCarousel(".section44", "#left44", "#right44", "#mid44 rect");
setupCarousel(".section55", "#left55", "#right55", "#mid55 rect");

const cardWatch =[
    { image: "./img/249e3135fa77c26d9491b72b0514c1fe.png", svg1:`<svg width="107" height="36" viewBox="0 0 107 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" fill="#141414"/>
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" stroke="#262626"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8.25C12.6152 8.25 8.25 12.6152 8.25 18C8.25 23.3848 12.6152 27.75 18 27.75C23.3848 27.75 27.75 23.3848 27.75 18C27.75 12.6152 23.3848 8.25 18 8.25ZM18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12V18C17.25 18.4142 17.5858 18.75 18 18.75H22.5C22.9142 18.75 23.25 18.4142 23.25 18C23.25 17.5858 22.9142 17.25 22.5 17.25H18.75V12Z" fill="#999999"/>
        <path d="M35.128 24V14.056L32.96 15.368V13.776L35.128 12.48H36.576V24H35.128ZM45.772 24V19.672C45.772 19.2613 45.7347 18.8667 45.66 18.488C45.5907 18.1093 45.4653 17.7707 45.284 17.472C45.108 17.168 44.868 16.928 44.564 16.752C44.2653 16.576 43.8867 16.488 43.428 16.488C43.0707 16.488 42.7453 16.5493 42.452 16.672C42.164 16.7893 41.916 16.9707 41.708 17.216C41.5 17.4613 41.3373 17.7707 41.22 18.144C41.108 18.512 41.052 18.9467 41.052 19.448L40.116 19.16C40.116 18.3227 40.2653 17.6053 40.564 17.008C40.868 16.4053 41.292 15.944 41.836 15.624C42.3853 15.2987 43.0307 15.136 43.772 15.136C44.332 15.136 44.8093 15.224 45.204 15.4C45.5987 15.576 45.9267 15.8107 46.188 16.104C46.4493 16.392 46.6547 16.7173 46.804 17.08C46.9533 17.4373 47.0573 17.8027 47.116 18.176C47.18 18.544 47.212 18.8933 47.212 19.224V24H45.772ZM39.612 24V12.48H40.892V18.84H41.052V24H39.612ZM55.903 24.24C55.311 24.24 54.759 24.1173 54.247 23.872C53.7403 23.6267 53.3057 23.2907 52.943 22.864C52.5857 22.432 52.3297 21.936 52.175 21.376L53.543 21.008C53.639 21.3867 53.8097 21.7147 54.055 21.992C54.3003 22.264 54.5857 22.4773 54.911 22.632C55.2417 22.7813 55.5857 22.856 55.943 22.856C56.4123 22.856 56.8337 22.744 57.207 22.52C57.5857 22.2907 57.8843 21.9893 58.103 21.616C58.3217 21.2373 58.431 20.824 58.431 20.376C58.431 19.912 58.3163 19.4933 58.087 19.12C57.863 18.7413 57.5617 18.4427 57.183 18.224C56.8043 18.0053 56.391 17.896 55.943 17.896C55.4363 17.896 55.0017 18.0027 54.639 18.216C54.2817 18.424 53.999 18.68 53.791 18.984L52.527 18.504L52.879 12.48H59.063V13.832H53.567L54.199 13.24L53.903 18.064L53.591 17.656C53.911 17.3147 54.2923 17.0507 54.735 16.864C55.183 16.6773 55.639 16.584 56.103 16.584C56.8177 16.584 57.4577 16.752 58.023 17.088C58.5883 17.4187 59.0363 17.872 59.367 18.448C59.6977 19.0187 59.863 19.6613 59.863 20.376C59.863 21.0853 59.6817 21.7333 59.319 22.32C58.9563 22.9013 58.4737 23.368 57.871 23.72C57.2737 24.0667 56.6177 24.24 55.903 24.24ZM62.3843 24L66.5283 13.848H61.2963V12.48H68.0563V13.848L63.9203 24H62.3843ZM80.3074 24L80.3154 18.472C80.3154 17.8267 80.142 17.3227 79.7954 16.96C79.454 16.592 79.0087 16.408 78.4594 16.408C78.1394 16.408 77.8354 16.4827 77.5474 16.632C77.2594 16.776 77.0247 17.0053 76.8434 17.32C76.662 17.6293 76.5714 18.0267 76.5714 18.512L75.8194 18.208C75.8087 17.5947 75.934 17.0587 76.1954 16.6C76.462 16.136 76.8247 15.776 77.2834 15.52C77.742 15.264 78.2594 15.136 78.8354 15.136C79.7367 15.136 80.446 15.4107 80.9634 15.96C81.4807 16.504 81.7394 17.2373 81.7394 18.16L81.7314 24H80.3074ZM69.9714 24V15.36H71.2434V17.672H71.4034V24H69.9714ZM75.1474 24L75.1554 18.528C75.1554 17.8667 74.9847 17.3493 74.6434 16.976C74.302 16.5973 73.8487 16.408 73.2834 16.408C72.7234 16.408 72.27 16.6 71.9234 16.984C71.5767 17.368 71.4034 17.8773 71.4034 18.512L70.6514 18.064C70.6514 17.504 70.7847 17.0027 71.0514 16.56C71.318 16.1173 71.6807 15.7707 72.1394 15.52C72.598 15.264 73.118 15.136 73.6994 15.136C74.2807 15.136 74.7874 15.2587 75.2194 15.504C75.6514 15.7493 75.9847 16.1013 76.2194 16.56C76.454 17.0133 76.5714 17.5547 76.5714 18.184L76.5634 24H75.1474ZM83.9831 13.832V12.36H85.4071V13.832H83.9831ZM83.9831 24V15.36H85.4071V24H83.9831ZM93.9595 24V19.672C93.9595 19.2613 93.9222 18.8667 93.8475 18.488C93.7782 18.1093 93.6528 17.7707 93.4715 17.472C93.2955 17.168 93.0555 16.928 92.7515 16.752C92.4528 16.576 92.0742 16.488 91.6155 16.488C91.2582 16.488 90.9328 16.5493 90.6395 16.672C90.3515 16.7893 90.1035 16.9707 89.8955 17.216C89.6875 17.4613 89.5248 17.7707 89.4075 18.144C89.2955 18.512 89.2395 18.9467 89.2395 19.448L88.3035 19.16C88.3035 18.3227 88.4528 17.6053 88.7515 17.008C89.0555 16.4053 89.4795 15.944 90.0235 15.624C90.5728 15.2987 91.2182 15.136 91.9595 15.136C92.5195 15.136 92.9968 15.224 93.3915 15.4C93.7862 15.576 94.1142 15.8107 94.3755 16.104C94.6368 16.392 94.8422 16.7173 94.9915 17.08C95.1408 17.4373 95.2448 17.8027 95.3035 18.176C95.3675 18.544 95.3995 18.8933 95.3995 19.224V24H93.9595ZM87.7995 24V15.36H89.0795V17.672H89.2395V24H87.7995Z" fill="#999999"/>
        </svg>` ,svg2:`<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.38086 0L12.4967 4.7114L17.9404 6.21885L14.4224 10.6381L14.6709 16.2812L9.38086 14.301L4.09079 16.2812L4.33931 10.6381L0.821351 6.21885L6.26501 4.7114L9.38086 0Z" fill="#E60000"/>
        </svg>` ,
        rate:"4.5" },
    { image: "./img/75576a1f502d45577ee959ac45e7aeea.png",svg1:`<svg width="107" height="36" viewBox="0 0 107 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" fill="#141414"/>
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" stroke="#262626"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8.25C12.6152 8.25 8.25 12.6152 8.25 18C8.25 23.3848 12.6152 27.75 18 27.75C23.3848 27.75 27.75 23.3848 27.75 18C27.75 12.6152 23.3848 8.25 18 8.25ZM18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12V18C17.25 18.4142 17.5858 18.75 18 18.75H22.5C22.9142 18.75 23.25 18.4142 23.25 18C23.25 17.5858 22.9142 17.25 22.5 17.25H18.75V12Z" fill="#999999"/>
        <path d="M35.128 24V14.056L32.96 15.368V13.776L35.128 12.48H36.576V24H35.128ZM45.772 24V19.672C45.772 19.2613 45.7347 18.8667 45.66 18.488C45.5907 18.1093 45.4653 17.7707 45.284 17.472C45.108 17.168 44.868 16.928 44.564 16.752C44.2653 16.576 43.8867 16.488 43.428 16.488C43.0707 16.488 42.7453 16.5493 42.452 16.672C42.164 16.7893 41.916 16.9707 41.708 17.216C41.5 17.4613 41.3373 17.7707 41.22 18.144C41.108 18.512 41.052 18.9467 41.052 19.448L40.116 19.16C40.116 18.3227 40.2653 17.6053 40.564 17.008C40.868 16.4053 41.292 15.944 41.836 15.624C42.3853 15.2987 43.0307 15.136 43.772 15.136C44.332 15.136 44.8093 15.224 45.204 15.4C45.5987 15.576 45.9267 15.8107 46.188 16.104C46.4493 16.392 46.6547 16.7173 46.804 17.08C46.9533 17.4373 47.0573 17.8027 47.116 18.176C47.18 18.544 47.212 18.8933 47.212 19.224V24H45.772ZM39.612 24V12.48H40.892V18.84H41.052V24H39.612ZM55.903 24.24C55.311 24.24 54.759 24.1173 54.247 23.872C53.7403 23.6267 53.3057 23.2907 52.943 22.864C52.5857 22.432 52.3297 21.936 52.175 21.376L53.543 21.008C53.639 21.3867 53.8097 21.7147 54.055 21.992C54.3003 22.264 54.5857 22.4773 54.911 22.632C55.2417 22.7813 55.5857 22.856 55.943 22.856C56.4123 22.856 56.8337 22.744 57.207 22.52C57.5857 22.2907 57.8843 21.9893 58.103 21.616C58.3217 21.2373 58.431 20.824 58.431 20.376C58.431 19.912 58.3163 19.4933 58.087 19.12C57.863 18.7413 57.5617 18.4427 57.183 18.224C56.8043 18.0053 56.391 17.896 55.943 17.896C55.4363 17.896 55.0017 18.0027 54.639 18.216C54.2817 18.424 53.999 18.68 53.791 18.984L52.527 18.504L52.879 12.48H59.063V13.832H53.567L54.199 13.24L53.903 18.064L53.591 17.656C53.911 17.3147 54.2923 17.0507 54.735 16.864C55.183 16.6773 55.639 16.584 56.103 16.584C56.8177 16.584 57.4577 16.752 58.023 17.088C58.5883 17.4187 59.0363 17.872 59.367 18.448C59.6977 19.0187 59.863 19.6613 59.863 20.376C59.863 21.0853 59.6817 21.7333 59.319 22.32C58.9563 22.9013 58.4737 23.368 57.871 23.72C57.2737 24.0667 56.6177 24.24 55.903 24.24ZM62.3843 24L66.5283 13.848H61.2963V12.48H68.0563V13.848L63.9203 24H62.3843ZM80.3074 24L80.3154 18.472C80.3154 17.8267 80.142 17.3227 79.7954 16.96C79.454 16.592 79.0087 16.408 78.4594 16.408C78.1394 16.408 77.8354 16.4827 77.5474 16.632C77.2594 16.776 77.0247 17.0053 76.8434 17.32C76.662 17.6293 76.5714 18.0267 76.5714 18.512L75.8194 18.208C75.8087 17.5947 75.934 17.0587 76.1954 16.6C76.462 16.136 76.8247 15.776 77.2834 15.52C77.742 15.264 78.2594 15.136 78.8354 15.136C79.7367 15.136 80.446 15.4107 80.9634 15.96C81.4807 16.504 81.7394 17.2373 81.7394 18.16L81.7314 24H80.3074ZM69.9714 24V15.36H71.2434V17.672H71.4034V24H69.9714ZM75.1474 24L75.1554 18.528C75.1554 17.8667 74.9847 17.3493 74.6434 16.976C74.302 16.5973 73.8487 16.408 73.2834 16.408C72.7234 16.408 72.27 16.6 71.9234 16.984C71.5767 17.368 71.4034 17.8773 71.4034 18.512L70.6514 18.064C70.6514 17.504 70.7847 17.0027 71.0514 16.56C71.318 16.1173 71.6807 15.7707 72.1394 15.52C72.598 15.264 73.118 15.136 73.6994 15.136C74.2807 15.136 74.7874 15.2587 75.2194 15.504C75.6514 15.7493 75.9847 16.1013 76.2194 16.56C76.454 17.0133 76.5714 17.5547 76.5714 18.184L76.5634 24H75.1474ZM83.9831 13.832V12.36H85.4071V13.832H83.9831ZM83.9831 24V15.36H85.4071V24H83.9831ZM93.9595 24V19.672C93.9595 19.2613 93.9222 18.8667 93.8475 18.488C93.7782 18.1093 93.6528 17.7707 93.4715 17.472C93.2955 17.168 93.0555 16.928 92.7515 16.752C92.4528 16.576 92.0742 16.488 91.6155 16.488C91.2582 16.488 90.9328 16.5493 90.6395 16.672C90.3515 16.7893 90.1035 16.9707 89.8955 17.216C89.6875 17.4613 89.5248 17.7707 89.4075 18.144C89.2955 18.512 89.2395 18.9467 89.2395 19.448L88.3035 19.16C88.3035 18.3227 88.4528 17.6053 88.7515 17.008C89.0555 16.4053 89.4795 15.944 90.0235 15.624C90.5728 15.2987 91.2182 15.136 91.9595 15.136C92.5195 15.136 92.9968 15.224 93.3915 15.4C93.7862 15.576 94.1142 15.8107 94.3755 16.104C94.6368 16.392 94.8422 16.7173 94.9915 17.08C95.1408 17.4373 95.2448 17.8027 95.3035 18.176C95.3675 18.544 95.3995 18.8933 95.3995 19.224V24H93.9595ZM87.7995 24V15.36H89.0795V17.672H89.2395V24H87.7995Z" fill="#999999"/>
        </svg>`,svg2:`<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.38086 0L12.4967 4.7114L17.9404 6.21885L14.4224 10.6381L14.6709 16.2812L9.38086 14.301L4.09079 16.2812L4.33931 10.6381L0.821351 6.21885L6.26501 4.7114L9.38086 0Z" fill="#E60000"/>
        </svg>` 
        
        ,rate:"4"
    },
    { image: "./img/a1a3873c99178a17791603cdb873c781.png", svg1:`<svg width="107" height="36" viewBox="0 0 107 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" fill="#141414"/>
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" stroke="#262626"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8.25C12.6152 8.25 8.25 12.6152 8.25 18C8.25 23.3848 12.6152 27.75 18 27.75C23.3848 27.75 27.75 23.3848 27.75 18C27.75 12.6152 23.3848 8.25 18 8.25ZM18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12V18C17.25 18.4142 17.5858 18.75 18 18.75H22.5C22.9142 18.75 23.25 18.4142 23.25 18C23.25 17.5858 22.9142 17.25 22.5 17.25H18.75V12Z" fill="#999999"/>
        <path d="M35.128 24V14.056L32.96 15.368V13.776L35.128 12.48H36.576V24H35.128ZM45.772 24V19.672C45.772 19.2613 45.7347 18.8667 45.66 18.488C45.5907 18.1093 45.4653 17.7707 45.284 17.472C45.108 17.168 44.868 16.928 44.564 16.752C44.2653 16.576 43.8867 16.488 43.428 16.488C43.0707 16.488 42.7453 16.5493 42.452 16.672C42.164 16.7893 41.916 16.9707 41.708 17.216C41.5 17.4613 41.3373 17.7707 41.22 18.144C41.108 18.512 41.052 18.9467 41.052 19.448L40.116 19.16C40.116 18.3227 40.2653 17.6053 40.564 17.008C40.868 16.4053 41.292 15.944 41.836 15.624C42.3853 15.2987 43.0307 15.136 43.772 15.136C44.332 15.136 44.8093 15.224 45.204 15.4C45.5987 15.576 45.9267 15.8107 46.188 16.104C46.4493 16.392 46.6547 16.7173 46.804 17.08C46.9533 17.4373 47.0573 17.8027 47.116 18.176C47.18 18.544 47.212 18.8933 47.212 19.224V24H45.772ZM39.612 24V12.48H40.892V18.84H41.052V24H39.612ZM55.903 24.24C55.311 24.24 54.759 24.1173 54.247 23.872C53.7403 23.6267 53.3057 23.2907 52.943 22.864C52.5857 22.432 52.3297 21.936 52.175 21.376L53.543 21.008C53.639 21.3867 53.8097 21.7147 54.055 21.992C54.3003 22.264 54.5857 22.4773 54.911 22.632C55.2417 22.7813 55.5857 22.856 55.943 22.856C56.4123 22.856 56.8337 22.744 57.207 22.52C57.5857 22.2907 57.8843 21.9893 58.103 21.616C58.3217 21.2373 58.431 20.824 58.431 20.376C58.431 19.912 58.3163 19.4933 58.087 19.12C57.863 18.7413 57.5617 18.4427 57.183 18.224C56.8043 18.0053 56.391 17.896 55.943 17.896C55.4363 17.896 55.0017 18.0027 54.639 18.216C54.2817 18.424 53.999 18.68 53.791 18.984L52.527 18.504L52.879 12.48H59.063V13.832H53.567L54.199 13.24L53.903 18.064L53.591 17.656C53.911 17.3147 54.2923 17.0507 54.735 16.864C55.183 16.6773 55.639 16.584 56.103 16.584C56.8177 16.584 57.4577 16.752 58.023 17.088C58.5883 17.4187 59.0363 17.872 59.367 18.448C59.6977 19.0187 59.863 19.6613 59.863 20.376C59.863 21.0853 59.6817 21.7333 59.319 22.32C58.9563 22.9013 58.4737 23.368 57.871 23.72C57.2737 24.0667 56.6177 24.24 55.903 24.24ZM62.3843 24L66.5283 13.848H61.2963V12.48H68.0563V13.848L63.9203 24H62.3843ZM80.3074 24L80.3154 18.472C80.3154 17.8267 80.142 17.3227 79.7954 16.96C79.454 16.592 79.0087 16.408 78.4594 16.408C78.1394 16.408 77.8354 16.4827 77.5474 16.632C77.2594 16.776 77.0247 17.0053 76.8434 17.32C76.662 17.6293 76.5714 18.0267 76.5714 18.512L75.8194 18.208C75.8087 17.5947 75.934 17.0587 76.1954 16.6C76.462 16.136 76.8247 15.776 77.2834 15.52C77.742 15.264 78.2594 15.136 78.8354 15.136C79.7367 15.136 80.446 15.4107 80.9634 15.96C81.4807 16.504 81.7394 17.2373 81.7394 18.16L81.7314 24H80.3074ZM69.9714 24V15.36H71.2434V17.672H71.4034V24H69.9714ZM75.1474 24L75.1554 18.528C75.1554 17.8667 74.9847 17.3493 74.6434 16.976C74.302 16.5973 73.8487 16.408 73.2834 16.408C72.7234 16.408 72.27 16.6 71.9234 16.984C71.5767 17.368 71.4034 17.8773 71.4034 18.512L70.6514 18.064C70.6514 17.504 70.7847 17.0027 71.0514 16.56C71.318 16.1173 71.6807 15.7707 72.1394 15.52C72.598 15.264 73.118 15.136 73.6994 15.136C74.2807 15.136 74.7874 15.2587 75.2194 15.504C75.6514 15.7493 75.9847 16.1013 76.2194 16.56C76.454 17.0133 76.5714 17.5547 76.5714 18.184L76.5634 24H75.1474ZM83.9831 13.832V12.36H85.4071V13.832H83.9831ZM83.9831 24V15.36H85.4071V24H83.9831ZM93.9595 24V19.672C93.9595 19.2613 93.9222 18.8667 93.8475 18.488C93.7782 18.1093 93.6528 17.7707 93.4715 17.472C93.2955 17.168 93.0555 16.928 92.7515 16.752C92.4528 16.576 92.0742 16.488 91.6155 16.488C91.2582 16.488 90.9328 16.5493 90.6395 16.672C90.3515 16.7893 90.1035 16.9707 89.8955 17.216C89.6875 17.4613 89.5248 17.7707 89.4075 18.144C89.2955 18.512 89.2395 18.9467 89.2395 19.448L88.3035 19.16C88.3035 18.3227 88.4528 17.6053 88.7515 17.008C89.0555 16.4053 89.4795 15.944 90.0235 15.624C90.5728 15.2987 91.2182 15.136 91.9595 15.136C92.5195 15.136 92.9968 15.224 93.3915 15.4C93.7862 15.576 94.1142 15.8107 94.3755 16.104C94.6368 16.392 94.8422 16.7173 94.9915 17.08C95.1408 17.4373 95.2448 17.8027 95.3035 18.176C95.3675 18.544 95.3995 18.8933 95.3995 19.224V24H93.9595ZM87.7995 24V15.36H89.0795V17.672H89.2395V24H87.7995Z" fill="#999999"/>
        </svg>`,svg2:`<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.38086 0L12.4967 4.7114L17.9404 6.21885L14.4224 10.6381L14.6709 16.2812L9.38086 14.301L4.09079 16.2812L4.33931 10.6381L0.821351 6.21885L6.26501 4.7114L9.38086 0Z" fill="#E60000"/>
        </svg>` 
          ,rate:"4.5"},
    { image: "./img/7f2c5ae328ae342aa889e89359b89bd8 (1).png", svg1:`<svg width="107" height="36" viewBox="0 0 107 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" fill="#141414"/>
        <rect x="0.5" y="0.5" width="106" height="35" rx="17.5" stroke="#262626"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8.25C12.6152 8.25 8.25 12.6152 8.25 18C8.25 23.3848 12.6152 27.75 18 27.75C23.3848 27.75 27.75 23.3848 27.75 18C27.75 12.6152 23.3848 8.25 18 8.25ZM18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12V18C17.25 18.4142 17.5858 18.75 18 18.75H22.5C22.9142 18.75 23.25 18.4142 23.25 18C23.25 17.5858 22.9142 17.25 22.5 17.25H18.75V12Z" fill="#999999"/>
        <path d="M35.128 24V14.056L32.96 15.368V13.776L35.128 12.48H36.576V24H35.128ZM45.772 24V19.672C45.772 19.2613 45.7347 18.8667 45.66 18.488C45.5907 18.1093 45.4653 17.7707 45.284 17.472C45.108 17.168 44.868 16.928 44.564 16.752C44.2653 16.576 43.8867 16.488 43.428 16.488C43.0707 16.488 42.7453 16.5493 42.452 16.672C42.164 16.7893 41.916 16.9707 41.708 17.216C41.5 17.4613 41.3373 17.7707 41.22 18.144C41.108 18.512 41.052 18.9467 41.052 19.448L40.116 19.16C40.116 18.3227 40.2653 17.6053 40.564 17.008C40.868 16.4053 41.292 15.944 41.836 15.624C42.3853 15.2987 43.0307 15.136 43.772 15.136C44.332 15.136 44.8093 15.224 45.204 15.4C45.5987 15.576 45.9267 15.8107 46.188 16.104C46.4493 16.392 46.6547 16.7173 46.804 17.08C46.9533 17.4373 47.0573 17.8027 47.116 18.176C47.18 18.544 47.212 18.8933 47.212 19.224V24H45.772ZM39.612 24V12.48H40.892V18.84H41.052V24H39.612ZM55.903 24.24C55.311 24.24 54.759 24.1173 54.247 23.872C53.7403 23.6267 53.3057 23.2907 52.943 22.864C52.5857 22.432 52.3297 21.936 52.175 21.376L53.543 21.008C53.639 21.3867 53.8097 21.7147 54.055 21.992C54.3003 22.264 54.5857 22.4773 54.911 22.632C55.2417 22.7813 55.5857 22.856 55.943 22.856C56.4123 22.856 56.8337 22.744 57.207 22.52C57.5857 22.2907 57.8843 21.9893 58.103 21.616C58.3217 21.2373 58.431 20.824 58.431 20.376C58.431 19.912 58.3163 19.4933 58.087 19.12C57.863 18.7413 57.5617 18.4427 57.183 18.224C56.8043 18.0053 56.391 17.896 55.943 17.896C55.4363 17.896 55.0017 18.0027 54.639 18.216C54.2817 18.424 53.999 18.68 53.791 18.984L52.527 18.504L52.879 12.48H59.063V13.832H53.567L54.199 13.24L53.903 18.064L53.591 17.656C53.911 17.3147 54.2923 17.0507 54.735 16.864C55.183 16.6773 55.639 16.584 56.103 16.584C56.8177 16.584 57.4577 16.752 58.023 17.088C58.5883 17.4187 59.0363 17.872 59.367 18.448C59.6977 19.0187 59.863 19.6613 59.863 20.376C59.863 21.0853 59.6817 21.7333 59.319 22.32C58.9563 22.9013 58.4737 23.368 57.871 23.72C57.2737 24.0667 56.6177 24.24 55.903 24.24ZM62.3843 24L66.5283 13.848H61.2963V12.48H68.0563V13.848L63.9203 24H62.3843ZM80.3074 24L80.3154 18.472C80.3154 17.8267 80.142 17.3227 79.7954 16.96C79.454 16.592 79.0087 16.408 78.4594 16.408C78.1394 16.408 77.8354 16.4827 77.5474 16.632C77.2594 16.776 77.0247 17.0053 76.8434 17.32C76.662 17.6293 76.5714 18.0267 76.5714 18.512L75.8194 18.208C75.8087 17.5947 75.934 17.0587 76.1954 16.6C76.462 16.136 76.8247 15.776 77.2834 15.52C77.742 15.264 78.2594 15.136 78.8354 15.136C79.7367 15.136 80.446 15.4107 80.9634 15.96C81.4807 16.504 81.7394 17.2373 81.7394 18.16L81.7314 24H80.3074ZM69.9714 24V15.36H71.2434V17.672H71.4034V24H69.9714ZM75.1474 24L75.1554 18.528C75.1554 17.8667 74.9847 17.3493 74.6434 16.976C74.302 16.5973 73.8487 16.408 73.2834 16.408C72.7234 16.408 72.27 16.6 71.9234 16.984C71.5767 17.368 71.4034 17.8773 71.4034 18.512L70.6514 18.064C70.6514 17.504 70.7847 17.0027 71.0514 16.56C71.318 16.1173 71.6807 15.7707 72.1394 15.52C72.598 15.264 73.118 15.136 73.6994 15.136C74.2807 15.136 74.7874 15.2587 75.2194 15.504C75.6514 15.7493 75.9847 16.1013 76.2194 16.56C76.454 17.0133 76.5714 17.5547 76.5714 18.184L76.5634 24H75.1474ZM83.9831 13.832V12.36H85.4071V13.832H83.9831ZM83.9831 24V15.36H85.4071V24H83.9831ZM93.9595 24V19.672C93.9595 19.2613 93.9222 18.8667 93.8475 18.488C93.7782 18.1093 93.6528 17.7707 93.4715 17.472C93.2955 17.168 93.0555 16.928 92.7515 16.752C92.4528 16.576 92.0742 16.488 91.6155 16.488C91.2582 16.488 90.9328 16.5493 90.6395 16.672C90.3515 16.7893 90.1035 16.9707 89.8955 17.216C89.6875 17.4613 89.5248 17.7707 89.4075 18.144C89.2955 18.512 89.2395 18.9467 89.2395 19.448L88.3035 19.16C88.3035 18.3227 88.4528 17.6053 88.7515 17.008C89.0555 16.4053 89.4795 15.944 90.0235 15.624C90.5728 15.2987 91.2182 15.136 91.9595 15.136C92.5195 15.136 92.9968 15.224 93.3915 15.4C93.7862 15.576 94.1142 15.8107 94.3755 16.104C94.6368 16.392 94.8422 16.7173 94.9915 17.08C95.1408 17.4373 95.2448 17.8027 95.3035 18.176C95.3675 18.544 95.3995 18.8933 95.3995 19.224V24H93.9595ZM87.7995 24V15.36H89.0795V17.672H89.2395V24H87.7995Z" fill="#999999"/>
        </svg>`,svg2:`<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.38086 0L12.4967 4.7114L17.9404 6.21885L14.4224 10.6381L14.6709 16.2812L9.38086 14.301L4.09079 16.2812L4.33931 10.6381L0.821351 6.21885L6.26501 4.7114L9.38086 0Z" fill="#E60000"/>
        </svg>` ,
        
        rate:"4" },


]
const watchContainer = document.querySelector(".cardcontainer-watch .cards");
const watchContainer2 = document.querySelector(".cardcontainer-watch2 .cards");

function generateStars(rate) {
    return `
        <div class="stars" style="--rating: ${rate};">
            ★★★★★
        </div>
    `;
}

function generateWatchHTML() {
    let temp = cardWatch.map(item => `
        <div class="card-f">
            <div class="imge">
                <img src="${item.image}" alt="watch Image">
            </div>
            <div class="watc-svg">
                ${item.svg1}
                ${generateStars(item.rate)}
            </div>
        </div>
    `).join("");    

    watchContainer.innerHTML = temp;
}

generateWatchHTML();
function generateStars(rate) {
    return `
        <div class="stars" style="--rating: ${rate};">
            ★★★★★
        </div>
    `;
}

function generateWatchHTML2() {
    let temp = cardWatch.map(item => `
        <div class="card-f">
            <div class="imge">
                <img src="${item.image}" alt="watch Image">
            </div>
            <div class="watc-svg">
                ${item.svg1}
                ${generateStars(item.rate)}
            </div>
        </div>
    `).join("");    

    watchContainer2.innerHTML = temp;
}

generateWatchHTML2();

document.getElementById("play-button").addEventListener("click", function () {
    var banner = document.getElementById("banner");
    var video = document.getElementById("movie-video");
    banner.style.backgroundImage = "none"; 
    video.style.display = "block"; 
    video.play(); 
  });