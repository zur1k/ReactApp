import reportWebVitals from './reportWebVitals';
import { store } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addMessage, addPost, updateNewPostText, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {


   root.render(
      <BrowserRouter>
         < App

            state={state}
            dithpatch={store.dithpatch.bind(store)}
         // addPost={store.addPost.bind(store)}
         // updateNewPostText={store.updateNewPostText.bind(store)}
         // addMessage={store.addMessage.bind(store)}
         // updateNewMessageText={store.updateNewMessageText.bind(store)}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();






