;$('document').ready(function(){$('form#popup_form_login').submit(function(o){o.preventDefault();var r=$('form#popup_form_login').serializeArray();$('form#popup_form_login .ajax-indicator').removeClass('hidden');$.post('https://www.sevenstarliving.co.uk/index.php/api/login_form/hr',r,function(o){if(o.success){$('form#popup_form_login .alerts-box').html('');if(o.message){ShowStatus.show(o.message)};if(o.redirect){};location.reload()}else{if(o.message){ShowStatus.show(o.message)};$('form#popup_form_login .alerts-box').html(o.errors)}}).success(function(){$('form#popup_form_login .ajax-indicator').addClass('hidden')});return!1})});var timerMap,ad_galleries,firstSet=!1,mapRefresh=!0,loadOnTab=!0,zoomOnMapSearch=9,clusterConfig=null,markerOptions=null,mapDisableAutoPan=!1,rent_inc_id='55',scrollWheelEnabled=!1,myLocationEnabled=!0,rectangleSearchEnabled=!0,mapSearchbox=!0,mapRefresh=!0,map_main,styles,mapStyle=[{'featureType':'landscape','elementType':'geometry.fill','stylers':[{'color':'#fcf4dc'}]},{'featureType':'landscape','elementType':'geometry.stroke','stylers':[{'color':'#c0c0c0'},{'visibility':'on'}]}];var timerMap,firstSet=!1,selectorResults='#results_conteiner',clusters='';clusters=L.markerClusterGroup({spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0});var jpopup_customOptions={'maxWidth':'initial','width':'initial','className':'popupCustom'};$(document).ready(function(){$('search_showroom_form').submit(function(){if($('#search_showroom').val().length>2||$('#search_showroom').val().length==0){$.post('https://www.sevenstarliving.co.uk/index.php/showroom/ajax/hr/160',{search:$('#search_showroom').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json')}});$('#search_news_form').submit(function(e){e.preventDefault();if($('#search_news').val().length>2||$('#search_news').val().length==0){$.post('https://www.sevenstarliving.co.uk/index.php/news/ajax/hr/160',{search:$('#search_news').val()},function(e){$('.list-result').html(e.print);reloadElements()},'json')}});$('#search_expert').keyup(function(){if($(this).val().length>2||$(this).val().length==0){$.post('https://www.sevenstarliving.co.uk/index.php/expert/ajax/hr/160',{search:$('#search_expert').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json')}});var n=$('.data_table').DataTable({'responsive':!0,'oLanguage':{'sPrevious':'Search','sNext':'Search','sSearch':'Search','sLengthMenu':'Show _MENU_ entries','sInfoEmpty':'Showing 0 to 0 of 0 entries','sInfo':'Showing _START_ to _END_ of _TOTAL_ entries','sEmptyTable':'No data available in table',},});$('button.refresh_filters').click(function(){manualSearch(0);return!1});manualSearch(0,!1,!1,!0);if($('.counter_by_id_enabled').length){showCountersBy_id([],79)};$('#search-save').click(function(){manualSearch(0,'#content-block',!0);return!1});$('#search_option_smart').typeahead({minLength:1,source:function(e,t){$.post('https://www.sevenstarliving.co.uk/index.php/frontend/typeahead/hr/160/smart',{q:e,limit:8},function(e){t(JSON.parse(e))})}});$('.twitter-typeahead input:first-child').attr('style','position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1');$('#search_option_smart').attr('style','position: relative; vertical-align: top;');$('.menu-onmap li a').click(function(){if(!$(this).parent().hasClass('list-property-button')){$(this).parent().parent().find('li').removeClass('active');$(this).parent().addClass('active');if(loadOnTab)manualSearch(0,!1);return!1}});if($('.menu-onmap li.active').length==0){$('.menu-onmap li.all-button').addClass('active')};if($('.menu-onmap').length){$('.menu-onmap li label').click(function(){$('.menu-onmap li').removeClass('active');$(this).parent().addClass('active')})};$('.sw-search-start').click(function(e){e.preventDefault();manualSearch(0);return!1});$('.sw-search-start').closest('form').find('input').on('keypress',function(e){if(e.which==13){e.preventDefault();manualSearch(0);return!1}});var t={days:['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota','Nedjelja'],daysShort:['Ned','Pon','Uto','Sri','Čet','Pet','Sub','Ned'],daysMin:['Ne','Po','Ut','Sr','Če','Pe','Su','Ne'],months:['Siječanj','Veljača','Ožujak','Travanj','Svi','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],monthsShort:['Sij','Velj','Ožu','Tra','Svi','Lip','Srp','Kol','Ruj','Lis','Stu','Pro']};if(typeof(DPGlobal)!='undefined'){DPGlobal.dates=t};var e=new Date(),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0);$('.datetimepicker_standard').datepicker().on('changeDate',function(e){$(this).datepicker('hide')});reloadElements()});function manualSearch(e,a,i,o){if(typeof a==='undefined')a='#results_conteiner';if(typeof i==='undefined')i=!1;if(typeof o==='undefined')o=!1;var c=$('#search_order').val(),d=$('.view-type.active').attr('data-ref'),t={order:c,view:d,page_num:e};if($('#booking_date_from').length>0){if($('#booking_date_from').val()!='')t['v_booking_date_from']=$('#booking_date_from').val()};if($('#booking_date_to').length>0){if($('#booking_date_to').val()!='')t['v_booking_date_to']=$('#booking_date_to').val()};$('.search-form  input:not(.skip), .search-form  select:not(.skip)').each(function(e){if($(this).attr('type')=='checkbox'){if($(this).prop('checked')){t['v_'+$(this).attr('id')]=$(this).val()}}else if($(this).attr('type')=='radio'){if($(this).attr('id')!='undefined')if($(this).prop('checked')){t['v_'+$(this).attr('name')]=$(this).val()}}else if($(this).hasClass('tree-input')){if($(this).val()!=''){var a=$(this).attr('id').split('_');if(t['v_search_option_'+a[2]]==undefined)t['v_search_option_'+a[2]]='';t['v_search_option_'+a[2]]+=$(this).find('option:selected').text()+' - '}}else{if(typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'&&$(this).val()!=''&&$(this).val()!='NULL'&&$(this).val()!=null){t['v_'+$(this).attr('id')]=$(this).val()}}});if($('#tags-filters').length>0){var n='';$('.search-form input, .search-form select').each(function(e){if($(this).attr('type')=='checkbox'){if($(this).attr('checked')&&typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'){t['v_'+$(this).attr('id')]=$(this).val();var i='',a=$(this).attr('value').substring(4);if(typeof a!=='undefined'&&a!==!1){i=a};if($(this).val()!='')n+='<button class="btn btn-small btn-warning filter-tag ck" rel="'+$(this).attr('id')+'" type="button"><span class="fa fa-remove"></span> '+i+'</button>&nbsp;'}}else if($(this).hasClass('tree-input')){}else if(typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'){t['v_'+$(this).attr('id')]=$(this).val();var i='',a=$(this).attr('placeholder');if(typeof a!=='undefined'&&a!==!1){i=a+': '};if($(this).val()!=''&&$(this).val()!='NULL'&&$(this).val()!=null&&$(this).val()!='0')n+='<button class="btn btn-small btn-primary filter-tag" rel="'+$(this).attr('id')+'" type="button"><span class="fa fa-remove"></span> '+i+$(this).val()+'</button>&nbsp;'}});if(typeof t['v_search_option_4']!='undefined')if(t['v_search_option_4'].length>0)n+='<button class="btn btn-small btn-danger filter-tag" rel="4" type="button"><span class="fa fa-remove"></span> '+t['v_search_option_4']+'</button>&nbsp;';if(n!=''){$('#tags-filters').css('display','block');$('#tags-filters').html(n);$('.filter-tag').click(function(){var e=$(this).attr('rel').substring(14);if($(this).hasClass('ck')){$('#'+$(this).attr('rel')).prop('checked',!1)}else{$('input.id_'+e).val('');$('input#'+$(this).attr('rel')).val('');$('select#'+$(this).attr('rel')).val('');$('select.id_'+e).val('');$('select#'+$(this).attr('rel')+'.selectpicker').selectpicker('render');$('select.id_'+e+'.selectpicker').selectpicker('render')};$(this).remove();if($(this).attr('rel')=='4'){$('#search_option_4 .active').removeClass('active')};if($(this).hasClass('ck')){$('input.checkbox_am[option_id=\''+e+'\']').prop('checked',!1)};manualSearch(0)})}else{$('#tags-filters').css('display','none')}};showCounters(t);if($('.counter_by_id_enabled').length)showCountersBy_id(t,79);if(o){return!1};$('#ajax-indicator-1').show();if(i==!0){$.post('https://www.sevenstarliving.co.uk/index.php/privateapi/save_search/hr',t,function(e){ShowStatus.show(e.message);if(!e.success){$('#sign-popup').toggleClass('active');$('body').addClass('overlay-bgg')};$('#ajax-indicator-1').hide()});return};$('.result_preload_indic').show();$('.sw-search-start').find('.fa-ajax-indicator').removeClass('hidden').parent().addClass('loading');if(support_history_api()==!0){if(t.page_num)t.page_num=t.page_num.replace('#content','');var r={};$.each(t,function(e,t){if(e.indexOf('category')!=-1){if($('#'+e.substr(2)).length&&t){var a=$('#'+e.substr(2));$.each(t,function(e,t){let option_id=a.find('option[value="'+t+'"]').attr('data-input_id');if(option_id){r['v_search_option_'+option_id]=t}})}}else{if(t!='')r[e]=t}});var s=JSON.stringify(r);s=s.replace('&amp;','%26');if(window.history&&history.pushState)history.pushState(t,'','https://www.sevenstarliving.co.uk/index.php/hr/160/showroom?search='+s)};if(!$('#results_conteiner').length){if(t['v_search_radius']==0)t['v_search_radius']='';window.location.href='https://www.sevenstarliving.co.uk/index.php/hr/145/full?search='+JSON.stringify(t);return!1};var l=t;$.post('https://www.sevenstarliving.co.uk/index.php/frontend/ajax/hr/160/'+e,t,function(e){if($('#main-map').length){if(map=='init'){map=L.map('wrap-map',{center:[45.969423945101,16.020130352685],zoom:8-2,scrollWheelZoom:scrollWheelEnabled,dragging:!L.Browser.mobile,tap:!L.Browser.mobile});L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);var c=L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);map.addLayer(clusters)};for(var t=0;t<markers.length;t++){clusters.removeLayer(markers[t])};markers=[]};if(mapRefresh&&$('#main-map').length>0){if(e.results.length>0){var o=[],n=[];n['Apartment']='fa fa-building';n['House']='fa fa-home';n['Restaurant']='fa fa-cutlery';$.each(e.results,function(e,t){if(typeof t.latLng!=='undefined'){var a=t.data.match(/Widget-preview-category-path:(.*)/)||'';a=$.trim(a[1]);if(typeof n[a]!='undefined'){var s='<div class="marker-container"><div class="marker-card"><div class="front face"><i class="'+n[a]+'"></i></div><div class="back face"> <i class="'+n[a]+'"></i></div><div class="marker-arrow"></div></div></div>'}else if(typeof o[a]!='undefined'){var r=o[a],s='<div class="marker-container marker-container-image"><div class="marker-card"><div class="front face"><img src='+r+'></img></div></div><div class="marker-arrow"></div></div></div>'}else{var s='<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'};var i=L.marker([t.latLng[0],t.latLng[1]],{icon:L.divIcon({html:s,className:'open_steet_map_marker google_marker',iconSize:[50,46],popupAnchor:[0,-18],iconAnchor:[25,46],})});i.bindPopup(t.data,jpopup_customOptions);clusters.addLayer(i);markers.push(i)}});if(markers.length){var i=[];for(var t in markers){if(typeof markers[t]['_latlng']=='undefined')continue;var r=[markers[t].getLatLng()];i.push(r)};var s=L.latLngBounds(i);map.fitBounds(s)}}else{if(!markers.length){if(typeof l['v_search_option_64']!='undefined'){$.get('https://nominatim.openstreetmap.org/search?format=json&q='+l['v_search_option_64'],function(e){if(e.length&&typeof e[0]){map.setView([e[0].lat,e[0].lon])}else{}})}}}};$(selectorResults).html(e.print);$('.total_rows').html(e.total_rows);$('.options .selectpicker').selectpicker({style:'selectpicker-primary',});reloadElements();$('#ajax-indicator-1').hide();if($(a).length)if(a&&$('.fullscreen-inner-md').length){$(document).scrollTop($(a).offset().top-450)}else if(a&&!$('.fullscreen-inner-md').length){$(document).scrollTop($(a).offset().top-150)}},'json').success(function(){add_to_favorite();remove_from_favorites();$('.sw-search-start').find('.fa-ajax-indicator').addClass('hidden').parent().removeClass('loading')});return!1};$.fn.startLoading=function(e){};$.fn.endLoading=function(e){};function reloadElements(){$('#search_order').off().change(function(){manualSearch(0);return!1});$('.view-type').off().click(function(){$(this).parent().parent().find('.view-type').removeClass('active');$(this).addClass('active');manualSearch(0);return!1});$('.pagination.properties a').click(function(){var e=$(this).attr('href'),t=e.lastIndexOf('/');e=e.substr(t+1);manualSearch(e);return!1});$('.pagination.news a').click(function(){var e=$(this).attr('href'),t=e.lastIndexOf('/');e=e.substr(t+1);$.post($(this).attr('href'),{search:$('#search_showroom').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json').success(function(){});return!1})};$(function(){$('input.DECIMAL').number(!0,2);$('input.INTEGER').number(!0,0)});$(function(){$('form.form-estate').h5Validate({});$('form.form-estate').on('formValidated',function(){if($('form.form-estate .ui-state-error').length){var e=$('form.form-estate .ui-state-error').first().offset().top-150;$(window).scrollTop(e)}})});$('document').ready(function(){reloadPaginationUniversal()});function reloadPaginationUniversal(){$('.pagination-ajax-results a').click(function(){var e=$(this).attr('href'),a=e.lastIndexOf('/');e=e.substr(a+1);var t='#ajax_results';$.post($(this).attr('href'),{'page_num':e},function(e){$(t).html(e.print);reloadPaginationUniversal()},'json').success(function(){});return!1})};if(typeof $.fn.fileupload==='function'){function loadjQueryUpload(){$('form.fileupload').each(function(){$(this).fileupload({autoUpload:!0,previewMaxWidth:160,previewMaxHeight:120,uploadTemplateId:null,downloadTemplateId:null,uploadTemplate:function(e){var t=$();$.each(e.files,function(e,a){var n=$('<div> </div>');t=t.add(n)});return t},downloadTemplate:function(e){var t=$();$.each(e.files,function(e,a){var n=$('<li class="img-rounded template-download fade"><div class="preview"><span class="fade"></span></div><div class="filename"><code>'+a.short_name+'</code></div><div class="options-container">'+(a.zoom_enabled?'<a data-gallery="gallery" class="zoom-button btn btn-mini btn-success" download="'+a.name+'"><i class="icon-search icon-white"></i></a>':'<a target="_blank" class="btn btn-mini btn-success" download="'+a.name+'"><i class="icon-search icon-white"></i></a>')+' <span class="delete"><button class="btn btn-mini btn-danger" data-type="'+a.delete_type+'" data-url="'+a.delete_url+'"><i class="icon-trash icon-white"></i></button> <input type="checkbox" value="1" name="delete"></span></div>'+(a.error?'<div class="error"></div>':'')+'</li>'),i=!1;if(a.error){ShowStatus.show(a.error)}else{i=!0;n.find('.name a').text(a.name);if(a.thumbnail_url){n.find('.preview').html('<img class="img-rounded" alt="'+a.name+'" data-src="'+a.thumbnail_url+'" src="'+a.thumbnail_url+'">')};n.find('a').prop('href',a.url);n.find('a').prop('title',a.name);n.find('.delete button').attr('data-type',a.delete_type).attr('data-url',a.delete_url)};if(i)t=t.add(n)});return t},destroyed:function(e,t){$.fn.endLoading();if(t.success){}else{ShowStatus.show('Unsuccessful, possible permission problems or file not exists')};return!1},finished:function(e,t){$('.zoom-button').unbind('click touchstart');$('.zoom-button').bind('click touchstart',function(){var e=[],a=$(this).attr('href'),t=0;$('.files-list-u .zoom-button').each(function(n){var i=$(this).attr('href');e[n]=i;if(a==i)t=n});options={index:t};blueimp.Gallery(e,options);return!1})},dropZone:$(this)})});$('ul.files').each(function(e){$(this).sortable({update:saveFilesOrder});$(this).disableSelection()})};function filesOrderToArray(e){var t={};e.find('li').each(function(e){var a=$(this).find('.options-container a:first').attr('download');t[e+1]=a});return t};function saveFilesOrder(e,t){var n=filesOrderToArray($(this)),a=$(this).parent().parent().parent().attr('id').substring(11),i=$(this).parent().parent().parent().attr('rel');$.fn.startLoading();$.post('https://www.sevenstarliving.co.uk/index.php/files/order/'+a+'/'+i,{'page_id':a,'order':n},function(e){$.fn.endLoading()},'json')}};function showCounters(e){$.post('https://www.sevenstarliving.co.uk/index.php/api/get_all_counters/2',e,function(e){$('[name*="search_option_"]').parent().find('b').html('');$.each(e.counters,function(e,t){var a=t.option_id;if(!$('[name="search_option_'+a+'"]').is(':checked'))$('[name="search_option_'+a+'"]').parent().find('b').html('&nbsp('+t.count+')')})},'json')};function showCountersBy_id(e,t){var a=e;$.post('https://www.sevenstarliving.co.uk/index.php/api/get_all_counters_by_id/2/'+t,a,function(e){$('.counter_by_id_enabled .live').find('b').html('&nbsp(0)');$.each(e.counters,function(e,t){var a=t.value;if(!$('.counter_by_id_enabled .live[data-value=\''+a+'\']').hasClass('active'))$('.counter_by_id_enabled .live[data-value=\''+a+'\']').find('b').html('&nbsp('+t.count+')');else $('.counter_by_id_enabled .live[data-value=\''+a+'\']').find('b').html('&nbsp('+t.count+')')})},'json')};var rectangle,infoWindow_rectangle,map_rectangle;function RectangleControl(e,t){map_rectangle=t;e.style.padding='5px';var a=document.createElement('div');a.id='my_location';a.style.backgroundColor='white';a.style.borderStyle='solid';a.style.borderWidth='2px';a.style.marginRight='5px';a.style.cursor='pointer';a.style.textAlign='center';a.title='Draw Rectangle';e.appendChild(a);var n=document.createElement('div');n.style.fontFamily='Arial,sans-serif';n.style.fontSize='12px';n.style.paddingLeft='4px';n.style.paddingRight='4px';n.innerHTML='<strong>Draw Rectangle</strong>';a.appendChild(n);google.maps.event.addDomListener(a,'click',function(){if(rectangle!=null)return;var s=t.getZoom(),e=t.getCenter(),a=0.4;if(s>11)a=0.02;var o=new google.maps.LatLngBounds(e,new google.maps.LatLng(e.lat()+a,e.lng()+a*2));rectangle=new google.maps.Rectangle({bounds:o,editable:!0,draggable:!0});rectangle.setMap(t);google.maps.event.addListener(rectangle,'bounds_changed',showNewRect);infoWindow_rectangle=new google.maps.InfoWindow();var n=rectangle.getBounds().getNorthEast(),i=rectangle.getBounds().getSouthWest();$('#rectangle_ne').val(n.lat()+', '+n.lng());$('#rectangle_sw').val(i.lat()+', '+i.lng())})};function showNewRect(e){var t=rectangle.getBounds().getNorthEast(),a=rectangle.getBounds().getSouthWest(),n='<b>Rectangle moved:</b><br>New north-east corner: '+t.lat().toFixed(3).slice(0,-1)+', '+t.lng().toFixed(3).slice(0,-1)+'<br>New south-west corner: '+a.lat().toFixed(3).slice(0,-1)+', '+a.lng().toFixed(3).slice(0,-1);$('#rectangle_ne').val(t.lat()+', '+t.lng());$('#rectangle_sw').val(a.lat()+', '+a.lng());infoWindow_rectangle.setContent(n);infoWindow_rectangle.setPosition(t);infoWindow_rectangle.open(map_rectangle)};function init_map_searchbox(e){if(!$('#pac-input').length)return!1;var i=(document.getElementById('pac-input')),o=document.getElementById('type-selector');e.controls[google.maps.ControlPosition.TOP_LEFT].push(i);var n=new google.maps.places.Autocomplete(i);n.bindTo('bounds',e);var a=new google.maps.InfoWindow(),t=new google.maps.Marker({map:e,anchorPoint:new google.maps.Point(0,-29)});n.addListener('place_changed',function(){a.close();t.setVisible(!1);var i=n.getPlace();if(!i.geometry){return};if(i.geometry.viewport){e.fitBounds(i.geometry.viewport)}else{e.setCenter(i.geometry.location);e.setZoom(17)};t.setIcon(({url:i.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(35,35)}));t.setPosition(i.geometry.location);t.setVisible(!0);var o='';if(i.address_components){o=[(i.address_components[0]&&i.address_components[0].short_name||''),(i.address_components[1]&&i.address_components[1].short_name||''),(i.address_components[2]&&i.address_components[2].short_name||'')].join(' ')};a.setContent('<div><strong>'+i.name+'</strong><br>'+o);a.open(e,t)})};function HomeControl(e,t){e.style.padding='5px';var a=document.createElement('div');a.style.backgroundColor='white';a.style.borderStyle='solid';a.style.borderWidth='2px';a.style.cursor='pointer';a.style.marginTop='5px';a.style.marginRight='5px';a.style.textAlign='center';a.title='My Location';a.id='google_my_location';e.appendChild(a);var n=document.createElement('div');n.style.fontFamily='Arial,sans-serif';n.style.fontSize='12px';n.style.paddingLeft='4px';n.style.paddingRight='4px';n.innerHTML='<strong>My Location</strong>';a.appendChild(n);google.maps.event.addDomListener(a,'click',function(){var e=new google.maps.Marker({clickable:!1,icon:new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',new google.maps.Size(22,22),new google.maps.Point(0,18),new google.maps.Point(11,11)),shadow:null,zIndex:999,map:t});if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(a){var c=new google.maps.LatLng(a.coords.latitude,a.coords.longitude);e.setPosition(c);var i=new google.maps.LatLngBounds();i.extend(c);t.fitBounds(i);var l=t.getZoom();t.setZoom(l>zoomOnMapSearch?zoomOnMapSearch:l);if(!0){map_rectangle=t;if(rectangle!=null){$('#rectangle_ne').val('');$('#rectangle_sw').val('');infoWindow_rectangle.setMap(null);rectangle.setMap(null);rectangle=null};var d=t.getZoom(),o=t.getCenter(),n=0.4;if(d>11)n=0.02;var i=new google.maps.LatLngBounds(new google.maps.LatLng(o.lat()-(n/2),o.lng()-n),new google.maps.LatLng(o.lat()+(n/2),o.lng()+n));rectangle=new google.maps.Rectangle({bounds:i,editable:!0,draggable:!0});rectangle.setMap(t);google.maps.event.addListener(rectangle,'bounds_changed',showNewRect);infoWindow_rectangle=new google.maps.InfoWindow();var s=rectangle.getBounds().getNorthEast(),r=rectangle.getBounds().getSouthWest();$('#rectangle_ne').val(s.lat()+', '+s.lng());$('#rectangle_sw').val(r.lat()+', '+r.lng())}},function(e){console.log(e)})})};function setAllMap(e){$.each(markers,function(t,a){a.infobox.close();a.infobox.isOpen=!1;a.marker.setMap(e);a.setMap(e)})};function add_to_favorite(){$('.add-to-favorites').on('click',function(e){e.preventDefault();var t=$(this),n=t.parent(),i=$(this).attr('data-id'),o={property_id:i};var a=$(this).find('.load-indicator');a.css('display','inline-block');n.addClass('loading');$.post('https://www.sevenstarliving.co.uk/index.php/privateapi/add_to_favorites/hr',o,function(e){a.css('display','none');ShowStatus.show(e.message);if(e.success){t.parent().find('.add-to-favorites').css('display','none');t.parent().find('.remove-from-favorites').css('display','block')}else{$('#sign-popup').toggleClass('active');$('body').addClass('overlay-bgg')}}).success(function(){n.removeClass('loading')});return!1})};function remove_from_favorites(){$('.remove-from-favorites').on('click',function(e){e.preventDefault();var t=$(this),n=t.parent(),i=$(this).attr('data-id'),o={property_id:i};var a=$(this).find('.load-indicator');n.addClass('loading');a.css('display','inline-block');$.post('https://www.sevenstarliving.co.uk/index.php/privateapi/remove_from_favorites/hr',o,function(e){ShowStatus.show(e.message);a.css('display','none');if(e.success){t.parent().find('.add-to-favorites').css('display','block');t.parent().find('.remove-from-favorites').css('display','none')}}).success(function(){n.removeClass('loading')});return!1})};;var translated_cal={days:['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota','Nedjelja'],daysShort:['Ned','Pon','Uto','Sri','Čet','Pet','Sub','Ned'],daysMin:['Ne','Po','Ut','Sr','Če','Pe','Su','Ne'],months:['Siječanj','Veljača','Ožujak','Travanj','Svi','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],monthsShort:['Sij','Velj','Ožu','Tra','Svi','Lip','Srp','Kol','Ruj','Lis','Stu','Pro']};if(typeof(DPGlobal)!='undefined'){DPGlobal.dates=translated_cal};var nowTemp=new Date(),now=new Date(nowTemp.getFullYear(),nowTemp.getMonth(),nowTemp.getDate(),0,0,0,0);$('.datetimepicker_standard').datepicker().on('changeDate',function(e){$(this).datepicker('hide')});var checkin=$('#datetimepicker1').datepicker({onRender:function(e){var t=e.getDate(),a=e.getMonth()+1,i=e.getFullYear();if(t<10){t='0'+t};if(a<10){a='0'+a};var r=i+'-'+a+'-'+t;if(e.valueOf()<now.valueOf()){return'disabled'};return''}}).on('changeDate',function(e){if(e.date.valueOf()>checkout.date.valueOf()){var t=new Date(e.date);t.setDate(t.getDate()+7);checkout.setValue(t)};checkin.hide();$('#datetimepicker2')[0].focus()}).data('datetimepicker');var checkout=$('#datetimepicker2').datepicker({onRender:function(e){var t=e.getDate(),a=e.getMonth()+1,i=e.getFullYear();if(t<10){t='0'+t};if(a<10){a='0'+a};var r=i+'-'+a+'-'+t;if(e.valueOf()<=now.valueOf()){return'disabled'};return''}}).on('changeDate',function(e){checkout.hide()}).data('datepicker');$('a.available.selectable').click(function(){$('#datetimepicker1').val($(this).attr('ref'));$('#datetimepicker2').val($(this).attr('ref_to'));$('div.property-form form input:first').focus();var t=new Date($(this).attr('ref')),e=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0);$('#datetimepicker1').datepicker('setValue',e);e.setDate(e.getDate()+7);checkout.setValue(e)});