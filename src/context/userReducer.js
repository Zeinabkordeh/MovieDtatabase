
function UserReducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            const newUser = {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            } // chat gpt helped with ordering here. declare new user so payload can be used in localstorage

            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated', 'true');

            return newUser;
        case 'DELETE_USER':
            const destroyUser = {
                ...state,
                user: null,
                isAuthenticated: false,
            }

            return destroyUser;

        case 'INITIALIZE_USER':
            const storedUser = localStorage.getItem('user');
            const storedIsAuthenticated = localStorage.getItem('isAuthenticated');

            return {
                ...state,
                user: storedUser ? JSON.parse(storedUser) : null,
                isAuthenticated: storedIsAuthenticated === 'true',
            };

        default:
            return state;
    }
}

export default UserReducer;