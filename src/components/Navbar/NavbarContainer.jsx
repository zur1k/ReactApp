import React from 'react';
import StoreContext from '../../StoreContext';
import { connect } from 'react-redux'

import Navbar from './Navbar';


let mapStateToProps = (state) => {
   return {
      NavBar: state.NavBar
   }
}
let mapDispatchToProps = (dispatch) => {
   return {

   }
}
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarContainer