import React from 'react';
import styled from "styled-components";
import { google, naver, kakao } from "../../assets"; 


function Location() {
    const mapObj = [
        {
            name:"카카오맵",
            icon: kakao
        }, 
        {
            name: "구글지도",
            icon: google,
        },
        {
            name: "네이버 지도",
            icon: naver,
        },
    ];

    return (
        <>
   <Introduction>
             종로에 위치한 테이스팅 티 카페 <Pink>월하보이</Pink>에요.
            </Introduction>

            <LocationBox>
                <LocationText>
                    <Bold> 위치 </Bold>
                    <FlexBox>
                    <LightGray>서울특별시 종로구 북촌로5길 26</LightGray>
                    <div className="copy-address" onClick={(e)=> copyAddress(e)}>주소복사</div>
                    </FlexBox>
                </LocationText>
                <LocationApps>
                   {
                       mapObj.map((item) => {
                           return <div>
                           <img src = {item.icon} onClick={()=> switchMap(item.name)}/>
                            <div className="name" >{item.name}</div>
                           </div>
                       })
                   }
                </LocationApps>
            </LocationBox>
            <LocationTip>
                   <Bold>장소 활용 꿀팁</Bold>
                   <FlexBox>
                   <LightGray>현재 <Pink>35개</Pink>의 꿀팁 누적</LightGray>
                   <SortButton>꿀팁 정렬</SortButton>
                </FlexBox>
            </LocationTip>


        </>
    )
}

function switchMap(appName:string) {
    switch (appName) {
        case '카카오맵':    
            window.open('http://kko.to/Gx7YRKa5H', '_blank'); 
        break;

        case '구글지도': 
            window.open('https://goo.gl/maps/wLx1b7DgFpCgx8nbA, `_blank'); 
            break;
        case '네이버 지도':
            window.open('http://naver.me/x7vrPcYd', '_blank')
            break;
        default:

    }
}
function copyAddress(e:any) {
    navigator.clipboard.writeText("서울특별시 종로구 북촌로5길 26")
    alert("copied")
}
const Introduction = styled.div`
    font-size: 32px;
    line-height: 150%;
    letter-spacing: -0.02em;

`;

const Pink = styled.span`
    color: #FF3C81;
`;


const Bold = styled.div`
    font-weight: bold;
    font-size: 24px;
    font-style: normal;
`;

const LightGray = styled.div`
    margin-top: 8px;
    font-weight: normal;
    font-size: 16px;
    color: #565656;
    `;


const LocationText = styled.div`
    .copy-address {
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.02em;
        text-decoration-line: underline;
        margin-top: 10px;
        cursor: pointer;
    }
`;
const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const LocationBox = styled.div`
    margin-top: 72px;
`;
const LocationApps = styled.div`
    margin-top: 32px;
    display:flex;
    justify-content: space-around;
    font-size: 14px;
    text-align: center;
    img {
        width: 70px;
    }
    cursor: pointer;
`;

const LocationTip = styled.div`
    margin-top: 72px;
`;

const SortButton = styled.div`
    padding: 8px 16px;
    background: #FFFFFF;
    border: 1px solid #FF3C81;
    box-sizing: border-box;
    border-radius: 20px;
    color: #FF3C81;
    letter-spacing: -0.02em;
    font-size: 14px;
`;

export default Location