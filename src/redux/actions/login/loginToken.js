function getDetails() {
    return {
       type: 'FETCH_DETAILS'
    }
   }

   function getSuccess(data) {
    return {
       type: 'FETCH_SUCCESS_DETAILS',
       payload: data
    }
   }

   function getFailed(err) {
    return {
       type: 'FAILED_DETAILS',
       payload: err
    }
      }

   export function fetchDetails(payload) {
   const thunk = async function thunk(dispatch) {
       try {
           dispatch(getDetails());
        //    const body = await fetch("https://map.mdm.airtrack.com/iot_data_receiver_db")
        //    const body = await fetch("https://api.mdm.airtrack.com/user-svc/login", payload);
        //    const res = await body.json();
        //    console.log("Thunk", JSON.stringify(res.data.token));
        //    localStorage.setItem("token", res.data.token)
        //    localStorage.setItem("refreshToken", res.data.refresh_token)
           dispatch(getSuccess(payload));
       }
       catch(err) {
        dispatch(getFailed(err));
       }
   }
   return thunk;
   }
