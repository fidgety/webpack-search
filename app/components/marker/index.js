require('./marker.css');
var React = require('react');
var marker = require('./marker');

var store = require('../../store');

module.exports = React.createClass({
    marker: {},
    componentWillUnmount: function () {
        this.marker.setMap(null);
    },
    shouldComponentUpdate: function (newProps) {
        if (newProps.hoveredHotel && newProps.hoveredHotel.id === this.props.hotel.id) {
            this.marker.onHighlighted();
        }
        else {
            this.marker.offHighlighted();
        }
        return newProps.hotel.id !== this.props.hotel.id || newProps.map !== this.props.map;
    },
    render: function () {
        this.marker = marker(
            this.props.hotel.location.geopoint.lat,
            this.props.hotel.location.geopoint.long,
            this.props.map,
            this.props.hotel,
            function (hotel) {
                store.hotelHovered(hotel);
            }
        );
        return null;
    }
});
