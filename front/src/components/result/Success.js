import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default function Success() {
  const navigate = useNavigate();

  return (
    <Result
      icon={
        <SmileOutlined
          style={{ margin: '10rem 0 2.5rem 0', fontSize: '7rem' }}
        />
      }
      title="Great, you create your own NFT !"
      extra={
        <Button
          type="primary"
          shape="round"
          style={{ marginTop: '1rem' }}
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      }
    />
  );
}
