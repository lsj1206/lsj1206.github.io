// Post Content Page Template
import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import Giscus from "@giscus/react";
import { ThemeContext } from "../context/ThemeProvider";
import { styled } from "../styles/Theme";
import { gitcusData } from "../../user-data";
// Components
import PostHeader from "../components/post/PostHeader";
import TableOfContents from "../components/post/TableofContents";

const PostTemplate = ({ data }) => {
  if (!data) {
    navigate(`/404`);
  }

  const post = data?.markdownRemark;
  const postData = data?.markdownRemark.frontmatter;

  // Giscus 테마를 동적으로 설정
  const { theme } = useContext(ThemeContext);
  const giscusTheme = theme === "light" ? "noborder_light" : "noborder_gray";

  return (
    <PageWrapper>
      <PostContainer>
        <PostHeader postData={postData} />
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <BorderLine />
        <Comment className="gitcus">
          <Giscus
            id="comments"
            repo={gitcusData.repo}
            repoId={gitcusData.repo_id}
            category={gitcusData.category}
            categoryId={gitcusData.category_id}
            mapping={gitcusData.mapping}
            reactionsEnabled={gitcusData.reactions_enabled}
            emitMetadata={gitcusData.emit_metadata}
            inputPosition={gitcusData.input_position}
            lang={gitcusData.lang}
            theme={giscusTheme}
            loading="lazy"
          />
        </Comment>
      </PostContainer>
      <TableOfContents toc={post.tableOfContents} />
    </PageWrapper>
  );
};

const PageWrapper = styled.article`
  display: flex;
  flex-direction: row;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 1279px
  @media (max-width: 1279px) {
    width: 66vw;
  }

  // 0px ~ 768px
  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const BorderLine = styled.div`
  margin: 5px 0 15px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const Content = styled.div`
  margin: 2rem 0;

  img {
    border: 1px solid ${({ theme }) => theme.bgMainSub};
    border-radius: 0.3rem;
  }
`;

const Comment = styled.div``;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        coverImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
        category
        tag
        createDate
        lastDate
      }
      html
      tableOfContents(maxDepth: 3)
    }
  }
`;

export const Head = ({ data }) => {
  const post = data?.markdownRemark;
  return <title>{post?.frontmatter.title || "Title"}</title>;
};

export default PostTemplate;
