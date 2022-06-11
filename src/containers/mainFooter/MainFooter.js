/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import footerLogo from "../../assets/img/marks.png";
import "./MainFooter.scss";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <React.Fragment>
      <footer className="footer py-5 bg-dark text-white foot-pos">
        <Container>
          <Row>
            <Col md={5}>
              <Link className="navbar-brand me-lg-3 ms-0 mb-3 d-flex align-items-center" to="/">
              </Link>
              <Fade direction="up">
                <p className="freelancer">Freelance Collaboration</p>
              </Fade>
              <iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"></iframe>
            </Col>
            <Col xs={6} md={3} className="mb-5 mb-lg-0 justify-content-center for-space">
            </Col>
            <Col xs={12} md={4}>
              <span className="h5 mb-3 d-block subscribefont">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2 input-custom"
                      placeholder="Enter your email address"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block submit-btn"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0 font-custom">
                We’ll never share your details. See our{" "}<br></br>
                <Link className="text-white" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </p>
            </Col>
          </Row>
          <div style={{ display: 'flex' }}>
            <hr className="bg-gray footer-line" />
            <div className="footeravatar"><img src={footerLogo} /></div>
            <hr className="bg-gray footer-line" />
          </div>
          <Row>
            <Col className="mb-md-2">
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0 copyrightfont">
                  Copyright © Nerona 2021-
                  <span className="current-year">2022</span>. <br></br> All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default MainFooter;
