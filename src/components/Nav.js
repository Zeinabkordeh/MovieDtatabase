import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState({
        open: false,
        hidden: "hidden",
        isOpen: "",
    });
    // const [hidden, setHidden] = useState("hidden");
    const [isFirstIcon, setIsFirstIcon] = useState(true); 

    const toggleHamburger = () => {
        if (hamburgerOpen.open === false) {
            setHamburgerOpen({ open: true, hidden: "", isOpen: "is-open" });
            setIsFirstIcon(false);
        } else {
            setHamburgerOpen({ open: false, hidden: "hidden", isOpen: "" });
            setIsFirstIcon(true);
        }
    };

    return (
        <>
            <nav className="relative z-[999] h-full bg-theme-red flex drop-shadow-md sm:justify-between">
                {/* Logo Nav */}
                <div className="bg-theme-red p-4 flex-auto relative z-[999] md:flex-[0_1_20%] md:right-0">
                    <NavLink to="/">
                        <img
                            className="my-0 mx-auto relative top-1/2 -translate-y-1/2 -right-5 md:right-0"
                            width="120"
                            src={require("../images/logo/logo1.png")}
                            alt="logo"
                        />
                    </NavLink>
                </div>
                {/* Hamburger Nav */}
                <div
                    className={ 
                        `navbar-menu w-[10%] bg-theme-red group ` +
                        hamburgerOpen.isOpen + ` md:flex md:flex-col justify-center`
                    }
                >
                    {/* Hamburger Button */}
                    <div
                        className="bg-theme-red h-full text-center relative z-[999] md:hidden"
                        onClick={toggleHamburger}
                    >
                        <span className="align-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white">
                                <path
                                    d={
                                        isFirstIcon
                                            ? "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                                            : "M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1"
                                    }
                                />
                            </svg>
                        </span>
                    </div>
                    {/* Hamburger Menu */}
                    <ul
                        className={`main-nav-first bg-theme-red list-none text-center absolute inset-x-0 z-[998] flex flex-col py-4 gap-4 shadow-inner drop-shadow-2xl transition ease-in-out duration-700 -translate-y-[100%] group-[.is-open]:translate-y-2 md:z-[999] md:-translate-y-0 md:duration-0 md:relative md:shadow-none md:drop-shadow-none md:text-left md:py-0 md:gap-2 `}
                    >
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Account</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
