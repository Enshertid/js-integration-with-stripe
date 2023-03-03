import logo from './logo.svg';
import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import List from "./List";
import Card from "./Card";
import PaymentBase from "./PaymentBase";
import {PaymentElement} from "@stripe/react-stripe-js";


function App(props) {
  return (
      <>
        <a href="/">home</a>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
              <Route path="/payment" element={<PaymentBase/>}/>
              <Route path="/card" element={<Card />} />
            {/*<Route path="/alipay" element={<Alipay />} />*/}
            {/*<Route path="/acss-debit" element={<AcssDebit />} />*/}
            {/*<Route path="/us-bank-account-debit" element={<UsBankAccountDebit />} />*/}
            {/*<Route path="/apple-pay" element={<ApplePay />} />*/}
            {/*<Route path="/afterpay-clearpay" element={<AfterpayClearpay />} />*/}
            {/*<Route path="/bancontact" element={<Bancontact />} />*/}
            {/*<Route path="/becs-debit" element={<BecsDebit />} />*/}
            {/*<Route path="/boleto" element={<Boleto />} />*/}
            {/*<Route path="/eps" element={<Eps />} />*/}
            {/*<Route path="/fpx" element={<Fpx />} />*/}
            {/*<Route path="/giropay" element={<Giropay />} />*/}
            {/*<Route path="/grabpay" element={<GrabPay />} />*/}
            {/*<Route path="/google-pay" element={<GooglePay />} />*/}
            {/*<Route path="/ideal" element={<Ideal />} />*/}
            {/*<Route path="/klarna" element={<Klarna />} />*/}
            {/*<Route path="/oxxo" element={<Oxxo />} />*/}
            {/*<Route path="/p24" element={<P24 />} />*/}
            {/*<Route path="/sepa-debit" element={<SepaDebit />} />*/}
            {/*<Route path="/sofort" element={<Sofort />} />*/}
            {/*<Route path="/wechat-pay" element={<WeChatPay />} />*/}
            {/*<Route path="/konbini" element={<Konbini />} />*/}
            {/*<Route path="/jp-bank-transfer" element={<JPBankTransfer />} />*/}
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
