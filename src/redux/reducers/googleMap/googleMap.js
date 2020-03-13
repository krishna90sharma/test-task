const initialState = {
    state: []
   }
   
   export default function(state=initialState , actions) {
   switch(actions.type) {
       case 'FETCH_DATA':
        return {
            ...state,
            currentMapData: actions.payload
        }
         
       default:
           return state;            
   }
   }