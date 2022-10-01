const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
   posts: [
      { id: 1, message: "Hallo, Wir geht's dir", likeCount: 13, img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
      { id: 2, message: "Mir geht's gut! Und du?r", likeCount: 5, img: "https://img.lovepik.com/element/45001/3052.png_860.png" }
   ],

   newPostText: "Zaur Krasavchik",

   profileInfo: {
      avatar: "https://img.lovepik.com/element/45001/3052.png_860.png",
      name: "Zaur",
      age: 32,
      status: "Frontend developer",
      country: "Germany"
   }
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let NewPost = {
            id: 3,
            message: state.newPostText,
            likeCount: 0,
            img: "https://img.lovepik.com/element/45001/3052.png_860.png"
         }
         state.posts.push(NewPost)
         state.newPostText = ''
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.NewText
         return state
      default:
         return state
   }
}
export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT, NewText: text
   }
}
export default profileReducer