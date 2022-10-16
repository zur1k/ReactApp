import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialog-reducer'
import Dialogs from './Dialogs'




let DialogsContainer = (props) => {
   let state = props.store.getState().DialogsPage

   let addNewMessage = () => {
      props.store.dispatch(addMessageActionCreator())
   }

   let onMessageChange = (body) => {
      props.store.dispatch(updateNewMessageTextActionCreator(body))
   }

   return (
      <Dialogs updateNewMessageBody={onMessageChange} addMessage={addNewMessage} DialogsPage={state} />
   )
}

export default DialogsContainer
