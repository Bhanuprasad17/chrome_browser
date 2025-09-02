import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  width: 400px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  position: relative;
  font-family: 'Google Sans', sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #e8f0fe;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a73e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #4285f4, #34a853, #fbbc05, #ea4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #202124;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #5f6368;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #202124;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Links = styled.div`
  font-size: 0.85rem;
  color: #1a73e8;
  margin-bottom: 1.5rem;

  a {
    color: #1a73e8;
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const AcceptButton = styled.button`
  background-color: #1a73e8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1557b0;
  }
`;

const DownloadModal = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">&times;</CloseButton>
        <Logo>chrome</Logo>
        <Title>Get Chrome for Windows</Title>
        <Subtitle>For Windows 11/10 64-bit</Subtitle>
        <CheckboxLabel>
          <Checkbox type="checkbox" defaultChecked />
          Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. <a href="#">Learn more</a>
        </CheckboxLabel>
        <Links>
          By downloading Chrome, you agree to the <a href="#">Google Terms of Service</a> and <a href="#">Chrome and ChromeOS Additional Terms of Service</a>
        </Links>
        <AcceptButton>Accept and Install</AcceptButton>
      </ModalContainer>
    </Overlay>
  );
};

export default DownloadModal;
