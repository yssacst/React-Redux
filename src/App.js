import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import PlayList from './components/playlist';
import Playing from './components/Playing';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Provider store={ store }>
           <PlayList />
           <Playing />
           <Footer/>
      </Provider>
    </div>
  )
}

export default App
