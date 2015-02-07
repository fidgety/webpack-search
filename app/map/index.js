var React = require('react');
require('./map.css');
var HotelMarker = require('../marker');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            map: undefined
        };
    },
    componentDidMount: function () {
        var mapOptions = {
            center: {lat: 51.45, lng: -2.58},
            zoom: 15
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        this.setState({
            map: map
        });

        var onMapUpdate = this.props.onMapUpdate;

        google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
            onMapUpdate(map);
            google.maps.event.addListener(map, 'dragend', function () {
                onMapUpdate(map);
            });

            google.maps.event.addListener(map, 'zoom_changed', function () {
                onMapUpdate(map);
            });
        });
    },
    render: function () {
        var that = this;
        var markers = this.props.hotels.map(function (hotel) {
            return <HotelMarker key={hotel.id} hotel={hotel} map={that.state.map} hoveredHotel={that.props.hoveredHotel} onHoverOverHotel={that.props.onHoverOverHotel}></HotelMarker>
        });
        return (<div id="map-canvas">{markers}</div>);
    }
});
