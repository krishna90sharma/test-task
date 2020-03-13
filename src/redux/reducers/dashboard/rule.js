const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_RULE':
           return {
               ...state
           }
       case 'FETCH_SUCCESS_RULE':
           return {
               ...state,
               currentRulesCount: actions.payload
           }
       case 'FAILED_RULE':
           return {
               ...state
           }
       default:
           return state;            
   }
   }