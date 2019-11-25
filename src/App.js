import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import './App.css';

import HomeProductPage from './Components/HomeProductPage/HomeProductPage';
import ProductSelectorPage from './Components/ProductSelectorPage/ProductSelectorPage';
import HomeProductTechSpecs from './Components/HomeProductPage/HomeProductTechSpecs';
import CartPage from './Components/CartPage/CartPage'

import Stadia from './Components/Gaming/Stadia';

import IphoneSelectorPage from './Components/ProductSelectorPage/IphoneSelectorPage';

function App() {
  useEffect(() => window.scrollTo(0,0), [])
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={HomeProductPage}/>
        <Route path='/productconfig' component={ProductSelectorPage}/>
        <Route path='/productconfigiphone' component={IphoneSelectorPage}/>
        <Route exact path='/techspecs' component={HomeProductTechSpecs}/>
        <Route path='/cart' component={CartPage}/>        
        <Route path='/stadia' component={Stadia}/>        
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
