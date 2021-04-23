import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { SearchResultLayout } from '../../layouts';
import { SearchInput, VideoList, FavouriteModal } from '../../components';
import { getYoutubeVideoList } from '../../store/searchResultPage/actions';
import { addNewFavouriteQuery } from '../../utils/localStorage';
import { Spin, Popover } from 'antd';
import { HeartOutlined, LoadingOutlined } from '@ant-design/icons';
import './searchResultPage.scss';

const SearchResultPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const searchParams = Object.fromEntries(
    new URL(document.location).searchParams
  );
  const searchQuery = searchParams.query;

  useEffect(() => {
    console.log('render');
    dispatch(getYoutubeVideoList(searchParams));
  }, [searchQuery]);

  const youtubeVideoListLoading = useSelector(
    (state) => state.searchResultPageReducer.loading
  );

  const youtubeVideoList = useSelector(
    (state) => state.searchResultPageReducer.youtubeVideoList
  );

  const videosAmountTotal = useSelector(
    (state) => state.searchResultPageReducer.videosAmountTotal
  );

  const handleSearch = (searchText) => {
    if (searchText) {
      const params = new URLSearchParams();
      params.append('query', searchText);
      history.push({
        search: params.toString(),
      });
    } else {
      alert('Пустая строка!');
    }
  };

  const handleFavouriteClick = () => {
    console.log('favourite clicked');
    setIsModalVisible(true);
  };

  const handleClickOk = (favouriteQuery) => {
    addNewFavouriteQuery(favouriteQuery);
    setIsModalVisible(false);
    setIsPopoverVisible(true);
  };

  const handleClickCancel = () => {
    setIsModalVisible(false);
  };

  const handleVisibleChange = (isVisible) => {
    setIsPopoverVisible(isVisible);
  };

  const popOverContent = (
    <div className="pop-over__content">
      <div className="pop-over__notification">
        Поиск сохранен в разделе «Избранное»
      </div>
      <Link to="/search/favourites" className="pop-over__favourites-link">
        Перейти в избранное
      </Link>
    </div>
  );

  const favouriteIcon = (
    <Popover
      placement="bottom"
      content={popOverContent}
      trigger="click"
      visible={isPopoverVisible}
      onVisibleChange={isPopoverVisible ? handleVisibleChange : null}
      className="pop-over"
    >
      <HeartOutlined
        onClick={handleFavouriteClick}
        className="pop-over__favourite-icon"
      />
    </Popover>
  );

  const loadingIcon = (
    <LoadingOutlined className="search-result-page__loading-icon" spin />
  );

  return (
    <SearchResultLayout>
      <div className="search-result-page">
        <div className="search-result-page__header">Поиск видео</div>
        <SearchInput
          defaultValue={searchQuery}
          size="large"
          suffix={favouriteIcon}
          onSearch={handleSearch}
          className="search-result-page__input"
        />
        {youtubeVideoListLoading ? (
          <Spin
            indicator={loadingIcon}
            className="search-result-page__loading-spin"
          />
        ) : (
          <VideoList
            query={searchQuery}
            videosAmountTotal={videosAmountTotal}
            videos={youtubeVideoList}
            className="search-result-page__video-list"
          />
        )}
        <FavouriteModal
          isModalVisible={isModalVisible}
          handleClickOk={handleClickOk}
          handleClickCancel={handleClickCancel}
          searchQuery={searchQuery}
          className="search-result-page__favourite-modal"
        />
      </div>
    </SearchResultLayout>
  );
};

export default SearchResultPage;
