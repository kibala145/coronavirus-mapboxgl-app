(this["webpackJsonpreact-map-application"]=this["webpackJsonpreact-map-application"]||[]).push([[0],{25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(16),i=a.n(o),c=(a(30),a(12)),l=a.n(c),s=a(17),u=a(22),p=a(13),d=a(18),h=a(19),m=a(23),v=a(20),f=a(8),b=a(24),g=a(7),y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).setViewport=a.setViewport.bind(Object(f.a)(a)),a.hoverHandler=a.hoverHandler.bind(Object(f.a)(a)),a.state={mapData:{width:"100vw",height:"100vh",latitude:54.247,longitude:21.117,zoom:1,mapStyle:"https://maps.seeker.info/styles/positron/style.json",mapOptions:{hash:!1},onHover:a.hoverHandler,onViewportChange:a.setViewport},geolocateControlData:{style:{position:"absolute",top:0,left:0,margin:12}},popupData:{latitude:null,longitude:null,closeButton:!1},hoveredFeature:null,loaded:!1,sourceData:{},layerData:{id:"points",type:"circle",filter:[">",["get","value"],0],paint:{"circle-color":["step",["get","value"],"rgb(29, 168, 10)",100,"rgb(222, 198, 13)",750,"rgb(222, 41, 9)"],"circle-radius":["interpolate",["linear"],["zoom"],1,["min",["max",["/",["number",["get","value"]],50],4],30],13,["min",["max",["/",["number",["get","value"]],100],8],400]]}}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setViewport",value:function(e){var t=e.latitude,a=e.longitude,n=e.zoom,r=e.bearing,o=e.pitch;this.setState({mapData:Object(p.a)({},this.state.mapData,{latitude:t,longitude:a,zoom:n,bearing:r,pitch:o})})}},{key:"renderSource",value:function(){return this.state.loaded&&r.a.createElement(g.d,this.state.sourceData,r.a.createElement(g.b,this.state.layerData))}},{key:"renderTooltip",value:function(){var e=this.state.hoveredFeature;return e&&r.a.createElement(g.c,this.state.popupData,r.a.createElement("div",null,"Confirmed cases: ",r.a.createElement("b",null,e.properties.value)),r.a.createElement("div",null,"Country: ",r.a.createElement("b",null,e.properties.country)),e.properties.province&&r.a.createElement("div",null,"State: ",r.a.createElement("b",null,e.properties.province)))}},{key:"hoverHandler",value:function(e){var t=e.features,a=Object(u.a)(e.lngLat,2),n=a[0],r=a[1],o=t&&t.find((function(e){return"points"===e.layer.id}));this.setState({hoveredFeature:o,popupData:Object(p.a)({},this.state.popupData,{longitude:n,latitude:r})})}},{key:"loadData",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed");case 2:if(!(t=e.sent).ok){e.next=7;break}return e.next=6,t.json();case 6:a=e.sent;case 7:n=a.locations.map((function(e){return{type:"Feature",properties:{value:+e.latest,country:e.country,province:e.province},geometry:{type:"Point",coordinates:[e.coordinates.long,e.coordinates.lat]}}})),r={type:"FeatureCollection",features:n},this.setState({sourceData:{type:"geojson",data:r},loaded:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){return r.a.createElement(g.e,this.state.mapData,r.a.createElement(g.a,Object.assign({trackUserLocation:!1},this.state.geolocateControlData)),this.renderSource(),this.renderTooltip())}}]),t}(r.a.Component);var k=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6c72b1a7.chunk.js.map