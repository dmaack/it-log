import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';


//old way of writing 
// export const getLogs = () => {
//     // redux thunk allows us to just return a function
//     return async (dispatch) => {
//         setLoading()

//         const res = await fetch('/logs')
//         const data = await res.json()

//         dispaytch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    } 
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}