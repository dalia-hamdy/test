let starsContainer = document.getElementById("stars");

let starSVG = `
<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M12 0L16.1545 6.28187L23.4127 8.2918L18.7221 14.1841L19.0534 21.7082L12 19.068L4.94658 21.7082L5.27793 14.1841L0.587322 8.2918L7.84553 6.28187L12 0Z" fill="#E60000"/>
</svg>`;

for (let i = 0; i < 5; i++) {
    starsContainer.innerHTML += starSVG;
}

let starsContainer2 = document.getElementById("stars2");

let starSVG2 = `
<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L16.1545 6.28187L23.4127 8.2918L18.7221 14.1841L19.0534 21.7082L12 19.068L4.94658 21.7082L5.27793 14.1841L0.587322 8.2918L7.84553 6.28187L12 0Z" fill="#E60000"/>
</svg>`;

for (let i = 0; i < 5; i++) {
    starsContainer2.innerHTML += starSVG2;
}


  

const reviews = [
    { name: "Aniket Roy", country: "India", rating: 4.5, parg: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it." },
    { name: "Swaraj", country: "India", rating: 5, parg: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind." }
];

const reviewsContainer = document.querySelector(".reviews-rate");

reviews.forEach(review => {
    let card = `
    <div class="card_compant-all">
        <div class="card-compnant">
            <div class="card-name">
                <h3>${review.name}</h3>
                <h6>From ${review.country}</h6>
            </div>
            <div class="stars">
                ${new Array(5).fill(0).map((_, index) => {
                    let fillColor = "#D3D3D3"; 
                    if (index < Math.floor(review.rating)) {
                        fillColor = "#E50000"; 
                    } else if (index === Math.floor(review.rating) && review.rating % 1 !== 0) {
                        return `
                        <svg stroke="currentColor" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="half-star">
                                    <stop offset="50%" stop-color="#E50000"/>
                                    <stop offset="50%" stop-color="#D3D3D3"/>
                                </linearGradient>
                            </defs>
                            <path fill="url(#half-star)"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                        `;
                    }
                    return `
                    <svg stroke="currentColor" fill="${fillColor}" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                    </svg>
                    `;
                }).join("")} <span class="rating-value">${review.rating.toFixed(1)}</span>

            </div>
        </div>
        <div class="star-text"> 
            <p>${review.parg}</p>
        </div>
    </div>
    `;

    reviewsContainer.innerHTML += card;
});



