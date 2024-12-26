// 404 Not Found Page
import React from "react";
import { Link } from "gatsby";
import { styled } from "../styles/Theme";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <PageHeader>404 Page not found</PageHeader>
      <BorderLine />
      <ErrorText>
        Sorry, we couldn’t find what you were looking for.
        <br />
        <LinkText to="/">Go home</LinkText>.
      </ErrorText>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 0 ~ 768px
  @media (max-width: 768px) {
    width: 66%;
  }
`;

const BorderLine = styled.div`
  margin: 5px 0 15px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const PageHeader = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.warningText};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
`;

const ErrorText = styled.p``;

const LinkText = styled(Link)`
  color: ${({ theme }) => theme.highlightText};
  font-size: 1.25rem;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const Head = () => <title>Not found</title>;

export default NotFoundPage;
