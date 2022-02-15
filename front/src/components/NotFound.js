import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      style={{ marginTop: '3rem' }}
      extra={
        <Button
          type="primary"
          shape="round"
          style={{ marginTop: '3rem' }}
          onClick={() => navigate('/')}
        >
          Back Home
        </Button>
      }
    />
  );
}
