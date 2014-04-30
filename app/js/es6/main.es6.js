/* global google:true */
/* jshint unused:false, camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $(function() {
      $('#zip').focus();
    });
    initMap(36, -86, 4);
    $('#add').click(graph);
    $('#add').click(show);
  }

  var map;

  function initMap(lat, lng, zoom){
    let styles = [{'featureType':'water','stylers':[{'color':'#19a0d8'}]},{'featureType':'administrative','elementType':'labels.text.stroke','stylers':[{'color':'#ffffff'},{'weight':6}]},{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#e85113'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#efe9e4'},{'lightness':-40}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#efe9e4'},{'lightness':-20}]},{'featureType':'road','elementType':'labels.text.stroke','stylers':[{'lightness':100}]},{'featureType':'road','elementType':'labels.text.fill','stylers':[{'lightness':-100}]},{'featureType':'road.highway','elementType':'labels.icon'},{'featureType':'landscape','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape','stylers':[{'lightness':20},{'color':'#efe9e4'}]},{'featureType':'landscape.man_made','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'lightness':100}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'lightness':-100}]},{'featureType':'poi','elementType':'labels.text.fill','stylers':[{'hue':'#11ff00'}]},{'featureType':'poi','elementType':'labels.text.stroke','stylers':[{'lightness':100}]},{'featureType':'poi','elementType':'labels.icon','stylers':[{'hue':'#4cff00'},{'saturation':58}]},{'featureType':'poi','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#f0e4d3'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#efe9e4'},{'lightness':-25}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#efe9e4'},{'lightness':-10}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'simplified'}]}];
    let mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function graph(){
  //   var zip = $('#zip').val().trim();
  //   var url = 'http://api.wunderground.com/api/fca88e3ed18702ca/conditions/q/'+zip+'.json?callback=?';
  }
  function addMarker(lat, lng, name, icon){
    let latLng = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({map: map, position: latLng, title: name, icon: icon});
  }

  function show(){
    let zip = $('#zip').val();
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: zip}, (results, status)=>{
      let name = results[0].formatted_address;
      let lat = results[0].geometry.location.lat();
      let lng = results[0].geometry.location.lng();
      addMarker(lat, lng, name, './media/flag.png');
      let latLng = new google.maps.LatLng(lat, lng);
      map.setCenter(latLng);
    });
  }
})();