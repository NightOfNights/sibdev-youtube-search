import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import './searchInput.scss';

const { Search } = Input;

const SearchInput = ({
  placeholder,
  defaultValue,
  enterButton,
  suffix,
  size,
  onSearch,
}) => {
  const handleSearch = (searchQuery) => {
    onSearch(searchQuery);
  };

  return (
    <Search
      placeholder={placeholder}
      defaultValue={defaultValue}
      enterButton={enterButton}
      suffix={suffix}
      size={size}
      onSearch={handleSearch}
      className="search-input"
    />
  );
};

SearchInput.defaultProps = {
  placeholder: undefined,
  defaultValue: undefined,
  enterButton: undefined,
  suffix: undefined,
  size: undefined,
  onSearch: undefined,
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  enterButton: PropTypes.string.isRequired,
  suffix: PropTypes.elementType,
  size: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
