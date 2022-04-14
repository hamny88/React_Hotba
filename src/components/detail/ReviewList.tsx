import React from 'react';
import styled from 'styled-components';
import {Like} from "../../assets";

function ReviewList() {
    const tempReview = [{
        id:"아이디 하나",
        like: 30,
        content: '차마시는 시간이 정말 즐겁다 라는 표현이 절로나오네요. 소믈리에분의 엄청 친근하고 편안하고 자세한 설명이 정말 인상 깊었습니다! 티를 단순하게 설명하기보단 스토리로 풀어서 설명해주리는게 재밋엇어요 그리고 대화 형식의 진행과 개별에 맞춘 티 처방또한 재미인것같아요! 알수록 재미있는것같아 익숙해 질때까지 재방문 꼭 하고싶어요!'
    }];
    return (
        <ReviewListContainer>
            <AddReview> <div>저도 다녀왔어요! </div></AddReview>
            {
                tempReview.map((item) => {
                    return (
                        <ReviewCard>
                            <ReviewInfo>
                                <Thumb />
                                <ID>{item.id}</ID>
                                <LikeNumber>
                                <img src={Like} />
                                    {item.like}</LikeNumber>
                            </ReviewInfo>
                            <Content>{item.content}</Content>
                        </ReviewCard>
                    )

                })
            }
            <MoreReview>꿀팁 더 볼래요!</MoreReview>
        </ReviewListContainer>
    )
}

const ReviewListContainer = styled.div
`
font-size: 16px;
font-family: 'Spoqa Han Sans Neo';
margin-top: 8px;
`;
const AddReview = styled.div`
    heigt: 68px;
    background: #FF3C81;
    border-radius: 8px;
    padding: 24px 107px;
    color: #FFFFFF;
    font-size: 16px;
    div {
        width: 114px;
    }
`;

const ReviewCard = styled.div`
    padding: 24px;
    border: 1px solid #FF3C81;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(13, 13, 13, 0.1);
    border-radius: 8px;
    font-weight: normal;
    font-size: 16px;
    margin-top: 8px;
    line-height: 160%;
`;
const ReviewInfo = styled.div`
    display:flex;
`;
const Thumb = styled.div`
background: #C4C4C4;
width: 20px;
height: 20px;
border-radius: 8px;
`;
const ID = styled.div`
margin-left: 8px;
white-space: nowrap;

`;
const LikeNumber = styled.div`
margin-left: 130px;
img {
  margin-right: 4px;  
}
color: #FF3C81;

`
const Content = styled.div`
margin-top: 16px;
line-height: 160%;
`;

const MoreReview = styled.div`
    margin-top: 8px;
    heigt: 68px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 24px 107px;
    color: #FF3C81;
    border: 1px solid #FF3C81;

    `;
export default ReviewList