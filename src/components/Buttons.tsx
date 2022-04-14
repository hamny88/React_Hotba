import React from "react";
import { useNavigate } from "react-router";
import styled, { createGlobalStyle } from "styled-components";

function Buttons() {
      const navigate = useNavigate();
    return (
         <Nav>
          <Btn onClick={() => navigate('/')}>Main</Btn>
          <Btn onClick={() => navigate('/detail')}>Detail</Btn>
          <Btn onClick={() => navigate('/saved')}>Saved</Btn>
          <Btn onClick={() => navigate('/register')}>Register</Btn>
        </Nav> 
    )



}

const Nav = styled.div`
display: flex;
position: fixed;
bottom: 20px;
`;
const Btn = styled.div`
background: #4065ff;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 16px;
    white-space: nowrap;
    width: 80px;
    padding: 12px 8px;
    margin-left: 10px;
    font-family: 'Spoqa Han Sans Neo';
    cursor: pointer;
    text-align: center;

`;
export default Buttons;