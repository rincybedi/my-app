
type FetchCryptoDataStartAction = {
    type: "FETCH_CRYPTO_START",
};

type FetchCryptoDataSuccessAction = {
    type: "FETCH_CRYPTO_SUCCESS",
    payload: any,
};

type FetchCryptoDataErrorAction = {
    type: "FETCH_CRYPTO_ERROR",
    error: any
};

export type CryptoActionTypes =
    | FetchCryptoDataStartAction
    | FetchCryptoDataSuccessAction
    | FetchCryptoDataErrorAction