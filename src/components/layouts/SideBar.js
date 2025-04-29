// Main Sidebar
import React from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { styled } from "../../styles/Theme";
// Assets
import { CategoryListIcon } from "../../assets/assets";

const Sidebar = ({ className, open, setOpen }) => {
  // useStaticQuery를 사용하여 데이터를 가져옵니다.
  const data = useStaticQuery(graphql`
    query {
      categoryList: allMarkdownRemark {
        group(field: frontmatter___category) {
          name: fieldValue
          count: totalCount
        }
        AllCount: totalCount
      }
    }
  `);
  const categoryList = data?.categoryList.group.sort((a, b) => b.count - a.count);

  return (
    <SidebarContainer
      className={className}
      $open={open}
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <ContentContainer $open={open}>
        <Title>
          <CategoryListIcon />
          {"Category List"}
        </Title>
        <BorderLine />
        <CategoryList>
          <ListItem key={"ALL Posts"} onClick={() => navigate(`/`)}>
            <Text>{"ALL Posts"}</Text>
            <Count>{data?.categoryList.AllCount}</Count>
          </ListItem>
          {categoryList?.map((category) => (
            <ListItem key={category?.name} onClick={() => navigate(`/category/${category?.name}`)}>
              <Text>{category?.name}</Text>
              <Count>{category?.count}</Count>
            </ListItem>
          ))}
        </CategoryList>
      </ContentContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  z-index: ${(props) => (props.$open ? `600` : `400`)};
  position: fixed;
  top: 100px;
  right: 0;
  width: ${(props) => (props.$open ? `250px` : `35px`)};
  height: 70vh;
  background-color: ${({ theme }) => theme.bgLayout};
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  overflow: hidden;
  transition: width 0.3s ease;

  // 0px ~ 768px
  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? `flex` : `none`)};
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.$open ? `visible` : `hidden`)};
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.btnText};
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  svg {
    flex-shrink: 0;
    margin: 0 0.25rem 0 0;
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.btnText};
  }
`;

const BorderLine = styled.div`
  margin: 5px 0 10px 0;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.15rem 0;
  color: ${({ theme }) => theme.btnText};
  font-size: 1.25rem;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.highlightText};
    font-weight: bolder;
    border-bottom: 1px solid ${({ theme }) => theme.highlightText};
    transform: scale(1.025);

    span {
      color: ${({ theme }) => theme.warningText};
    }
  }
  &:active {
    transform: scale(0.975);
  }
`;

const Text = styled.p`
  flex: 1;
  margin: 0 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Count = styled.span`
  flex-shrink: 0;
  margin: 0 0.15rem;
  padding: 0 0.35rem;
  background-color: ${({ theme }) => theme.btn};
  font-size: 0.75rem;
  font-weight: bolder;
  border-radius: 50%;
`;

export default Sidebar;
