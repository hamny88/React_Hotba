import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import { Main, Detail, Saved, Register } from "./components";
import VitroTTF from "./font/vitro.ttf";
import Buttons from "./components/Buttons";
function App() {
  const [imgHeight, setImgHeight] = useState<number>(0);
  useEffect(() => {
    setImgHeight(window.screen.height - 270);

  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
        <MockContainer>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main imgHeight={imgHeight} />} />
            <Route path="/hotba" element={<Main imgHeight={imgHeight} />} />
            <Route path="/detail" element={<Detail imgHeight={imgHeight} />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/register" element={<Register />} />
          
          </Routes>
          <Buttons />

          </BrowserRouter>
        </MockContainer>

    </AppContainer>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f5f5f5;

  }
  @font-face {
    font-family: 'Vitro';
    src: url(${VitroTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

`;

const MockContainer = styled.div`
  position: relative;
  margin: 40px auto;
  width: 360px;
  height: 780px;
  overflow: scroll;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,0px 0px 0px 20px #111;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  height: 812px;
  margin: 0 auto;
  font-family: 'Spoqa Han Sans Neo';

`;



export default App;
