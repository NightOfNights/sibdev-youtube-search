import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Input } from 'antd';
import { SearchLayout } from '../../layouts';
import './searchPage.scss';

const { Search } = Input;

const SearchPage = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const handleSearch = (searchText) => {
    if (searchText) {
      const params = new URLSearchParams();
      params.append('query', searchText);
      history.push({
        pathname: `${path}/result`,
        search: params.toString(),
      });
    } else {
      alert('Пустая строка!');
    }
  };

  return (
    <SearchLayout>
      <div className="search-page">
        <div className="search-page__header">Поиск видео</div>
        <Search
          placeholder="Что хотите посмотреть?"
          enterButton="Найти"
          size="large"
          onSearch={handleSearch}
          className="search-page__input"
        />
      </div>
    </SearchLayout>
  );
};

export default SearchPage;
