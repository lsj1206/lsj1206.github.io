// About Page
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "../styles/Theme";
import userData, { blogData } from "../../user-data";
// Assets
import { EmailIcon, CodeIcon, GitHubIcon } from "../assets/assets";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageTitle>{"About Page"}</PageTitle>
      <BorderLine />
      <Card>
        <ImgContainer>
          <StaticImage
            src="../assets/images/Profile.png"
            alt="_profile"
            placeholder="blurred"
            layout="constrained"
            formats={["webp", "avif"]}
          />
        </ImgContainer>
        <TextContainer>
          <Header>{userData.name}</Header>
          <DescText>{userData.self_introduction}</DescText>
          <LinkText href={`mailto:${userData.github_link}`} target="_blank" rel="noopener noreferrer nofollow">
            <EmailIcon />
            {"Email"}
          </LinkText>
          <LinkText href={userData.github_link} target="_blank" rel="noopener noreferrer nofollow">
            <GitHubIcon />
            {"Github"}
          </LinkText>
        </TextContainer>
      </Card>
      <Card>
        <BlogContainer>
          <Header>{blogData.title}</Header>
          <DescText>{blogData.description}</DescText>
          <Text>{`개발 기간 : ${blogData.start_date} - ${blogData.end_date}`}</Text>
          <BottomContainer>
            <LinkText href={blogData.repository} target="_blank" rel="noopener noreferrer nofollow">
              <CodeIcon />
              {"Repository"}
            </LinkText>
            <SmallText>
              <SmallAnchor href={blogData.framework_link} target="_blank" rel="noopener noreferrer nofollow">
                {blogData.framework}
              </SmallAnchor>
              <SmallAnchor href={blogData.css_link} target="_blank" rel="noopener noreferrer nofollow">
                {blogData.css}
              </SmallAnchor>
              <SmallAnchor href={blogData.attr_link} target="_blank" rel="noopener noreferrer nofollow">
                {blogData.attribution}
              </SmallAnchor>
            </SmallText>
          </BottomContainer>
        </BlogContainer>
      </Card>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 768px
  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const PageTitle = styled.h2`
  margin: 0;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  padding: 15px;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.bgMainSub};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  // 0 ~ 768px
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
    padding-top: 15px;
    height: auto;
  }
`;

const ImgContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  margin: 15px;
  width: 180px;
  height: 240px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  :hover img {
    transform: scale(1.125);
    transition: transform 0.3s ease-in-out;
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 15px;
  width: 100%;
  height: 100%;

  // 0 ~ 768px
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.h3`
  min-height: 3rem;
  color: ${({ theme }) => theme.bgText};
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.bgText};
  }
`;

const Text = styled.p`
  min-height: 2.5rem;
  color: ${({ theme }) => theme.bgText};
  font-size: 1.15rem;
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.bgText};
  }
`;

const DescText = styled(Text)`
  flex-grow: 1;
  margin-bottom: 0.75rem;
`;

const LinkText = styled.a`
  display: flex;
  min-height: 2.5rem;
  color: ${({ theme }) => theme.bgText};
  font-size: 1.15rem;
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.bgText};
  }

  &:hover {
    color: ${({ theme }) => theme.highlightText};
    font-weight: bolder;
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`;

const BlogContainer = styled(TextContainer)`
  padding: 0 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // 0 ~ 768px
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SmallText = styled.p`
  display: flex;
  flex-direction: column;

  // 0 ~ 768px
  @media (max-width: 480px) {
    justify-content: flex-end;
    font-size: 0.8rem;
  }
`;

const SmallAnchor = styled.a`
  color: ${({ theme }) => theme.bgText};
  font-size: 0.9rem;
  text-align: end;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${({ theme }) => theme.highlightText};
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`;

export const Head = () => <title>{userData.title}</title>;

export default AboutPage;
