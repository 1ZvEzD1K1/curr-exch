export type CurrencyState = {
  usd: number ;
  eur: number ;
  pln: number ;
  error: string;
  isLoading: boolean;
};

type rate = {
  rate: number
}

export enum CurrencyActionEnum {
  GET_USD_SUCCESS = "GET_USD_SUCCESS",
  GET_EUR_SUCCESS = "GET_EUR_SUCCESS",
  GET_PLN_SUCCESS = "GET_PLN_SUCCESS",
  GET_CURRENCY_ERROR = "GET_CURRENCY_ERROR",
  CURRENCY_LOADING = "CALENDAR_LOADING",
}

export interface GetUsdSuccessAction {
  type: CurrencyActionEnum.GET_USD_SUCCESS;
  payload: number;
}

export interface GetEurSuccessAction {
  type: CurrencyActionEnum.GET_EUR_SUCCESS;
  payload: number;
}

export interface GetPlnSuccessAction {
  type: CurrencyActionEnum.GET_PLN_SUCCESS;
  payload: number;
}

export interface CurrencyLoading {
  type: CurrencyActionEnum.CURRENCY_LOADING;
  payload: boolean;
}

export interface GetCurrencyErrorAction {
  type: CurrencyActionEnum.GET_CURRENCY_ERROR;
  payload: string;
}

export type CurrencyActions =
  | GetUsdSuccessAction
  | GetEurSuccessAction
  | GetPlnSuccessAction
  | GetCurrencyErrorAction
  | CurrencyLoading;
