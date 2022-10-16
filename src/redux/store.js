import dialogReducer from "./Dialog-reducer"
import musicReducer from "./Music-reducer"
import profileReducer from "./Profile-reducer"
import navBarReducer from "./Navbar-reducer"
import newsReducer from "./News-reducer"
import settingsReducer from "./Setting-reducer"


export let store = {
   _callSubscribe() {
      console.log('state is changed!!!')
   },

   _state: {

      ProfilePage: {
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
      },

      DialogsPage: {

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
      },
      MusicPage: {

         trackData: [
            { track: "Billy Alish - Bad guy", trackTime: "04:11" },
            { track: "Kasta - Makarena", trackTime: "02:41" },
            { track: "KALUSH - Stefania", trackTime: "03:01" },
            { track: "Tiesto - trafic", trackTime: "07:51" },
            { track: "Dope - Horny", trackTime: "05:22" },
            { track: "Max Barskiy - Tumany", trackTime: "03:18" },
            { track: "Fac2Face - кошка", trackTime: "02:44" },
            { track: "Linkin park - Numb", trackTime: "03:31" },
            { track: "Anacondaz - Генератор жизни", trackTime: "04:55" }
         ]
      },

      NewsPage: {

         NewsData: [
            {
               title: "Special news. Ukraine ist Super country!",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FODCTjX_PRSJJWk8TyV13vG6BOuTuxzGew&usqp=CAU",
               text: "Ukraine is a country known for its beautiful and diverse landscape, well-preserved culture and tradition, beautiful women and a terrible nuclear disaster. Actually, Ukraine is the largest country in Europe, not including Russia. And although the tensions with the big neighbour are ongoing, we will still give you enough reasons why Ukraine is generally worth a visit. Withouth further ado, here’s what makes Ukraine so special!"
            },
            {
               title: "UA in my heart ",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6dj_qS8RrJ_J1T74CzJUrMraVm-6N7nMRA&usqp=CAU",
               text: "Ukraine is a country known for its beautiful and diverse landscape, well-preserved culture and tradition, beautiful women and a terrible nuclear disaster. Actually, Ukraine is the largest country in Europe, not including Russia. And although the tensions with the big neighbour are ongoing, we will still give you enough reasons why Ukraine is generally worth a visit. Withouth further ado, here’s what makes Ukraine so special!"
            }, {
               title: "Pray of Ukriane ",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEox94HXpF_Byr9Sxb8wsdEqbWW4-Hpv4Ug&usqp=CAU",
               text: "Ukraine is a country known for its beautiful and diverse landscape, well-preserved culture and tradition, beautiful women and a terrible nuclear disaster. Actually, Ukraine is the largest country in Europe, not including Russia. And although the tensions with the big neighbour are ongoing, we will still give you enough reasons why Ukraine is generally worth a visit. Withouth further ado, here’s what makes Ukraine so special!"
            }
         ]
      },

      NavBar: {

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
      },
      settingPage: {

      }
   },
   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscribe = observer /// patern observer  !!  addEventListener
   },

   dispatch(action) {
      this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
      this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action)
      this._state.MusicPage = musicReducer(this._state.MusicPage, action)
      this._state.NavBar = navBarReducer(this._state.NavBar, action)
      this._state.NewsPage = newsReducer(this._state.NewsPage, action)
      this._state.settingPage = settingsReducer(this._state.settingPage, action)

      this._callSubscribe(this._state)
   },

}


