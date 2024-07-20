


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
                        center: [45.969423945101, 16.020130352685],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,

            
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

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

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/14/hr/kuca_crno_staklo\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=147822442_014fc68a36_o.jpg&cut=true\" alt=\"Kuća crno staklo\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Kuća crno staklo</h3>            <span><i class=\"la la-map-marker\"></i>Vatikanska 11, Zagreb, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.2971252, 16.4072529],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/12/hr/retro_kuca\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/files/strict_cache/575x5005388057701_5a618e8a9e_b.webp\" alt=\"Retro kuća\">        <div class=\"rate-info\">                    <h5>                                                50.000€                                        </h5>                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Retro kuća</h3>            <span><i class=\"la la-map-marker\"></i>Zeleni put 21, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.6147652, 15.4831556],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/8/hr/ozalj_apartman\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=431262909_a009e2897b_o.jpg&cut=true\" alt=\"Ozalj apartman\">        <div class=\"rate-info\">                    <span class=\"purpose-Najam\">                Najam            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ozalj apartman</h3>            <span><i class=\"la la-map-marker\"></i>Trška Cesta, Ozalj</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.3731205, 16.1270403],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/30/hr/bjelovar_nekretnina\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=431262903_9d77804a5b_o%20%281%29.jpg&cut=true\" alt=\"Bjelovar nekretnina\">        <div class=\"rate-info\">                    <h5>                                                90€                                        </h5>                    <span class=\"purpose-Najam\">                Najam            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bjelovar nekretnina</h3>            <span><i class=\"la la-map-marker\"></i>Cestica</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.9603589, 16.2439931],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/19/hr/stari_retro\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/files/strict_cache/575x500162803672_8244db2362_o.webp\" alt=\"Stari retro\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Stari retro</h3>            <span><i class=\"la la-map-marker\"></i>Radoišće 23, Sveti Ivan Zelina, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.1689005, 16.3342306],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/18/hr/malena_ljepotica\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/files/strict_cache/575x5001199605400_2b897736d1_o.webp\" alt=\"Malena ljepotica\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Malena ljepotica</h3>            <span><i class=\"la la-map-marker\"></i>Remetinec 23, Novi Marof, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-home"></i></div><div class="back face"> <i class="fa fa-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.733079713277, 16.302902710937],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: House--><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/17/hr/americka_kuca\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=5388052993_efdcb497f3_b.jpg&cut=true\" alt=\"Američka kuća\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Američka kuća</h3>            <span><i class=\"la la-map-marker\"></i>Ježevo 32, Ivanić Grad, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/16/hr/drvo_straha\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=227963176_2a296e7f0d_o.jpg&cut=true\" alt=\"Drvo straha\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Drvo straha</h3>            <span><i class=\"la la-map-marker\"></i>Selnica 43, Zlatar Bistrica, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

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

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/15/hr/okrugle_kule\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=148583306_cad8fc948c_o.jpg&cut=true\" alt=\"Okrugle kule\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Okrugle kule</h3>            <span><i class=\"la la-map-marker\"></i>Cerje 1, Vrbovec, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.8248723, 16.1044795],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/13/hr/zuto_drvo\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=5388050419_e3ef95b8eb_b.jpg&cut=true\" alt=\"Žuto drvo\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Žuto drvo</h3>            <span><i class=\"la la-map-marker\"></i>Sesvete, Slatinska 23</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

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

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/11/hr/sky_apartman\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/files/strict_cache/575x5005388050721_b84cf3a0a3_b.webp\" alt=\"Sky apartman\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sky apartman</h3>            <span><i class=\"la la-map-marker\"></i>Jerovec 16, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.984899065493, 16.557105105371],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/10/hr/lux_apartman\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/files/strict_cache/575x5005388047921_efc5b357c8_b.webp\" alt=\"Lux apartman\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Lux apartman</h3>            <span><i class=\"la la-map-marker\"></i>Cubinec 11, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.565727390202, 15.841627716797],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/9/hr/restoran_jezero\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=389936596_72d6cba1b9_b.jpg&cut=true\" alt=\"Restoran jezero\">        <div class=\"rate-info\">                    <span class=\"purpose-Prodaja\">                Prodaja            </span>         </div>        <div class=\"listing-item-content\">            <h3>Restoran jezero</h3>            <span><i class=\"la la-map-marker\"></i>Pisarovina bb, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.8642778, 15.985132953442],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://www.sevenstarliving.co.uk/index.php/property/7/hr/toplice_bliznec\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://www.sevenstarliving.co.uk/strict_image_speed.php?d=575x500&f=386182116_5e4c8542ab_b.jpg&cut=true\" alt=\"Toplice Bliznec\">        <div class=\"rate-info\">                    <h5>                                                 400€ / 40.000€                                        </h5>                    <span class=\"purpose-Prodaja i najam\">                Prodaja i najam            </span>         </div>        <div class=\"listing-item-content\">            <h3>Toplice Bliznec</h3>            <span><i class=\"la la-map-marker\"></i>Bliznec 34z, Zagreb</span>        </div>    </a></div>", jpopup_customOptions);
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
                            $.get('https://nominatim.openstreetmap.org/search?format=json&q=United States', function(data){
                    if(data.length && typeof data[0]) {
                        map.setView([data[0].lat, data[0].lon]); 
                    } else {
                    }
                });
                    }
    } 
    })

