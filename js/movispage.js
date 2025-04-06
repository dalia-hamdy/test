const ratingCard = [
    { titel: "IMDb", rate: 4.5 },
    { titel: "Streamvibe", rate: 4 },
];

const rateContainer = document.querySelector(".rate-card");

ratingCard.forEach(card => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        let fillColor = i <= Math.floor(card.rate) ? "#E60000" : "#999999"; 
        let halfStar = (i - card.rate) === -0.5 ? true : false; 

        stars += `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.85 6.18L22 7.24L16.92 12.4L18.02 19.5L12 16.26L5.98 19.5L7.08 12.4L2 7.24L9.15 6.18L12 0Z"
                fill="${halfStar ? "url(#halfGradient)" : fillColor}"/>
            ${halfStar ? `
            <defs>
                <linearGradient id="halfGradient">
                    <stop offset="50%" stop-color="#E60000"/>
                    <stop offset="50%" stop-color="#999999"/>
                </linearGradient>
            </defs>
            ` : ""}
        </svg>
        `;
    }

    rateContainer.innerHTML += `
         <div class="rcarde">
            <h4>${card.titel}</h4>
            <div class="star">
              ${stars}
              <span>${card.rate}</span>
            </div>
          </div>
    `;
});
const leftCard = [
    { title1: "Aniket Roy", title2: "From India", par: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.", rate: "4.5" },
    { title1: "Swaraj Roy", title2: "From India", par: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.", rate: "5" }
];

const cardStarRight = document.querySelector(".review-cards");

leftCard.forEach(card => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        let fillColor = i <= Math.floor(card.rate) ? "#E60000" : "#999999";
        let halfStar = (i - card.rate) === -0.5 ? true : false;
        let gradientId = `halfGradient${Math.random().toString(36).substr(2, 5)}`;

        stars += `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.85 6.18L22 7.24L16.92 12.4L18.02 19.5L12 16.26L5.98 19.5L7.08 12.4L2 7.24L9.15 6.18L12 0Z"
                fill="${halfStar ? `url(#${gradientId})` : fillColor}"/>
            ${halfStar ? `
            <defs>
                <linearGradient id="${gradientId}">
                    <stop offset="50%" stop-color="#E60000"/>
                    <stop offset="50%" stop-color="#999999"/>
                </linearGradient>
            </defs>
            ` : ""}
        </svg>
        `;
    }

    cardStarRight.innerHTML += `
        <div class="card-rev">
            <div class="cars-rev-text">
                <div class="text1">
                    <h4>${card.title1}</h4>
                    <h6>${card.title2}</h6>
                </div>
                <div class="rev-star">
                    ${stars}
                      <span>${card.rate}</span>
                </div>
            </div>
            <div class="card-re-parg">
                <p>${card.par}</p>
            </div>
        </div>
    `;
});

function setupCarousel(sectionSelector, leftArrowSelector, rightArrowSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) {
        console.error(`القسم غير موجود: ${sectionSelector}`);
        return;
    }

    const leftArrow = section.querySelector(leftArrowSelector);
    const rightArrow = section.querySelector(rightArrowSelector);
    const cardsContainer = section.querySelector(".cast-img");

    if (!leftArrow || !rightArrow || !cardsContainer) {
        console.error("عناصر التحكم غير موجودة في: " + sectionSelector);
        return;
    }

    function moveCard(direction) {
        let card;
        if (direction === "right") {
            card = cardsContainer.firstElementChild;
            cardsContainer.appendChild(card);
        } else {
            card = cardsContainer.lastElementChild;
            cardsContainer.insertBefore(card, cardsContainer.firstElementChild);
        }
    }

    rightArrow.addEventListener("click", () => moveCard("right"));
    leftArrow.addEventListener("click", () => moveCard("left"));
}

// استدعاء الدالة للقسم الخاص بالصور
setupCarousel(".cast", ".cast-arrow .prev", ".cast-arrow .next");
