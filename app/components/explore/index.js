var React = require('react');
var Map = require('../map');
var HotelList = require('../hotelList');
var store = require('../../store');

module.exports = React.createClass({
    onHoverOverHotel: function (hotel) {
        this.setState({
            hoveredHotel: hotel
        })
    },
    componentDidMount: function () {
        var that = this;
        store.registerListner(function (store) {
            that.setState({
                hotels: store.hotels,
                hoveredHotel: store.selectedHotel
            });
        });
    },
    getInitialState: function () {
        return {
            hotels: [],
            hoveredHotel: {}
        };
    },
    render: function () {
        return (
            <div id="outer">
                <Map hotels={this.state.hotels} hoveredHotel={this.state.hoveredHotel}></Map>
                <HotelList hotels={this.state.hotels} hoveredHotel={this.state.hoveredHotel}></HotelList>
            </div>
        );
    }
});
