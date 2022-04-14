import React, {useEffect, useState} from "react";
import styled from "styled-components";
import InformationCotainer from "./InformationContainer";
import PhotoCarousel from "./PhotoCarousel";

type DetailProps =  {
    imgHeight:number;
}
function Detail({imgHeight}: DetailProps) {
    return(
        <DetailContiner >
            <PhotoCarousel imgHeight={imgHeight} />
            <InformationCotainer />
        </DetailContiner>
    )
} 

const DetailContiner = styled.div`
    height: 810px;
`;
const Thumbnail = styled.div``;


export default Detail