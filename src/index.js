import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Header from "../src/components/header";
import HiddenMessage from "../src/components/hidden-message";
import Login from "../src/components/login";
import { format } from "date-fns";

const CompaniesHouseConfirmationDate = format(new Date(), "yyyy-MM-dd");
console.log(CompaniesHouseConfirmationDate);

const d =  moment().format("DMMYYYY");
console.log(d)
console.log(format(new Date(), "ddMMyy"))
console.log(new Date())
console.log((new Date().getTime()))

const Info = props => (
  <div>
    <Header />
    <p>Stuff is going down: {props.info}</p>
    <HiddenMessage children={props.false}>Hidden Message</HiddenMessage>
    <Login />
  </div>
);

ReactDOM.render(<Info info="here" />, document.getElementById("app"));
