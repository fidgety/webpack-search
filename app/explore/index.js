var React = require('react');
var Map = require('../map');
var HotelList = require('../hotelList');

var hotels = require('./mock').results;

module.exports = React.createClass({
    searchForHotels: function (map) {
        var maxlat = map.getBounds().getNorthEast().lat();
        var maxlng = map.getBounds().getNorthEast().lng();
        var minlat = map.getBounds().getSouthWest().lat();
        var minlng = map.getBounds().getSouthWest().lng();

        var that = this;

        var searchQuery = 'http://localhost:3004/search/map/' + maxlat + '/' + maxlng + '/' + minlat + '/' + minlng;
        console.log(searchQuery);
        $.get(searchQuery).then(function (stuff) {
            console.log(stuff);
            that.setState({
                hotels: stuff.results
            });
        });
    },
    onHoverOverHotel: function (hotel) {
        this.setState({
            hoveredHotel: hotel
        })
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
                <Map hotels={this.state.hotels} hoveredHotel={this.state.hoveredHotel} onMapUpdate={this.searchForHotels} onHoverOverHotel={this.onHoverOverHotel}></Map>
                <HotelList hotels={this.state.hotels} hoveredHotel={this.state.hoveredHotel} onHoverOverHotel={this.onHoverOverHotel}></HotelList>
            </div>
        );
    }
});
