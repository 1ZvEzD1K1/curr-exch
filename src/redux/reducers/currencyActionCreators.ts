import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../store";
import {
  CurrencyActionEnum,
  CurrencyLoading,
  GetCurrencyErrorAction,
  GetEurSuccessAction,
  GetPlnSuccessAction,
  GetUsdSuccessAction,
} from "./typesCurrency";

export const CurrencyActionCreators = {
  getUsdSuccess: (payload: number): GetUsdSuccessAction => ({
    type: CurrencyActionEnum.GET_USD_SUCCESS,
    payload,
  }),
  getEurSuccess: (payload: number): GetEurSuccessAction => ({
    type: CurrencyActionEnum.GET_EUR_SUCCESS,
    payload,
  }),
  getPlnSuccess: (payload: number): GetPlnSuccessAction => ({
    type: CurrencyActionEnum.GET_PLN_SUCCESS,
    payload,
  }),
  getCurrencyError: (payload: any): GetCurrencyErrorAction => ({
    type: CurrencyActionEnum.GET_CURRENCY_ERROR,
    payload,
  }),
  calendarLoading: (payload: boolean): CurrencyLoading => ({
    type: CurrencyActionEnum.CURRENCY_LOADING,
    payload,
  }),
  getCurrency: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(CurrencyActionCreators.calendarLoading(true));
      const usd: AxiosResponse = await axios.get('https://api.exchangerate.host/convert?from=UAH&to=USD')
      dispatch(CurrencyActionCreators.getUsdSuccess(usd.data.info.rate))
      const eur: AxiosResponse = await axios.get('https://api.exchangerate.host/convert?from=UAH&to=EUR')
      dispatch(CurrencyActionCreators.getEurSuccess(eur.data.info.rate))
      const pln: AxiosResponse = await axios.get('https://api.exchangerate.host/convert?from=UAH&to=PLN')
      dispatch(CurrencyActionCreators.getPlnSuccess(pln.data.info.rate))
      dispatch(CurrencyActionCreators.calendarLoading(false));
    } catch (error: any) {
      const err: AxiosError = error;
      dispatch(CurrencyActionCreators.getCurrencyError(err.message));
    }
  },
};
