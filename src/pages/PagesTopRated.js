import { useSelector } from "react-redux";
import PagesTemplate from "./PagesTemplate";
import DropdownNav from "../components/DropdownNav";

function PagesTopRated() {
    const movies = useSelector((state) => state.movies.topRated);
    const twelveMovies = movies.slice(0, 12);

    return (
        <>
            <DropdownNav></DropdownNav>
            <PagesTemplate category="Top Rated" twelveMovies={twelveMovies} />
        </>
    );
}

export default PagesTopRated;
