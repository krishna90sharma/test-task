function getDataRule() {
    return {
       type: 'FETCH_RULE'
    }
   }
   
   function getSuccessRule(data1) {
    return {
       type: 'FETCH_SUCCESS_RULE',
       payload: data1
    }
   }
   
   function getFailedRule(err) {
    return {
       type: 'FAILED_RULE',
       payload: err
    }
      }
   
   export function fetchRuleData() {
   const thunk = async function thunk(dispatch) {
       try {
           dispatch(getDataRule());
           const body = await fetch("https://devapi.mdm.airtrack.com/store-device/fetch_all_rules")
           const res = await body.json();
           console.log("Thunk rules", JSON.stringify(res.Count));
           dispatch(getSuccessRule(res.Count));
       }
       catch(err) {
           dispatch(getFailedRule(err));
       }
   }
   return thunk;
   }