import styled from "styled-components";
import QuestionForm from "./QuestionForm";
function Register() {
  return (
    <RegisterContainer>
      {/* <Header title={"꿀팁작성"} /> */}
      <QuestionForm />
      <ShareBtn>꿀팁 공유하기</ShareBtn>
      <Blank></Blank>
    </RegisterContainer>
  );
}
const Blank = styled.div`
  width: 100%;
  height: 200px;
`;
const RegisterContainer = styled.div`
  font-family: Spoqa Han Sans Neo;
  padding: 63px 20px 0px 20px;
`;
const ShareBtn = styled.div`
  background: #4065ff;
  border-radius: 8px;
  padding: 24px 120px;
  color: #FFFFFF;
  font-size: 16px;
  white-space: nowrap;
`;
export default Register;
