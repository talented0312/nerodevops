import React from "react";
import "./home.css";
import CommonHeader from "../../components/Header/CommonHeader";
import StartupBreeders from "../../components/StartupBreeders";
import { Col, Container, Row } from "react-bootstrap";
import MainFooter from "../mainFooter/MainFooter";
// import SponsoredHeadlines from "./sponsoredHeadlines";
import Designer from "../../assets/img/designer.jpg";
import Developer from "../../assets/img/developer.png";
import Linkedin from "../../components/Linkedin";
import DevOps from "../../assets/img/devops.png";
import SkeletonLeft from "../../assets/img/skeleton.png";
import SkeletonRight from "../../assets/img/skeleton1.png";
import LogoAnimation from "../LogoAnimation";
import Fade from "react-awesome-reveal";

const Home = () => {
  return (
    <React.Fragment>
      <CommonHeader />
      <LogoAnimation />
      <div className="main pb-4 mt-4">
        <img src={SkeletonLeft} className="skeletonleft" alt="skeleton-left" />
        <img src={SkeletonRight} className="skeletonright" alt="skeleton-right" />
        <div className="banner with-home">
          <Container style={{ width: "1550px!important" }}>
            <Linkedin />
          </Container>
          {/* <div className="spring-flex">
            <Fade direction="up">
              <div className="spring-sponsored-role">
                <p className="spring-sponsored-headline">
                  Certifications
                </p>
              </div>
            </Fade>
          </div>
          <Container style={{ width: "1550px!important" }}>
            <SponsoredHeadlines />
          </Container> */}
        </div>
        <Container fluid>
          <Row className="mx-0 mb-5">
            <Col>
              <div className="find-partner">
                <div className="spring-flex-aspiring">
                  <Fade direction="up">
                    <div className="spring-sponsored-role">
                      <h2 className="section-title">
                        Find Partners with <span>BIG IDEAS</span><br></br> on Our Landing Page
                      </h2>
                    </div>
                  </Fade>
                </div>
                <Fade direction="up">
                  <p className="aspiring-consaltant">
                    Our Consaltant
                  </p>
                </Fade>
                <div className="consaltant">
                  {/* <div>
                    <img src={Designer} alt="icon" className="devconsalt" />
                    <span className="tapLetter">Designer</span>
                    <span className="tapname1">Apaev Iwan</span>
                  </div> */}
                  <div>
                    <img src={DevOps} alt="icon" className="devconsalt" />
                    <span className="tapLetter">Developer</span>
                    <span className="tapname">Noah Sim</span>
                  </div>
                  {/* <div>
                    <img src={Developer} alt="icon" className="devconsalt" />
                    <span className="tapLetter">DevOps</span>
                    <span className="tapname1">Russell Bello</span>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <StartupBreeders />
      </div>
      <MainFooter />
    </React.Fragment>
  );
};
export default Home;
