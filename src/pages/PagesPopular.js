import { useSelector } from "react-redux";
import PagesTemplate from "./PagesTemplate";
import DropdownNav from "../components/DropdownNav";

function PagesPopular() {
    const movies = useSelector((state) => state.movies.popular);
    const twelveMovies = movies.slice(0, 12);

    return (
        <>
            <DropdownNav/>
            <PagesTemplate category="Popular" twelveMovies={twelveMovies} />
        </>
    );
}

export default PagesPopular;
