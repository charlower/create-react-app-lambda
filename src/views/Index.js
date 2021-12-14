import { useEffect, useState, useRef, useLayoutEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";
import * as THREE from "three";
import * as landJson from "../assets/land-110m.json";
import airportData from "../assets/airports.dat";
import routeData from "../assets/routes.dat";
import * as d3 from "d3-dsv";
import indexBy from "index-array-by";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import AuthFooter from "../components/Footers/AuthFooter.js";

const cetraliseImage = require("../assets/img/centralise.jpg").default;
const oportunitiesImage = require("../assets/img/expand-online.jpg").default;
const expandImage = require("../assets/img/new-opportunities.jpg").default;
const shoesImage = require("../assets/img/sneakers.png").default;
const customProducts =
  require("../assets/img/merchi-custom-products.png").default;
const logistics = require("../assets/img/merchi-logistics.png").default;
const scale = require("../assets/img/merchi-scale.png").default;
const phone = require("../assets/img/merchi-support.png").default;

const MAP_CENTER = { lat: -37.8, lng: 145, altitude: 4 };

const airportParse = ([
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source,
]) => ({
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source,
});
const routeParse = ([
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment,
]) => ({
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment,
});

const landPolygons = topojson.feature(
  landJson.default,
  landJson.default.objects.land
).features;

function Index() {
  const globeEl = useRef();
  const globeContainer = useRef();

  const [animate, setAnimate] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [animating, setAnimating] = useState(true);

  const isInViewport = (el, elAnimate) => {
    const rect = el.current.getBoundingClientRect();
    if (rect.top < 2000 && animate === false) {
      elAnimate.current.pointOfView(MAP_CENTER, 2000);
      setAnimate(true);
    }
  };

  const pauseAnimation = () => {
    if (animating) {
      setAnimating(false);
      globeEl.current.pauseAnimation();
    }
    if (!animating) {
      setAnimating(true);
      globeEl.current.resumeAnimation();
    }
  };

  const setCanvasDimension = () => {
    const vWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vWidth < 991) {
      return 1500;
    } else if (vWidth > 991) {
      return 2000;
    }
  };

  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     // console.log("rect top", rect.top, "rect bottom", rect.bottom);
  //     // console.log("window height:", window.innerHeight);
  //     isInViewport(globeContainer, globeEl);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () =>
  //     window.removeEventListener("scroll", handleScroll, { passive: true });
  // }, [animate]);

  useEffect(() => {
    // load data
    Promise.all([
      fetch(airportData)
        .then((res) => res.text())
        .then((d) => d3.csvParseRows(d, airportParse)),
      fetch(routeData)
        .then((res) => res.text())
        .then((d) => d3.csvParseRows(d, routeParse)),
    ]).then(([airports, routes]) => {
      const byIata = indexBy(airports, "iata", false);
      const filteredRoutes = routes
        .filter(
          (d) =>
            byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)
        ) // exclude unknown airports
        .filter((d) => d.stops === "0") // non-stop flights only
        .map((d) =>
          Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata],
          })
        )
        .filter(
          (d) =>
            (d.srcAirport.country === "Australia" &&
              d.dstAirport.country === "United States") ||
            (d.srcAirport.country === "Australia" &&
              d.dstAirport.country === "Japan") ||
            (d.srcAirport.country === "Australia" &&
              d.dstAirport.country === "China") ||
            (d.srcAirport.country === "Australia" &&
              d.dstAirport.country === "Chile")
        ); // international routes from country
      setRoutes(filteredRoutes);
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView(MAP_CENTER, 2000);
      // console.log(globeEl);
    });
  }, []);

  const polygonsMaterial = new THREE.MeshStandardMaterial({
    color: "rgba(48, 61, 191, 1)",
    metalness: 0.8,
    roughness: 0.6,
  });
  const globeMaterial = new THREE.MeshStandardMaterial({
    color: "rgba(48, 61, 191, 1)",
    roughness: 0.55,
  });

  return (
    <>
      <IndexNavbar />
      <div className="main-content" style={{ overflowX: "hidden" }}>
        <IndexHeader />
        <section className="py-3">
          <Container>
            <Row>
              <Col
                className="d-flex align-items-center justify-content-center"
                md="6"
              >
                <div style={{ maxWidth: 400 }}>
                  <h2
                    style={{ lineHeight: "42px", fontWeight: 800 }}
                    className="display-3 text-default"
                  >
                    Centralise Operations.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Everything you need to build and operate merchandise value
                    chains for you and your customers in one platform.
                  </p>
                </div>
              </Col>
              <Col
                md="6"
                style={{
                  backgroundImage: `url(${cetraliseImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 600,
                }}
              ></Col>
            </Row>
          </Container>
        </section>
        <section className="py-3">
          <Container>
            <Row>
              <Col
                className="d-flex mt-4 d-md-none align-items-center justify-content-center"
                md="6"
              >
                <div style={{ maxWidth: 400, fontWeight: 800 }}>
                  <h2
                    style={{ lineHeight: "42px", color: "#FFC928" }}
                    className="display-3"
                  >
                    Expand Online.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Powerful tools to help you and your team expand your digital
                    presence. Beat your competitors to the sale with rapid quote
                    &amp; checkout. Build stores for your customers linked
                    directly to your production.
                  </p>
                </div>
              </Col>
              <Col
                className="d-flex d-md-none"
                md="6"
                style={{
                  backgroundImage: `url(${oportunitiesImage})`,
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
                  backgroundImage: `url(${oportunitiesImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 500,
                }}
              ></Col>
              <Col
                className="d-none d-md-flex align-items-center justify-content-center"
                md="6"
              >
                <div style={{ maxWidth: 400 }}>
                  <h2
                    style={{
                      lineHeight: "42px",
                      color: "#FFC928",
                      fontWeight: 800,
                    }}
                    className="display-3"
                  >
                    Expand Online.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Powerful tools to help you and your team expand your digital
                    presence. Beat your competitors to the sale with rapid quote
                    &amp; checkout. Build stores for your customers linked
                    directly to your production.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="d-none d-md-block pb-3 pt-5">
          <Container>
            <Row>
              <Col
                className="d-flex align-items-center justify-content-center"
                md="5"
              >
                <div style={{ maxWidth: 400 }}>
                  <h2
                    style={{
                      lineHeight: "42px",
                      color: "#FF4449",
                      fontWeight: 800,
                    }}
                    className="display-3 "
                  >
                    Discover New Opportunities.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Present your products to thousands of Merchi's sellers,
                    build merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
              </Col>
              <Col
                md="7"
                style={{
                  backgroundImage: `url(${expandImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 350,
                }}
              ></Col>
            </Row>
          </Container>
        </section>
        <section className="d-block d-md-none py-3">
          <Container>
            <Row>
              <Col
                className="d-flex align-items-center justify-content-center mt-4"
                md="5"
              >
                <div style={{ maxWidth: 400 }}>
                  <h2
                    style={{
                      lineHeight: "42px",
                      color: "#FF4449",
                      fontWeight: 800,
                    }}
                    className="display-3"
                  >
                    Discover New Opportunities.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                </div>
              </Col>
              <Col
                md="7"
                style={{
                  backgroundImage: `url(${expandImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: 350,
                }}
              ></Col>
            </Row>
          </Container>
        </section>
        <section className="pt-8">
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
                    style={{
                      lineHeight: "42px",
                      color: "#fff",
                      fontWeight: 800,
                    }}
                    className="display-3"
                  >
                    Merchi Marketplace
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450, color: "#fff" }}>
                    Expose your products to thousands of Merchi's sellers, build
                    merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                  <Button
                    className="btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    Access marketplace
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
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
                    style={{ lineHeight: "42px", fontWeight: 800 }}
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
                    style={{ lineHeight: "42px", fontWeight: 800 }}
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
                    style={{ lineHeight: "42px", fontWeight: 800 }}
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
                    style={{ lineHeight: "42px", fontWeight: 800 }}
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
                    style={{ lineHeight: "42px", fontWeight: 800 }}
                    className="display-4 text-default"
                  >
                    Selling Point.
                  </h2>
                  <p style={{ fontSize: 16, maxWidth: 330 }}>
                    Present your products to thousands of Merchi's sellers,
                    build merch value chains with them and generate long lasting
                    reccurring revenue streams.
                  </p>
                  <Button
                    className="float-right"
                    style={{ padding: 0, borderRadius: 100, zIndex: 1 }}
                    onClick={() => pauseAnimation()}
                  >
                    {animating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-pause-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                      </svg>
                    )}
                  </Button>
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
                  <Button
                    className="float-right"
                    style={{ padding: 0, borderRadius: 100, zIndex: 1 }}
                    onClick={() => pauseAnimation()}
                  >
                    {animating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-pause-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                      </svg>
                    )}
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  style={{ minHeight: 400 }}
                  className="globe-container"
                  ref={globeContainer}
                >
                  <Globe
                    ref={globeEl}
                    globeMaterial={globeMaterial}
                    arcsData={routes}
                    backgroundColor="rgba(248, 249, 254, 0)"
                    animateIn={true}
                    showAtmosphere={false}
                    polygonAltitude={0.005}
                    polygonsData={landPolygons}
                    polygonCapMaterial={polygonsMaterial}
                    arcStartLat={(d) => +d.srcAirport.lat}
                    arcStartLng={(d) => +d.srcAirport.lng}
                    arcEndLat={(d) => +d.dstAirport.lat}
                    arcEndLng={(d) => +d.dstAirport.lng}
                    arcDashLength={0.25}
                    arcDashGap={1}
                    arcDashInitialGap={() => Math.random()}
                    arcDashAnimateTime={10000}
                    arcColor={() => [
                      "rgba(255, 201, 40, 1)",
                      "rgba(255, 201, 40, 0.5)",
                    ]}
                    arcStroke={0.2}
                    arcsTransitionDuration={1}
                    polygonSideColor={() => "rgba(0, 0, 0, 1)"}
                    width={setCanvasDimension()}
                    height={setCanvasDimension()}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container
            fluid
            className="position-relative"
            style={{ background: "#f8f9fe" }}
          >
            <Container>
              <Row className="row-grid align-items-center">
                <Col>
                  <div
                    className="mt-7 mb-5 text-center"
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
                      Organise,{" "}
                      <span
                        style={{
                          color: "rgb(48, 61, 191)",
                          textShadow: "1px 1px 0px #f8f9fe",
                          display: "inline",
                          fontWeight: 800,
                        }}
                      >
                        centralise
                      </span>{" "}
                      and{" "}
                      <span
                        style={{
                          color: "rgb(255, 201, 40)",
                          textShadow: "1px 1px 0px #f8f9fe",
                          display: "inline",
                          fontWeight: 800,
                        }}
                      >
                        scale.
                      </span>
                    </h2>
                    <p
                      style={{
                        fontSize: "18px",
                        textShadow: "1px 1px 0px #f8f9fe",
                        margin: "auto",
                        maxWidth: 400,
                      }}
                      className="mt-2"
                    >
                      Manage all aspects of your business and grow your value
                      chain.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  className="d-flex align-items-center justify-content-around"
                  md="5"
                >
                  <div style={{ maxWidth: 450 }}>
                    <h2
                      style={{
                        lineHeight: "42px",
                        color: "rgb(255, 201, 40)",
                        fontWeight: 800,
                      }}
                      className="display-4"
                    >
                      Easy Custom Products.
                    </h2>
                    <p style={{ fontWeight: 800, fontSize: 16 }}>
                      Product add-ons, multiple production methods, expedited
                      shipping, complex discount qualifications.
                    </p>
                    <p style={{ fontSize: 16 }}>
                      Custom product models allow you to build powerful webforms
                      which are able to collect everything you need to fulfill
                      your clients custom product order.
                    </p>
                  </div>
                </Col>
                <Col
                  className="d-flex d-md-none"
                  md="7"
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
                  md="7"
                  style={{
                    backgroundImage: `url(${customProducts})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: 500,
                  }}
                ></Col>
              </Row>
              <Row>
                <Col
                  className="d-none d-md-flex"
                  md="7"
                  style={{
                    backgroundImage: `url(${logistics})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: 500,
                  }}
                ></Col>
                <Col
                  className="d-flex align-items-center justify-content-around"
                  md="5"
                >
                  <div style={{ maxWidth: 450 }}>
                    <h2
                      style={{
                        lineHeight: "42px",
                        fontWeight: 800,
                      }}
                      className="display-4 text-default mt-4 mt-md-0"
                    >
                      End-to-end Supply Management.
                    </h2>
                    <p style={{ fontWeight: 800, fontSize: 16 }}>
                      Logistics, inventory, payments, art work approvals,
                      customer communication.
                    </p>
                    <p style={{ fontSize: 16 }}>
                      All of your jobs, orders and customers organised in an
                      intuitive and easy to use dashboard. Keep on top of your
                      work at a glance. Track job progress, payment status,
                      delivery fulfillment and inventory levels.
                    </p>
                  </div>
                </Col>
                <Col
                  className="d-flex d-md-none"
                  md="7"
                  style={{
                    backgroundImage: `url(${logistics})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: 300,
                  }}
                ></Col>
              </Row>
              <Row>
                <Col
                  className="d-flex align-items-center justify-content-around"
                  md="5"
                >
                  <div style={{ maxWidth: 450 }}>
                    <h2
                      style={{
                        lineHeight: "42px",
                        color: "rgb(255, 68, 73)",
                        fontWeight: 800,
                      }}
                      className="display-4 mt-4 mt-md-0"
                    >
                      Supply Online &amp; Scale Fast.
                    </h2>
                    <p style={{ fontWeight: 800, fontSize: 16 }}>
                      Multiple websites at the push of a button, easy online
                      quoting, full EMS functionality.
                    </p>
                    <p style={{ fontSize: 16 }}>
                      Merchi is where suppliers and sellers connect. With all
                      the tools you need to run a supply business at your
                      fingertips, Merchi makes accessing massive online markets
                      easy for manufacturers and suppliers.
                    </p>
                  </div>
                </Col>
                <Col
                  md="7"
                  className="d-none d-md-flex"
                  style={{
                    backgroundImage: `url(${scale})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: 500,
                  }}
                ></Col>
                <Col
                  md="7"
                  className="d-flex d-md-none"
                  style={{
                    backgroundImage: `url(${scale})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: 300,
                  }}
                ></Col>
              </Row>
            </Container>
          </Container>
        </section>
        <section className="pt-0 pt-md-6">
          <Container>
            <Row
              style={{
                margin: 0,
                borderRadius: 5,
                border: "2px rgb(48, 61, 191) solid",
              }}
              className="justify-content-center"
            >
              <Col md="7 d-flex align-items-center justify-content-center">
                <div className="p-5 pb-sm-7 pb-md-5 pl-md-5 pr-md-2 pl-lg-7">
                  <h2
                    style={{
                      lineHeight: "42px",
                      color: "#303dbf",
                      fontWeight: 800,
                    }}
                    className="display-3"
                  >
                    Help at every step.
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450 }}>
                    Get individual, dedicated help from Merchi staff. Onboarding
                    with Merchi is this that here is some moer text. We should
                    have about three lines.
                  </p>
                  <Button
                    className="btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    Contact support
                  </Button>
                </div>
              </Col>
              <Col className="position-relative" style={{ height: 400 }} md="5">
                <img
                  className="position-absolute d-none d-sm-block"
                  src={phone}
                  style={{
                    top: -100,
                    maxWidth: 350,
                    left: "calc(50% - 175px)",
                    width: "100%",
                  }}
                  alt="Merchi Support"
                />
                <img
                  className="position-absolute d-block d-sm-none"
                  src={phone}
                  style={{
                    top: -30,
                    maxWidth: 350,
                    left: "calc(50% - 175px)",
                    width: "100%",
                  }}
                  alt="Merchi Support"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pb-7 pt-9">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Join the first truly open, international marketplace{" "}
                  <span
                    className="d-inline"
                    style={{ color: "#ff4449", fontWeight: 800 }}
                  >
                    dedicated{" "}
                  </span>
                  to merchandise.
                </h2>
                <p className="lead">
                  Quickly and easily give your manufacturing business access to
                  low barrier custom merchandising - one of the fastest growing
                  markets online. Merchi's tools make integrating your existing
                  business simple and low risk.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-neutral mb-3 mb-sm-0"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-dashboard-react?ref=adpr-index-page"
                    target="_blank"
                  >
                    <span className="btn-inner--text">Contact accounts</span>
                  </Button>
                  <Button
                    className="btn-icon mb-3 mb-sm-0"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>
                    </span>
                    <span className="btn-inner--text">Sell on Merchi</span>
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-4 mt-5">
                    Grow with these tools &amp; features.
                  </h4>
                  <Row className="justify-content-center">
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-currency-bitcoin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="d-block mx-auto mt-1"
                      >
                        Accept crypto
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-currency-exchange"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 50,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="d-block mx-auto mt-1"
                      >
                        Accept fiat
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Logistics suite
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-phone-vibrate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z" />
                        <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Customer SMS
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-envelope-check"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471 1.069.64.257.155.257-.154 1.33-.798L15 5.383V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825Zm1.22-.434L1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217L9.072 7.774 8 8.417l-1.072-.643ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 1 .172.686l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 0 1 .686-.172Z"
                        />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Customer email
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Online drafting
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-person-badge"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Staff accounts
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Customer accounts
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-box-seam"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Inventory control
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-wrench"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Production control
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-forward"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.51.51 0 0 1 .042-.028.147.147 0 0 0 0-.252.51.51 0 0 1-.042-.028L9.502 5.513zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3v-.503z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Drop shipping
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-ui-checks-grid"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Custom products
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-chat-left-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Order quoting
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-diagram-2-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z"
                        />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Product variations
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-calculator"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Volumetric discounts
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-window-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Zm1.5-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm10 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z"
                        />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Multiple webstores
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-globe2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Sell globally
                      </small>
                    </Col>
                    <Col className="my-3" md="2" xs="3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-link-45deg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      <small
                        style={{
                          maxWidth: 60,
                          lineHeight: "12px",
                          fontSize: 12,
                        }}
                        className="text-center d-block mx-auto mt-1"
                      >
                        Value chaining
                      </small>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <AuthFooter />
    </>
  );
}

export default Index;
