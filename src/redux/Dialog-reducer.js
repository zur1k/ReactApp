const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.NewText
         return state;

      case ADD_MESSAGE:
         let NewMessage =
            state.newMessageText

         state.newMessageText = ''
         state.messageData.push({ id: 6, message: NewMessage })
         return state;

      default: return state
   }

}

export default dialogReducer