import { dispatch } from "../../App";
import { actionTypes } from "../actionTypes";

export function getCryptoData(offset = 0, limit = 50) {
  dispatch({ type: actionTypes.FETCH_CRYPTO_START });
  var params = {offset, limit}
  var query = '?' + ( new URLSearchParams( params ) ).toString();

  fetch(`https://api.coincap.io/v2/assets${query}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: actionTypes.FETCH_CRYPTO_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_CRYPTO_ERROR,
        error: err,
      });
    });
}
