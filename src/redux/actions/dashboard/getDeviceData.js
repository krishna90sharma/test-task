function getData() {
    return {
       type: 'FETCH_DEVICE'
    }
   }

   function getSuccess(data) {
    return {
       type: 'FETCH_SUCCESS_DEVICE',
       payload: data
    }
   }

   function getFailed(err) {
    return {
       type: 'FAILED_DEVICE',
       payload: err
    }
      }

   export function fetchDeviceData() {
   const thunk = async function thunk(dispatch) {
       try {
           dispatch(getData());
        //    const body = await fetch("https://map.mdm.airtrack.com/iot_data_receiver_db")
           const body = await fetch("https://devapi.mdm.airtrack.com/store-device/fetch_all_devices");
           const res = await body.json();
           console.log("Thunk", JSON.stringify(res.Items[0].imei));
           dispatch(getSuccess(res.Count));
       }
       catch(err) {
           dispatch(getFailed(err));
       }
   }
   return thunk;
   }
