var store = {
    hotels: [],
    selectedHotel: {}
};


module.exports = {
    listner: function () {},
    mapMoved: function (map) {
        var maxlat = map.getBounds().getNorthEast().lat();
        var maxlng = map.getBounds().getNorthEast().lng();
        var minlat = map.getBounds().getSouthWest().lat();
        var minlng = map.getBounds().getSouthWest().lng();

        var that = this;

        var searchQuery = 'http://localhost:3004/search/map/' + maxlat + '/' + maxlng + '/' + minlat + '/' + minlng;
        console.log(searchQuery);
        $.get(searchQuery).then(function (searchResults) {
            store.hotels = searchResults.results;
            that.triggerEvent();
        });
    },
    triggerEvent: function () {
        this.listner(store);
    },
    hotelHovered: function (hotel) {
        console.log(this);
        store.selectedHotel = hotel;
        this.triggerEvent();
    },
    registerListner: function (callback) {
        this.listner = callback;
    }
};