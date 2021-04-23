import React, { useState } from 'react';
import { FavouritesLayout } from '../../layouts';
import {
  getCurrentUserFavouriteQueries,
  updateFavouriteQuery,
  deleteFavouriteQuery,
} from '../../utils/localStorage';

const FavouritesPage = () => {
  const { favouriteQueries } = getCurrentUserFavouriteQueries();
  const [favourites, setFavourites] = useState(favouriteQueries || []);

  const favouriteQueriesList = favourites.map((favouriteQuery, idx) => (
    <div
      key={idx}
      queryName={favouriteQuery['query-name']}
      className="favourite-query"
    >
      <div className="favourite-query__name">test</div>
      <div className="favourite-query__actions">
        <div className="favourite-query__action">Выполнить</div>
        <div className="favourite-query__action">Изменить</div>
        <div className="favourite-query__action">Удалить</div>
      </div>
    </div>
  ));

  return (
    <FavouritesLayout>
      <div className="favourites-page">
        <div className="search-favourites-page__header">Избранное</div>
        <ul className="search-favourites-page__favourite-queries-list">
          {favouriteQueriesList}
        </ul>
      </div>
    </FavouritesLayout>
  );
};

export default FavouritesPage;
