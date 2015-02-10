var React = require('react');
require('./map.css');
var HotelMarker = require('../marker');
var store = require('../../store');

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

        google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
            store.mapMoved(map);
            google.maps.event.addListener(map, 'dragend', function () {
                store.mapMoved(map);
            });

            google.maps.event.addListener(map, 'zoom_changed', function () {
                store.mapMoved(map);
            });
        });
    },
    render: function () {
        var that = this;
        var markers = this.props.hotels.map(function (hotel) {
            return <HotelMarker key={hotel.id} hotel={hotel} hoveredHotel={that.props.hoveredHotel} map={that.state.map}></HotelMarker>
        });
        return (<div id="map-canvas">{markers}</div>);
    }
});
