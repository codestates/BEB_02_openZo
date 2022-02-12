import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
`;

export default function NFTCard() {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}
