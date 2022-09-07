import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom"

const App = (props) => {


  return (


    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className='app-wrapper-content'>

        <Routes>
          <Route path="/Dialogs/*"
            element={<Dialogs
              state={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
              newMewssageText={props.state.newPostText}
            />}
          />

          <Route path="/Profile"
            element={<Profile
              profilePage={props.state.ProfilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />}
          />
          <Route path="/News"
            element={<News
              state={props.state.NewsPage} />} />
          <Route path="/Music"
            element={<Music
              state={props.state.MusicPage} />} />
          <Route path='/Settings'
            element={<Settings
            />} />
        </Routes>

      </div>
    </div>

  )
}

export default App
