const redux = require('redux');

const createStore = redux.createStore;

//state inicial
const initialState ={
    users:[]
}

//Reducer
//state y action
const mainReducer = (state = initialState,action) =>{
    if(action.type === 'ADD_USER'){
        return{
            ...state,
            users: action.name
        }
    }else if(action.type === 'GET_USERS'){
        return {
            ...state
        }
    }

    return state;
}

//create store y store
//3 parametros: reducer, state initial, applymiddleware
const store = createStore(mainReducer);

//Suscribe o suscripcion
store.subscribe(() =>{
    console.log('Something change...', store.getState());
})

// dispatch es la forma de cambiar el state
store.dispatch({type: 'ADD_USER' , name: 'Dave'});
store.dispatch({type: 'GET_USERS'});