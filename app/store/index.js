module.exports = {
    listner: function () {

    },
    mapMoved: function (map) {
        var maxlat = map.getBounds().getNorthEast().lat();
        var maxlng = map.getBounds().getNorthEast().lng();
        var minlat = map.getBounds().getSouthWest().lat();
        var minlng = map.getBounds().getSouthWest().lng();

        var that = this;

        var searchQuery = 'http://localhost:3004/search/map/' + maxlat + '/' + maxlng + '/' + minlat + '/' + minlng;
        console.log(searchQuery);
        $.get(searchQuery).then(function (searchResults) {
            that.listner(searchResults.results);
        });
    },
    registerListner: function (callback) {
        this.listner = callback;
    }
}