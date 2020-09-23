(this["webpackJsonpdicionario-react"]=this["webpackJsonpdicionario-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/book-24px.9a22c7f5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/search-black-18dp.19142cc5.svg"},42:function(e,t,a){e.exports=a(83)},47:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(47),a(7)),i=a(2),s=a(15),u=a.n(s),m=a(19),p=a(8),d=a(3),f=a(17),E=Object(f.b)({name:"word",initialState:{entries:[]},reducers:{setEntries:function(e,t){return e.entries=t.payload.entries,e}}}),b=function(e){return e.word.entries},h=E.actions,g=E.reducer,v=Object(f.b)({name:"search",initialState:{text:"example"},reducers:{setText:function(e,t){return e.text=t.payload,e}}}),O=function(e){return e.search.text},j=v.actions,y=v.reducer,k=(a(53),a(37)),x={backgroundImage:"url(".concat(a.n(k).a,")"),backgroundColor:"white",backgroundRepeat:"no-repeat",backgroundSize:"20px 30px",backgroundAttachment:"scroll"};function w(){var e=Object(d.c)(O),t=Object(d.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"input-search",hidden:!0},"Pesquisa:"),r.a.createElement("input",{id:"input-search",className:"hover-effect",type:"text",title:"Search field",required:!0,value:e,style:x,onChange:function(e){return t(j.setText(e.target.value))},autoFocus:!0}))}a(54);function N(){return r.a.createElement("div",{className:"container-search"},r.a.createElement(w,null))}a(55);function S(e){var t=e.onClick,a=e.type,n=e.text;return r.a.createElement("div",{className:"container-button"},r.a.createElement("button",{className:"hover-effect",type:a,onClick:t},n))}a(56),a(57);function L(e){var t=e.lexeme;return r.a.createElement(r.a.Fragment,null,t.senses?t.senses.map((function(e,t){return r.a.createElement("p",{key:t},e.definition)})):null)}function F(e){var t=e.lexemes;return r.a.createElement("div",{className:"container-lexemes"},r.a.createElement("h4",null,"Definitions:"),t&&t.map((function(e,t){return r.a.createElement(L,{key:t,lexeme:e})})))}function D(e){var t=e.audio;return r.a.createElement("div",null,t.url?r.a.createElement("audio",{controls:"controls"},r.a.createElement("source",{src:t.url,type:"audio/mp3"}),"seu navegador n\xe3o suporta HTML5"):null)}function C(e){var t=e.pronunciation;return r.a.createElement(r.a.Fragment,null,t.audio?r.a.createElement(D,{audio:t.audio}):null)}function q(e){var t=e.pronunciations;return r.a.createElement("div",{className:"container-pronuntiations"},r.a.createElement("h4",null,"Pronuntiations:"),t&&t.map((function(e,t){return r.a.createElement(C,{key:t,pronunciation:e})})))}function I(e){var t=e.entrie;return r.a.createElement("div",{className:"container container-card hover-effect"},r.a.createElement(F,{lexemes:t.lexemes}),r.a.createElement(q,{pronunciations:t.pronunciations}))}function R(){var e=Object(d.c)(b);return r.a.createElement("div",{className:"container-cards"},e.map((function(e,t){return r.a.createElement(I,{key:t,entrie:e})})))}a(58);var P=a(20),A=a.n(P),H=(a(59),a(38)),T=a(39),U=function(){function e(){Object(H.a)(this,e)}return Object(T.a)(e,null,[{key:"saveSession",value:function(e){localStorage.setItem("token",e)}},{key:"deleteSession",value:function(){localStorage.removeItem("token")}},{key:"isLoggedIn",value:function(){return!!localStorage.getItem("token")}}]),e}(),B=Object(f.b)({name:"session",initialState:{isLogged:U.isLoggedIn()},reducers:{setLogged:function(e,t){return e.isLogged=t.payload,e}}}),J=function(e){return e.session.isLogged},M=B.actions,W=B.reducer;function z(){var e=Object(d.c)(J);return r.a.createElement("header",{className:e?"container-header":"container-header big"},r.a.createElement("img",{src:A.a,alt:"Open book"}),r.a.createElement("h1",{title:"Dictionary"},r.a.createElement("span",{className:"letter","data-letter":"D"},"D"),"ictionary"),r.a.createElement("div",{className:"container-login-link"},e?r.a.createElement(l.b,{to:"/logout"},"Logout"):r.a.createElement(l.b,{to:"/login"},"Login")))}a(61);function $(){return r.a.createElement("footer",{className:"container-footer"},r.a.createElement("p",null,"API: ",r.a.createElement("a",{href:"https://www.linguarobot.io/"},"Lingua Robot")))}var G=a(22),K=a.n(G),Q=K.a.create({baseURL:"https://dictionary-express.herokuapp.com/"});function V(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(d.c)(b),l=Object(d.c)(O),i=Object(d.b)();function s(){return(s=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=3;break}return e.abrupt("return");case 3:return c(!0),e.next=6,Q.get("search?word=".concat(l));case 6:n=e.sent,i(h.setEntries(n.data)),c(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("main",null,r.a.createElement("form",{autoComplete:"off"},r.a.createElement(N,null),r.a.createElement(S,{onClick:function(e){return s.apply(this,arguments)},type:"submit",text:a?"...Loading":"Search"}),o.length?r.a.createElement(R,null):null)),r.a.createElement($,null))}function X(){var e=Object(d.b)(),t=Object(i.f)();return Object(n.useEffect)((function(){U.deleteSession(),e(M.setLogged(!1)),t.push("/")})),r.a.createElement(r.a.Fragment,null)}function Y(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:V}),r.a.createElement(i.a,{path:"/logout",exact:!0,component:X}))}a(79);var Z=K.a.create({baseURL:"https://reqres.in/"}),_=a(98);function ee(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),f=s[0],E=s[1],b=Object(n.useState)(""),h=Object(p.a)(b,2),g=h[0],v=h[1],O=Object(d.b)(),j=Object(i.f)(),y=Object(n.useState)(""),k=Object(p.a)(y,2),x=k[0],w=k[1];function N(){return(N=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=3;break}return e.abrupt("return");case 3:c(!0),Z.post("/api/login",{email:f,password:g}).then((function(e){e.data&&e.data.token&&(U.saveSession(e.data.token),O(M.setLogged(!0)),j.push("/"))})).catch((function(e){e.response&&e.response.data&&e.response.data.error?w("Login error: ".concat(e.response.data.error)):w("Unexpected error")})),c(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"container-header"},r.a.createElement("img",{src:A.a,alt:"Open book"}),r.a.createElement("h1",{title:"Dictionary"},r.a.createElement("span",{className:"letter","data-letter":"D"},"D"),"ictionary")),r.a.createElement("main",{className:"container-login"},r.a.createElement(_.a,{"aria-label":"breadcrumb"},r.a.createElement(l.b,{color:"inherit",to:"/"},"Home"),r.a.createElement(l.b,{color:"textPrimary",to:"/login","aria-current":"page"},"Login")),r.a.createElement("form",null,r.a.createElement("section",{className:"container-login"},r.a.createElement("h2",null,"Login"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-email"},"E-mail:"),r.a.createElement("input",{id:"input-email",className:"hover-effect",type:"text",title:"Search field",placeholder:"eve.holt@reqres.in",required:!0,value:f,onChange:function(e){return E(e.target.value)},autoFocus:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-password"},"Password:"),r.a.createElement("input",{id:"input-password",className:"hover-effect",type:"password",title:"Search field",placeholder:"cityslicka",required:!0,value:g,onChange:function(e){return v(e.target.value)}})),x?r.a.createElement("span",{className:"error-message"},x):null,r.a.createElement(S,{onClick:function(e){return N.apply(this,arguments)},type:"button",text:a?"...Loading":"Login"}),r.a.createElement(l.b,{className:"register-link",to:"/register"},"Don't have an account?")))))}a(80);function te(){return r.a.createElement("div",{className:"container-home"},r.a.createElement(z,null),r.a.createElement($,null))}a(81);function ae(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),f=s[0],E=s[1],b=Object(n.useState)(!1),h=Object(p.a)(b,2),g=h[0],v=h[1],O=Object(n.useState)(""),j=Object(p.a)(O,2),y=j[0],k=j[1],x=Object(n.useState)(""),w=Object(p.a)(x,2),N=w[0],L=w[1],F=Object(d.b)(),D=Object(i.f)(),C=Object(n.useState)(""),q=Object(p.a)(C,2),I=q[0],R=q[1];function P(){return(P=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g){e.next=4;break}return R("passwords don't match"),e.abrupt("return");case 4:if(!a){e.next=6;break}return e.abrupt("return");case 6:c(!0),Z.post("/api/register",{email:f,password:y}).then((function(e){e.data&&e.data.token&&(U.saveSession(e.data.token),F(M.setLogged(!0)),D.push("/"))})).catch((function(e){e.response&&e.response.data&&e.response.data.error?R("".concat(e.response.data.error)):R("An unexpected error occurred")})),c(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){v(!(!y.length||!N.length||y!==N)),console.log(g)}),[y,N,g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"container-header"},r.a.createElement("img",{src:A.a,alt:"Open book"}),r.a.createElement("h1",{title:"Dictionary"},r.a.createElement("span",{className:"letter","data-letter":"D"},"D"),"ictionary")),r.a.createElement("main",{className:"container-register"},r.a.createElement(_.a,{"aria-label":"breadcrumb"},r.a.createElement(l.b,{color:"inherit",to:"/"},"Home"),r.a.createElement(l.b,{color:"textPrimary",to:"/register","aria-current":"page"},"Register")),r.a.createElement("form",null,r.a.createElement("section",{className:"container-register"},r.a.createElement("h2",null,"Register"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-email"},"E-mail:"),r.a.createElement("input",{id:"input-email",className:"hover-effect",type:"text",title:"E-mail",placeholder:"example@email.com",required:!0,value:f,onChange:function(e){return E(e.target.value)},autoFocus:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-password"},"Password:"),r.a.createElement("input",{id:"input-password",className:"hover-effect",type:"password",title:"Password",placeholder:"password",required:!0,value:y,onChange:function(e){return k(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-password-retype"},"Retype password:"),r.a.createElement("input",{id:"input-password-retype",className:"hover-effect",type:"password",title:"Retype password",placeholder:"password",required:!0,value:N,onChange:function(e){return L(e.target.value)}})),I?!g&&y.length&&N.length?r.a.createElement("span",{className:"error-message"},"passwords don't match"):r.a.createElement("span",{className:"error-message"},I):null,r.a.createElement(S,{onClick:function(e){return P.apply(this,arguments)},type:"button",text:a?"...Loading":"Register"}),r.a.createElement(l.b,{className:"login-link",to:"/login"},"I already have an account")))))}function ne(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:te}),r.a.createElement(i.a,{path:"/login",exact:!0,component:ee}),r.a.createElement(i.a,{path:"/register",exact:!0,component:ae}))}function re(){var e=Object(d.c)(J);return r.a.createElement(l.a,null,e?r.a.createElement(Y,null):r.a.createElement(ne,null))}var ce=function(){return r.a.createElement(re,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(f.a)({reducer:{word:g,search:y,session:W}});a(82);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:oe},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.64736d66.chunk.js.map