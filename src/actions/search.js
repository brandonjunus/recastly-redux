import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  var parameters = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  // original attempt
  // return (dispatch) => ({
  //   type: "YOUTUBE_SEARCH",
  //   videos: searchYouTube(parameters, (items) => (items))
  // });

  // new attempt

  return (dispatch) => (
    searchYouTube(parameters, (items) => {
      dispatch(changeVideoList(items));
      dispatch(changeVideo(items[0]));
    })
  );
};

export default handleVideoSearch;
