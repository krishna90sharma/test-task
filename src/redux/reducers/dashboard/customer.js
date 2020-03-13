const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_CUSTOMER':
           return {
               ...state
           }
       case 'FETCH_SUCCESS_CUSTOMER':
           return {
               ...state,
               currentCustomersCount: actions.payload
           }
       case 'FAILED_CUSTOMER':
           return {
               ...state
           }
       default:
           return state;            
   }
   }