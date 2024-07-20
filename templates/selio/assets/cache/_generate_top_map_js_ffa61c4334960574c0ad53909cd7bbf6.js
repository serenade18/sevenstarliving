


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
                        center: [46.0665804, 16.26478715],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,

            
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-pagelines"></i></div><div class="back face"> <i class="fa fa-pagelines"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.8971627, 16.4291229],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Land--><div class=\"infobox map-box\">    <a href=\"http://sevenstarliving.co.uk/index.php/property/15/hr/okrugle_kule\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=148583306_cad8fc948c_o.jpg&cut=true\" alt=\"Okrugle kule\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Okrugle kule</h3>            <span><i class=\"la la-map-marker\"></i>Cerje 1, Vrbovec, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-pagelines"></i></div><div class="back face"> <i class="fa fa-pagelines"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.2359981, 16.1004514],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Land--><div class=\"infobox map-box\">    <a href=\"http://sevenstarliving.co.uk/index.php/property/11/hr/sky_apartman\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://sevenstarliving.co.uk/files/strict_cache/575x5005388050721_b84cf3a0a3_b.webp\" alt=\"Sky apartman\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sky apartman</h3>            <span><i class=\"la la-map-marker\"></i>Jerovec 16, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
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

