import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import './App.css';

import HomeProductPage from './Components/HomeProductPage/HomeProductPage';
import ProductSelectorPage from './Components/ProductSelectorPage/ProductSelectorPage';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={HomeProductPage}/>
        <Route path='/productconfig' component={ProductSelectorPage}/>
        
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
