import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewPostText, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {


   root.render(
      <BrowserRouter>
         < App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
         />
      </BrowserRouter>
   );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();






