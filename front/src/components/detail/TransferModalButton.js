import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledTransferButton = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 2rem 1.5rem 0 0;
`;

const StyledAddress = styled.div`
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
  margin-top: 1rem;
`;

export default function TransferModalButton({ tokenOwner }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toAddress, setToAddress] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    setToAddress(e.target.value);
  };
  return (
    <>
      <StyledTransferButton>
        {tokenOwner.toLowerCase() ===
          window.ethereum.selectedAddress.toLowerCase() && (
          <Button shape="round" icon={<SendOutlined />} onClick={showModal}>
            Transfer
          </Button>
        )}
      </StyledTransferButton>
      <Modal
        title="Transfer NFT"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <h4>from address</h4>
        <p>0x7F8c72AdEa14269A2c8291de1B24C4e3B1657aab</p>
        <h4>to address</h4>
        <StyledAddress>
          <Input
            placeholder="reciving Address"
            value={toAddress}
            onChange={handleChange}
            bordered={false}
          />
        </StyledAddress>
      </Modal>
    </>
  );
}
