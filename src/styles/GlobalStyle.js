// Global Style
import { createGlobalStyle } from "./Theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'D2Coding';
    src: url('/fonts/D2Coding-Ver1.3.2.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bgMain};
    font-family: 'D2Coding', sans-serif;
    line-height: 1.5;
    }

  img, video {
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.btn};
    border-radius: 6px;
  }

  /* Markdown Config */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5rem 0;
    font-weight: bolder;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5, p {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.75rem;
  }

  ul, ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }

  ol {
    margin-left: 0.5rem;
  }

  ol ol {
    margin-left: 0;
  }

  li {
    margin-bottom: 0.25em;
  }

  /* 테이블 (table, th, tr, td) */
  table {
    margin-bottom: 1rem;
    width: auto;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.md.tableBr};
  }

  th {
    background-color: ${({ theme }) => theme.btn};
  }

  blockquote {
    margin: 0.75rem 0 0 0;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.md.blockquote};
    font-style: italic;
    border-left: 4px solid ${({ theme }) => theme.md.blockquote};
  }

  /* 수평선 */
  hr {
    margin: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.brLine};
  }

  /* 상세 내용 (details, summary) */
  details {
    margin-bottom: 1rem;
  }

  summary {
    font-weight: bold;
    cursor: pointer;
  }

  /* 하이라이트 텍스트 (mark) */
  mark {
    background-color: LightYellow;
    color: black;
  }

`;

export default GlobalStyle;
