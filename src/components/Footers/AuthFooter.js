/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const merchiLogo = require("../../assets/img/merchi-logo-colour.svg").default;
const merchiLine = require("../../assets/img/merchi-swipe-outline.png").default;

function AuthFooter() {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="mb-4 ml-0">
            <Col className="pl-0" md="6">
              <img
                className="d-block d-md-inline my-2"
                style={{ height: 25, margin: "auto" }}
                src={merchiLogo}
                alt="Merchi"
              />
            </Col>
            <Col
              className="d-flex mt-2 mt-md-0 justify-content-center justify-content-md-end"
              md="6"
            >
              <a className="p-2" href="/">
                <svg
                  style={{ marginTop: -4, marginRight: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
                For Suppliers
              </a>
              <a className="p-2" href="/">
                <svg
                  style={{ marginTop: -4, marginRight: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
                For Sellers
              </a>
            </Col>
          </Row>
          <div style={{ borderBottom: "1px solid rgb(227, 228, 247)" }}></div>
          <div style={{ borderTop: "1px solid rgb(255, 255, 255)" }}></div>
          <Row className="mt-6 d-none d-sm-flex">
            <Col sm="3">
              <h3>Company</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>
                  <NavLink style={{ padding: 0 }} to="/auth/about" tag={Link}>
                    <span className="nav-link-inner--text">About</span>
                  </NavLink>
                </li>
                <li>Media</li>
                <NavLink style={{ padding: 0 }} to="/auth/contact" tag={Link}>
                  <span className="nav-link-inner--text">Contact</span>
                </NavLink>
              </ul>
            </Col>
            <Col sm="3">
              <h3>Resources</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <a
                  href="https://merchisdk.github.io/sdk/"
                  style={{ padding: 0 }}
                >
                  <span
                    style={{ color: "rgb(82, 95, 127)" }}
                    lassName="nav-link-inner--text"
                  >
                    Developer docs
                  </span>
                </a>
                <NavLink style={{ padding: 0 }} to="/auth/security" tag={Link}>
                  <span className="nav-link-inner--text">Security</span>
                </NavLink>
                <NavLink style={{ padding: 0 }} to="/auth/pricing" tag={Link}>
                  <span className="nav-link-inner--text">Pricing</span>
                </NavLink>
              </ul>
            </Col>
            <Col sm="3">
              <h3>Links</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>Login</li>
                <li>
                  <a
                    href="https://github.com/merchisdk/sdk"
                    style={{ padding: 0 }}
                  >
                    <span
                      style={{ color: "#525f7f" }}
                      className="nav-link-inner--text"
                    >
                      Github
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <div
                style={{
                  backgroundImage: `url(${merchiLine})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "100%",
                  minHeight: 100,
                }}
              />
            </Col>
          </Row>
          <Row className="mt-6 d-sm-none">
            <Col className="text-center" sm="3">
              <h3>Company</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>
                  <NavLink style={{ padding: 0 }} to="/auth/about" tag={Link}>
                    <span className="nav-link-inner--text">About</span>
                  </NavLink>
                </li>
                <li>Media</li>
                <NavLink style={{ padding: 0 }} to="/auth/contact" tag={Link}>
                  <span className="nav-link-inner--text">Contact</span>
                </NavLink>
              </ul>
            </Col>
            <Col className="text-center" sm="3">
              <h3>Resources</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <a
                  href="https://merchisdk.github.io/sdk/"
                  style={{ padding: 0, color: "rgb(82, 95, 127)" }}
                >
                  <span className="nav-link-inner--text">Developer docs</span>
                </a>
                <li>Security</li>
                <NavLink style={{ padding: 0 }} to="/auth/pricing" tag={Link}>
                  <span className="nav-link-inner--text">Pricing</span>
                </NavLink>
              </ul>
            </Col>
            <Col className="text-center" sm="3">
              <h3>Links</h3>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>Login</li>
                <a
                  href="https://github.com/merchisdk/sdk"
                  style={{ padding: 0 }}
                >
                  <span
                    style={{ color: "#525f7f" }}
                    className="nav-link-inner--text"
                  >
                    Github
                  </span>
                </a>
              </ul>
            </Col>
            <Col sm="3">
              <div
                className="mt-3"
                style={{
                  backgroundImage: `url(${merchiLine})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  minHeight: 100,
                  margin: "auto",
                }}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              className="d-flex justify-content-center justify-content-sm-start"
              sm="6"
            >
              <small>Copyright &copy; 2021 Merchi</small>
            </Col>
            <Col
              className="d-flex justify-content-center justify-content-sm-end"
              sm="6"
            >
              <NavLink style={{ padding: 0 }} to="/auth/privacy" tag={Link}>
                <small>Privacy policy</small>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
