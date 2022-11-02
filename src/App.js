import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicContainer from './components/Music/MusicContainer';
import NewsContainer from './components/News/NewsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = (props) => {


  return (


    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>

        <Routes>
          <Route path="/Dialogs/*"
            element={<DialogsContainer

            />} />

          <Route path="/Profile"
            element={<Profile

            />} />

          <Route path="/News"
            element={<NewsContainer
            />
            } />

          <Route path="/Music"
            element={<MusicContainer
            />
            } />

          <Route path='/Settings'
            element={<Settings />
            } />
        </Routes>

      </div>
    </div>

  )
}

export default App
