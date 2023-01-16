(function(){"use strict";var t={4182:function(t,e,n){var r=n(9242),o=n(3396);const a={id:"app"},i={id:"nav"};function u(t,e){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o.Wm)(n,{to:{name:"EventList"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Events")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:{name:"About"}},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r)])}var c=n(89);const s={},v=(0,c.Z)(s,[["render",u]]);var l=v,d=n(2483);const p=t=>((0,o.dD)("data-v-7ccd19b8"),t=t(),(0,o.Cn)(),t),f=p((()=>(0,o._)("h1",null,"Events For Good",-1))),h={class:"events"};function w(t,e,n,r,a,i){const u=(0,o.up)("EventCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[f,(0,o._)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.events,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id,event:t},null,8,["event"])))),128))])],64)}var m=n(7139);const g={class:"event-card"};function _(t,e,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o._)("span",null,"@"+(0,m.zw)(n.event.time)+" on "+(0,m.zw)(n.event.date),1),(0,o._)("h4",null,(0,m.zw)(n.event.title),1)])])),_:1},8,["to"])}var b={props:{event:{type:Object,required:!0}}};const y=(0,c.Z)(b,[["render",_],["__scopeId","data-v-7d01234c"]]);var k=y,E=n(1029);const O=E.Z.create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var j={getEvents(){return O.get("/events")},getEvent(t){return O.get("/events/"+t)}},z={name:"EventList",components:{EventCard:k},data(){return{events:null}},created(){j.getEvents().then((t=>{this.events=t.data})).catch((t=>{console.log(t)}))}};const C=(0,c.Z)(z,[["render",w],["__scopeId","data-v-7ccd19b8"]]);var D=C;const Z={key:0};function A(t,e,n,r,a,i){return a.event?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("h1",null,(0,m.zw)(a.event.title),1),(0,o._)("p",null,(0,m.zw)(a.event.time)+" on "+(0,m.zw)(a.event.date)+" @ "+(0,m.zw)(a.event.location),1),(0,o._)("p",null,(0,m.zw)(a.event.description),1)])):(0,o.kq)("",!0)}var x={props:["id"],data(){return{event:null}},created(){j.getEvent(this.id).then((t=>{this.event=t.data})).catch((t=>{console.log(t)}))}};const L=(0,c.Z)(x,[["render",A]]);var P=L;const T={class:"about"},U=(0,o._)("h1",null,"A site for events to better the world.",-1),W=[U];function q(t,e){return(0,o.wg)(),(0,o.iD)("div",T,W)}const F={},H=(0,c.Z)(F,[["render",q]]);var I=H;const M=[{path:"/",name:"EventList",component:D},{path:"/event/:id",name:"EventDetails",props:!0,component:P},{path:"/about",name:"About",component:I}],R=(0,d.p7)({history:(0,d.PO)("/"),routes:M});var Y=R,G=n(65),K=(0,G.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(l).use(K).use(Y).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(v=0;v<t.length;v++){r=t[v][0],o=t[v][1],a=t[v][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(v--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var v=t.length;v>0&&t[v-1][2]>a;v--)t[v]=t[v-1];t[v]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var v=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(v)},r=self["webpackChunkreal_world_vue"]=self["webpackChunkreal_world_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4182)}));r=n.O(r)})();
//# sourceMappingURL=app.c19badba.js.map