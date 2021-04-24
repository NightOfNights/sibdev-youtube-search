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
    key: 'AIzaSyB0m7Fx82l0V9pJX9S1wvfCASaKkPPQLsw',
  };

  return async (dispatch) => {
    if (queryParams.q) {
      dispatch(getYoutubeVideoListStarted());

      axios
        .get('/v3/search', { params: queryParams })
        .then((videoListData) => {
          const videoList = videoListData.data.items;
          const videosId = videoList.map((item) => item.id.videoId).join(',');

          axios
            .get('/v3/videos', {
              params: {
                part: 'statistics',
                id: videosId,
                key: queryParams.key,
              },
            })
            .then((videoViewsCountData) => {
              const videoViewsCount = videoViewsCountData.data.items;

              videoList.forEach(
                (videoItem, idx) =>
                  (videoItem.snippet.viewCount =
                    videoViewsCount[idx].statistics.viewCount)
              );

              videoListData.items = videoList;

              dispatch(getYoutubeVideoListSuccess(videoListData.data));
            })
            .catch((err) => {
              dispatch(getYoutubeVideoListFailed(err.message));
            });
        })
        .catch((err) => {
          dispatch(getYoutubeVideoListFailed(err.message));
        });
    }
  };
};
