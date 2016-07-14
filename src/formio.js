var React = require('react');
var Formio = require('react-formio');

// React >= 0.14
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Formio src="http://localhost:8080/form.json" />
  , document.getElementById('example')
);