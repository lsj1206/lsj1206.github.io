// Post Header Component
import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "../../styles/Theme";
// Assets
import { CategoryIcon, DateIcon, TagsIcon, LastDateIcon } from "../../assets/assets";

const PostHeader = ({ className, postData }) => {
  const onClickCategory = (category) => {
    navigate(`/category/${category}`);
  };

  const onClickTag = (tag) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <Wrapper className={className}>
      <Title>{postData?.title}</Title>
      <BorderLine />
      <InfoContainer>
        <Category onClick={() => onClickCategory(postData?.category)}>
          <CategoryIcon />
          {postData?.category}
        </Category>
        <InfoText>
          <DateIcon />
          {postData?.createDate}
        </InfoText>
        <InfoText>
          <LastDateIcon />
          {postData?.lastDate}
        </InfoText>
      </InfoContainer>
      <TagContainer>
        <TagsIcon />
        {postData?.tag &&
          postData?.tag.map((tag, index) => (
            <TagItem key={index} onClick={() => onClickTag(tag)}>
              {tag}
            </TagItem>
          ))}
      </TagContainer>
      <ImgContainer>
        <Img image={getImage(postData?.coverImage)} alt="_coverImage" />
      </ImgContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BorderLine = styled.div`
  margin-bottom: 10px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const Title = styled.h2`
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  // 0px ~ 768px
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const InfoText = styled.p`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.bgText};
  font-weight: bolder;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.bgText};
  }
`;

const Category = styled(InfoText)`
  flex: 1;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    margin: 0 0.5rem 0 0;
  }

  &:hover {
    color: ${({ theme }) => theme.highlightText};
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 1.75rem;

  svg {
    flex-shrink: 0;
    margin: 0.25rem 0.5rem 0.5rem 0;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.bgText};
  }
`;

const TagItem = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.5rem;
  min-height: 1.5rem;
  background-color: ${({ theme }) => theme.btnActiveText};
  color: ${({ theme }) => theme.btnActive};
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.highlightText};
    transform: scale(1.025);
    span {
      color: ${({ theme }) => theme.warningText};
    }
  }

  &:active {
    transform: scale(0.975);
  }
`;

const ImgContainer = styled.div`
  flex-shrink: 0;
  margin: 0.75rem 0 0.25rem 0;
  width: 100%;
  height: 15rem;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const Img = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default PostHeader;
