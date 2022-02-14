import React from 'react';
import SearchBanner from '../components/SearchBanner';
import NftList from '../components/NftList';

export default function Search({ searchWord }) {
  return (
    <>
      <SearchBanner
        text={searchWord ? `"${searchWord}" results` : 'All results'}
      />
      <NftList />
    </>
  );
}
