import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

const backgroundImage =
  require("../../assets/img/merchi-ufo-godzilla.jpg").default;

function SellerHeader() {
  return (
    <>
      <div className="header pt-7 mt-7 pb-7">
        <Container
          className="d-none d-lg-block"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h1
                    style={{
                      fontSize: 60,
                      color: "#2f2f2f",
                      fontWeight: 800,
                      lineHeight: "70px",
                      textShadow: "1px 1px 0px #f8f9fe",
                    }}
                  >
                    Sell{" "}
                    <span
                      style={{
                        color: "#303DBF",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      custom
                    </span>{" "}
                    merch online{" "}
                    <span
                      style={{
                        color: "#FF4449",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      instantly.
                    </span>
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                      textShadow: "1px 1px 0px #f8f9fe",
                      maxWidth: "450px",
                    }}
                    className="mt-5"
                  >
                    Pins, badges, figurines, apparel and more. Set up your
                    online merchandise store and fill it with exciting custom
                    products with little to no upfront costs.
                  </p>
                  <div className="mt-5">
                    <Button
                      className="my-2"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-auth-navbar"
                    >
                      Open shop
                    </Button>
                    <Button
                      className="btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                      tag={Link}
                    >
                      Log in
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container
          className="d-block d-lg-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "right 160px",
            backgroundSize: "170px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h1
                    style={{
                      fontSize: 60,
                      color: "#2f2f2f",
                      fontWeight: 800,
                      lineHeight: "70px",
                      textShadow: "1px 1px 0px #f8f9fe",
                    }}
                  >
                    Here is the{" "}
                    <span
                      style={{
                        color: "#303DBF",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      main
                    </span>{" "}
                    selling point for{" "}
                    <span
                      style={{
                        color: "#FF4449",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      suppliers.
                    </span>
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                      textShadow: "1px 1px 0px #f8f9fe",
                      maxWidth: "450px",
                    }}
                    className="mt-5"
                  >
                    Here is the main selling point for suppliers. Maybe it
                    should be related to the marketplace. Lorem ipsum dolor sit
                    amet.
                  </p>
                  <div className="mt-5">
                    <Button
                      className="my-2"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-auth-navbar"
                    >
                      Open shop
                    </Button>
                    <Button
                      className="btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                      tag={Link}
                    >
                      Log in
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SellerHeader;
