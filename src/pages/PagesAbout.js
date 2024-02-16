import React from "react";
import "./PagesAbout.css";
import tmdbLogo from "../images/tmdb.jpeg";

function PageAbout() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to TABZ Movie Database! We are a passionate team of
                    developers and movie enthusiasts who created this platform to
                    help you explore the fascinating world of cinema.
                </p>
                <p className="about-description">
                    Our mission is to provide you with a user-friendly and
                    comprehensive movie database, making it easy for you to
                    discover, learn about, and enjoy movies from all genres and eras.
                </p>
                <p className="about-description">
                    Whether you're a casual moviegoer or a dedicated cinephile,
                    we've got you covered. Dive into the world of film, discover
                    hidden gems, and revisit your favorite classics—all right here
                    on our platform, one tab at a time!
                </p>
            </div>
            <div className="attribution">
                <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
                <p className="tmdb-attribution">
                    This product uses the TMDb API but is not endorsed or certified by TMDb.
                </p>
            </div>
        </div>
    );
}

export default PageAbout;