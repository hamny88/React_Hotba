import React from 'react';
import styled from 'styled-components';
import PlaceList from './PlaceList';

function AnotherHotPlace() {
    return (
        <HotPlaceContiner>
        <Bold>여기도 핫해요</Bold>
        <Discription>월하보이와 비슷한 핫플레이스를 골라보았어요</Discription>
        <PlaceList />
        </HotPlaceContiner>
    )
}

const HotPlaceContiner = styled.div`
    margin-top:72px;
`

const Bold = styled.div`
    font-weight: bold;
    font-size: 24px;
    font-style: normal;
`;

const Discription = styled.div`
    margin-top: 8px;
`;

export default AnotherHotPlace