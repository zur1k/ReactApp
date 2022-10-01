const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
   messageData: [
      { id: 1, message: "Hallo Guten Tag" },
      { id: 1, message: "Wie geht's dir?" },
      { id: 1, message: "Mir geht's gut" },
      { id: 1, message: "Wo wonhst du?" }

   ],

   dialogData: [
      { id: 1, name: "Zaur", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 2, name: "Dima", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 3, name: "Lola", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 4, name: "Lena", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 5, name: "Kira", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 6, name: "Bonya", img: "https://img.lovepik.com/element/45001/3052.png_860.png" }
   ],

   newMessageText: ""
}

const dialogReducer = (state = initialState, action) => {
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
export const addMessageActionCreator = () => {
   return {
      type: ADD_MESSAGE
   }
}
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT, NewText: text
   }
}


export default dialogReducer