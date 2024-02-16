const accessToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A";

const apiKey = "ef270fffed69bc1d47de32648ff050cd";

const authHeader = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: accessToken,
    },
};

export const fetchMovies = async (category) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
            authHeader
        );
        let data = await response.json();
        console.log("RUN FETCH");
        return data.results;
    } catch (error) {
        console.error(error);
    }
}


export const fetchMovieData =  (url) => {
   return fetch(`https://api.themoviedb.org/3/movie/${url}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        });
}
