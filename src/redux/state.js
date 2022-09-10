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

      dialogsPage: {

         messageData: [
            { message: "Hallo Guten Tag" },
            { message: "Wie geht's dir?" },
            { message: "Mir geht's gut" },
            { message: "Wo wonhst du?" }
         ],

         dialogData: [
            { id: 1, name: "Zaur", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
            { id: 2, name: "Dima", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
            { id: 3, name: "Lusia", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
            { id: 4, name: "Lena", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
            { id: 5, name: "Sobacyuga", img: "https://img.lovepik.com/element/45001/3052.png_860.png" },
            { id: 6, name: "Bonya", img: "https://img.lovepik.com/element/45001/3052.png_860.png" }
         ],

         newMessageText: "asadadd text"
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

      sidebar: {

         navigation: [
            { navItem: "Profile", },
            { navItem: "Dialogs", },
            { navItem: "News", },
            { navItem: "Music", },
            { navItem: "Settings", },
         ],

         friends: [
            {
               name: "Lusia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
            },
            {
               name: "Dimos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
            },
            {
               name: "Sobacyuga", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU"
            }
         ]
      }
   }
   ,
   getState() {
      return this._state
   },
   addPost() {
      debugger
      let NewPost = {
         id: 3,
         message: this._state.ProfilePage.newPostText,
         likeCount: 0,
         img: "https://img.lovepik.com/element/45001/3052.png_860.png"
      }

      this._state.ProfilePage.posts.push(NewPost)
      this._state.ProfilePage.newPostText = ''
      this._callSubscribe(this._state)
   },
   addMessage() {
      let NewMessage = {
         message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messageData.push(NewMessage)
      this._state.dialogsPage.newMessageText = ''

      this._callSubscribe(this._state)

   },

   // эти функци  обновляют текст в стейте 
   updateNewPostText(NewText) {
      this._state.ProfilePage.newPostText = NewText
      this._callSubscribe(this._state)
   },

   updateNewMessageText(NewText) {
      this._state.dialogsPage.newMessageText = NewText
      console.log(this._state.dialogsPage.newMessageText = NewText)
      this._callSubscribe(this._state)
   }
   ,
   subscribe(observer) {
      this._callSubscribe = observer /// patern observer  !!  addEventListener
   }
}


