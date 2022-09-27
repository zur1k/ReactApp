const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {
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

export default profileReducer