import { truncateText } from "../utils/utilityFunctions";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { FreeMode, Scrollbar, Mousewheel, Navigation } from 'swiper/modules';
import CreateFavorite from "./CreateFavorite";
import ColorScore from "./ColorScore";

register();

export default function AdditionalSlider({ twelvemovies }) {

  const [movieId, setMovieId] = useState();
  const [rotationState, setRotationState] = useState([
    false, // For Popular
    false, // For Upcoming
    false, // For Top Rated
    false, // For Now Playing
  ]);

  const handleRotation = (index, id) => {
    setMovieId(id);
    const updatedRotationState = [...rotationState];
    updatedRotationState[index] = !updatedRotationState[index];
    setRotationState(updatedRotationState);
  };

  return (
    <div className="wrapperAll">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          610: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          880: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        spaceBetween={0}
        navigation={true}
        loop={true}
        className="mySwiper"
        style={{ width: "85%" }}
        direction={'horizontal'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}>
        {twelvemovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="swiper-slide-container">
              <div className="imgBanner-pop" >
                <img
                  src={"https://image.tmdb.org/t/p/w92/" + movie.poster_path}
                  srcSet={
                    "https://image.tmdb.org/t/p/w92/" + movie.poster_path + " 92w, " +
                    "https://image.tmdb.org/t/p/w154/" + movie.poster_path + " 154w, " +
                    "https://image.tmdb.org/t/p/w185/" + movie.poster_path + " 185w, " +
                    "https://image.tmdb.org/t/p/w342/" + movie.poster_path + " 342w, " +
                    "https://image.tmdb.org/t/p/w500/" + movie.poster_path + " 500w, " +
                    "https://image.tmdb.org/t/p/w780/" + movie.poster_path + " 780w, " +
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path + " 1000w"
                  }
                  // sizes="(max-width: 600px) 92px,
                  //     (max-width: 900px) 154px,
                  //     (max-width: 1200px) 185px,
                  //     (max-width: 1600px) 342px,
                  //     (max-width: 2000px) 500px,
                  //     (max-width: 2400px) 780px,
                  //     1000px"
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <p className={`border-solid font-medium p-2 max-w-fit m-2 ${ColorScore(movie.vote_average)}`}>{parseFloat(movie.vote_average).toFixed(1)}</p>
                  <h3>{truncateText(movie.title, 7)}</h3>
                  <p className="home-movie-p">{truncateText(movie.overview, 25)}</p>
                  <Link to={`/movie/${movie.id}`} className="readMore">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <section className="description-info">
              <article className="description-title">
                <Link to={`/movie/${movie.id}`}>
                  <p className="title-info">{truncateText(movie.title, 5)}</p>
                </Link>
                <CreateFavorite movie={movie} />
              </article>
              <p className="description-date">{movie.release_date.split("-")[0]}</p>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
