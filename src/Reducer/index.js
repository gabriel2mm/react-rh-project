const INITIAL_STATE ={
  todos : [],
  user: null
};
  
  export default function rootReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'LOGIN':
          return {...state, user: action.user}
        case 'LOGOUT': 
          return {...state, user: null}
        default:
          return {...state}
      }
  }