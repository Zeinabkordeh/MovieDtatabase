import styles from "./CategorySlider.module.css"
import { truncateText } from "../utils/utilityFunctions";

export default function CategorySlider({ twelvemovies }) {
    return (
        <div className="wrapperAll">
            <swiper-container
                slides-per-view="6"
                space-between="5"
                navigation
                className="mySwiper"
                style={{ width: "85%" }}
            >
                {twelvemovies.map((movie) => (
                    <swiper-slide key={movie.id}>
                        <div className="swiper-slide-container">
                            <div className="imgBanner-pop group flex flex-wrap">
                                <img
                                    src={
                                        "https://image.tmdb.org/t/p/w1280/" +
                                        movie.poster_path
                                    }
                                    alt={movie.title}
                                    className="movie-poster w-[250px]"
                                />
                                <div className="movie-info group-hover:opacity-100 group-hover:border-y-[solid] group-hover:border-y-[gray]">
                                    <p className="text-justify px-6 py-2">
                                        {movie.vote_average}
                                    </p>
                                    <h3>{movie.title}</h3>
                                    <p>{truncateText(movie.overview, 30)}</p>
                                    <button className="bg-[#770013] text-[white] p-2 rounded-lg">
                                        <a href="#">Read More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    );
}