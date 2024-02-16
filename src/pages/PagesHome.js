import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AdditionalSlider from "../components/AdditionalSlider";
import BannerSlider from "../components/BannerSlider";
import DropdownNav from "../components/DropdownNav";
import SecondNav from "../components/SecondNav";

export default function PagesHome() {
    const location = useLocation();
    // Check if the current route is the landing page ("/landingpage")
    const isLandingPage = location.pathname === "/";
    // Select movies from state
    const popularMovies = useSelector((state) => state.movies.popular);
    const upcomingMovies = useSelector((state) => state.movies.upcoming);
    const topRatedMovies = useSelector((state) => state.movies.topRated);
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
    const twelveMovies = popularMovies.slice(0, 12);

    // Render the Banner component only on the landing page
    if (isLandingPage) {
        return (
            // <div className="banner">
            <>
                {isLandingPage && (
                    <>
                        <BannerSlider movies={popularMovies} />
                        <section>
                            <DropdownNav></DropdownNav>
                            <SecondNav></SecondNav>
                            <h2 className="main-title">Popular</h2>{" "}
                            {/* Add the label for Popular */}
                            <AdditionalSlider twelvemovies={twelveMovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Upcoming</h2>{" "}
                            {/* Add the label for Upcoming */}
                            <AdditionalSlider twelvemovies={upcomingMovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Top Rated</h2>{" "}
                            {/* Add the label for Top Rated */}
                            <AdditionalSlider twelvemovies={topRatedMovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Now Playing</h2>{" "}
                            {/* Add the label for Now Playing */}
                            <AdditionalSlider twelvemovies={nowPlayingMovies} />
                        </section>
                    </>
                )}
            </>
            // </div>
        );
    }

    // Return null for other routes (won't render the Banner component)
    // return null;
}

// export PageHome;
