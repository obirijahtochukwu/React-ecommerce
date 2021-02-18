import React from 'react'
import {Switch,Route} from 'react-router-dom';
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navigation from './NavBar';
import Cart from './components/Cart';
import Details from './components/Details';
import Main from './components/Main';
import PhoneGoods from './components/PhoneGoods';
import ShoeGoods from './components/ShoeGoods';
import SportsGoods from './components/SportsGoods';
import SignIn from './components/SignIn';
import Default from './components/Default';

export default function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/phone-accessories' component={PhoneGoods} />
        <Route path='/shoe-products' component={ShoeGoods} />
        <Route path='/sports-goods' component={SportsGoods} />
        <Route path='/signin' component={SignIn} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  )
}
