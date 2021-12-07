import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const merchiMan =
  require("../../assets/img/custom-merchandise-float-blue.svg").default;

function Pricing() {
  return (
    <>
      <div className="header pt-7 pb-3 py-lg-5 pt-lg-9">
        <Container>
          <div className="header-body">
            <div className="justify-content-center row">
              <div className="col-md-2">
                <img
                  alt="merchandise icon no animation"
                  src={merchiMan}
                  style={{ width: "100%", maxWidth: 150 }}
                />
              </div>
              <div className="px-5 col-sm-10 col-md-8 col-xl-6">
                <h1
                  style={{ fontSize: "2em", fontWeight: 800, lineHeight: 1.3 }}
                >
                  Choose your Merchi subscription
                </h1>
                <p style={{ display: "inline" }} className="text-lead">
                  Start your merchandise portfolio with a $0 Seller account or
                  unlock powerful functionality with a Seller plus account.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-8 pb-5">
        <Row className="justify-content-center">
          <Col sm="12">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 style={{ fontWeight: 800 }} className="py-3 mb-0 text-lg">
                    Seller
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-7">
                  <div className="display-2">$0</div>
                  <span className="text-muted">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <div>
                          <span className="pl-2">1 Domain</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-badge"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                        </svg>

                        <div>
                          <span className="pl-2">1 Team member</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <div>
                          <span className="pl-2">Unlimited customers</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="primary" type="button">
                    Open shop
                  </Button>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
              <Card
                style={{ border: "1px solid rgba(255, 70, 74, 0.43)" }}
                className="card-pricing zoom-in shadow-lg rounded text-center mb-4"
              >
                <CardHeader className="bg-transparent">
                  <div style={{ marginTop: 10 }}>
                    <h4
                      style={{ fontWeight: 800 }}
                      className="d-inline py-3 mb-0 text-lg"
                    >
                      Seller
                    </h4>
                    <h4
                      className="d-inline-block ml-1 text-lg"
                      style={{
                        color: "#ff464a",
                        transform: "translateY(-4px) rotate(-7deg)",
                      }}
                    >
                      plus+
                    </h4>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-7">
                  <div className="display-1">$79</div>
                  <span>per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <div>
                          <span className="pl-2">1 Domain</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-badge"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                        </svg>

                        <div>
                          <span className="pl-2">5 Team members</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <div>
                          <span className="pl-2">Unlimited customers</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 style={{ fontWeight: 800 }} className="py-3 mb-0 text-lg">
                    Enterprise
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-7">
                  <div className="display-2">$139</div>
                  <span className="text-muted">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <div>
                          <span className="pl-2">5 Domains</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-badge"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                        </svg>

                        <div>
                          <span className="pl-2">10 Team members</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <div>
                          <span className="pl-2">Unlimited customers</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Invite only
                  </a>
                </CardFooter>
              </Card>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-lg-center px-3 mt-7 mb-5">
          <div>
            <div className="p-2 bg-gradient-white shadow rounded-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-signpost-2"
                viewBox="0 0 16 16"
              >
                <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z" />
              </svg>
            </div>
          </div>
          <Col lg="8">
            <p>
              Merchi is packed full of features to help you grow your
              merchandise business. Whether you're just getting started or have
              an existing bussines, Merchi can scale for your requirements.
            </p>
          </Col>
        </div>
        <Row className="row-grid justify-content-center">
          <Col lg="11">
            <Table className="table mt-5" responsive>
              <thead>
                <tr>
                  <th className="px-0 bg-transparent border-0" scope="col">
                    <span className="font-weight-700">Features</span>
                  </th>
                  <th
                    className="text-center bg-transparent border-0"
                    scope="col"
                  >
                    Seller
                  </th>
                  <th
                    className="text-center bg-transparent border-0"
                    scope="col"
                  >
                    Seller Plus
                  </th>
                  <th
                    className="text-center bg-transparent border-0"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-0">Product creation</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">API Access</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Analytics</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Invoicing</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Production oversight</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Remote widgets</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Merchi plugins</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Notifications</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Email notifications</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Advanced invoicing</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Custom domain name</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Custom themes</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Customer drafting</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Customer quoting</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Tags</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Inventory managment</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Production managment</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">SMS Notifications</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-primary">
                    <small>Additional cost</small>
                  </td>
                  <td className="text-center text-primary">
                    <small>Additional cost</small>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Multiple domains</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <i className="fas fa-check text-primary" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
