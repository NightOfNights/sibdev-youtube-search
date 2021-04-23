export const getCurrentUserFavouriteQueries = () => {
  const token = localStorage.getItem('token');
  const favouriteQueries = JSON.parse(localStorage.getItem(token)) || [];

  return { token, favouriteQueries };
};

export const addNewFavouriteQuery = (query) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries.push(query);
  localStorage.setItem(token, JSON.stringify(favouriteQueries));

  console.log(query);
};

export const deleteFavouriteQuery = (idx) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries.splice(idx, 1);
  localStorage.setItem(token, JSON.stringify(favouriteQueries));

  console.log(favouriteQueries);
};

export const updateFavouriteQuery = (query, idx) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries[idx] = query;
  localStorage.setItem(token, JSON.stringify(favouriteQueries));

  console.log(favouriteQueries);
};
