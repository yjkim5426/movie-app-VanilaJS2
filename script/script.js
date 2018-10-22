const container = document.getElementById("container");

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://yts.am/api/v2/list_movies.json?limit=14&quality=3D",
  true
);
request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.data.movies.forEach(movies => {
      //create movieCard & add
      const movieCard = document.createElement("div");
      movieCard.className = "movieCard";

      container.appendChild(movieCard);

      //create moviePoster & add
      const moviePoster = document.createElement("div");
      moviePoster.setAttribute("class", "moviePoster");

      movieCard.appendChild(moviePoster);

      //create moviePosterImage and set src
      const moviePosterImage = document.createElement("img");
      moviePosterImage.setAttribute("class", "moviePosterImage");
      moviePosterImage.src = movies.large_cover_image;

      moviePoster.appendChild(moviePosterImage);

      //create movieInfo
      const movieInfo = document.createElement("div");
      movieInfo.setAttribute("class", "movieInfo");

      movieCard.appendChild(movieInfo);

      //create movieTitleDiv
      const movieTitleDiv = document.createElement("div");
      movieTitleDiv.setAttribute("class", "movieTitleDiv");

      movieInfo.appendChild(movieTitleDiv);

      //create movieTitle
      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movies.title_english;

      movieTitleDiv.appendChild(movieTitle);

      //create mvoieGenre
      const movieGenre = document.createElement("div");
      movieGenre.setAttribute("class", "mvoieGenre");
      for (var i = 0; i < movies.genres.length; i++) {
        movieGenre.textContent += movies.genres[i] +", ";
      }

      movieInfo.appendChild(movieGenre);

      //create movieSummary
      const movieSummary = document.createElement("div");
      movieSummary.setAttribute("class", "movieSummary");
      movies.summary = movies.summary.substring(0, 200);
      movies.summary += "...";
      movieSummary.textContent = movies.summary;

      movieInfo.appendChild(movieSummary);

      //create title of page
      const pageTitle = document.createElement("h1");
      pageTitle.textContent = "";
    });
  } else {
    console.log("error");
  }
};

request.send();
