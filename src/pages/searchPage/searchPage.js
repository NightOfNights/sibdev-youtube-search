import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { SearchLayout } from '../../layouts';
import { SearchInput } from '../../components';
import './searchPage.scss';

const SearchPage = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      const params = new URLSearchParams();
      params.append('query', searchQuery);
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
        <SearchInput
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
