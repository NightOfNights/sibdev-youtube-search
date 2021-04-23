import axios from '../../api/axiosConfig';

import {
  GET_YOUTUBE_VIDEO_LIST_STARTED,
  GET_YOUTUBE_VIDEO_LIST_SUCCESS,
  GET_YOUTUBE_VIDEO_LIST_FAILURE,
} from '../constants';

const getYoutubeVideoListStarted = () => ({
  type: GET_YOUTUBE_VIDEO_LIST_STARTED,
});

const getYoutubeVideoListSuccess = (youtubeVideoList) => ({
  type: GET_YOUTUBE_VIDEO_LIST_SUCCESS,
  payload: { youtubeVideoList },
});

const getYoutubeVideoListFailed = (error) => ({
  type: GET_YOUTUBE_VIDEO_LIST_FAILURE,
  payload: { error },
});

export const getYoutubeVideoList = (params) => {
  const queryParams = {
    part: 'snippet',
    type: 'video',
    order: params['sort-by'] || 'relevance',
    q: params.query || '',
    maxResults: params['max-amount'] || 12,
    key: 'AIzaSyBwVN7mJY92b4pdKSwNNDfJbCBkJtrGQ-Q',
  };

  return (dispatch) => {
    if (queryParams.q) {
      dispatch(getYoutubeVideoListStarted());

      axios
        .get('/v3/search', { params: queryParams })
        .then((res) => {
          dispatch(getYoutubeVideoListSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getYoutubeVideoListFailed(err.message));
        });
    }
  };
};
