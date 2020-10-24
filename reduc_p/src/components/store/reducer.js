
const initState={
    counter:0,
    results:[]
}
const reducer=(state=initState,action)=>{
   if(action.type==='INCREMENT'){
    const newState=Object.assign({},state);
    newState.counter=state.counter+1;
return{
    newState
}
   }  
   if(action.type==='DECREMENT'){
    return{ 
        ...state,
        counter:state.counter-1
    
    }
       }  
       if(action.type==='ADD5'){
        return{ 
            ...state,
            counter:state.counter+action.val
        
        }
           }  
           if(action.type==='SUB5'){
            return{ 
                ...state,
                counter:state.counter-action.val
            
            }
               }
             
            if(action.type==='STORE_RESULT'){
                return{ 
                    ...state,
                    results:state.results.concat({id:new Date(),value:state.counter})
                
                }
                   }
                   if(action.type==='DELETE_RESULT'){
                //    const id=2;
                //  const newArray=[...state.results]
               const updatedArray=state.results.filter((result)=>result.id!==action.resultElId);
 

                    return{ 
                        ...state,
                        results:updatedArray
                    
                    }
                       }
   return state;
  
};

export default reducer;