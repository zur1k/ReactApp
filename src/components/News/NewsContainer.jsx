import React from "react";
import StoreContext from "../../StoreContext";
import News from "./News";
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
   return {
      NewsData: state.NewsPage.NewsData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {

   }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer