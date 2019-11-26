import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';

//----Stripe----//
import { StripeProvider, Elements } from 'react-stripe-elements';
import { stripeApiKey } from './stripeApiKey';
//----EndStripe----//
//PlzWrk
import HomeProductPage from './Components/HomeProductPage/HomeProductPage';
import ProductSelectorPage from './Components/ProductSelectorPage/ProductSelectorPage';
import HomeProductTechSpecs from './Components/HomeProductPage/HomeProductTechSpecs';
import CartPage from './Components/CartPage/CartPage'

import Stadia from './Components/Gaming/Stadia';
import StadiaSpecs from './Components/Gaming/StadiaSpecs';

import IphonePage from './Components/OtherProductPages/IphonePage';
import IphoneTechSpecsPage from './Components/OtherProductPages/IphoneTechSpecsPage';

import IphoneSelectorPage from './Components/ProductSelectorPage/IphoneSelectorPage';

// MacBook Import //

import MacBookPro from './Components/MacBookPro/MacBookPro';

function App() {
  return (
    <div className="App">
      <StripeProvider apiKey={stripeApiKey}>
        <Elements>
          <Provider store={store}>
            <HashRouter>
              <Route exact path='/' component={HomeProductPage} />
              <Route path='/productconfig' component={ProductSelectorPage} />
              <Route path='/productconfigiphone' component={IphoneSelectorPage} />
              <Route exact path='/techspecs' component={HomeProductTechSpecs} />
              <Route path='/cart' component={CartPage} />
              <Route path='/stadia' component={Stadia} />
              <Route path='/stadiaspecs' component={StadiaSpecs} />
              <Route path='/iphone' component={IphonePage} />
              <Route path='/iphone-tech-specs' component={IphoneTechSpecsPage} />
              <Route path='/mac-book-pro' component={MacBookPro} />
            </HashRouter>
          </Provider>
        </Elements>
      </StripeProvider>
    </div>
  );
}

export default App;
