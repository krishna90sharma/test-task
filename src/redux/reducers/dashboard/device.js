const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_DEVICE':
           return {
               ...state
           }
       case 'FETCH_SUCCESS_DEVICE':
           return {
               ...state,
               currentDeviceCount: actions.payload
           }
       case 'FAILED_DEVICE':
           return {
               ...state
           }
       default:
           return state;            
   }
   }