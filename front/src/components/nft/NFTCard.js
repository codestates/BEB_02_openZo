import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import styled from 'styled-components';

export default function NFTCard({
  image,
  name,
  tokenId,
  description,
  setSelectedNft,
}) {
  const { Meta } = Card;

  return (
    <Link to={`/detail/${tokenId - 1}`}>
      <Card
        hoverable
        onClick={() => {
          setSelectedNft(tokenId - 1);
        }}
        style={{ width: 240 }}
        cover={<img src={image} />}
      >
        <Meta title={`${name} #${tokenId}`} description={description} />
      </Card>
    </Link>
  );
}
