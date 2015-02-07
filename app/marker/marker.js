
module.exports = function(lat, lng, map, content, hoverEvent) {
    var bounds = new google.maps.LatLng(lat, lng);

    return new CustomOverlay(bounds, map, content, hoverEvent);
};

CustomOverlay.prototype = new google.maps.OverlayView();

function CustomOverlay(bounds, map, content, hoverEvent) {
    this.latLng = bounds;
    this.content = content;
    this.hoverEvent = hoverEvent;

    this.div_ = null;

    this.setMap(map);
}

CustomOverlay.prototype.onAdd = function () {

    var div = document.createElement('div');
    div.style.position = 'absolute';

    div.className = 'happy';

    if (this.content.guest_rating < 80) {
        div.className = 'ok';
    }
    if (this.content.guest_rating < 50) {
        div.className = 'sad';
    }

    div.className += ' hotel-marker';

    div.innerHTML = this.content.price ? '£' + this.content.price.rate.total : 'FULL';

    var that = this;

    div.onmouseover = function () {
        that.hoverEvent(that.content);
    };

    div.onmouseout = function () {
        that.hoverEvent({});
    };

    this.div_ = div;

    var panes = this.getPanes();
    panes.floatPane.appendChild(div);
};

CustomOverlay.prototype.onHighlighted = function () {
    this.div_.classList.add('highlighted');
};

CustomOverlay.prototype.offHighlighted = function () {
    if (this.div_) {
        this.div_.classList.remove('highlighted');
    }
};

CustomOverlay.prototype.draw = function () {
    var overlayProjection = this.getProjection();

    var sw = overlayProjection.fromLatLngToDivPixel(this.latLng);

    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = sw.y + 'px';
};

CustomOverlay.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};

