import React from 'react';
import { useHistory } from 'react-router-dom';
import { SearchResultLayout } from '../../layouts';
import { SearchInput } from '../../components';
import { HeartOutlined } from '@ant-design/icons';
import './searchResultPage.scss';

const SearchResultPage = () => {
  const history = useHistory();

  const searchQuery = Object.fromEntries(
    new URL(document.location).searchParams
  ).query;

  const handleFavouriteClick = () => {
    console.log('favourite clicked');
  };

  const favouriteIcon = (
    <HeartOutlined
      className="search-result-page__favorite-icon"
      onClick={handleFavouriteClick}
    />
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

  return (
    <SearchResultLayout>
      <div className="search-result-page">
        <div className="search-result-page__header">Поиск видео</div>
        <SearchInput
          placeholder="Что хотите посмотреть?"
          defaultValue={searchQuery}
          enterButton="Найти"
          size="large"
          suffix={favouriteIcon}
          onSearch={handleSearch}
          className="search-result__input"
        />
      </div>
    </SearchResultLayout>
  );
};

export default SearchResultPage;
