import { UserContext } from "../context/userState";
import { useContext } from "react";
import { useState } from "react";
import { FavoriteContext } from "../context/movieState";
import SearchBar from "../components/SearchBar";

function PageLogin() {

    const { user, createUser, deleteUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState("");
    const [error, setError] = useState("");
    const { favorites } = useContext(FavoriteContext);

    function handleLogIn() {
        if (newUser.trim() === "") {
            setError("Username cannot be blank");
        } else {
            createUser({ name: newUser });
            setError("");
        }
    }

    function handleLogOut() {
        deleteUser();
    }

    const favoritesCount = JSON.parse(localStorage.getItem('favorites') || '[]').length;

    return (
        <div className=" md:m-auto">
            {user ? (
                <div>
                    <h1 className="ml-4">Welcome, {user.name}!</h1>
                    <p className="ml-4 mb-4">You currently have {favoritesCount} favorited movies.</p>
                    {favorites.length > 0 ? (
                        <p className="ml-4">Checkout your favorites <a href="/favorites" className="text-red-700">Here</a></p>
                    ) : (
                        <div className="search">
                            <p className="ml-4">Explore our database below.</p>
                            <SearchBar />
                        </div>
                    )}
                    <button onClick={handleLogOut} className="p-2 my-4 bg-theme-red text-white border-none ml-4">Logout</button>
                </div>
            ) : (
                <div className="flex flex-col-reverse m-8 md:flex-row md:w-4/5 md:m-auto">
                    <div className="login-form flex justify-center flex-col">
                        <h2 className="pb-2">Log In:</h2>
                        <input
                            type="text"
                            placeholder="Enter a Username"
                            value={newUser}
                            className="my-2 p-2"
                            onChange={(e) => {
                                setNewUser(e.target.value);
                                setError("");
                            }}
                        />
                        <button onClick={handleLogIn} className="p-2 bg-theme-red text-white border-none">Log In</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <h1 className="p-8">Welcome! Log in here to view your favorites, account details and more...</h1>

                </div>
            )}
        </div>
    );
};

export default PageLogin;