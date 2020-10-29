export const initialState = {
    user: null,
    playlists: null,
    playing: false,
    item: null,
    token:'BQDgiae8EBrD9itPxSfdrczopRExMDxtd2N1fzV9PjwRhmopw3YMc7ANRbT4tD2bbX5KfcBveKWQ0vz8dLJar0z5XJVhgSyobUoyh0Hqqd_yxKZBaTkGMoHrIcdaDt7Av0Ts5Ay38wnG5bTR2OmWyZfffA'
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists:action.payload
            }
        default:
            return state;
    }
}

export default reducer