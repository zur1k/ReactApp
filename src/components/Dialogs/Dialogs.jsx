import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'




let Dialogs = (props) => {

   let NewMessageElement = React.createRef()

   let AddNewMessage = () => {

      // props.addMessage()
      props.dithpatch({ type: 'ADD-MESSAGE' })


   }

   let onMessageChange = () => {

      let text = NewMessageElement.current.value
      // props.updateNewMessageText(text)
      props.dithpatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', NewText: text })


   }

   let dialogElements = props.state.dialogData.map(d => (<DialogItem name={d.name} id={d.id} img={d.img} />))

   let messageElements = props.state.messageData.map((m) => <Message message={m.message} test={'test'} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogElements}

         </div>
         <div className="messages">
            {messageElements}
         </div>
         <div>
            <textarea
               onChange={onMessageChange}
               value={props.state.newMessageText}
               ref={NewMessageElement}
            />
            <button onClick={AddNewMessage}>New message</button>
         </div>
      </div >
   )
}

export default Dialogs
