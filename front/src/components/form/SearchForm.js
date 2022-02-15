import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchWrapper = styled.div`
  display: flex;
  width: 25rem;
  margin-bottom: 0.5rem;
  margin-left: 3.5rem;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  height: 2rem;
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
  margin-right: 0.3rem;
`;

export default function SearchForm({ setSearchWord }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    setSearchWord(searchInput);
    setSearchInput('');
  };

  return (
    <SearchWrapper>
      <StyledSearchInput>
        <Input
          placeholder="Search NFTs"
          bordered={false}
          value={searchInput}
          onChange={handleInputChange}
        />
      </StyledSearchInput>
      <Link to="/search">
        <Button
          shape="circle"
          onClick={handleClick}
          icon={<SearchOutlined />}
        />
      </Link>
    </SearchWrapper>
  );
}
