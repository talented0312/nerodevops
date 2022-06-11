/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./style.css";
import $ from "jquery";
import LinkedinLeft from "../../assets/img/test1.png"
import LinkedinRight from "../../assets/img/test2.png"
const Linkedin = () => {
  const [leftRibbon, setLeftRibbon] = useState(false)
  const [rightRibbon, setRightRibbon] = useState(false)
  const CallMouseMove1 = () => {
    setLeftRibbon(true);
    $(".img_producto_container")
      // tile mouse actions
      .on("mouseover", function () {
        $(this)
          .children(".img_producto")
          .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function () {
        $(this)
          .children(".img_producto")
          .css({ transform: "scale(1)" });
      })
      .on("mousemove", function (e) {
        $(this)
          .children(".img_producto")
          .css({
            "transform-origin":
              ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
              "% " +
              ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
              "%"
          });
      });
  }
  const CallMouseMove2 = () => {
    setRightRibbon(true);
    $(".img_producto_container")
      // tile mouse actions
      .on("mouseover", function () {
        $(this)
          .children(".img_producto")
          .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function () {
        $(this)
          .children(".img_producto")
          .css({ transform: "scale(1)" });
      })
      .on("mousemove", function (e) {
        $(this)
          .children(".img_producto")
          .css({
            "transform-origin":
              ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
              "% " +
              ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
              "%"
          });
      });
  }
  const LeaveEvent = () => {
    setLeftRibbon(false);
  }
  const LeaveEvent1 = () => {
    setRightRibbon(false);
  }
  return (
    <>
      <Container fluid>
        <Row className="mx-0 mb-5">
          <Col>
            <h1 className="breed" style={{ fontSize: "60px" }}>About Me</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h4 className="breed" style={{ width: "65%" }}>
                All Best! I am focusing to CREATIVE and TERRIFIC idea for software development. My purpose in software development is satisfy of CUSTOMERS and rating from them. I have RICH EXPERIENCE in Mobile app and web development and have done 50+ projects for US, Canada, Australia, New Zealand, France, Germany...etc. If someone give me idea or mockup, I implement it perfectly and they will get delivery of BEST QUALITY.
              </h4>
            </div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div class="img_producto_container" data-scale="1.6" onMouseEnter={CallMouseMove1} onMouseLeave={LeaveEvent}>
                <img
                  className="dslc-lightbox-image img_producto"
                  src={LinkedinLeft}
                  target="_self"
                  style={{ backgroundImage: "url(../../assets/img/test1.png)" }}
                >
                </img>
                {
                  leftRibbon === false ? <div className="ribbon ribbon-top-left">
                    <span> ✪ Passed ✪ </span>
                  </div> : null
                }
              </div>
              <div class="img_producto_container" data-scale="1.6" onMouseEnter={CallMouseMove2} onMouseLeave={LeaveEvent1}>
                <img 
                  className="dslc-lightbox-image img_producto"
                  src={LinkedinRight}
                  target="_self"
                  style={{ backgroundImage: "url(../../assets/img/test2.png)" }}
                >
                </img>
                {
                  rightRibbon === false ? <div className="ribbon ribbon-bottom-right">
                    <span> ✪ Passed ✪ </span>
                  </div> : null
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Linkedin;