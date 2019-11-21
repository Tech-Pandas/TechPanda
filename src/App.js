import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import './App.css';

import HomeProductPage from './Components/HomeProductPage/HomeProductPage';
import HomeProductTechSpecs from './Components/HomeProductPage/HomeProductTechSpecs';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={HomeProductPage}/>
        <Route exact path='/techspecs' component={HomeProductTechSpecs}/>
        
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
