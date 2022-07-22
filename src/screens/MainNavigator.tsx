import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import Eur from "../components/Eur";
import Intro from "../components/Intro";
import Loader from "../components/Loader";
import Pln from "../components/Pln";
import Usd from "../components/Usd";
import { useAppDispatch } from "../hooks/useTypedDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CurrencyActionCreators } from "../redux/reducers/currencyActionCreators";

const MainNavigator: FC = () => {
  const dispatch = useAppDispatch();

  const currency  = useTypedSelector((state) => state.currency);
  //console.log(currency)

  useEffect(() => {
    //@ts-ignore
    dispatch(CurrencyActionCreators.getCurrency())
  }, [])

  if (currency.isLoading) {
    return <Loader/>
  }

  if (currency.error) {
    return <Error message={currency.error}/>
  }

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="UAH-USD" element={<Usd rate={currency.usd}/>} />
      <Route path="UAH-EUR" element={<Eur rate={currency.eur}/>} />
      <Route path="UAH-PLN" element={<Pln rate={currency.pln}/>} />
    </Routes>
  );
};

export default MainNavigator;
