// SVG Icon Button Component (ReactComponent)
import React from "react";
import { styled } from "../../styles/Theme";

const IconButton = ({ className, size = [30, 30], icon: Icon, onClick, link }) => {
  // 링크가 존재할 경우 해당 URL로 리디렉션
  const handleClick = (e) => {
    if (link) {
      window.open(link, "_blank"); // 리디렉션할때 New Tab
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <ButtonContainer className={className} onClick={handleClick} width={size[0]} height={size[1]}>
      <Icon />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.btn};

    &:hover {
      fill: ${({ theme }) => theme.btnActive};
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export default IconButton;
