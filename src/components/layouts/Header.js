// Main Layout Header
import React, { useContext } from "react";
import { navigate } from "gatsby";
import { ThemeContext } from "../../context/ThemeProvider";
import { styled } from "../../styles/Theme";
import userData from "../../../user-data";
// Assets
import { LightIcon, DarkIcon, SearchIcon } from "../../assets/assets";
// Components
import IconButton from "../buttons/IconButton";

const Header = ({ className }) => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer className={className}>
      <TitleContainer>
        <HeaderTitle onClick={() => navigate(`/`)}>{userData.title}</HeaderTitle>
        <NameText onClick={() => navigate(`/about`)}>{`/ ${userData.name}`}</NameText>
      </TitleContainer>
      <ButtonContainer>
        <IconButton size={[32, 32]} icon={SearchIcon} onClick={() => navigate(`/search`)} />
        <IconButton size={[35, 35]} icon={theme === "light" ? DarkIcon : LightIcon} onClick={onChangeTheme} />
      </ButtonContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.bgLayout};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const HeaderTitle = styled.h4`
  margin: 0;
  position: relative;
  color: ${({ theme }) => theme.text};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const NameText = styled.h6`
  margin: 0 0 0 5px;
  position: relative;
  color: ${({ theme }) => theme.btnText};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export default Header;
