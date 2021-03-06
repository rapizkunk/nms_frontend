import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MK from "../image/MK.png";
import test from "../image/test.jpg";
import ShowPromotion from "./ShowPromotion";
import { Card } from 'antd';
import "./index.css"
import { Row, Col } from 'antd';

const ImageSlider = ({ promotion}) => {

    let settings = {
        dot: true,
        infinite: true,
        slidesToshow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        speed: 500
    }

    return (


        <Slider {...settings}>
       
          
   <ShowPromotion item={promotion} url="promotion" />

         
        </Slider>


    )
}
export default ImageSlider;