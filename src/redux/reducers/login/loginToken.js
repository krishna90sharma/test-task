const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_DETAILS':
           return {
               ...state
           }
       case 'FETCH_SUCCESS_DETAILS':
           return {
               ...state,
               token: actions.payload
           }
       case 'FAILED_DETAILS':
           return {
               ...state
           }
       default:
           return state;            
   }
   }