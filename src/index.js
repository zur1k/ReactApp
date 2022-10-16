import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {


   root.render(
      <BrowserRouter>
         < App
            store={store}
            state={state}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state)
})






