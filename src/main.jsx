var React=require('react');

var ReactDom=require('react-dom');

var LeadCapture=require('./components/LeadCapture.jsx');

//var List=require('./components/List.jsx');

var EmailField=require('./components/EmailField.jsx');

ReactDom.render(<LeadCapture />, document.getElementById('leadCapture'));
