import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchResultLayout } from '../../layouts';
import { SearchInput } from '../../components';
import { getYoutubeVideoList } from '../../store/searchResultPage/actions';
import { Spin } from 'antd';
import { HeartOutlined, LoadingOutlined } from '@ant-design/icons';
import './searchResultPage.scss';

const SearchResultPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const searchQuery = Object.fromEntries(
    new URL(document.location).searchParams
  ).query;

  const searchParams = {
    part: 'snippet',
    type: 'video',
    q: searchQuery,
    maxResults: 13,
    key: 'AIzaSyBwVN7mJY92b4pdKSwNNDfJbCBkJtrGQ-Q',
  };

  useEffect(() => {
    console.log('render');
    dispatch(getYoutubeVideoList(searchParams));
  }, [searchQuery]);

  const youtubeVideoListLoading = useSelector(
    (state) => state.searchResultPageReducer.loading
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
  };

  const favouriteIcon = (
    <HeartOutlined
      className="search-result-page__favorite-icon"
      onClick={handleFavouriteClick}
    />
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
          <div>VideoList</div>
        )}
      </div>
    </SearchResultLayout>
  );
};

export default SearchResultPage;
