let initialState = {
   navigation: [
      { navItem: "Profile", },
      { navItem: "Dialogs", },
      { navItem: "News", },
      { navItem: "Music", },
      { navItem: "Settings", },
   ],

   friends: [
      {
         name: "Lola", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
      },
      {
         name: "Kira", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
      },
      {
         name: "Eva", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
      }
   ]
}

const navBarReducer = (state = initialState, action) => {

   return state
}

export default navBarReducer