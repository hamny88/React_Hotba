import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlaceCard from "../PlaceCard";
// import photo from "../main/place.png";
import {place} from "../../assets"
function Saved() {
  return (
    <SavedContainer>
      {/* <Header title={"저장됨"} /> */}
      <BigSentence>
        {" "}
        저장한 모든 핫한 <br></br> 장소를 가보는 그날까지!
      </BigSentence>
      <SavedNumber>저장된 장소는 총 {1} 곳입니다 </SavedNumber>
      <PlaceCard photo={place} place={'발렁스'}/>
    </SavedContainer>
  );
}

const SavedContainer = styled.div`
    padding: 63px 20px 0px 20px;
`;
const BigSentence = styled.div`
  font-family: "Vitro";
  font-weight: 800;
  font-size: 22px;
`;

const SavedNumber = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  color: #565656;
`;
export default Saved;
