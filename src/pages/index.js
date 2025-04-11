// Main Page
import React from "react";
import { graphql, navigate } from "gatsby";
import { styled } from "../styles/Theme";
import userData from "../../user-data";
// Hooks
import usePostList from "../hooks/usePostList";
// Components
import PostList from "../components/post/PostList";

const IndexPage = ({ data }) => {
  if (!data) {
    navigate(`/404`);
  }
  const postList = usePostList(data);

  return (
    <PageWrapper>
      <PostList postlist={postList} listName={"All Posts"} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 768px
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const query = graphql`
  query MainPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___createDate, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            coverImage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
            tag
            category
            createDate
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head = () => <title>{userData.title}</title>;

export default IndexPage;
