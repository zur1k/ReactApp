import { combineReducers, legacy_createStore as createStore } from "redux"
import dialogReducer from "./Dialog-reducer";
import musicReducer from "./Music-reducer";
import navBarReducer from "./Navbar-reducer";
import newsReducer from "./News-reducer";
import profileReducer from "./Profile-reducer";
import settingsReducer from "./Setting-reducer";

let reducers = combineReducers({
   ProfilePage: profileReducer,
   DialogsPage: dialogReducer,
   MusicPage: musicReducer,
   NewsPage: newsReducer,
   NavBar: navBarReducer,
   settingPage: settingsReducer
})

let store = createStore(reducers)

export default store