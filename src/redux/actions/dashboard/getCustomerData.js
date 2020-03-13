function getDataCustomer() {
    return {
       type: 'FETCH_CUSTOMER'
    }
   }
   
   function getSuccessCustomer(data1) {
    return {
       type: 'FETCH_SUCCESS_CUSTOMER',
       payload: data1
    }
   }
   
   function getFailedCustomer(err) {
    return {
       type: 'FAILED_CUSTOMER',
       payload: err
    }
      }
   
   export function fetchCustomerData() {
   const thunk = async function thunk(dispatch) {
       try {
           dispatch(getDataCustomer());
           const body = await fetch("https://devapi.mdm.airtrack.com/store-device/fetch_all_customer")
           const res = await body.json();
           console.log("Thunk CUSTOMER", JSON.stringify(res.Count));
           dispatch(getSuccessCustomer(res.Count));
       }
       catch(err) {
           dispatch(getFailedCustomer(err));
       }
   }
   return thunk;
   }