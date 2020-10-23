const redux = require('redux');
const createStore=redux.createStore;
const initState={
    counter:0
}
//reducer
const rootReducer=(state=initState,action)=>{
if(action.type==='INC_COUNTER')
    
return{
...state,
counter:state.counter+1
};
if(action.type==='ADD_COUNTER')
    
return{
...state,
counter:state.counter+action.value
};
//store
const store=createStore(rootReducer);
console.log(store.getState());
//subscribe
store.subscribe(()=>{
    console.log("subscribtion",store.getState());
}) 
//dispatch actio type
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',vaule:10});
console.log(store.getState());
}
