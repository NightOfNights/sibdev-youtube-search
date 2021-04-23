export const getCurrentUserFavouriteQueries = () => {
  const token = localStorage.getItem('token');
  const favouriteQueries = JSON.parse(localStorage.getItem(token)) || [];

  return { token, favouriteQueries };
};

export const addNewFavouriteQuery = (query) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  if (favouriteQueries.length === 0) {
    localStorage.setItem(token, JSON.stringify([query]));
  } else {
    favouriteQueries.push(query);
    localStorage.setItem(token, JSON.stringify(favouriteQueries));
  }

  console.log(query);
};

export const deleteFavouriteQuery = (queryName, callback) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  const modifiedFavouriteQueries = favouriteQueries.filter(
    (favouriteQuery) => favouriteQuery['query-name'] !== queryName
  );
  localStorage.setItem(token, JSON.stringify(modifiedFavouriteQueries));

  callback(modifiedFavouriteQueries);
  console.log(modifiedFavouriteQueries);
};

export const updateFavouriteQuery = (editedQuery, queryName, callback) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries[
    favouriteQueries.findIndex(
      (favouriteQuery) => favouriteQuery['query-name'] === queryName
    )
  ] = editedQuery;

  const modifiedFavouriteQueries = favouriteQueries;

  localStorage.setItem(token, JSON.stringify(modifiedFavouriteQueries));
  callback(modifiedFavouriteQueries);
};
