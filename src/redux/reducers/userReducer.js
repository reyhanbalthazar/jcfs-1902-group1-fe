const INITIAL_STATE = {
    iduser: null,
    idrole: "",
    idstatus: "",
    idaddress: "",
    email: "",
    username: "",
    fullname: "",
    password: "",
    age: "",
    gender: "",
    phone: "",
    profile_image: "",
    addressList :[]
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("LOGIN_SUCCESS REDUCER", action.payload)
            return {
                ...state,
                iduser: action.payload.iduser,
                idrole: action.payload.idrole,
                idstatus: action.payload.idstatus,
                idaddress: action.payload.idaddress,
                email: action.payload.email,
                username: action.payload.username,
                fullname: action.payload.fullname,
                password: action.payload.password,
                age: action.payload.age,
                gender: action.payload.gender,
                phone: action.payload.phone,
                profile_image: action.payload.profile_image
            }
        case "GET_ADDRESS":
            console.log("GET_ADDRESS REDUCER", action.payload)
            return {
                ...state, addressList:action.payload
            }
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state
    }
}