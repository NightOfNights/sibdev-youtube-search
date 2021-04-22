import {
  GET_YOUTUBE_VIDEO_LIST_STARTED,
  GET_YOUTUBE_VIDEO_LIST_SUCCESS,
  GET_YOUTUBE_VIDEO_LIST_FAILURE,
} from '../constants';

const initialState = {
  youtubeVideoList: [],
  videosAmountTotal: 0,
  loading: false,
  error: null,
};

export default function searchResultPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_YOUTUBE_VIDEO_LIST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_YOUTUBE_VIDEO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        youtubeVideoList: action.payload.youtubeVideoList.items,
        videosAmountTotal:
          action.payload.youtubeVideoList.pageInfo.totalResults,
      };
    case GET_YOUTUBE_VIDEO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
