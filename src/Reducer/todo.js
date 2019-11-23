const INITIAL_STATE ={
    todos : []
};
  
  export default function rootReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'ADD_TODO':
          return {...state, todos : [...state.todos, action.title]}
        default:
          return state
      }
  }