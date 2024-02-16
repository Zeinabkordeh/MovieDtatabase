import { NavLink } from "react-router-dom";
import "./App.css";

function SecondNav (){

return (
    <>
    {/* Categories Nav */}
    <div className=" mt-8 mb-12 hidden relative flex-1 md:flex md:flex-col justify-center">
    <ul className="secound-nav list-none m-0 flex justify-center items-center">
        <li>
            <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
            <NavLink to="/top-rated">Top Rated</NavLink>
        </li>
        <li>
            <NavLink to="/now-playing">Now Playing</NavLink>
        </li>
        <li>
            <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
    </ul>
    </div>
    </>
    );
}

export default SecondNav;