import { Button, Container, Row, Col } from "reactstrap";

import ContactHeader from "../../components/Headers/ContactHeader.js";

const jumper = require("../../assets/img/merchi-jumper.png").default;

function Contact() {
  return (
    <>
      <div className="main-content" style={{ overflowX: "hidden" }}>
        <ContactHeader />
        <section className="pt-3 pb-8">
          <Container className="position-relative">
            <Row>
              <Col
                className="d-flex align-items-center justify-content-around"
                md="6"
              >
                <div style={{ maxWidth: 400 }}>
                  <h2
                    style={{
                      //   lineHeight: "54px",
                      //   color: "#303dbf",
                      fontWeight: 700,
                    }}
                    className="display-3"
                  >
                    Sales
                  </h2>
                  <p style={{ fontSize: 16 }}>
                    Questions about how Merchi can help your business? We are
                    available via email and text/voice over Telegram messenger.
                    Please reach out.
                  </p>
                  <div>
                    <Button
                      className="btn btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-telegram"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "12px" }}
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                      </svg>
                      Telegram
                    </Button>
                    <Button
                      className="btn btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-envelope-check"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "12px" }}
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                      </svg>
                      Email
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="6 mt-6 mt-md-0">
                <div style={{ maxWidth: 400, margin: "auto" }}>
                  <h2
                    style={{
                      fontWeight: 700,
                    }}
                    className="display-3"
                  >
                    Support
                  </h2>
                  <p style={{ fontSize: 16 }}>
                    Merchi support is available via email and and text/voice
                    over Telegram messenger. For any help with integration or
                    set up please contact us.
                  </p>
                  <div>
                    <Button
                      className="btn btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-telegram"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "12px" }}
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                      </svg>
                      Telegram
                    </Button>
                    <Button
                      className="btn btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-envelope-check"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "12px" }}
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                      </svg>
                      Email
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="my-8">
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
                  src={jumper}
                  style={{
                    top: -175,
                    maxWidth: 350,
                    left: "calc(50% - 175px)",
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
                    Developer Resources
                  </h2>
                  <p style={{ fontSize: 18, maxWidth: 450, color: "#fff" }}>
                    Catch us over at Github - our SDK is also fully documented
                    at the link below.
                  </p>
                  <Button
                    className="btn btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "12px" }}
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Github
                  </Button>
                  <Button
                    className="btn btn-neutral my-2"
                    color="default"
                    to="/admin/dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-code-slash"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "12px" }}
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                    Docs
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Contact;
