// import { NavLink } from "react-router-dom";

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


// export function (email, password) {
//     console.log("Inside service" + JSON.stringify(email))
//     console.log("Inside service" + JSON.stringify(password))
//   return dispatch => {
//     dispatch(setLoginPending(true));
//     dispatch(setLoginSuccess(false));
//     dispatch(setLoginError(null));

//     callLoginApi(email, password, error => {
//       dispatch(setLoginPending(false));
//       if (!error) {
//         dispatch(setLoginSuccess(true));
//       } else {
//         dispatch(setLoginError(error));
//       }
//     });
//   }
// }

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

// function () {
//   setTimeout(() => {
//     if (email === 'admin@example.com' && password === 'admin') {
//         console.log("Inside success");

//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'));
//     }
//   }, 1000);
// }

export const login = (email, password, callback) => {
    return dispatch => new Promise((resolve,reject) => {
        if (email === 'admin@example.com' && password === 'admin') {
            resolve(callback);
        }
        // axios.get(`${updatesURL}${filePath}`).then(res => {
           
        // })
        // .catch(err => {
        //     reject(err);
        // })
    });
}

export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}