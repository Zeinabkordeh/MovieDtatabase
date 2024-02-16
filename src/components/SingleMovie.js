import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./SingleMovie.css";
import YouTubePopup from "./YouTubePopup";
import "./YouTubePopup.css";
import { fetchMovieData } from "../api/APIFunctions";
import ColorScore from "./ColorScore";
import CreateFavorite from "./CreateFavorite";

function convertVoteAverageToPercentage(voteAverage) {
  voteAverage = Math.min(10, Math.max(0, parseFloat(voteAverage)));
  return Math.round(voteAverage * 10);
}

function SingleMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState({ cast: [], crew: [] });
  const [movieVideo, setMovieVideo] = useState(null);
  const [enableTrailer, setEnableTrailer] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {

    fetchMovieData(`${movieId}?api_key=ef270fffed69bc1d47de32648ff050cd&language=en-US`)
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setMovie(null);
      });


    fetchMovieData(`${movieId}/credits?api_key=ef270fffed69bc1d47de32648ff050cd`)
      .then((data) => {
        setMovieCredits({ ...movieCredits, cast: data.cast.slice(0, 6) });
      })
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
        setMovieCredits({ cast: [], crew: [] });
      });


    fetchMovieData(`${movieId}/videos?api_key=ef270fffed69bc1d47de32648ff050cd`)
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setMovieVideo(data.results[0]);
        } else {
          setMovieVideo(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie video:", error);
        setMovieVideo(null);
      });


  }, [movieId]);

  if (!movie || (!movieCredits.cast.length && !movieCredits.crew.length)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        className="single-backdrop"
        src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
        alt={movie.title}
      />
      <Link className="arrow-back" to="#" onClick={() => window.history.back()}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
      </Link>
      <section className="single-info">
        <article className="image-container">
          <img
            className="single-poster"
            src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
            alt={movie.title}
          />
        </article>
        <article className="single-description">
          <h1>{movie.title}</h1>

          <div>
            <ul className="movie-extra-info">
              Genres:
              {genres &&
                genres.map(genre => (
                  <li key={genre.id} className="genre-container">
                    {genre.name},
                  </li>
                ))}
            </ul>
          </div>

          <div className="single-detail">
            <p className="single-rd">Release Date: {movie.release_date}</p>
            <p className={`border-solid font-medium max-w-fit p-1 m-4 ${ColorScore(movie.vote_average)}`}>{parseFloat(movie.vote_average).toFixed(1)}</p>
            <CreateFavorite movie={movie} />
            {movieVideo ? (
              <div className="movie-video">
                <a className="trailer-sec"
                  onClick={() => setEnableTrailer(!enableTrailer)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z" />
                  </svg>
                  Play Trailer

                </a>
                {enableTrailer && <YouTubePopup embedId={movieVideo.key} onClose={() => setEnableTrailer(false)} />}
              </div>
            ) : (
              <p>No trailer available</p>
            )}
          </div>
          <h3 className="overview-title">Overview:</h3>
          <p className="overview-text">{movie.overview}</p>
        </article>
      </section>
      <section className="casts-lists">
        <ul className="casts-list">
          {movieCredits.cast.map((actor) => (
            <li key={actor.id} className="cast-info">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SingleMovie;
