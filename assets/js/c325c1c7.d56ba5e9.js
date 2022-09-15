"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8208],{2349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(7462),i=(a(7294),a(3905));a(1839);const r={id:"node",title:"Node"},n=void 0,o={unversionedId:"build/core/p2p/node",id:"build/core/p2p/node",title:"Node",description:"Data structure",source:"@site/docs/build/core/p2p/node.md",sourceDirName:"build/core/p2p",slug:"/build/core/p2p/node",permalink:"/archethic-docs/build/core/p2p/node",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256837,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"node",title:"Node"},sidebar:"docs",previous:{title:"Messaging",permalink:"/archethic-docs/build/core/p2p/messaging"},next:{title:"Cryptography",permalink:"/archethic-docs/build/core/cryptography"}},s={},d=[{value:"Data structure",id:"data-structure",level:2},{value:"P2P tables view",id:"p2p-tables-view",level:2},{value:"Discovery table",id:"discovery-table",level:3},{value:"Availability lookup table",id:"availability-lookup-table",level:3},{value:"Authorized nodes table",id:"authorized-nodes-table",level:3},{value:"Nodes key lookup table",id:"nodes-key-lookup-table",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"data-structure"},"Data structure"),(0,i.kt)("p",null,"Archethic is using a structured and open P2P network based on some properties:"),(0,i.kt)("p",null,"A node include a list P2P information such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IP"),(0,i.kt)("li",{parentName:"ul"},"P2P Port"),(0,i.kt)("li",{parentName:"ul"},"HTTP Port (Web layer - Explorer)"),(0,i.kt)("li",{parentName:"ul"},"P2P Protocol (i.e TCP)"),(0,i.kt)("li",{parentName:"ul"},"First public key"),(0,i.kt)("li",{parentName:"ul"},"Last public key"),(0,i.kt)("li",{parentName:"ul"},"GeoPatch (for geographical distribution based on the GeoIP of the IP)"),(0,i.kt)("li",{parentName:"ul"},"NetworkPatch (for P2P responsiveness based on the latency to reach it)"),(0,i.kt)("li",{parentName:"ul"},"Reward address (the address where the mining rewards should be sent)"),(0,i.kt)("li",{parentName:"ul"},"Global availability (from BeaconChain qualification)"),(0,i.kt)("li",{parentName:"ul"},"Local availability (from Supervised Multicast)"),(0,i.kt)("li",{parentName:"ul"},"Average availability (from BeaconChain qualification)"),(0,i.kt)("li",{parentName:"ul"},"Authorized"),(0,i.kt)("li",{parentName:"ul"},"Authorization Date")),(0,i.kt)("h2",{id:"p2p-tables-view"},"P2P tables view"),(0,i.kt)("p",null,"The application is stored a P2P view in memory table using ETS (Erlang Term Storage) to support fast query to fetch node information."),(0,i.kt)("p",null,"When network transaction(node, node shared secrets) are loaded inside the system, ",(0,i.kt)("inlineCode",{parentName:"p"},"MemTableLoader")," module is called to populate the tables. This is also true during the bootstrap of the node to fill up the data as cache."),(0,i.kt)("h3",{id:"discovery-table"},"Discovery table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"first public key"),(0,i.kt)("th",{parentName:"tr",align:null},"last public key"),(0,i.kt)("th",{parentName:"tr",align:null},"IP"),(0,i.kt)("th",{parentName:"tr",align:null},"P2P port"),(0,i.kt)("th",{parentName:"tr",align:null},"HTTP port"),(0,i.kt)("th",{parentName:"tr",align:null},"geo patch"),(0,i.kt)("th",{parentName:"tr",align:null},"network patch"),(0,i.kt)("th",{parentName:"tr",align:null},"average availability"),(0,i.kt)("th",{parentName:"tr",align:null},"availability history"),(0,i.kt)("th",{parentName:"tr",align:null},"enrollment date"),(0,i.kt)("th",{parentName:"tr",align:null},"transport"),(0,i.kt)("th",{parentName:"tr",align:null},"reward ddress")))),(0,i.kt)("p",null,"This table contains all the P2P information for a given node index by its first public key"),(0,i.kt)("h3",{id:"availability-lookup-table"},"Availability lookup table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"first public key")))),(0,i.kt)("p",null,"This table indicates the node availability, if its first public key is present in the table.\nThe purpose of this short table is to provide a really fast access to determine the availability."),(0,i.kt)("h3",{id:"authorized-nodes-table"},"Authorized nodes table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"first public key"),(0,i.kt)("th",{parentName:"tr",align:null},"authorization date")))),(0,i.kt)("p",null,"All the node public keys presents in this table will be considered at authorized nodes along with their authorization date."),(0,i.kt)("p",null,"So in order to determine if a node is authorized a fast lookup can be performed."),(0,i.kt)("p",null,"In the same order, to get the list of authorized nodes by folding this table which can then lookup data from the discovery table to fetch all the information regarding the authorized node."),(0,i.kt)("h3",{id:"nodes-key-lookup-table"},"Nodes key lookup table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"last public key"),(0,i.kt)("th",{parentName:"tr",align:null},"first public key")))),(0,i.kt)("p",null,"This is a reverse ordered table where we can have access to the first node public key from its last public key, without traversing the entire discovery table"))}p.isMDXComponent=!0}}]);