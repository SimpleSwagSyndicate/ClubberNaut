(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},64695:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u});var n=t(50482),r=t(69108),i=t(62563),o=t.n(i),a=t(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(s,l);let u=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,91613)),"/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,34065)),"/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/login/page.tsx"],c="/login/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},14291:(e,s,t)=>{Promise.resolve().then(t.bind(t,44731))},44731:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>q});var n=t(95344),r=t(18746),i=t(40665),o=t(98966),a=t(5349),l=t(43024),u=t(48104),d=t(8670),c=t(57616),p=t(1559),m=t(4156),x=t(26136),b=t(78939),g=t.n(b),h=t(56506);let{createClient:C}=t(15992),j=C("https://fricdlpilwnfjdmtvvle.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk"),f=async(e,s)=>{console.log("login called!");let{data:t,error:n}=await j.from("User Profile V1a").select("email, password").eq("email",e);return n?{status:"Error",msg:`${n.message}`}:0==t.length?{status:"Error",msg:"User not found"}:t.at(0).password!=s?{status:"Error",msg:"Incorrect password"}:{status:"Success",msg:"Logged in successfully"}};var y=t(3729),w=t(8428),I=t(46100);let{createClient:k}=t(15992),v=k("https://fricdlpilwnfjdmtvvle.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk"),_=async e=>{try{let{data:s,error:t}=await v.from("User Profile V1a").select("userid").eq("email",e).single();if(t)throw t;if(s)return s.userid;return null}catch(e){return console.error("Error fetching username:",e.message),null}};function q(){let e=(0,y.useContext)(I.UserContext),[s,t]=(0,y.useState)(""),[b,C]=(0,y.useState)(""),j=(0,w.useRouter)();(0,y.useEffect)(()=>{t(""),C("")},[]);let k=async()=>{let t=await f(s,b),n=await _(s);try{"Success"==t.status&&null!=n?(e.updateEmail(s),e.updateUserId(n),j.push("/")):alert("Incorrect password. Please try again.")}catch(e){console.log(e)}};return n.jsx("div",{className:g().container,children:(0,n.jsxs)(r.Container,{size:420,children:[n.jsx(i.Title,{ta:"center",className:g().title,children:"Welcome back!"}),(0,n.jsxs)(o.Text,{c:"dimmed",size:"sm",ta:"center",mt:5,children:["Do not have an account yet?"," ",n.jsx(a.Anchor,{size:"sm",component:h.default,href:"/signup",children:"Create account"})]}),(0,n.jsxs)(l.Paper,{withBorder:!0,shadow:"md",p:30,mt:30,radius:"md",children:[n.jsx(u.TextInput,{label:"Email",placeholder:"Your email",id:"email",required:!0,value:s,onChange:e=>t(e.target.value)}),n.jsx(d.PasswordInput,{label:"Password",placeholder:"Your password",id:"pwd",required:!0,mt:"md",value:b,onChange:e=>C(e.target.value)}),(0,n.jsxs)(c.Group,{justify:"space-between",mt:"lg",children:[n.jsx(p.Checkbox,{label:"Remember me"}),n.jsx(a.Anchor,{component:"button",size:"sm",children:"Forgot password?"})]}),n.jsx(m.Space,{h:30}),n.jsx(x.Button,{className:g().login,onClick:()=>{k()},children:"Log in"})]})]})})}},78939:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'postcss-preset-mantine'\nRequire stack:\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/index.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/index.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack-config.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack-build/impl.js\n- /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/compiled/jest-worker/processChild.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)\n    at /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/server/require-hook.js:55:36\n    at Function.resolve (node:internal/modules/helpers:188:19)\n    at loadPlugin (/Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:49:32)\n    at /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:56\n    at Array.map (<anonymous>)\n    at getPostCssPlugins (/Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:47)\n    at async /Users/jianxinlin/Kolyn/Coding /ClubberNaut/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36")},91613:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>r,default:()=>o});let n=(0,t(86843).createProxy)(String.raw`/Users/jianxinlin/Kolyn/Coding /ClubberNaut/src/app/login/page.tsx`),{__esModule:r,$$typeof:i}=n,o=n.default},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var n=t(70337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),n=s.X(0,[638,96,337,250],()=>t(64695));module.exports=n})();