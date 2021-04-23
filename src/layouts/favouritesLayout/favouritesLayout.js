import React from 'react';
import MainLayout from '../mainLayout/mainLayout';

const FavouritesLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="favourites-layout">{children}</div>
    </MainLayout>
  );
};

export default FavouritesLayout;
