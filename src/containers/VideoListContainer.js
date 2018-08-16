import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

var mapStateToProps = state => {
  console.log(state);
  return {
    videos: state.videoList
  }
}
;

var mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: () => dispatch(changeVideo)
  }

}
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect (mapStateToProps, mapDispatchToProps)(VideoListContainer);
