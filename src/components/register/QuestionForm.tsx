import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./questionList.json";

type Question = {
  question: string;
  list: string[];
  type: string;
}[];

function QuestionForm() {
  const questionObj: Question = data;
  console.log(questionObj[0]);

  return (
    <QuestionWrapper className="questionWrapper">
      {questionObj.map((item) => {
        return (
          <Questions>
            <Title>{item.question}</Title>
            <Response>
              {item.type === "selection" && <SelectionList list={item.list} />}
              {item.type === "text" && (
                <Textanswer placeholder="장소를 잘 활용할 수 있는 팁을 적어주세요" />
              )}
            </Response>
          </Questions>
        );
      })}
    </QuestionWrapper>
  );
}
const SelectionList = ({ list }: any) => {
  return (
    <>
      {list.map((item:any) => (
        <List>{item}</List>
      ))}
    </>
  );
};

const QuestionWrapper = styled.div``;
const Questions = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 700;
  font-size: 24px;
`;
const Response = styled.div`
  margin-top: 32px;
`;
const List = styled.div`
  padding: 16px;
  border: 1px solid #4065ff;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 8px;
  color: #4065ff;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  line-height: 20px;
`;
const Textanswer = styled.textarea`
  background: linear-gradient(
      0deg,
      rgba(64, 101, 255, 0.08),
      rgba(64, 101, 255, 0.08)
    ),
    #ffffff;
  border: 1px solid #4065ff;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  resize: none;
  padding: 16px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  line-height: 20px;
  min-height: 152px;
`;
export default QuestionForm;
