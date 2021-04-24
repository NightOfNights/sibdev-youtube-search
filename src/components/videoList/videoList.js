import React, { useState } from 'react';
import { List } from 'antd';
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './videoList.scss';

const VideoList = ({ query, videosAmountTotal, videos }) => {
  const [listLayout, setListLayout] = useState('list');

  const itemsLayout =
    listLayout === 'list'
      ? { gutter: [16, 16], column: 1 }
      : { gutter: [16, 16], xs: 2, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 };

  const listIconClasses =
    listLayout === 'list'
      ? 'video-list__list-icon video-list__list-icon_active'
      : 'video-list__list-icon video-list__list-icon_inactive';

  const gridIconClasses =
    listLayout === 'grid'
      ? 'video-list__grid-icon video-list__grid-icon_active'
      : 'video-list__grid-icon video-list__grid-icon_inactive';

  const videoWrapperClass =
    listLayout === 'list' ? 'video__list-wrapper' : 'video__grid-wrapper';

  const handleListLayoutIconClick = () => {
    if (listLayout !== 'vertical') {
      setListLayout('list');
    }
  };

  const handleGridLayoutIconClick = () => {
    if (listLayout !== 'grid') {
      setListLayout('grid');
    }
  };

  const viewOverCount = '1000000+';

  return (
    <div className="video-list">
      <div className="video-list__result-string">
        <div className="video-list__result-info">
          Видео по запросу
          <span className="video-list__query-name">{query}</span>
        </div>
        <span className="video-list__videos-amount">
          {videosAmountTotal >= 1000000 ? viewOverCount : videosAmountTotal}
        </span>
        <div className="video-list__icons">
          <BarsOutlined
            onClick={handleListLayoutIconClick}
            className={listIconClasses}
          />
          <AppstoreOutlined
            onClick={handleGridLayoutIconClick}
            className={gridIconClasses}
          />
        </div>
      </div>
      <List
        grid={itemsLayout}
        locale={{ emptyText: 'Нет видео по запросу' }}
        dataSource={videos}
        renderItem={(video) => (
          <List.Item key={video.id.videoId} className="video-list__video video">
            <div className={videoWrapperClass}>
              <img
                src={video.snippet.thumbnails.medium.url}
                className="video__thumbnail"
              />
              <div className="video__text-content">
                <span className="video__title">{video.snippet.title}</span>
                <span className="video__description">
                  {video.snippet.channelTitle}
                </span>
              </div>
            </div>
          </List.Item>
        )}
        className="video-list__content"
      />
    </div>
  );
};

VideoList.defaultProps = {
  query: '',
  videosAmountTotal: 0,
  videos: [],
};

VideoList.propTypes = {
  query: PropTypes.string,
  videosAmountTotal: PropTypes.number,
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoList;
