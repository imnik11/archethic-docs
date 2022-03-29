"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8208],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,b=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92349:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"node",title:"Node"},u=void 0,p={unversionedId:"build/core/p2p/node",id:"build/core/p2p/node",title:"Node",description:"Data structure",source:"@site/docs/build/core/p2p/node.md",sourceDirName:"build/core/p2p",slug:"/build/core/p2p/node",permalink:"/archethic-docs/build/core/p2p/node",tags:[],version:"current",lastUpdatedAt:1648197024,formattedLastUpdatedAt:"3/25/2022",frontMatter:{id:"node",title:"Node"},sidebar:"docs",previous:{title:"Messaging",permalink:"/archethic-docs/build/core/p2p/messaging"},next:{title:"Cryptography",permalink:"/archethic-docs/build/core/cryptography"}},s=[{value:"Data structure",id:"data-structure",children:[],level:2},{value:"P2P tables view",id:"p2p-tables-view",children:[{value:"Discovery table",id:"discovery-table",children:[],level:3},{value:"Availability lookup table",id:"availability-lookup-table",children:[],level:3},{value:"Authorized nodes table",id:"authorized-nodes-table",children:[],level:3},{value:"Nodes key lookup table",id:"nodes-key-lookup-table",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"data-structure"},"Data structure"),(0,l.kt)("p",null,"ARCHEthic is using a structured and open P2P network based on some properties:"),(0,l.kt)("p",null,"A node include a list P2P information such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IP"),(0,l.kt)("li",{parentName:"ul"},"P2P Port"),(0,l.kt)("li",{parentName:"ul"},"HTTP Port (Web layer - Explorer)"),(0,l.kt)("li",{parentName:"ul"},"P2P Protocol (i.e TCP)"),(0,l.kt)("li",{parentName:"ul"},"First public key"),(0,l.kt)("li",{parentName:"ul"},"Last public key"),(0,l.kt)("li",{parentName:"ul"},"GeoPatch (for geographical distribution based on the GeoIP of the IP)"),(0,l.kt)("li",{parentName:"ul"},"NetworkPatch (for P2P responsiveness based on the latency to reach it)"),(0,l.kt)("li",{parentName:"ul"},"Reward address (the address where the mining rewards should be sent)"),(0,l.kt)("li",{parentName:"ul"},"Global availability (from BeaconChain qualification)"),(0,l.kt)("li",{parentName:"ul"},"Local availability (from Supervised Multicast)"),(0,l.kt)("li",{parentName:"ul"},"Average availability (from BeaconChain qualification)"),(0,l.kt)("li",{parentName:"ul"},"Authorized"),(0,l.kt)("li",{parentName:"ul"},"Authorization Date")),(0,l.kt)("h2",{id:"p2p-tables-view"},"P2P tables view"),(0,l.kt)("p",null,"The application is stored a P2P view in memory table using ETS (Erlang Term Storage) to support fast query to fetch node information."),(0,l.kt)("p",null,"When network transaction(node, node shared secrets) are loaded inside the system, ",(0,l.kt)("inlineCode",{parentName:"p"},"MemTableLoader")," module is called to populate the tables. This is also true during the bootstrap of the node to fill up the data as cache."),(0,l.kt)("h3",{id:"discovery-table"},"Discovery table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"first public key"),(0,l.kt)("th",{parentName:"tr",align:null},"last public key"),(0,l.kt)("th",{parentName:"tr",align:null},"IP"),(0,l.kt)("th",{parentName:"tr",align:null},"P2P port"),(0,l.kt)("th",{parentName:"tr",align:null},"HTPT port"),(0,l.kt)("th",{parentName:"tr",align:null},"geo patch"),(0,l.kt)("th",{parentName:"tr",align:null},"network patch"),(0,l.kt)("th",{parentName:"tr",align:null},"average availability"),(0,l.kt)("th",{parentName:"tr",align:null},"availability history"),(0,l.kt)("th",{parentName:"tr",align:null},"enrollment date"),(0,l.kt)("th",{parentName:"tr",align:null},"transport"),(0,l.kt)("th",{parentName:"tr",align:null},"reward ddress")))),(0,l.kt)("p",null,"This table contains all the P2P information for a given node index by its first public key"),(0,l.kt)("h3",{id:"availability-lookup-table"},"Availability lookup table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"first public key")))),(0,l.kt)("p",null,"This table indicates the node availability, if its first public key is present in the table.\nThe purpose of this short table is to provide a really fast access to determine the availability."),(0,l.kt)("h3",{id:"authorized-nodes-table"},"Authorized nodes table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"first public key"),(0,l.kt)("th",{parentName:"tr",align:null},"authorization date")))),(0,l.kt)("p",null,"All the node public keys presents in this table will be considered at authorized nodes along with their authorization date."),(0,l.kt)("p",null,"So in order to determine if a node is authorized a fast lookup can be performed."),(0,l.kt)("p",null,"In the same order, to get the list of authorized nodes by folding this table which can then lookup data from the discovery table to fetch all the information regarding the authorized node."),(0,l.kt)("h3",{id:"nodes-key-lookup-table"},"Nodes key lookup table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"last public key"),(0,l.kt)("th",{parentName:"tr",align:null},"first public key")))),(0,l.kt)("p",null,"This is a reverse ordered table where we can have access to the first node public key from its last public key, without traversing the entire discovery table"))}d.isMDXComponent=!0}}]);