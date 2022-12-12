import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from './Orders';
import Order from './Order';

const promise = loadStripe('pk_test_51MCOdySGgdhuP7yKdXa5HfGwrXZPKaSa6iymD3vxmrfZlIqO1am1wqPCpj8PJXzXpZWoPWwjdYrH56gOuvguGZZ80022RxtrdM');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={[<Login />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path='/orders' element={[<Header />, <Orders/>, <Order/>]} />
          {/* <Route path='/order' element={[<Header />, <Order/>]} /> */}
          <Route path='/' element={[<Header />, <Home />]} />
          {/* <Elements stripe={promise}>
      <Payment />
    </Elements> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
