import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import AboutHeader from "../../components/Headers/AboutHeader.js";

const shoesImage = require("../../assets/img/sneakers.png").default;
const customProducts =
  require("../../assets/img/print-embroid-about.png").default;
const logistics = require("../../assets/img/merchi-logistics.png").default;
const scale = require("../../assets/img/merchi-scale.png").default;
const phone = require("../../assets/img/merchi-support.png").default;
const skateboard = require("../../assets/img/merchi-skateboard.png").default;
const frog = require("../../assets/img/merchi-frog.jpg").default;
const lips = require("../../assets/img/merchi-lips.jpg").default;
const graf = require("../../assets/img/merchi-graf.jpg").default;

function About() {
  return (
    <>
      <div className="main-content" style={{ overflowX: "hidden" }}>
        <AboutHeader />
        <section className="py-3">
          <Container className="position-relative">
            <div
              style={{
                background: "#f0f2fd",
                width: "calc(100% - 150px)",
                height: "450px",
                position: "absolute",
                top: "90px",
                transform: "translateX(-50%)",
                left: "50%",
                borderRadius: "3px",
              }}
            >
              <img
                src={skateboard}
                style={{
                  maxWidth: "500px",
                  position: "absolute",
                  top: "300px",
                  transform: "translateX(-50%)",
                  left: "50%",
                }}
                alt="merch skateboard"
              ></img>
            </div>
            <Row>
              <Col
                className="d-flex align-items-center justify-content-around"
                md="6"
              >
                <div style={{ maxWidth: 500 }}>
                  <h2
                    style={{
                      lineHeight: "60px",
                      color: "#303dbf",
                      fontWeight: 700,
                    }}
                    className="display-3"
                  >
                    Make Merch Easy.
                  </h2>
                  <p style={{ fontWeight: 800, fontSize: 16 }}>
                    It's been over five years since Merchi was first
                    conceptualised to satisfy the operational needs of our small
                    merchandising business here in Melbourne, Australia.
                  </p>
                  <p style={{ fontSize: 16 }}>
                    None of the tools we found online had the functionality we
                    needed to run our merchandise stores online, so we built
                    something that could. Since Merchi first launched for
                    general availability, we have onboarded a network of
                    suppliers and sellers that together create a thriving
                    merchandise platform.
                  </p>
                </div>
              </Col>
              <Col
                className="d-flex d-md-none"
                md="6"
                style={{
                  backgroundImage: `url(${customProducts})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 300,
                }}
              ></Col>
              <Col
                className="d-none d-md-flex"
                md="6"
                style={{
                  backgroundImage: `url(${customProducts})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 375,
                }}
              ></Col>
            </Row>
          </Container>
        </section>

        {/* <section style={{ marginTop: "300px" }} className="pt-8">
          <Container>
            <Row
              style={{
                margin: 0,
                background: "#303DBF",
                borderRadius: 5,
              }}
              className="justify-content-center"
            >
              <Col className="position-relative" style={{ height: 400 }} md="6">
                <img
                  className="position-absolute"
                  src={shoesImage}
                  style={{
                    top: -100,
                    maxWidth: 350,
                    left: "calc(50% - 160px)",
                    width: "100%",
                  }}
                  alt="Merchi Shoes"
                />
              </Col>
              <Col md="6 pl-md-0 d-flex align-items-center justify-content-center">
                <div className="pb-5 px-5 pt-0 pl-md-0 pr-md-3 py-md-3">
                  <h2
                    style={{ lineHeight: "42px", color: "#fff" }}
                    className="display-3"
                  >
                    Merchi Marketplace
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450, color: "#fff" }}>
                    Search the Merchi marketplace for custom products that align
                    with your brand. All of our suppliers are verified to ensure
                    your branded merchandise is the highest quality.
                  </p>
                  <Button
                    className="btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    Browse marketplace
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <section style={{ marginTop: 300 }}>
          <Container>
            <Row>
              <Col
                md="4"
                className="d-flex align-items-center justify-content-center"
              >
                <div
                  className="d-none d-md-block"
                  style={{ maxWidth: 400, paddingTop: 150, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Benefit One.
                  </h2>
                  <p style={{ fontSize: 16, maxWidth: 210 }}>
                    Present your products to thousands of Merchi's sellers,
                    build merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
                <div
                  className="d-block d-md-none mt-6"
                  style={{ maxWidth: 400, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Benefit One.
                  </h2>
                  <p style={{ fontSize: 16 }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
              </Col>
              <Col
                md="4"
                className="d-flex align-items-center justify-content-center"
              >
                <div
                  className="d-none d-md-block"
                  style={{ maxWidth: 400, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Feature Two.
                  </h2>
                  <p style={{ fontSize: 16, maxWidth: 300 }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
                <div
                  className="d-block d-md-none mt-2"
                  style={{ maxWidth: 400, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Feature Two.
                  </h2>
                  <p style={{ fontSize: 16 }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
              </Col>
              <Col
                md="4"
                className="d-flex align-items-center justify-content-center"
              >
                <div
                  className="d-none d-md-block"
                  style={{ maxWidth: 400, paddingTop: 150, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Selling Point.
                  </h2>
                  <p style={{ fontSize: 16, maxWidth: 330 }}>
                    Present your products to thousands of Merchi's sellers,
                    build merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
                <div
                  className="d-block d-md-none mt-2"
                  style={{ maxWidth: 400, zIndex: 1 }}
                >
                  <h2
                    style={{ lineHeight: "42px" }}
                    className="display-4 text-default"
                  >
                    Selling Point.
                  </h2>
                  <p style={{ fontSize: 16 }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section style={{ marginTop: 300 }}>
          <Container
            fluid
            className="position-relative"
            style={{ background: "#f8f9fe" }}
          >
            <Container>
              <Row className="row-grid align-items-center">
                <Col>
                  <div
                    className="mt-6 mb-5 text-center"
                    style={{ maxWidth: 600, margin: "auto" }}
                  >
                    <h2
                      className="display-3"
                      style={{
                        color: "#2f2f2f",
                        fontWeight: 800,
                        textShadow: "1px 1px 0px #f8f9fe",
                        display: "inline",
                      }}
                    >
                      Merchi{" "}
                      <span
                        style={{
                          color: "rgb(255, 68, 73)",
                          textShadow: "1px 1px 0px #f8f9fe",
                          display: "inline",
                          fontWeight: 800,
                        }}
                      >
                        mission.
                      </span>
                    </h2>

                    <p
                      style={{
                        fontSize: "16px",
                        textShadow: "1px 1px 0px #f8f9fe",
                        margin: "auto",
                        maxWidth: 500,
                        fontWeight: 800,
                        lineHeight: "20px",
                      }}
                      className="mt-2 text-strong text-left"
                    >
                      Make merch easy by connecting suppliers to sellers, and
                      sellers to their audience.
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        textShadow: "1px 1px 0px #f8f9fe",
                        margin: "auto",
                        maxWidth: 500,
                        lineHeight: "26px",
                      }}
                      className="mt-3 text-left"
                    >
                      We're helping suppliers and sellers meet the full
                      opportunity available to them in custom merchandise. We
                      disrupt the current space by building a decentralised
                      marketplace with both small and large participants.
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        textShadow: "1px 1px 0px #f8f9fe",
                        margin: "auto",
                        maxWidth: 500,
                        lineHeight: "26px",
                      }}
                      className="mt-3 text-left"
                    >
                      Merchi makes cooperation between participants of all sizes
                      possilbe, resulting in the creation of truly unique and
                      desirable merchandise products.
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        textShadow: "1px 1px 0px #f8f9fe",
                        margin: "auto",
                        maxWidth: 500,
                        lineHeight: "26px",
                      }}
                      className="mt-3 text-left"
                    >
                      Join today and see how Merchi can can help grow your
                      merchandise business.
                    </p>
                    <div style={{ maxWidth: 500 }} className="text-left m-auto">
                      <Button
                        className="btn-neutral mt-4"
                        color="default"
                        to="/admin/dashboard"
                      >
                        Suppliers
                      </Button>
                      <Button
                        className="btn-neutral mt-4"
                        color="default"
                        to="/admin/dashboard"
                      >
                        Sellers
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <img className="w-100" src={lips} alt="merchi-frog" />
                </Col>
                <Col sm="4">
                  <img className="w-100" src={frog} alt="merchi-frog" />
                </Col>
                <Col sm="4">
                  <img className="w-100" src={graf} alt="merchi-frog" />
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
        {/* <section className="pt-0 mb-8 pt-md-8">
          <Container>
            <Row
              style={{
                margin: 0,
                borderRadius: 5,
                // border: "2px rgb(48, 61, 191) solid",
              }}
              className="justify-content-center"
            >
              <Col md="d-flex align-items-center justify-content-center">
                <div className="p-5 pb-sm-7 pb-md-5 pl-md-5 pr-md-2 pl-lg-7">
                  <h2
                    style={{
                      lineHeight: "42px",
                      color: "#303dbf",
                      fontWeight: 800,
                    }}
                    className="display-3"
                  >
                    Sell with Merchi.
                  </h2>
                  <p style={{ fontSize: 18 }}>
                    Get started with Merchi risk free and without cost. Open a
                    seller or supplier basic account to access the marketplace
                    today.
                  </p>
                  <Button
                    className="btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    Suppliers
                  </Button>
                  <Button
                    className="btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    Sellers
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <section className="pb-7 pt-9"></section> */}
      </div>
    </>
  );
}

export default About;
