(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=200},224:function(e,t,a){e.exports=a.p+"static/media/arrow-down-bold.f6e1f90c.svg"},295:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},380:function(e,t,a){e.exports=a(829)},385:function(e,t,a){},417:function(e,t,a){},688:function(e,t){},690:function(e,t){},722:function(e,t){},723:function(e,t){},829:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(221),r=a.n(c),i=(a(385),a(34)),o=a(35),m=a(37),s=a(36),u=a(38),d=a(378),p=a(33),b=a(52),E=a(43),h=a.n(E),f=a(82),g=a.n(f),v=a(31);function y(e){var t=e.launch,a=t.flight_number,n=t.mission_name,c=t.launch_date_local,r=t.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,"Mission :",l.a.createElement("span",{className:g()({"text-success":r,"text-danger":!r})},n)),l.a.createElement("p",null,"Date: ",c," ")),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(v.b,{to:"/travel/".concat(a),className:"btn btn-secondary"}," Travel details"))))}function N(){return l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"}),"  = Success"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}var _=a(223),O=a.n(_);function j(){var e=Object(b.a)(["\nquery TravelsQuery{\n\n    travels{\n        flight_number\n        mission_name\n        launch_date_local\n        launch_success\n    }\n}\n\n\n"]);return j=function(){return e},e}var k=h()(j()),$=(n.Component,a(370)),x=a.n($),w=function(e){var t=e.text;return l.a.createElement("div",null,t)},S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={center:e.props},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"border",style:{height:"50vh",width:"100%"}},l.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyB-xstv3xOCRAsS5Hk5cNFOg8no5GtKzZk"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},l.a.createElement(w,{lat:this.lat,lng:this.long,text:"My Marker"})))}}]),t}(n.Component);S.defaultProps={center:{lat:40.4670516,lng:-3.6749555},zoom:15};var C=S;function F(){var e=Object(b.a)(["\nquery TravelQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n        flight_number\n        mission_name\n        launch_year\n        launch_success\n        launch_date_local,\n        rocket {\n            rocket_id\n            rocket_name\n            rocket_type\n        }\n    }\n}\n"]);return F=function(){return e},e}var I=h()(F()),D=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),l.a.createElement(n.Fragment,null,l.a.createElement(p.c,{query:I,variables:{flight_number:e}},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return l.a.createElement("h4",null,"Loading...");a&&console.log(a);var c=n.launch,r=(c.mission_name,c.flight_number),i=(c.lunch_year,c.launch_success),o=c.rocket,m=(o.rocket_id,o.rocket_name),s=o.rocket_type;return l.a.createElement("div",null,l.a.createElement("h2",{className:" display-6 my-3"}," ",l.a.createElement("span",{className:"text-dark"},"Mission ")),l.a.createElement(C,{center:{lat:38.4670516,lng:-3.6749555}}),l.a.createElement("h4",{className:"mb-3"},"Travel details"),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",r)),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"Success: ",i)),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"Rocket: ",m)),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"Rocket_type: ",s)),l.a.createElement(v.b,{to:"/",className:"btn btn-secondary"}," Back "))}))}}]),t}(n.Component);function T(){var e=Object(b.a)(["\n    query LandpadsQuery {\n         landpads{\n             id\n             full_name\n             location{\n                  region\n                  name\n                  longitude\n                  latitude\n               }\n        \n      }\n}\n"]);return T=function(){return e},e}var A=h()(T()),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(p.c,{query:A},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return l.a.createElement("h4",null,"Loading...");a&&console.log(a),console.log(n);var c=n.landpads.id,r=n.landpads.full_name,i=n.landpads.longitude,o=n.landpads.latitude;return l.a.createElement("div",null,l.a.createElement("h1",{className:" display-4 my-3"}," ",l.a.createElement("span",{className:"text-dark"},"Landpads ")),l.a.createElement("h4",{className:"mb-3"},"Landpads details"),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"id: ",c)),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"Full_name: ",r)),l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item"},"longitude: ",i,"latitude: ",o)),l.a.createElement(v.b,{to:"/",className:"btn btn-secondary"}," Back "))}))}}]),t}(n.Component),P=a(83),q=(a(417),a(160)),B=a(72),U=a(374),M=a(379),Q=a(375),R=a.n(Q);a(134),a(90);function z(){var e=Object(b.a)(["\n\nmutation AddItem($nombre: String!, $descripcion: String!) {\n    item(itemname: $nombre, description: $descripcion) {\n        \n        itemname,\n        description\n    }\n\n}\n\n\n"]);return z=function(){return e},e}var J=h()(z()),K=function(){var e=Object(M.a)(J),t=Object(q.a)(e,2),a=t[0],n=t[1].data;return l.a.createElement("div",null,l.a.createElement("h1",null,"Add new Item"),l.a.createElement("div",{class:"py-5 text-center"},l.a.createElement(C,null)),l.a.createElement(B.c,{initialValues:{Longitude:"",Latitude:"",Address:"",Description:"",Itemtype:"",Date:"",File:"",Price:"",Calification:"",ItemName:""},onSubmit:function(e){a({variables:{type:e}}),setTimeout(function(){console.log(n),alert(JSON.stringify(e,null,2))},500)},render:function(){return l.a.createElement(B.b,null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"ItemName"},"Item Name:   "),l.a.createElement(B.a,{name:"ItemName",placeholder:"Paseo por el parque"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Latitude"}," Latitude     "),l.a.createElement(B.a,{name:"Latitude",placeholder:"35.45"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Address"},"Address"),l.a.createElement(B.a,{name:"Address",placeholder:"C/Dracena 25"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Description"},"Description"),l.a.createElement(B.a,{name:"Description",placeholder:"A nice place close to the river"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Itemtype"},"ItemType"),l.a.createElement(B.a,{name:"Itemtype",placeholder:"Jane"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"File"},"File"),l.a.createElement(U.FilePicker,{name:"File",multiple:!0,width:250,marginBottom:32,onChange:function(e){return console.log(e)}})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Date"},"Date"),l.a.createElement(R.a,{name:"Date",onChange:console.log.bind(console)})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Price"},"Price"),l.a.createElement(B.a,{name:"Price",placeholder:"100"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("label",{htmlFor:"Calification"},"Calification"),l.a.createElement(B.a,{name:"Calification",placeholder:"Doe"})),l.a.createElement("div",{class:"list-group mb-3"},l.a.createElement("button",{type:"submit"},"Submit"))))}}))},W=(a(295),a(224)),Z=a.n(W);a(296),a(134).Types.ObjectId;function G(e){return l.a.createElement("div",{className:" mb-3"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{align:"center",height:"42",width:"42",src:Z.a,className:"Down_arrow",alt:"arrow"}),l.a.createElement(v.b,{to:"/createitem/",className:"btn btn-secondary"},"+")),l.a.createElement("p",null),l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("img",{height:"20%",width:"100%",src:e.items.photo,className:"App-logo",alt:"picture"}),l.a.createElement("p",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,e.items.itemname),l.a.createElement("p",null,"Description: ",e.items.description," "),l.a.createElement("p",null,"Date: ",e.items.date," "),l.a.createElement("p",null,"Tipo: ",e.items.actiontype," ")),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(v.b,{to:"/items_detail/".concat(e.items._id),key:"".concat(e.items._id),className:"btn btn-secondary"}," Item details")))))}function H(){var e=Object(b.a)(["\nquery ItemsQuery{\n    items {\n    _id    \n    itemname\n    photo\n    description\n    price\n    currency\n    calification\n    date\n    actiontype\n    promoted\n    datepromoted\n    documents_link\n    public\n  }\n\n}\n\n"]);return H=function(){return e},e}a(134).Types.ObjectId;var V=h()(H()),X=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"h6",align:"center"},"Travel Item list"),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("p",null," ")),l.a.createElement(p.c,{query:V},function(e){var t=e.loading,a=e.error,c=e.data;return t?l.a.createElement("p",null,"Loading..."):(a&&console.log(a),l.a.createElement(n.Fragment,null,c.items.map(function(e){return l.a.createElement(G,{key:e._id,items:e})}),l.a.createElement("div",{className:"col-md-9"})))}))}}]),t}(n.Component);a(810);function Y(){var e=Object(b.a)(["\nmutation deleteitem($item_id:String!) {\n    \n    deleteitem(_id: $item_id) {\n      _id\n    \n    }\n  } \n"]);return Y=function(){return e},e}function ee(){var e=Object(b.a)(["\nquery ItemQuery($item_id:String!){\n    item(_id: $item_id) {\n    _id    \n    itemname\n    photo\n    description\n    price\n    currency\n    calification\n    date\n    actiontype\n    promoted\n    datepromoted\n    documents_link\n    public\n  }\n\n}\n\n"]);return ee=function(){return e},e}a(296),a(134).Types.ObjectId;var te=h()(ee()),ae=h()(Y()),ne=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params.item_id;return l.a.createElement(n.Fragment,null,l.a.createElement(p.c,{query:te,variables:{item_id:e}},function(t){var a=t.loading,n=t.error,c=t.data;if(a)return l.a.createElement("h4",null,"Loading...");n&&console.log(n);var r=c.item,i=r._id,o=r.itemname,m=r.photo,s=r.description,u=r.price,d=r.currency,b=r.calification,E=r.date,h=r.actiontype,f=r.promoted,g=r.documents_link,y=r.publico;return l.a.createElement("div",{className:" mb-3"},l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("img",{height:"50%",width:"100%",src:m,className:"App-logo",alt:"picture"}),l.a.createElement(C,{center:{lat:38.4670516,lng:-3.6749555}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,o),l.a.createElement("p",null,"Description: ",s," "),l.a.createElement("p",null,"Date: ",E," "),l.a.createElement("p",null,"Tipo: ",h," "),l.a.createElement("p",null,"ID: ",i),l.a.createElement("p",null,"Photo: ",m),l.a.createElement("p",null,"Price: ",u),l.a.createElement("p",null,"Currency: ",d),l.a.createElement("p",null,"Action Type: ",h),l.a.createElement("p",null,"Promoted: ",f),l.a.createElement("p",null,"Docs: ",g),l.a.createElement("p",null,"Calification: ",b),l.a.createElement("p",null,"Public: ",y)),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(v.b,{to:"/",className:"btn btn-secondary"}," Back"),l.a.createElement(v.b,{to:"/edit/",className:"btn btn-secondary"},"Edit"),l.a.createElement(p.b,{mutation:ae,variables:{item_id:e}},function(e){return l.a.createElement("button",{className:"btn btn-secondary",onClick:e},"Borrar")})))))}))}}]),t}(n.Component),le=a(377),ce=a.n(le),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).submitFile=function(e){e.preventDefault();var t=new FormData;t.append("file",a.state.file[0]),ce.a.post("/test-upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){var t=e.data.Location;a.setState({url:t}),console.log("File uploaded to "+t),a.props.parentCallback(t)}).catch(function(e){})},a.handleFileUpload=function(e){a.setState({file:e.target.files})},a.state={file:null,success:!1,url:"not set"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submitFile},l.a.createElement("input",{label:"upload file",type:"file",onChange:this.handleFileUpload}),l.a.createElement("button",{type:"submit"},"Send"))}}]),t}(n.Component),ie=re;function oe(){var e=Object(b.a)(["\n\nmutation AddItem($nombre: String!, $descripcion: String!,$latitud:String!,$longitud:String!, $foto:String, $precio:Int, $moneda:String, $calificacion:String, $fecha:String,$tipo:String,$promocionado:String,$fechapromo:String,$documentos:String, $publico:Boolean) {\n    item(itemname: $nombre, description: $descripcion, latitude:$latitud, longitude:$longitud,photo:$foto, price:$precio, currency:$moneda,calification:$calificacion,date:$fecha,actiontype:$tipo,promoted:$promocionado,datepromoted:$fechapromo,documents_link:$documentos,public:$publico ) {\n        \n        itemname,\n        description,\n        latitude,\n        longitude,\n        photo,\n        price,\n        currency,\n        calification,\n        date,\n        actiontype,\n        promoted,\n        datepromoted,\n        documents_link,\n        public\n    }\n\n}\n"]);return oe=function(){return e},e}var me=h()(oe()),se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={nombre:"",descripcion:"",latitud:"40.4670516",longitud:"-3.6749555",foto:null,precio:0,moneda:"EUR",calificacion:"",fecha:"",tipo:"",promocionado:"",fechapromo:"",documentos:"",publico:!0},a.callbackFunction=function(e){a.setState({foto:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.nombre,n=t.descripcion,c=t.latitud,r=t.longitud,i=t.foto,o=t.precio,m=t.moneda,s=t.calificacion,u=t.fecha,d=t.tipo,b=t.promocionado,E=t.fechapromo,h=t.documentos,f=t.publico;return l.a.createElement("div",null,"Photo ",l.a.createElement("br",null),l.a.createElement(re,{parentCallback:this.callbackFunction}),l.a.createElement("img",{align:"center",height:"20%",width:"80%",src:this.state.foto,className:"App-logo",alt:"Please upload a picture"}),l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement(C,null)),l.a.createElement("div",{className:"flex flex-column mt3"},"Nombre      ",l.a.createElement("br",null),l.a.createElement("input",{className:"mb2",value:a,onChange:function(t){return e.setState({nombre:t.target.value})},type:"text",placeholder:"The item name"}),l.a.createElement("div",{className:"flex flex-column mt3"}),"Descripcion   ",l.a.createElement("br",null),l.a.createElement("input",{className:"mb2",value:n,onChange:function(t){return e.setState({descripcion:t.target.value})},type:"text",placeholder:"A description for the item"}),l.a.createElement("div",{className:"flex flex-column mt3"},"Long      ",l.a.createElement("br",null),l.a.createElement("input",{className:"mb2",value:c,onChange:function(t){return e.setState({latitud:t.target.value})},type:"text",placeholder:"The item name"})),l.a.createElement("div",{className:"flex flex-column mt3"},"Lat   ",l.a.createElement("br",null),l.a.createElement("input",{className:"mb2",value:r,onChange:function(t){return e.setState({longitud:t.target.value})},type:"text",placeholder:"A description for the item"}))),l.a.createElement("div",{className:"mb2"},"Precio     ",l.a.createElement("br",null),l.a.createElement("input",{className:"mb2",value:o,onChange:function(t){return e.setState({precio:t.target.value})},type:"text",placeholder:"Precio del item"})),l.a.createElement(p.b,{mutation:me,variables:{nombre:a,descripcion:n,latitud:c,longitud:r,foto:i,precio:o,moneda:m,calificacion:s,fecha:u,tipo:d,promocionado:b,fechapromo:E,documentos:h,publico:f}},function(e){return l.a.createElement("button",{className:"btn btn-secondary",onClick:e},"Submit")}),l.a.createElement(v.b,{to:"/",refresh:"true",className:"btn btn-secondary"}," Back"))}}]),t}(n.Component),ue=new d.a({uri:"/graphql"}),de=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{client:ue},l.a.createElement(v.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,l.a.createElement("center",null,"Travel Planner")),l.a.createElement(P.a,{exact:!0,path:"/",component:X}),l.a.createElement(P.a,{exact:!0,path:"/items_detail/:item_id",component:ne}),l.a.createElement(P.a,{exact:!0,path:"/travel/:flight_number",component:D}),l.a.createElement(P.a,{exact:!0,path:"/landpads/",component:L}),l.a.createElement(P.a,{exact:!0,path:"/maps/",component:S}),l.a.createElement(P.a,{exact:!0,path:"/new/",component:K}),l.a.createElement(P.a,{exact:!0,path:"/createitem/",component:se}),l.a.createElement(P.a,{exact:!0,path:"/fileupload/",component:ie}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[380,1,2]]]);
//# sourceMappingURL=main.3d30bf0e.chunk.js.map