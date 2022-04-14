import React from 'react'
import styled from 'styled-components';

import { place, texture} from "../../assets";

function PlaceList() {

    const placeObj = [
        {
            img: place,
            title:'북앤레스트',
            theme: '북카페',
        }
    ];

    return(
        <PlaceListCotainer>
            {
                placeObj.map((item) => {
                    return(
                        <>
                        <Place img={item.img}>  
                        <Texture className="texture" />
                        <Info>
                        <Title>{item.title}</Title>
                            <Theme>{item.theme}</Theme>
                        </Info>
                        </Place>
                        </>
                    )
                })
            }
            <MorePlace>비슷한 장소 더보기</MorePlace>
            <Blank />
        </PlaceListCotainer>
    )
}


const Blank = styled.div`
    width: 100%;
    height: 100px;
`;
const PlaceListCotainer = styled.div`
    margin-top:32px;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    color:#FFFFFF;

`;
const Texture = styled.div`
    width: 100%;
    height: 200px;
    background-image:url(${texture});
    position: absolute;
    opacity:0.5;
    `;
const Place = styled.div<{img:string}>`
    position:relative;
    width:100%;
    height: 200px;
    background-image: url(${(props) => props.img});
    display: flex;
    flex-direction: column-reverse;
`;

const Info = styled.div`
    position :absolute;
    margin-bottom: 16px;
`;

const Title = styled.div`
    margin-left: 16px;
    font-family: "Vitro";
    font-size:20px;
    color:#FFFFFF;

`;
const Theme = styled.div`
    margin-left: 16px;
`;
const MorePlace = styled.div`
    margin-top:8px;
    border: 1px solid #4065FF;
    box-sizing: border-box;
    border-radius: 8px;
    color: #4065FF;
    padding: 24px 103px;
    white-space: nowrap;
`;


export default PlaceList