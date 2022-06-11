/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../../assets/sass/theme.scss";
import "../../assets/sass/responsive.scss";
import "../../assets/sass/bootstrap.min.css";
import "../../assets/sass/range.scss";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SponsoredHeadlines = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: -1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2,
          slidesToScroll: -1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: -1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: -1,
          dots: false,
        },
      },
    ],
  };
  const popularCerts = [
    {
      number: "0 1",
      domainName: "./certs/Hacker.png"
    },
    {
      number: "02",
      domainName: "./certs/Institute.png"
    },
    {
      number: "03",
      domainName: "./certs/SmartKnower.png"
    },
    {
      number: "04",
      domainName: "./certs/Spark.png"
    },
    {
      number: "05",
      domainName: "./certs/diego.png"
    },
    {
      number: "06",
      domainName: "./certs/udemy.png"
    }
  ]
  return (
    <>  <Container fluid>
      <Row className="mx-0 mb-5">
        <Col>
          <div className="studio-icons flogo" style={{ background: "rgb(14 14 14 / 0%)" }}>
            <div className="container">
              <Slider {...settings}>
                {
                  popularCerts.map((data, index) =>
                  (
                    <div className="slider-bg">
                      <img src={data.domainName} alt="cert"/>
                    </div>
                  )
                  )
                }
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default SponsoredHeadlines;
