// Text Button Component
import React from "react";
import { styled } from "../../styles/Theme";

const TextButton = ({ className, size = [80, 30], text, onClick }) => {
  return (
    <ButtonContainer className={className} onClick={onClick} width={size[0]} height={size[1]}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.btnText};
  font-size: 0.9rem;
  font-weight: bolder;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.btnActive};
    color: ${({ theme }) => theme.btnActiveText};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default TextButton;
