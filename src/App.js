import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/templates/Header";
import Events from "@components/templates/Events";
import TopBanner from "@components/templates/TopBanner";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";

const OnBoarding = styled.div`
  width: 100%;
  height: 415px;
  background-color: teal;
`;

const Footer = styled.footer`
  height: 240px;
  width: 100%;
  background-color: floralwhite;
  margin-top: 100px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>헤더부분</Header>
      <TopBanner />
      <Events />
      <ItemsOnSale>판매중인 아이템</ItemsOnSale>
      <OpenseaTopCollections>많이 거래된 컬렉션</OpenseaTopCollections>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
