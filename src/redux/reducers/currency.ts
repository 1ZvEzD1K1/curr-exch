import {
  CurrencyActionEnum,
  CurrencyActions,
  CurrencyState,
} from "./typesCurrency";

const initialState: CurrencyState = {
  usd: 0,
  eur: 0,
  pln: 0,
  error: "",
  isLoading: false,
};

export default function currencyReducer(
  state = initialState,
  action: CurrencyActions
): CurrencyState {
  switch (action.type) {
    case CurrencyActionEnum.GET_USD_SUCCESS:
      return { ...state, usd: action.payload };
    case CurrencyActionEnum.GET_EUR_SUCCESS:
      return { ...state, eur: action.payload };
    case CurrencyActionEnum.GET_PLN_SUCCESS:
      return { ...state, pln: action.payload };
    case CurrencyActionEnum.CURRENCY_LOADING:
      return { ...state, isLoading: action.payload };
    case CurrencyActionEnum.GET_CURRENCY_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
