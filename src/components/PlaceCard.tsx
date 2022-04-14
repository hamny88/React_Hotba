import React, {useState} from "react";
import styled from "styled-components";

import {texture} from "../assets";

type PlaceCardProps = {
  photo: string;
  place: string;
};

function PlaceCard({ photo,place }: PlaceCardProps) {

  return (
    <PlaceCardContainer photo={photo}>
      <Texture />
      <Place>{place}</Place>
    </PlaceCardContainer>
  );
}

const Place = styled.div`
  font-size: 28px;
  font-family: "Vitro";
  color: white;
  position: relative;

  bottom: 60px;
  margin-left: 20px;
`;
const PlaceCardContainer = styled.div<{ photo: string }>`
  width: 100%;
  height: 335px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 32px;
  background-image: url(${(props) => props.photo});
`;
const Texture = styled.div`
  background-image: url(${texture});
  width: 100%;
  height: 335px;
  opacity: 0.3;
`;
export default PlaceCard;
