import { useMemo } from "react";

const usePostList = (data) => {
  return useMemo(
    () =>
      data?.allMarkdownRemark?.edges?.map(({ node }) => ({
        title: node.frontmatter.title,
        coverImage: node.frontmatter.coverImage?.childImageSharp?.gatsbyImageData,
        tag: node.frontmatter.tag,
        category: node.frontmatter.category,
        createDate: node.frontmatter.createDate,
        slug: node.fields.slug,
      })) || [],
    [data]
  );
};

export default usePostList;
