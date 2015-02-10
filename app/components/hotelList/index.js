var React = require('react');
var HotelListing = require('../hotelListing');
require('./hotelList.css');

module.exports = React.createClass({
    render: function () {
        var that = this;
        var hotelListings = this.props.hotels.map(function (hotel) {
            return (<HotelListing key={hotel.id} hotel={hotel} map={that.props.map}  hoveredHotel={that.props.hoveredHotel} onHoverOverHotel={that.props.onHoverOverHotel}></HotelListing>)
        });
        return (
            <ul id="results">
                {hotelListings}
            </ul>
        );
    }
});
