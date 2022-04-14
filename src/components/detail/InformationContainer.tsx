import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import AnotherHotPlace from "./AnotherHotplace";
import Location from "./Location";
function InformationCotainer() {
    return (
        <InformationContainer>
            <Location />
                <ReviewList />
            <AnotherHotPlace />
        </InformationContainer>
    )
}

const InformationContainer = styled.div`
    padding: 32px 20px 0px;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo';
`;


const ReviewBox = styled.div`
    margin-top: 32px;
`;

export default InformationCotainer