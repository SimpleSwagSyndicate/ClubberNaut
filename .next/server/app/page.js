(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},82633:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>u});var n=t(50482),i=t(69108),r=t(62563),o=t.n(r),a=t(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(s,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,51136)),"/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,34065)),"/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/page.tsx"],c="/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},32381:(e,s,t)=>{Promise.resolve().then(t.bind(t,62481))},62481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var n=t(95344),i=t(40665),r=t(99923),o=t(32618),a=t(43024),l=t(98966),u=t(4156),d=t(87768),c=t.n(d),p=t(3729),x=t(46100);let{createClient:b}=t(15992),m=b("https://fricdlpilwnfjdmtvvle.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk"),g=async e=>{let{data:s,error:t}=await m.from("User Profile V1a").select("clubs").eq("userid",e),n=s[0].clubs,i=[];for(let e=0;e<n.length;e++){let s=n[e],{data:t,error:r}=await m.from("Club Profile").select("recent_update").eq("name",s);if(void 0===t[0])continue;let o=t[0].recent_update;i.push([s,o[0]])}return i};function j(){let e=(0,p.useContext)(x.UserContext),[s,t]=(0,p.useState)([]);(0,p.useEffect)(()=>{console.log("USER ID: "+e.userid),(async()=>{t(await g(e.userid))})()},[e.userid]);let d=s.map(e=>{let s=e[0],t=e[1];return null==t?[]:Object.values(t).map(e=>({...e,club:s}))}).flat();return(0,n.jsxs)("div",{children:[n.jsx(i.Title,{className:c().update,children:"Here's what's going on in your communities..."}),(0,n.jsxs)("div",{children:[n.jsx(r.Image,{className:c().logo,src:"/clubbernaut-high-resolution-logo-transparent.png",alt:"Logo"}),n.jsx("div",{className:c().scroll,children:n.jsx(o.ScrollArea,{w:600,h:600,children:d.map((e,s)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.Paper,{style:{backgroundColor:"#971B2F"},shadow:"lg",p:50,radius:50,children:[(0,n.jsxs)(l.Text,{c:"#FFFFFF",className:c().club,children:[" ",e.club," "]}),n.jsx("br",{}),(0,n.jsxs)(l.Text,{c:"#FFFFFF",className:c().content,children:[" ",e.date," "]}),(0,n.jsxs)(l.Text,{c:"#FFFFFF",className:c().content,children:[" ",e.title," "]}),n.jsx("br",{}),(0,n.jsxs)(l.Text,{c:"#FFFFFF",className:c().content,children:[" ",e.description," "]})]}),n.jsx(u.Space,{h:"md"})]},s))})})]})]})}function f(){return n.jsx(j,{})}},87768:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'postcss-preset-mantine'\nRequire stack:\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/index.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/index.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack-config.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack-build/impl.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/compiled/jest-worker/processChild.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)\n    at /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/server/require-hook.js:55:36\n    at Function.resolve (node:internal/modules/helpers:188:19)\n    at loadPlugin (/Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:49:32)\n    at /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:56\n    at Array.map (<anonymous>)\n    at getPostCssPlugins (/Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:47)\n    at async /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36")},51136:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>r,__esModule:()=>i,default:()=>o});let n=(0,t(86843).createProxy)(String.raw`/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/page.tsx`),{__esModule:i,$$typeof:r}=n,o=n.default},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),n=s.X(0,[638,96,337,250],()=>t(82633));module.exports=n})();