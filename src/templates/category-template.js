// Category List Page Template
import React from "react";
import { graphql, navigate } from "gatsby";
import { styled } from "../styles/Theme";
import userData from "../../user-data";
// Hooks
import usePostList from "../hooks/usePostList";
// Components
import PostList from "../components/post/PostList";

const CategoryTemplate = ({ data, pageContext }) => {
  if (!data) {
    navigate(`/404`);
  }
  const postList = usePostList(data);

  return (
    <PageWrapper>
      <PostList postlist={postList} listName={pageContext.category} />
    </PageWrapper>
  );
};

const PageWrapper = styled.article`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 1279px
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const query = graphql`
  query ($category: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $category } } }) {
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

export const Head = () => {
  return <title>{userData.title}</title>;
};

export default CategoryTemplate;
