
const initState={
    counter:0
}
const reducer=(state=initState,action)=>{
   if(action.type==='INCREMENT'){
return{ 
    counter:state.counter+1

}
   }  
   return state;
  
};

export default reducer;