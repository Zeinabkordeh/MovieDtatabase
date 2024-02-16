import { truncateText } from "../utils/utilityFunctions";
import style from "./BannerSlider.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ColorScore from "./ColorScore";

export default function BannerSlider({ movies }) {
  const fiveMovies = movies.slice(0, 5);

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3500
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Autoplay, Navigation]}
      className={style['bannerContainer']}
    >
      {fiveMovies.map((movie) => (
        <SwiperSlide key={movie.id} className="">
          <div className={style['imgBanner']}>
            <img
              className={style['imgBanner-poster']}
              src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              alt={movie.title}
            />
            <img
              className={style['imgBanner-backdrop']}
              src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
              alt={movie.title}
            />
            <div className={style['info-banner']}>
              <h2>{movie.title}</h2>
              <p>{movie.release_date.split("-")[0]}</p>
              <p className="home-movie-p">{truncateText(movie.overview, 50)}</p>
              <p className={`border-solid font-medium max-w-fit p-2 ml-1 ${ColorScore(movie.vote_average)}`}>{parseFloat(movie.vote_average).toFixed(1)}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}