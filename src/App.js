import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import './App.css';

import HomeProductPage from './Components/HomeProductPage/HomeProductPage';
import ProductSelectorPage from './Components/ProductSelectorPage/ProductSelectorPage';
import HomeProductTechSpecs from './Components/HomeProductPage/HomeProductTechSpecs';
import CartPage from './Components/CartPage/CartPage'
import IphoneSelectorPage from './Components/ProductSelectorPage/IphoneSelectorPage';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={HomeProductPage}/>
        <Route path='/productconfig' component={ProductSelectorPage}/>
        <Route path='/productconfigiphone' component={IphoneSelectorPage}/>
        <Route exact path='/techspecs' component={HomeProductTechSpecs}/>
        <Route path='/cart' component={CartPage}/>        
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
