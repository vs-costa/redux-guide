import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
};

// MODO COM IF
// const userReducer = (state = initialState, action) => {
//     // tudo que retornar dentro do if vai estar relacionado ao nosso state
//     if (action.type === UserActionTypes.LOGIN) {
//         return {...state, currentUser: action.payload};
//     };
//     // logica para logout
//     if (action.type === UserActionTypes.LOGOUT){
//         return {...state, currentUser: null}
//     }
//     // se nenhuma action ocorrer, ele retorna o state
//     return state;
// };

// MODO COM SWITCH CASE
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {...state, currentUser: action.payload};
        case UserActionTypes.LOGOUT:
            return {...state, currentUser: null}
        default:
            return state;
    }
};

export default userReducer;