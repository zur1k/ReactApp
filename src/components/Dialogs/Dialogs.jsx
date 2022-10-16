import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialog-reducer'




let Dialogs = (props) => {
   let state = props.DialogsPage

   let NewMessageElement = React.createRef()

   let dialogElements = state.dialogData.map(d => (<DialogItem name={d.name} id={d.id} img={d.img} />))

   let messageElements = state.messageData.map((m) => <Message message={m.message} test={'test'} />)

   let AddNewMessage = () => {
      props.addMessage()
   }

   let onMessageChange = (e) => {
      let body = e.target.value
      props.updateNewMessageBody(body)
   }



   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogElements}

         </div>
         <div className={s.messageWrapper}>
            <div className={s.messages}>
               <div>
                  {messageElements}
               </div>
            </div>
            <div className={s.textareaForm}>
               <textarea
                  onChange={onMessageChange}
                  value={state.newMessageText}
                  ref={NewMessageElement}
                  placeholder="Enter your message bitch !!"
               />
               <div className={s.btn}>
                  <button onClick={AddNewMessage}>New message</button>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Dialogs
