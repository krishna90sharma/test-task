function getDataUser() {
    return {
       type: 'FETCH_USER'
    }
   }
   
   function getSuccessUser(data1) {
    return {
       type: 'FETCH_SUCCESS_USER',
       payload: data1
    }
   }
   
   function getFailedUser(err) {
    return {
       type: 'FAILED_USER',
       payload: err
    }
      }
   
   export function fetchUserData() {
   const thunk = async function thunk(dispatch) {
       try {
           dispatch(getDataUser());
           const body = await fetch("https://devapi.mdm.airtrack.com/store-device/fetch_all_user")
           const res = await body.json();
           console.log("Thunk User", JSON.stringify(res.Count));
           dispatch(getSuccessUser(res.Count));
       }
       catch(err) {
           dispatch(getFailedUser(err));
       }
   }
   return thunk;
   }