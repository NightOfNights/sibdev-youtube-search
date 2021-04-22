import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import './searchInput.scss';

const { Search } = Input;

const SearchInput = ({ defaultValue, suffix, size, onSearch }) => {
  const handleSearch = (searchQuery) => {
    onSearch(searchQuery);
  };

  return (
    <Search
      placeholder="Что хотите посмотреть?"
      defaultValue={defaultValue}
      enterButton="Найти"
      suffix={suffix}
      size={size}
      onSearch={handleSearch}
      className="search-input"
    />
  );
};

SearchInput.defaultProps = {
  defaultValue: undefined,
  suffix: undefined,
  size: undefined,
  onSearch: undefined,
};

SearchInput.propTypes = {
  defaultValue: PropTypes.string,
  suffix: PropTypes.elementType,
  size: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
