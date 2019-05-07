//import axios from 'axios'

export const login = (payload) => ({
    type: 'LOGIN',
    payload
})

// export const decrement = (payload) => ({
//     type: 'DECREMENT',
//     payload
// })

// export const fetchUser = () => {
//     return (dispatch) => {
//         dispatch(addUserToStore)
//         return axios
//             .get("https://swapi.co/api/people")
//             .then(response => {
//               dispatch(addUserToStore(response.data.results))
//         })
//     }
// }

// const addUserToStore = (response) => ({
//     type: 'ADDUSERTOSTORE',
//     payload: response
// })