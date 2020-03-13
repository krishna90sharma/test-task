const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_USER':
           return {
               ...state
           }
       case 'FETCH_SUCCESS_USER':
           return {
               ...state,
               currentUsersCount: actions.payload
           }
       case 'FAILED_USER':
           return {
               ...state
           }
       default:
           return state;            
   }
   }