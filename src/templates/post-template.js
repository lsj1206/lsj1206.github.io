// Post Content Page Template
import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import Giscus from "@giscus/react";
import { ThemeContext } from "../context/ThemeProvider";
import { styled } from "../styles/Theme";
import { giscusData } from "../../user-data";
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
        <Comment className="giscus">
          <Giscus
            id="comments"
            repo={giscusData.repo}
            repoId={giscusData.repo_id}
            category={giscusData.category}
            categoryId={giscusData.category_id}
            mapping={giscusData.mapping}
            reactionsEnabled={giscusData.reactions_enabled}
            emitMetadata={giscusData.emit_metadata}
            inputPosition={giscusData.input_position}
            lang={giscusData.lang}
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
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      tableOfContents(maxDepth: 3)
    }
  }
`;

export const Head = ({ data }) => {
  const post = data?.markdownRemark;
  const frontmatter = post?.frontmatter || {};
  const title = frontmatter.title || "Empty title..";
  const description = post?.excerpt || title;
  const url = `https://lsj1206.github.io/post/${post?.fields?.slug}`;
  const image = frontmatter.coverImage?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      {/* Open Graph 메타 태그: 페이스북, 카카오톡 등 소셜 미디어 공유용 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {/* Twitter Card 메타 태그: 트위터 공유용 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
};

export default PostTemplate;
