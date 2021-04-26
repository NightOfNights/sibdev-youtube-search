import users from './users';

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

export const deleteFavouriteQuery = (idx, updateStateCallback) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries.splice(idx, 1);
  const modifiedFavouriteQueries = favouriteQueries;

  localStorage.setItem(token, JSON.stringify(modifiedFavouriteQueries));

  updateStateCallback(modifiedFavouriteQueries);
  console.log(modifiedFavouriteQueries);
};

export const updateFavouriteQuery = (editedQuery, idx, updateStateCallback) => {
  const { token, favouriteQueries } = getCurrentUserFavouriteQueries();

  favouriteQueries[idx] = editedQuery;

  const modifiedFavouriteQueries = favouriteQueries;

  localStorage.setItem(token, JSON.stringify(modifiedFavouriteQueries));
  updateStateCallback(modifiedFavouriteQueries);
};

export const userLogout = (history) => {
  console.log('log out');
  localStorage.removeItem('token');
  history.push('/auth');
};

export const userAuthorize = (
  formData,
  history,
  setUserToken,
  onFailedAuthorization
) => {
  const isUserExists = users.some(
    (user) =>
      user.username === formData.username && user.password === formData.password
  );

  if (isUserExists) {
    const token = formData.username + formData.password;
    localStorage.setItem('token', token);
    setUserToken(token);
    history.push('/search');
  } else {
    onFailedAuthorization();
  }
};
