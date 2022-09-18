import { actionTypes } from "../actionTypes";


const unloadedState = {
  isApiLoading: false,
  cryptoResult: [],
  lastRefreshedAt: new Date(),
  error: undefined,
};

export default (
  state = {},
  action,
) => {
  if (state == undefined) return unloadedState

  switch (action.type) {
    case actionTypes.FETCH_CRYPTO_START:
      return {
        ...state,
        isApiLoading: true,
      };
    case actionTypes.FETCH_CRYPTO_SUCCESS:
      return {
        ...state,
        isApiLoading: false,
        cryptoResult: [...(state.cryptoResult || []), ...action.payload]
      }
    case actionTypes.FETCH_CRYPTO_ERROR:
      return {
        ...state,
        isApiLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
