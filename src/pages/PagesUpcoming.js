import { useSelector } from "react-redux";
import PagesTemplate from "./PagesTemplate";
import DropdownNav from "../components/DropdownNav";

function PagesUpcoming() {
    const movies = useSelector((state) => state.movies.upcoming);
    const twelveMovies = movies.slice(0, 12);

    return (
        <>
            <DropdownNav></DropdownNav>
            <PagesTemplate category="Upcoming" twelveMovies={twelveMovies} />
        </>
    );
}

export default PagesUpcoming;