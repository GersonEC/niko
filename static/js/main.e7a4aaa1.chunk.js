(this.webpackJsonpniko=this.webpackJsonpniko||[]).push([[0],{123:function(e,t,i){},124:function(e,t,i){},127:function(e,t,i){},132:function(e,t,i){},133:function(e,t,i){},134:function(e,t,i){},135:function(e,t,i){},136:function(e,t,i){},137:function(e,t,i){},155:function(e,t,i){},166:function(e,t,i){},167:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(20),r=i.n(a),s=(i(123),i(17)),o=i(27),l=i.p+"static/media/social.c604aaa3.svg",d=(i(124),i(2));function b(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{className:"footer_info",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"footer_title",children:"CERCARE NEGOZIO"}),Object(d.jsx)("p",{className:"footer_title",children:"REGISTRATI ALLA NEWSLETTER"}),Object(d.jsx)("p",{className:"footer_title",children:"MEMBERSHIP"}),Object(d.jsx)("p",{className:"footer_title",children:"INVIACI UN TUO FEEDBACK"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"footer_title",children:"RICEVERE AIUTO"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Stato dell'ordine"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Invio e ricezione"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Restituzioni"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Opzioni di pagamento"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Contattaci"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"footer_title",children:"RIGUARDO A NIKE"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Notizie"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Lavora con noi"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Investitori"}),Object(d.jsx)("p",{className:"footer_subtitle",children:"Sostenibilit\xe0"})]})]}),Object(d.jsx)("div",{className:"social",children:Object(d.jsx)("img",{src:l,alt:"social"})})]})}var j=i(52),u=i(172),p=i(173),m=i(174),h=i.p+"static/media/niko_logo.d6be4067.svg",O=i(53);var v=function(){var e=Object(c.useState)({width:0,height:0}),t=Object(j.a)(e,2),i=t[0],n=t[1];return Object(c.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i},f=(i(126),i(127),i(42)),x=i(55),g=i.n(x),N=i(67),_=i(40);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var w=Object(_.b)("cart/fetchCart",function(){var e=Object(N.a)(g.a.mark((function e(t){var i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(_.c)({name:"cart",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(w.pending,(function(e){e.status="loading"})).addCase(w.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),C=k.actions,z=C.increment,S=(C.decrement,C.incrementByAmount,function(e){return e.cart.value}),A=k.reducer,E=Object(_.b)("wishList/fetchCart",function(){var e=Object(N.a)(g.a.mark((function e(t){var i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(_.c)({name:"wishList",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(E.pending,(function(e){e.status="loading"})).addCase(E.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),I=L.actions,R=I.increment,F=(I.decrement,I.incrementByAmount,function(e){return e.wishList.value}),T=L.reducer,B=i(9),H=u.a.Search;function P(){var e=Object(f.c)(S),t=Object(f.c)(F),i=v(),n=c.useState(!1),a=Object(j.a)(n,2),r=a[0],s=a[1],l=function(){return Object(B.c)(B.a,{children:[Object(B.b)(o.b,{className:"header_nav_el",to:"/nuove-tendenze",children:"Nuove tendenze"}),Object(B.b)(o.b,{className:"header_nav_el",to:"/regali",children:"Regali"}),Object(B.b)(o.b,{className:"header_nav_el",to:"/uomo",children:"Uomo"}),Object(B.b)(o.b,{className:"header_nav_el",to:"/donna",children:"Donna"}),Object(B.b)(o.b,{className:"header_nav_el",to:"/bambino",children:"Bambino"}),Object(B.b)(o.b,{className:"header_nav_el",to:"/sconti",children:"Sconti"})]})};return Object(B.c)("div",{className:"header",children:[Object(B.b)("div",{className:"header_logo",children:Object(B.b)(o.b,{to:"/",children:Object(B.b)("img",{src:h,alt:"Niko",title:"Niko"})})}),i.width<1200?Object(B.c)("div",{className:"header_navigation",children:[Object(B.b)(m.a,{onClick:function(){return s(!0)}}),Object(B.b)(p.a,{title:"Menu",placement:"left",closable:!0,onClose:function(){return s(!1)},visible:r,children:l()},"left")]}):Object(B.b)("div",{className:"header_navigation",children:l()}),Object(B.c)("div",{className:"header_shopping",children:[Object(B.b)(H,{placeholder:"cercare...",allowClear:!0,onSearch:function(){},style:{width:200}}),Object(B.c)("div",{className:"header_wishList",children:[Object(B.b)("div",{className:"cart_quantity_products",children:Object(B.b)("span",{className:"cart_quantity_text",children:t})}),Object(B.b)(O.a,{title:"Lista desideri"})]}),Object(B.c)("div",{className:"header_cart",children:[Object(B.b)("div",{className:"cart_quantity_products",children:Object(B.b)("span",{className:"cart_quantity_text",children:e})}),Object(B.b)(O.b,{title:"Carrello"})]})]})]})}i(132);function q(e){return Object(d.jsxs)("div",{className:"template",children:[Object(d.jsx)("div",{className:"navigation",role:"navigation",children:Object(d.jsx)(P,{})}),Object(d.jsxs)("div",{className:"main",role:"main",children:[" ",e.children]}),Object(d.jsx)("div",{className:"contentinfo",role:"contentinfo",children:Object(d.jsx)(b,{})})]})}function G(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Uomo"})})}function U(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Donna"})})}function D(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Bambino"})})}function M(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Sconti"})})}function W(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Regali"})})}function J(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("h2",{children:"Nuove Tendenze"})})}var K,V=i(63);!function(e){e.Primary="primary",e.Secondary="secondary"}(K||(K={}));var Y=V.a.div({display:"flex",justifyContent:"center",alignItems:"center",border:"0",width:"22rem",borderRadius:"5rem",backgroundColor:"black",fontSize:"16px",fontFamily:"Avenir",":hover":{cursor:"pointer",opacity:.8}},(function(e){return{backgroundColor:e.type===K.Primary?"black":"white",border:e.type===K.Secondary?"1px solid gainsboro":"",color:e.type===K.Primary?"white":"black"}}));function Z(e){return Object(B.b)("div",{children:Object(B.b)(Y,{type:e.type,onClick:e.onClick,children:Object(B.b)("div",{children:Object(B.c)("p",{children:[e.labelText," ",e.type===K.Secondary&&Object(B.b)(O.a,{})]})})})})}var $=[{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259},{name:"Nike Air Force 1 High '07",description:"Scarpe per uomo",price:259}],Q=[{size:24,available:!1},{size:24.5,available:!1},{size:25,available:!1},{size:25.5,available:!1},{size:26,available:!1},{size:26.5,available:!1},{size:27,available:!1},{size:27.5,available:!1},{size:28,available:!0},{size:28.5,available:!0},{size:29,available:!0},{size:29.5,available:!0},{size:30,available:!1},{size:30.5,available:!0},{size:31,available:!1}],X=(i(133),V.a.div({display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid rgba(117, 117, 117, 0.2)"},(function(e){return{backgroundColor:e.available?"white":"gainsboro"}}))),ee=V.a.div({fontFamily:"Avenir",color:"black",fontSize:"16px"},(function(e){return{color:e.available?"black":"gray"}}));function te(e){return Object(B.b)("div",{className:"size_list",children:e.data.map((function(e){return t=e,Object(B.b)(X,{role:"listitem",className:"size_element",available:t.available,children:Object(B.c)(ee,{available:t.available,children:["CM ",t.size]})},t.size);var t}))})}i(93);function ie(){return Object(d.jsxs)("div",{className:"productDetail",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Spedizione"})}),Object(d.jsxs)("p",{children:["Pere ottenere informazione precisa riguardo la spedizione modificare l'ubicazione basket nel parco, grigialta e sole di domenica. Lo splendore soppravive con la calzatura Nike Air Force 1 '07, un modello classico di basket, questo OG li da un tocco di novit\xe0 alla calzatura di sempre: impeccabile cuoio con punte perfette, in un bianco classico con la quantita perfetta di dettagli per farti brillare ",Object(d.jsx)("br",{}),"- Colori che si mostra: Bianco/Biano ",Object(d.jsx)("br",{}),"- Estilo: 315122-111"]}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:Object(d.jsx)("u",{children:"Guardare i dati del prodotto"})})})]})}i(134);var ce=i.p+"static/media/scarpe.104a99d6.svg";function ne(e){return Object(d.jsxs)("div",{className:"productCard",children:[Object(d.jsx)("img",{src:ce,alt:e.name}),Object(d.jsx)("p",{className:"productCard_name",children:e.name}),Object(d.jsx)("p",{className:"productCard_description",children:e.description}),Object(d.jsxs)("p",{className:"productCard_price",children:[e.price," \u20ac"]})]})}i(135);function ae(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"trenList_title",children:"Principali Tendenze"}),Object(d.jsx)("div",{className:"trendList",children:e.productCardList&&e.productCardList.map((function(e){return Object(d.jsx)("div",{role:"listitem",children:Object(d.jsx)(ne,{name:e.name,description:e.description,price:e.price},e.name)})}))})]})}var re=i(171),se=i.p+"static/media/scarpe1.79100a08.svg",oe=i.p+"static/media/scarpe2.66d62246.svg",le=i.p+"static/media/scarpe3.7d2f017d.svg",de=i.p+"static/media/scarpe4.ab259eb9.svg";i(136);function be(){return Object(d.jsx)("div",{className:"previewImages",children:Object(d.jsxs)(re.a.PreviewGroup,{children:[Object(d.jsx)(re.a,{width:395,src:se}),Object(d.jsx)(re.a,{width:395,src:oe}),Object(d.jsx)(re.a,{width:395,src:le}),Object(d.jsx)(re.a,{width:395,src:de})]})})}var je=i.p+"static/media/scarpe_preview_piccole.e4838f88.svg",ue=i.p+"static/media/scarpe_preview_piccole2.003ccb5d.svg";function pe(e){return Object(d.jsxs)("div",{className:"product-detail-preview",children:[Object(d.jsx)("p",{className:"product-detail-preview_description",children:e.description}),Object(d.jsxs)("div",{className:"product-detail-preview_info",children:[Object(d.jsx)("p",{className:"product-detail-preview_name",children:e.name}),Object(d.jsxs)("p",{className:"product-detail-preview_price",children:["\u20ac ",e.price]})]}),Object(d.jsxs)("div",{className:"product-detail-preview_images",children:[Object(d.jsx)("img",{src:ue,alt:"bianche"}),Object(d.jsx)("img",{src:je,alt:"griggie"})]})]})}i(137);var me=i(116),he="updatable";function Oe(){var e=Object(f.b)();return Object(d.jsxs)("div",{className:"product_page_container",children:[Object(d.jsxs)("div",{className:"product_info",children:[Object(d.jsx)("div",{className:"previewImages_container",children:Object(d.jsx)(be,{})}),Object(d.jsxs)("div",{className:"product_info_details",children:[Object(d.jsx)(pe,{description:"Scarpe per uomo",name:"Nike Air Force 1 '07",price:1999}),Object(d.jsx)(te,{data:Q}),Object(d.jsx)(Z,{type:K.Primary,labelText:"Aggiungere al Carrello",onClick:function(){me.b.loading({content:"Loading...",key:he}),setTimeout((function(){e(z()),me.b.success({content:"Prodotto aggiunto correttamente nel carrello.",key:he,duration:2})}),1e3)}}),Object(d.jsx)(Z,{type:K.Secondary,labelText:"Lista desideri",onClick:function(){me.b.loading({content:"Loading...",key:he}),setTimeout((function(){e(R()),me.b.success({content:"Prodotto aggiunto correttamente nella lista desideri.",key:he,duration:2})}),1e3)}}),Object(d.jsx)(ie,{})]})]}),Object(d.jsx)("div",{className:"trend_list_container",children:Object(d.jsx)(ae,{productCardList:$})})]})}var ve=i(66),fe=i(114),xe=i.n(fe),ge=i(170);i(155);function Ne(){var e=c.useState({products:[],loading:!1,page:0,prevY:0}),t=Object(j.a)(e,2),i=t[0],n=t[1],a=i.products,r=i.loading;return c.useEffect((function(){n((function(e){return Object(ve.a)(Object(ve.a)({},e),{},{loading:!0})})),xe.a.get("https://fakestoreapi.com/products").then((function(e){var t=e.data;console.log(t),n((function(e){return Object(ve.a)(Object(ve.a)({},e),{},{loading:!1,products:t})}))}))}),[]),r?Object(d.jsx)("div",{className:"spin_container",children:Object(d.jsx)(ge.a,{size:"large"})}):Object(d.jsx)("div",{className:"product_container",children:a.map((function(e){return Object(d.jsx)("div",{className:"product",children:Object(d.jsx)(o.b,{to:"/prodotto",children:Object(d.jsx)("img",{src:e.image,width:200,alt:e.title})})},e.id)}))})}i(166);var _e=function(){return Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:Ne}),Object(d.jsx)(s.a,{path:"/prodotto",component:Oe}),Object(d.jsx)(s.a,{path:"/nuove-tendenze",component:J}),Object(d.jsx)(s.a,{path:"/regali",component:W}),Object(d.jsx)(s.a,{path:"/uomo",component:G}),Object(d.jsx)(s.a,{path:"/donna",component:U}),Object(d.jsx)(s.a,{path:"/bambino",component:D}),Object(d.jsx)(s.a,{path:"/sconti",component:M})]})};var ye=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsx)(q,{children:Object(d.jsx)(s.c,{children:Object(d.jsx)(_e,{})})})})})},we=Object(_.a)({reducer:{cart:A,wishList:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f.a,{store:we,children:Object(d.jsx)(ye,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,i){}},[[167,1,2]]]);
//# sourceMappingURL=main.e7a4aaa1.chunk.js.map