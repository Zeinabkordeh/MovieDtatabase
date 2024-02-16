import { NavLink } from "react-router-dom";
import "./Footer.css";
import ScrollToTopButton from "./ScrollToTopButton.js";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; 2023 TABZ Movie Database</p>
                        <p>Contact us: contact@example.com</p>
                    </div>
                    <ul className="web-nav">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul className="cat-nav">
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
            </footer>
            <ScrollToTopButton />
        </>
    );
}

export default Footer;
