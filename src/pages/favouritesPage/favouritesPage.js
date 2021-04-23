import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FavouriteModal } from '../../components';
import { FavouritesLayout } from '../../layouts';
import { List } from 'antd';
import {
  getCurrentUserFavouriteQueries,
  updateFavouriteQuery,
  deleteFavouriteQuery,
} from '../../utils/localStorage';
import './favouritesPage.scss';

const FavouritesPage = () => {
  const { favouriteQueries } = getCurrentUserFavouriteQueries();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [favourites, setFavourites] = useState(favouriteQueries || []);
  const [modalData, setModalData] = useState({});
  const history = useHistory();

  const updateFavourites = (modifiedFavourites) => {
    setFavourites(modifiedFavourites);
  };

  const handleEditClick = (e, favouriteQuery) => {
    e.stopPropagation();
    setModalData({
      searchQuery: favouriteQuery.query,
      queryName: favouriteQuery['query-name'],
      sortBy: favouriteQuery['sort-by'],
      maxAmount: favouriteQuery['max-amount'],
    });
    setIsModalVisible(true);
  };

  const handleDeleteButtonClick = (e, queryName) => {
    e.stopPropagation();
    deleteFavouriteQuery(queryName, updateFavourites);
  };

  const handleClickOk = (modifiedfavouriteQuery, queryName) => {
    setIsModalVisible(false);
    updateFavouriteQuery(modifiedfavouriteQuery, queryName, updateFavourites);
  };

  const handleClickCancel = () => {
    setIsModalVisible(false);
  };

  const handleFavouriteQueryClick = (query, sortBy, maxAmount) => {
    const params = new URLSearchParams();
    params.append('query', query);
    if (sortBy) params.append('sort-by', sortBy);
    if (maxAmount) params.append('max-amount', maxAmount);
    history.push({
      pathname: '/search/result',
      search: params.toString(),
    });
  };

  return (
    <FavouritesLayout>
      <div className="favourites-page">
        <div className="favourites-page__header">Избранное</div>
        <List
          className="favourites-page__favourite-queries-list"
          locale={{ emptyText: 'Нет избранных запросов' }}
          dataSource={favourites}
          renderItem={(favouriteQuery) => {
            const queryName = favouriteQuery['query-name'];

            return (
              <div
                key={favouriteQuery['query-name'] + favouriteQuery.query}
                className="favourite-query"
                onClick={() =>
                  handleFavouriteQueryClick(
                    favouriteQuery.query,
                    favouriteQuery['sort-by'],
                    favouriteQuery['max-amount']
                  )
                }
              >
                <div className="favourite-query__name">{queryName}</div>
                <div className="favourite-query__actions">
                  <div
                    className="favourite-query__edit-action"
                    onClick={(e) => handleEditClick(e, favouriteQuery)}
                  >
                    Изменить
                  </div>
                  <div
                    className="favourite-query__delete-action"
                    onClick={(e) => handleDeleteButtonClick(e, queryName)}
                  >
                    Удалить
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
      <FavouriteModal
        isModalVisible={isModalVisible}
        editModal
        handleClickOk={handleClickOk}
        handleClickCancel={handleClickCancel}
        {...modalData}
      />
    </FavouritesLayout>
  );
};

export default FavouritesPage;
