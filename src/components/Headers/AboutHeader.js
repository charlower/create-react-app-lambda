import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

const backgroundImage =
  require("../../assets/img/merchi-pizza-man-bigfoot.jpg").default;

function AboutHeader() {
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
                    All-in-one{" "}
                    <span
                      style={{
                        color: "#2f2f2f",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      merchandise{" "}
                    </span>
                    <span
                      style={{
                        fontSize: 60,
                        color: "rgb(48, 61, 191)",
                        fontWeight: 800,
                        lineHeight: "70px",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      solution.
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
                    The open platform where manufacturers, suppliers and sellers
                    collaborate and create amazing merchandise.
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
                    All-in-one{" "}
                    <span
                      style={{
                        fontSize: 60,
                        color: "rgb(255, 201, 40)",
                        fontWeight: 800,
                        lineHeight: "70px",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      merchandise
                    </span>{" "}
                    <span
                      style={{
                        fontSize: 60,
                        color: "#2f2f2f",
                        fontWeight: 800,
                        lineHeight: "70px",
                        textShadow: "1px 1px 0px #f8f9fe",
                      }}
                    >
                      solution.
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
                    The open platform where manufacturers, suppliers and sellers
                    collaborate and create amazing merchandise.
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

export default AboutHeader;
