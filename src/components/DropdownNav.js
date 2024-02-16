import { NavLink } from "react-router-dom";
import { useState } from "react";

function DropdownNav() {
    const [isOpen, setIsOpen] = useState({ state: false, class: "", arrowClass: '' });

    const toggle = () => {
        if (isOpen.state === false) {
            setIsOpen({ state: true, class: "is-open", arrowClass: 'rotate-180 opacity-50' });
        } else {
            setIsOpen({ state: false, class: "", arrowClass: '' });
        }
    };

    return (
        <>
            <div
                className={
                    `text-center bg-slate-600 my-5 mx-auto w-1/2 border border-solid border-slate-50 rounded-sm group ` +
                    isOpen.class + ` md:hidden`
                }
            >
                {/* Dropdown Button */}
                <div
                    className="bg-slate-800 p-3 flex justify-between"
                    onClick={toggle}
                >
                    <span className="grow ml-4">Categories</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-[1.3rem] w-6 fill-slate-50 align-middle pt-px ` + isOpen.arrowClass} viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </div>
                {/* Dropdown List */}
                <nav 
                className="h-0 overflow-hidden transition-[height] ease-out duration-500 group-[.is-open]:h-40"
                >
                    <ul className="bg-slate-600 py-2 list-none">
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/popular">Popular</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/top-rated">Top Rated</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/now-playing">Now Playing</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/upcoming">Upcoming</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default DropdownNav;
