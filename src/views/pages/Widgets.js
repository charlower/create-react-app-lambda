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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import CardsHeader from "../../components/Headers/CardsHeader.js";

import { widgetEvents } from "variables/general.js";

let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function Widgets() {
  const [nameOnCard, setnameOnCard] = React.useState(false);
  const [cardNumber, setcardNumber] = React.useState(false);
  const [date, setdate] = React.useState(false);
  const [ccv, setccv] = React.useState(false);
  const widgetCalendarRef = React.useRef(null);
  React.useEffect(() => {
    let calendar = new Calendar(widgetCalendarRef.current, {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: widgetEvents,
      headerToolbar: "",
    });
    calendar.render();
  }, []);

  return (
    <div>
      <p>sdfsadf</p>
    </div>
  );
}

export default Widgets;
