
const initState={
    counter:0
}
const reducer=(state=initState,action)=>{
   if(action.type==='INCREMENT'){
return{ 
    counter:state.counter+1

}
   }  
   if(action.type==='DECREMENT'){
    return{ 
        counter:state.counter-1
    
    }
       }  
       if(action.type==='ADD5'){
        return{ 
            counter:state.counter+5
        
        }
           }  
           if(action.type==='SUB5'){
            return{ 
                counter:state.counter-5
            
            }
               }  
   return state;
  
};

export default reducer;