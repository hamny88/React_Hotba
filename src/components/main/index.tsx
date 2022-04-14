import styled from "styled-components";
import PlaceCard from "../PlaceCard";
import FirstPlaceCard from "./FirstPlaceCard";
// import image from "./image.png";
// import place from "./place.png";
// import museum from "./museum.jpg";
// import river from "./river.jpeg";
// import palace from "./palace.jpeg";
// import cafe from "./cafe1.jpg";
import { sungsooCafe, image, museum, river, palace, cafe} from "../../assets";
type MainProps = {
  imgHeight: number;
};

function Main({ imgHeight }: MainProps) {
  return (
    <MainContainer>
      <FirstPlaceCard url={image} imgHeight={imgHeight} />
      <PlaceListContainer>
        <DateSetting>
          <DateRange>21.05.14 ~ 21.12.02</DateRange>
          <DateSettingButton> 기간 설정</DateSettingButton>
        </DateSetting>
        <PlaceCard photo={sungsooCafe} place={"발렁스"} />
        <PlaceCard photo={museum} place={"서소문 성지 박물관"} />
        <PlaceCard photo={river} place={"한강 공원"} />
        <PlaceCard photo={palace} place={"경복궁"} />
      </PlaceListContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #0d0d0d;
`;
const PlaceListContainer = styled.div`
  padding: 32px 20px;
`;

const DateSetting = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateRange = styled.div`
  color: #ffffff;
  margin-top: 7px;
  font-family: "Work Sans", sans-serif;
`;
const DateSettingButton = styled.div`
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #ff3c81;
  box-sizing: border-box;
  border-radius: 20px;
  color: #ff3c81;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export default Main;
