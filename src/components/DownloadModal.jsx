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
  padding: 2rem 2rem 3rem 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  position: relative;
  font-family: 'Google Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoImage = styled.img`
  width: 24px;
  height: 24px;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #202124;
  text-transform: lowercase;
`;

const CloseButton = styled.button`
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
  line-height: 1;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #202124;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #5f6368;
  margin: 0 0 1.5rem 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #202124;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Links = styled.div`
  font-size: 0.85rem;
  color: #5f6368;
  margin-bottom: 2rem;

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
        <Header>
          <LogoContainer>
            <LogoImage
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="Chrome Logo"
            />
            <LogoText>chrome</LogoText>
          </LogoContainer>
          <CloseButton onClick={onClose} aria-label="Close modal">&times;</CloseButton>
        </Header>
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
