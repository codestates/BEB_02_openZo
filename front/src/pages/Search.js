import React from 'react';
import SearchBanner from '../components/banner/SearchBanner';
import NftList from '../components/nft/NftList';

export default function Search({ searchWord }) {
  return (
    <>
      <SearchBanner
        text={searchWord ? `'${searchWord}' results` : 'All results'}
      />
    </>
  );
}
