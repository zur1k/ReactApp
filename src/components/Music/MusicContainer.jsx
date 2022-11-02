import React from 'react'
import StoreContext from '../../StoreContext'
import Music from './Music'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
   return {
      trackData: state.MusicPage.trackData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {

   }
}
const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)
export default MusicContainer