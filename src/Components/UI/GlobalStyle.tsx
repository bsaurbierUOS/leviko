import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  darkTheme: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    font-size: 62.5%;
    font-family: Blatant;
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {  
    font-size: 1.5rem;
    color: ${(props) => (props.darkTheme ? "white" : "black")};
    background-color: ${(props) =>
      props.darkTheme ? "var(--leviko-black)" : "var(--leviko-white)"};
    transition: background-color 0.8s ease, color 0.3s ease;

  }
  
  :root {
    --leviko-white: #f2f2f2;
    --leviko-black: #0d0d0d;
    --leviko-blue: #182EC0;
    --leviko-green: #AAFE83;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 20px 0; /* Space between the boxes */
  }

  @font-face {
    font-family: "Blatant";
    src: url("../fonts/Blatant.woff") format("woff");
    src: url("../fonts/Blatant.woff2") format("woff2");
    font-weight: regular;
  }
  
  @font-face {
    font-family: "Blatant-Bold";
    src: url("../fonts/Blatant-Bold.woff") format("woff");
    src: url("../fonts/Blatant-Bold.woff2") format("woff2");
    font-weight: bold;
  }

  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 56px;
  }
  h3 {
    font-size: 43px;
  }
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 24px;
  }
  
  /* Styles for screens smaller than 545px (e.g., tablet) */
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 38px;
    }
    h3 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 18px;
    }
  }
  
  /* Styles for screens smaller than 390px (e.g., mobile) */
  @media screen and (max-width: 430px) {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
  
`;

export default GlobalStyle;
