import React from 'react';
import Search from './../components/Search.js'; // component that accepts inout change
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = (props) => {
  return <Search handleSearchInputChange={props.handleSearchInputChange}/>
};

// const mapStateToProps = state => {
//   return {

//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: () => dispatch({type: 'handleVideoSearch'})
  };
};

//tODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect (mapDispatchToProps)(SearchContainer);