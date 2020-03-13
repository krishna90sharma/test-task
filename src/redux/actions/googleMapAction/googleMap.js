export function getData(value) {
    console.log("in get Datat",value)
    return {
       type: 'FETCH_DATA',
       payload : value
    }
   }

   export function fetchDetails(value) {
    console.log("before try", value)
   const thunk = async function thunk(dispatch) {
       try {
           console.log("before", value)
           dispatch(getData(value));
       }
       catch(err) {
           console.log("Errorrrrr", err);
       }
   }
   return thunk;
   }
