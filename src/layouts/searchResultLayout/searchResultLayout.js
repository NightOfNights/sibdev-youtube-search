import React from 'react';
import MainLayout from '../mainLayout/mainLayout';

const SearchResultLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="search-result-layout">{children}</div>
    </MainLayout>
  );
};

export default SearchResultLayout;
