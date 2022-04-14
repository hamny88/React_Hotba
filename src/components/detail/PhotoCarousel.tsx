import React, {useEffect, useState} from "react";
import styled from "styled-components";
// import image from '../main/image.png';
// import Slider from "react-slick";
// import logo from '../../assets/Main/logo.svg';
// import tea from './tea.jpeg';

import {image, logo, tea} from "../../assets";

import { useNavigate } from "react-router-dom";
type PhotoCarouselProps = {
    imgHeight : number;
}
function PhotoCarousel({imgHeight}: PhotoCarouselProps) {
    const navigate = useNavigate();

    console.log(imgHeight)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Carousel className="Carousel">
         <Logo logo={logo}  onClick={() => navigate('/hotba')}/>
        {/* <Slider className="Slider" {...settings}> */}
            <Cover className="Cover" imgHeight={imgHeight} />
            {/* <Tea className="Tea" imgHeight={imgHeight} /> */}
        {/* </Slider> */}
        </Carousel>
    )

}
const Carousel = styled.div`
    position: relative;
    .slick-dots {
        
    bottom: 120px;
        color: white;
        width: 100%;
        margin: 0;
        list-style: none;
        text-align: center;
    }
    .slick-dots li button::before {
        color: white !important;
        font-size: 10px;

      }
      .slick-dots li button::after {
        color: #FFFFFF !important;
        font-size: 10px;

      }

`;
const Cover = styled.div<{imgHeight:number}>`
    width: 100%;
    height: ${(props) => props.imgHeight}px;
    background-image: url(${image});
    background-repeat: no-repeat;
    position: relative;
`;

const Tea = styled.div<{imgHeight:number}>`
    width: 100%;
    height: ${(props) => props.imgHeight}px;
    background-image: url(${tea});
    background-repeat: no-repeat;
    position: relative;
`;

const Logo = styled.div<{logo:string}>`
  background-image: url(${(props) => props.logo});
  width: 44px;
  height: 29px;
  background-repeat: no-repeat;
  position: absolute;
  left: 16px;
  top: 64px;
  z-index: 10;
  cursor: pointer;
`;
export default PhotoCarousel