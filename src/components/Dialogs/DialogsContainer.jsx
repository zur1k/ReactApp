import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
   return {
      DialogsPage: state.DialogsPage

   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addNewMessage: () => {
         dispatch(addMessageActionCreator())
      },
      onMessageChange: (body) => {
         dispatch(updateNewMessageTextActionCreator(body))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
