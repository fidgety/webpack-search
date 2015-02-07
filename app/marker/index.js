require('./marker.css');
var React = require('react');
var marker = require('./marker');

module.exports = React.createClass({
    marker: {},
    componentWillUnmount: function () {
        this.marker.setMap(null);
    },
    shouldComponentUpdate: function (np) {
        if (np.hoveredHotel && np.hoveredHotel.id === this.props.hotel.id) {
            this.marker.onHighlighted();
        }
        else {
            this.marker.offHighlighted();
        }
        return np.hotel.id !== this.props.hotel.id || np.map !== this.props.map;
    },
    render: function () {
        console.log(this.props);
        this.marker = marker(
            this.props.hotel.location.geopoint.lat,
            this.props.hotel.location.geopoint.long,
            this.props.map,
            this.props.hotel,
            this.props.onHoverOverHotel
        );
        return null;
    }
});
