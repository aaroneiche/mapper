(this.webpackJsonpmapper=this.webpackJsonpmapper||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(10),c=n.n(s),r=(n(20),n(4)),o=(n(21),n(28)),l=n(29),j=n(24),h=n(25),u=n(1),p=function(t){Object(j.a)({mousemove:function(e){t.activePath&&t.setCurrentLatLong([e.latlng.lat,e.latlng.lng])}});return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{pathOptions:{color:"blue"},positions:t.waypoints}),t.waypoints.length>0&&t.currentLatLong.length>0&&t.activePath&&Object(u.jsx)(h.a,{pathOptions:{color:"green"},positions:[t.waypoints[t.waypoints.length-1],t.currentLatLong]})]})},b=n(15),d=n(26),O=function(t){Object(j.a)({click:function(e){t.activePath?t.setWaypoints([].concat(Object(b.a)(t.waypoints),[[e.latlng.lat,e.latlng.lng]])):t.setActivePath(!0)},contextmenu:function(e){t.activePath&&t.setActivePath(!1)}});var e=t.waypoints.map((function(t,e){return Object(u.jsx)(d.a,{position:t,alt:e},t[0])}));return Object(u.jsx)("div",{children:e})},v=n(27),x=n(3),g=function(t){if(void 0==t)throw new Error("Please provide a value to convert");if(isNaN(Number(t)))throw new Error("Input must be numeric");return 3.281*t/5280};var w=function(t){var e=0;if(t.waypoints.length>1){var n=t.waypoints.map((function(n,a){if(void 0!=t.waypoints[a+1]){var i=function(t,e){if(void 0==t||void 0==e||2!==t.length||2!==e.length||0==Array.isArray(t)||0==Array.isArray(e))throw new Error("latLongDistance call is Missing Arguments");if(isNaN(Number(t[0]))||isNaN(Number(t[1]))||isNaN(Number(e[0]))||isNaN(Number(e[1])))throw new Error("latLongDistance call has Invalid arguments");var n=t[0]*Math.PI/180,a=e[0]*Math.PI/180,i=(t[0]-e[0])*Math.PI/180,s=(t[1]-e[1])*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(n)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),r=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return Math.round(6371e3*r)}(t.waypoints[a],t.waypoints[a+1]);e+=i;var s="".concat(g(i).toFixed(2)," mi");return Object(u.jsx)(d.a,{opacity:"0",position:Object(x.latLngBounds)([t.waypoints[a],t.waypoints[a+1]]).getCenter(),children:Object(u.jsx)(v.a,{offset:[-20,25],direction:"false",permanent:!0,children:s})})}}));t.setTotalDistance(g(e));var a="".concat(g(e).toFixed(2)," mi");return Object(u.jsxs)("div",{children:[n,Object(u.jsx)(d.a,{opacity:"0",position:[t.waypoints[t.waypoints.length-1][0],t.waypoints[t.waypoints.length-1][1]],children:Object(u.jsxs)(v.a,{offset:[-20,25],direction:"false",permanent:!0,children:["Total:",Object(u.jsx)("br",{}),a]})})]})}return"Nothing to see here"};var y=function(t){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.a,{center:[45.498045,-122.667901],zoom:10,style:{height:"400px",width:"600px"},children:[Object(u.jsx)(l.a,{attribution:" \xa9 OpenStreetMap contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(u.jsx)(O,{waypoints:t.waypoints,setWaypoints:t.setWaypoints,activePath:t.activePath,setActivePath:t.setActivePath}),Object(u.jsx)(p,{waypoints:t.waypoints,activePath:t.activePath,currentLatLong:t.currentLatLong,setCurrentLatLong:t.setCurrentLatLong}),Object(u.jsx)(w,{waypoints:t.waypoints,setTotalDistance:t.setTotalDistance})]})})},f=function(t){var e=t.waypoints.map((function(t){return Object(u.jsxs)("li",{className:"waypoint-item",children:[Object(u.jsxs)("div",{children:["Lat: ",t[0]]}),Object(u.jsxs)("div",{children:["Long: ",t[1]]})]})}));return Object(u.jsx)("ol",{className:"waypoint-list",children:e})};var m=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(!1),c=Object(r.a)(s,2),o=c[0],l=c[1],j=Object(a.useState)(0),h=Object(r.a)(j,2),p=h[0],b=h[1],d=Object(a.useState)([]),O=Object(r.a)(d,2),v=O[0],x=O[1];return Object(u.jsxs)("div",{className:"App",children:["Welcome to Mapper",Object(u.jsxs)("div",{className:"wrapper",children:[o?Object(u.jsx)("div",{children:"Use the left Mouse button to add points to a path. Use the right button to stop"}):Object(u.jsx)("div",{children:"Click on the left mouse button to enter path setting mode"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{waypoints:n,setWaypoints:i,activePath:o,setActivePath:l,totalDistance:p,setTotalDistance:b,setCurrentLatLong:x,currentLatLong:v}),Object(u.jsx)("div",{className:"instructions",children:Object(u.jsx)("button",{onClick:function(){i([])},children:"Clear Points"})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(f,{waypoints:n})}),Object(u.jsxs)("div",{class:"stats-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Current Latitude: "})," ",v[0],"\u02da"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Current Longitude: "})," ",v[1],"\u02da"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Total Distance: "})," ",p.toFixed(2)," mi"]})]})]})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.d8853e81.chunk.js.map