import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/components/header'
import HiddenMessage from '../src/components/hidden-message'

const Info = (props) => (
  <div>
    <Header/>
    <p>Stuff is going down: { props.info }</p>
    <HiddenMessage children={ props.false } >Hidden Message</HiddenMessage>
  </div>
);

ReactDOM.render(<Info info="here" />,
  document.getElementById('app'));