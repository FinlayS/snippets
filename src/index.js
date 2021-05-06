import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Header from "../src/components/header";
import HiddenMessage from "../src/components/hidden-message";
import Login from "../src/components/login";
import dataSpread from "./data/dataToSpread.json"
import {format, subYears} from "date-fns";
import { addTimes } from "./add_times"

const CompaniesHouseConfirmationDate = (new Date().getTime());
console.log(CompaniesHouseConfirmationDate);



const data = [
  {
    name : "bob",
    hair: "red",
    route: '/api/red/bob/egs',
    randomF: "eggs"
  },
  {
    name : "wer",
    hair: "15",
    route: '/api/15/wer/happy',
    randomF: "happy"
  },
  {
    name : "gerry",
    hair: "none",
    route: '/api/none/gerry/red',
    randomF: "red"
  },
  {
    name : "DD",
    hair: "none",
    route: 'api/none/DD/1.63',
    randomF: 1.63
  }
]

const tokens = [
  {
    name: "esme-caseUuid",
    value: "8f633960-92b2-4d6f-b2c1-ac88991365ed"
  },
  {
    name: "esme-caseToken",
    value: "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDQ2NzE5NTQsImNhc2VfaWQiOiI4ZjYzMzk2MC05MmIyLTRkNmYtYjJjMS1hYzg4OTkxMzY1ZWQiLCJjbGllbnRfaWQiOiJvbmJvYXJkaW5nVWkiLCJzY29wZSI6WyJPTkJPQVJESU5HIiwiVVRJTFMiXSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJqdGkiOiIwMmJkYTY4Ny1hNzE4LTQ2ZGEtYTAxYi1kMmQ3NDJmMzMwMTQifQ.bbn6kxpSG9Z_b6vin9p34E-04fTBYNAPyicu97V1zw4"
  },
  {
    name: "esme-appToken",
    value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJVU0VSX0NSRUFUSU9OIiwiVVRJTFMiLCJPTkJPQVJESU5HIiwiVVNFUl9BQ1RJT04iXSwiZXhwIjoxNjA0MDY3MTUxLCJqdGkiOiJjZDY4ZjJjMS0wM2M1LTQ2NDYtYWE2MS01NzIxZDQwZjM2NDkiLCJjbGllbnRfaWQiOiJvbmJvYXJkaW5nVWkifQ.xXozPieJz8ykvlJfUVm_xzV-DNVbypziEcd26CsGamA"
  }]

const getArrayValueByName = (arr, name) => {
  const object =  arr.filter(c => c.name  === name)
  return object[0].value
};

console.log(getArrayValueByName(tokens, 'esme-caseUuid'))


const state = [{"_id":"6032aa14fb5e7b154af05175","description":"Big runtyadds","runDate":1512243200000,"owner":"60329108508faf0868fd0f60","__v":0},{"_id":"603bddb3f61f44923993c8dc","description":"bobzoldnewswew","runDate":1314470400000,"owner":"60329108508faf0868fd0f60","__v":0},{"_id":"603bde1c84c55092a24a7767","description":"bobsaz","runDate":1519776000000,"owner":"60329108508faf0868fd0f60","__v":0}]


// const addToData = (data) => {
//   data.push({
//     name : "XX",
//     hair: "15",
//     route: 'api/none/XX/1.67',
//     randomF: true
//   })
//   return data
// }
//
// const bob = data => {
//   data = addToData(data)
//   return data
// }
//
// console.log('bob', bob(data)
// )

// const date = new moment(CompaniesHouseConfirmationDate)
// console.log('DATE', date)

const action = {
  description: "bobe",
  runDate: 1614470400001,
  type: "EDIT_RUN",
  _id: "603bde1c84c55092a24a7767"
}

const run = {
  _id: "603bde1c84c55092a24a7767",
  description: "bobeeee",
  runDate: 1614470400000,
  owner: "60329108508faf0868fd0f60",
  __v: 0
}

const spread = {
  ...dataSpread, ...{
    custom: {
      ...{
        ...dataSpread.custom,
        nextStep: true

      }
    }
  }
}

const update = {
  ...run, ...{
    description: action.description,
    runDate: action.runDate
  }
}


// console.log(spread)

console.log(action)
console.log(run)
console.log(update)

console.log("state", state.sort((a, b) => {
  return a.runDate < b.runDate ? 1 : -1
}))



const Info = props => (
  <div>
    <Header />
    <p>Stuff is going down: {props.info}</p>
    <HiddenMessage children={props.false}>Hidden Message</HiddenMessage>
    <Login />
  </div>
);

ReactDOM.render(<Info info="here" />, document.getElementById("app"));
