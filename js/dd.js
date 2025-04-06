async function getAllMovies() {
    try {
        const response = await fetch("http://localhost:3000/movies");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        console.log("Fetched Data:", data); 

        displayMovies(data); 

    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function displayMovies(movies) {
    let container = document.querySelector(".container");
    
    if (!container) {
        console.error("❌ Element with class 'container' not found!");
        return;
    }

    container.innerHTML = ""; 

    movies.forEach((movie) => {
        let movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <div class="movie-card-wrapper">
                <div class="movie-card-img">
                    <img src="${movie.poster}" alt="${movie.title} Poster">
                </div>
                <div class="movie-card-info">
                    <a href="moviepageopen.html?slug=${movie.slug}&id=${movie.id}">${movie.title}</a>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
                    <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
                    <p><strong>Duration:</strong> ${movie.duration}</p>
                    <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
                </div>
            </div>
        `;

        container.appendChild(movieCard);
    });
}


// استدعاء الدالة عند تحميل الصفحة
getAllMovies();
