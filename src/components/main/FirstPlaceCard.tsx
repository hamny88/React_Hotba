import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import texture from '../../assets/Main/texture.svg';
// import logo from '../../assets/Main/logo.svg';
// import vector from '../../assets/Main/vector.svg';
// import marked from './unmark.png';
import { texture, logo, vector} from "../../assets";

type FirstPlaceCardPropsType = {
  url: string;
  imgHeight: number;
};

function FirstPlaceCard({ url, imgHeight }: FirstPlaceCardPropsType) {
  const navigate = useNavigate();

  return (
    <FirstPlaceCardContainer backgroundUrl={url} imgHeight={imgHeight}>
      <Texture imgHeight={imgHeight} />
      <Logo logo={logo} />
      <QurationBox>
        <ThisWeekTop>이주의 1위 핫플레이스</ThisWeekTop>
        <ThisWeekTopPlace>월하보이</ThisWeekTopPlace>
        <PlaceTheme>테이스팅 티</PlaceTheme>
        <FlexBox>
          <QurationMent>추워지는 날씨에 따뜻한 차 한 잔</QurationMent>
          <img src={vector} onClick={()=>   navigate('/detail') }/>
        </FlexBox>
      </QurationBox>
    </FirstPlaceCardContainer>
  );
}


const FirstPlaceCardContainer = styled.div<{ backgroundUrl: string, imgHeight:number }>`
  width: 100%;
  height: ${(props) => props.imgHeight}px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  position: relative;
  font-family: 'Spoqa Han Sans Neo';
`;
const Heart = styled.div<{logo:string}>`
  background-image: url(${(props) => props.logo});
  width: 44px;
  height: 29px;
  background-repeat: no-repeat;
  position: absolute;
  left: 16px;
  top: 64px;

`;
const Logo = styled.div<{logo:string}>`
  background-image: url(${(props) => props.logo});
  width: 44px;
  height: 29px;
  background-repeat: no-repeat;
  position: absolute;
  left: 16px;
  top: 64px;

`;

const Texture = styled.div<{imgHeight: number}>`
  width: 100%;
  height: ${(props) => props.imgHeight}px;
  background-image: url(${texture});
  opacity: 50%;
  position: absolute;
`;

const QurationBox = styled.div`
position: absolute;
top: 500px;
  color: white;
  left: 20px;
`;
const ThisWeekTop = styled.div`
  font-size: 16px;
  margin-bottom: 26px;
  font-weight: 400;
  font-family: 'Spoqa Han Sans Neo';

`;
const ThisWeekTopPlace = styled.div`
  font-size: 32px;
  font-family: "Vitro";
`;
const PlaceTheme = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
  font-weight: 300;
`;
const QurationMent = styled.div`
  font-size:16px;
  font-weight: 400;
`;

const FlexBox = styled.div`
  display:flex;
  cursor: pointer;
  img {
    margin-left: 30px;
  }
`;

export default FirstPlaceCard;
