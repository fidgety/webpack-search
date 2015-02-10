var React = require('react');
require('./hotelListing.css');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            hovering: false
        }
    },
    __mouseOver: function (e) {
        e.stopPropagation();
        this.props.onHoverOverHotel(this.props.hotel);
    },
    __mouseOut: function (e) {
        e.stopPropagation();
        this.props.onHoverOverHotel({});
    },
    render: function () {
        var hotel = this.props.hotel;
        return (<li className={this.props.hoveredHotel.id === hotel.id ? 'hover' : ''} onMouseOver={this.__mouseOver} onMouseOut={this.__mouseOut}>
            <img src={hotel.img}/>{hotel.name}</li>);
    }
});
