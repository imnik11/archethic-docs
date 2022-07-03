"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"bootstrapping",title:"Bootstrapping"},a=void 0,s={unversionedId:"learn/p2p/bootstrapping",id:"learn/p2p/bootstrapping",title:"Bootstrapping",description:"Archethic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed",source:"@site/docs/learn/p2p/bootstrapping.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/bootstrapping",permalink:"/archethic-docs/learn/p2p/bootstrapping",tags:[],version:"current",lastUpdatedAt:1656681727,formattedLastUpdatedAt:"7/1/2022",frontMatter:{id:"bootstrapping",title:"Bootstrapping"},sidebar:"docs",previous:{title:"P2P",permalink:"/archethic-docs/learn/p2p"},next:{title:"Self Repair",permalink:"/archethic-docs/learn/p2p/self-repair"}},p=[{value:"Joining",id:"joining",children:[],level:2},{value:"Updates",id:"updates",children:[],level:2},{value:"Synchronization",id:"synchronization",children:[],level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Archethic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed\nwhen a node is bootstrapping. These operations will ensure synchronization and P2P awareness."),(0,o.kt)("h2",{id:"joining"},"Joining"),(0,o.kt)("p",null,'When a node wants the network the first time, it will request from a list of preconfigured nodes to reach (called "bootstrapping seeds"), the closest nodes from its position.'),(0,o.kt)("p",null,"Then, it will generate a first node transaction including as data: ip, port, protocol, reward address, key certificate (to ensure the key is coming from an secure element)\nOnce the network will attest and verify its transaction, the node will be able to start a SelfRepair process"),(0,o.kt)("h2",{id:"updates"},"Updates"),(0,o.kt)("p",null,"When a nodes rejoin the network after some time, depending on if its previous data expired, it will generate a new transaction with the new information"),(0,o.kt)("h2",{id:"synchronization"},"Synchronization"),(0,o.kt)("p",null,"Once the transaction is validated, the node will start by requesting the list of nodes."),(0,o.kt)("p",null,"Then, it will start the ",(0,o.kt)("a",{parentName:"p",href:"/learn/p2p/self-repair"},"Self-Repair")," sequence to get and synchronize the missing transactions and publish its end of sync to the network."),(0,o.kt)("p",null,"By this way, the entire will know the existence the readiness of this node."))}c.isMDXComponent=!0}}]);