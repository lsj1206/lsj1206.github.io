// Post List Item Component
import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "../../styles/Theme";
// Assets
import { CategoryIcon, DateIcon, TagsIcon } from "../../assets/assets";

const PostListItem = ({ className, post }) => {
  return (
    <Wrapper className={className} onClick={() => navigate(`/post/${post?.slug}`)}>
      <Img image={getImage(post?.coverImage)} alt="_thumbnail" />
      <TextContainer>
        <TitleText>{post?.title}</TitleText>
        <Text>
          <CategoryIcon />
          {post?.category}
          <DateIcon />
          {post?.createDate}
        </Text>
        <TagContainer>
          <TagsIcon />
          {post?.tag.map((tag) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagContainer>
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 2rem;
  width: 100%;
  cursor: pointer;

  :hover h4 {
    color: ${({ theme }) => theme.highlightText};
    transition: color 0.3s ease-in-out;
  }

  :hover img {
    transform: scale(1.125);
    transition: transform 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.975);
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Img = styled(GatsbyImage)`
  flex-shrink: 0;
  margin: 0 1.75rem 0 0;
  width: 10rem;
  min-height: 7.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  // 0 ~ 480px
  @media (max-width: 480px) {
    margin-left: 10%;
    width: 90%;
    height: 9rem;
  }

  img {
    object-fit: cover !important;
    object-position: center !important;
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  padding: 0 0.75rem 0 0;
  width: 100%;
  overflow: hidden;

  // 0 ~ 480px
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const TitleText = styled.h4`
  margin: 0;
  width: 100%;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  height: 2rem;
  color: ${({ theme }) => theme.bgText};
  font-weight: bolder;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 1rem;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.bgText};
  }

  svg:first-of-type {
    margin: 0 0.5rem 0 0;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  width: 100%;
  min-height: 1.75rem;

  svg {
    flex-shrink: 0;
    margin: 0.3rem 0.3rem 0 0;
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
  height: 1.5rem;
  background-color: ${({ theme }) => theme.btnActiveText};
  color: ${({ theme }) => theme.btnActive};
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

export default PostListItem;
