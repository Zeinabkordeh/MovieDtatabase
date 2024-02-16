import { createSlice } from "@reduxjs/toolkit";

const appStorageName = "userFavorites";

function getFavs() {
    let favsFromStorage = localStorage.getItem(appStorageName);
    if (favsFromStorage === null) {
        favsFromStorage = [];
    } else {
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const initialState = {
    favsList: getFavs(),
};

export const favsSlice = createSlice({
    name: "favs",
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
// export const { addFav, deleteFav } = favsSlice.actions;

export default favsSlice.reducer;
