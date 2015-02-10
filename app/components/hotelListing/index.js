var React = require('react');
require('./hotelListing.css');

var store = require('../../store');

module.exports = React.createClass({
    __mouseOver: function () {
        store.hotelHovered(this.props.hotel);
    },
    __mouseOut: function () {
        store.hotelHovered({});
    },
    render: function () {
        var hotel = this.props.hotel;
        return (<li className={this.props.hoveredHotel.id === hotel.id ? 'hover' : ''} onMouseOver={this.__mouseOver} onMouseOut={this.__mouseOut}>
            <img src={hotel.img}/>{hotel.name}</li>);
    }
});
