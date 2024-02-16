import { useSelector } from "react-redux";
import PagesTemplate from "./PagesTemplate";
import DropdownNav from "../components/DropdownNav";

function PagesNowPlaying() {
    const movies = useSelector((state) => state.movies.nowPlaying);
    const twelveMovies = movies.slice(0, 12);

    return (
        <>

            <DropdownNav></DropdownNav>
            <PagesTemplate category="Now Playing" twelveMovies={twelveMovies} />
        </>
    );
}

export default PagesNowPlaying;
