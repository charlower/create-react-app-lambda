import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

const backgroundImage = require("../../assets/img/merchi-mug.jpg").default;

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
                    Contact Merchi
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                      textShadow: "1px 1px 0px #f8f9fe",
                      maxWidth: "450px",
                    }}
                    className="mt-5"
                  >
                    Need technical support, or have another enquiry? We're
                    available online via text and voice chat. Developer docs are
                    also online! View the Merchi project on Github.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container
          className="d-block d-lg-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "right 50px",
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
                    Contact Merchi
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
