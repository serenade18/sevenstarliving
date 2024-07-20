


var markers = new Array();
var map;
var marker_clusterer ;


if(typeof mapStyle == 'undefined') {
    var mapStyle = [
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fcf4dc"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c0c0c0"
      },
      {
        "visibility": "on"
      }
    ]
  }
];
}


$(document).ready(function(){
    var myLocationEnabled = true;
    var style_map = mapStyle;
    var scrollwheelEnabled = true;

    
    if($('#main-map').length){    
        map = L.map('main-map', {
                        center: [45.89785305, 16.03196105],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,

            
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.7687561, 15.9999749],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"http://sevenstarliving.co.uk/index.php/property/14/hr/black_crno_staklo\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=147822442_014fc68a36_o.jpg&cut=true\" alt=\"Black crno staklo\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Black crno staklo</h3>            <span><i class=\"la la-map-marker\"></i>Vatikanska 11, Zagreb, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.02695, 16.0639472],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"http://sevenstarliving.co.uk/index.php/property/16/hr/drvo_straha\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=227963176_2a296e7f0d_o.jpg&cut=true\" alt=\"Drvo straha\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Drvo straha</h3>            <span><i class=\"la la-map-marker\"></i>Selnica 43, Zlatar Bistrica, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                map.addLayer(clusters);   
        
                /* set center */
        if(markers.length){
            var limits_center = [];
            for (var i in markers) {
                if(typeof markers[i]['_latlng'] == 'undefined') continue;
                var latLngs = [ markers[i].getLatLng() ];
                limits_center.push(latLngs)
            };
            var bounds = L.latLngBounds(limits_center);
                            map.fitBounds(bounds);
                   }
                
        if(!markers.length){
                    }
    } 
    })
