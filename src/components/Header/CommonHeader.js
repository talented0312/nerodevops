/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import LogoImage from "../../assets/img/marks.png";
import { Link } from "react-router-dom";
import Telegram from "../../assets/headerIcon/telegram.png";
import "./Header.css";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class CommonHeader extends Component {
  render() {
    return (
      <React.Fragment>
        {/* React nav  */}
        <Navbar bg="light" expand="lg" className="w-100" fixed="top">
          <Container fluid>
            <Link className="navbar-brand" to="/">
              <img src={LogoImage} alt="logo" className="logoImage" />
            </Link>
            <>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink
                    exact
                    activeClassName="active"
                    title="How it works?"
                    className="nav-link "
                    to="#"
                  >
                    <a href="https://join.skype.com/invite/xFKMeWeFs1bk" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="svgskype" viewBox="0 0 24 24"><path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z" /></svg>
                    </a>
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    title="How it works?"
                    className="nav-link "
                    to="#"
                  >
                    <a href="https://discord.gg/crocodile#8661" target="_blank" rel="noreferrer">
                      <svg width="24" height="24" className="svgsdiscord" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" /></svg>
                    </a>
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    title="About Us"
                    className="nav-link "
                    to="#"
                  >
                    <a href="https://t.me/narakarax" target="_blank" rel="noreferrer">
                      <img src={Telegram} alt='tg' style={{ width: "24px" }} />
                    </a>
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    title=" Our Mission"
                    className="nav-link "
                    to="#"
                  >
                    <svg width="24" height="24" className="svgphone" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" /></svg>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default CommonHeader;
