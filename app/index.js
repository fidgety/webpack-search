require('./components/global/reset.css');
require('./components/global/setup.css');

var React = require('react');
var Explore = require('./components/explore');

React.render(
    <Explore/>,
    document.body
);
