// Floating Table Of Contents Component
import React, { useState } from "react";
import { styled } from "../../styles/Theme";
// Assets
import { TableIcon } from "../../assets/assets";
// Components
import IconButton from "../buttons/IconButton";

const TableOfContents = ({ className, toc }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <TocWrapper className={className} $open={open}>
      <Header>
        <IconButton size={[32, 32]} icon={TableIcon} onClick={toggleOpen} />
        <Title $open={open}>{"목차"}</Title>
      </Header>
      <TocContainer dangerouslySetInnerHTML={{ __html: toc }} $open={open} />
    </TocWrapper>
  );
};

const TocWrapper = styled.div`
  z-index: 500;
  padding: 1rem;
  position: fixed;
  top: 15vh;
  right: 8vw;
  width: 250px;
  max-height: 70vh;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.bgLayout};
  border-radius: 0.75rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    top: 50px;
    right: 5px;
    width: ${(props) => (props.$open ? `250px` : `auto`)};
    height: auto;
    padding: 0.25rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 0 1rem 0;

  svg {
    flex-shrink: 0;
    margin: 0.25rem 0.5rem 0 0;
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.btnText};

    :hover {
      fill: ${({ theme }) => theme.highlightText};
    }
    :active {
      transform: scale(0.975);
    }
  }

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    margin: 0;

    svg {
      margin: 0;
      fill: ${({ theme }) => theme.highlightText};
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.btnText};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
  }
`;

const TocContainer = styled.div`
  color: ${({ theme }) => theme.btnText};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  a {
    display: block;
    color: ${({ theme }) => theme.btnText};
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.btnActive};
      font-weight: bolder;
    }
    &:active {
      color: ${({ theme }) => theme.highlightText};
    }
  }

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
  }
`;

export default TableOfContents;
