"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6431],{7347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));a(1839);const o={id:"p2p",title:"P2P"},s=void 0,r={unversionedId:"learn/p2p",id:"learn/p2p",title:"P2P",description:"Archethic is a permissionless network where any node can participate into the network as long as they have some hardware requirements such secure element to enclave the private keys",source:"@site/docs/learn/p2p.md",sourceDirName:"learn",slug:"/learn/p2p",permalink:"/archethic-docs/learn/p2p",draft:!1,tags:[],version:"current",lastUpdatedAt:1662387602,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{id:"p2p",title:"P2P"},sidebar:"docs",previous:{title:"Replication attestation",permalink:"/archethic-docs/learn/sharding/replication-attestation"},next:{title:"Bootstrapping",permalink:"/archethic-docs/learn/p2p/bootstrapping"}},l={},c=[{value:"Existing solutions",id:"existing-solutions",level:2},{value:"Exsiting solutions",id:"exsiting-solutions",level:2},{value:"Gossip",id:"gossip",level:3},{value:"Broadcast",id:"broadcast",level:3},{value:"Archethic&#39;s way",id:"archethics-way",level:2},{value:"Transaction Validation Process",id:"transaction-validation-process",level:3},{value:"Network transaction chains",id:"network-transaction-chains",level:3},{value:"Beacons Chains",id:"beacons-chains",level:3},{value:"Data propogation",id:"data-propogation",level:3}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic is a permissionless network where any node can participate into the network as long as they have some hardware requirements such secure element to enclave the private keys\navoiding any disclosure of keys. (See ",(0,n.kt)("a",{parentName:"p",href:"/learn/cryptography/hardware-root-of-trust"},"Hardware Root of Trust"),")"),(0,n.kt)("p",null,"However, the network is able to detect if the new joined nodes should act as validation nodes by authorizing them to validate transactions."),(0,n.kt)("p",null,"So to achieve an unlimited permissionless network, the entire P2P layer have been redesigned from the ground to be more effective to support higher TPS and adaption."),(0,n.kt)("h2",{id:"existing-solutions"},"Existing solutions"),(0,n.kt)("h2",{id:"exsiting-solutions"},"Exsiting solutions"),(0,n.kt)("p",null,"In the current P2P and distributed networks, there are two methods of communication for discovery and data propagation: "),(0,n.kt)("h3",{id:"gossip"},"Gossip"),(0,n.kt)("p",null,"Inspired from the gossip in the social network, Gossip's properties are defined by the knowledge of the outgoing neighbors, which means each node of the network will discover the properties of the other nodes by interrogating them randomly periodically."),(0,n.kt)("p",null,"While this approach is high available and fault tolerant, it's performing some unnecessary network traffic and sending data through nearest nodes for propagation. This will use most of the bandwidth and is subject to network latency. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gossip",src:a(4989).Z,width:"611",height:"431"})),(0,n.kt)("h3",{id:"broadcast"},"Broadcast"),(0,n.kt)("p",null,"Classical and native communication is called Broadcast which is defined by the knowledge of the incoming neighbors dispatch the data through all the nodes."),(0,n.kt)("p",null,"This mode of communication is efficient in a small network but in a bigger network the complexity time will not scale."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"broadcast",src:a(8517).Z,width:"451",height:"451"})),(0,n.kt)("h2",{id:"archethics-way"},"Archethic's way"),(0,n.kt)("p",null,"Archethic introduces a new concept called: ",(0,n.kt)("inlineCode",{parentName:"p"},"Supervised Multicast")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"supervised_multicast",src:a(4064).Z,width:"431",height:"421"})),(0,n.kt)("p",null,"Archethic is using a hybrid communication that uses Supervised Multicast, which is closer to the properties of Multicast network.\nIt uses some kind of Multi Unicast communication protocol, where a node communicates with a group of nodes during several phases: transaction validation/replication, beacon chain, self-repair phases, while keeping the exchanging low if no activity is present. "),(0,n.kt)("h3",{id:"transaction-validation-process"},"Transaction Validation Process"),(0,n.kt)("p",null,"During transaction validation through mining and replication, nodes communicates and are able to gather information from incoming or outgoing connection."),(0,n.kt)("p",null,"When a node receives a message or send a message, it can capitalize on this information to determine if the node is available or not, in a local view.\nThen through this view, if the node is not considered as available it can pick another node to fetch an information, while data pushing will remain to check/recheck the availability over time."),(0,n.kt)("h3",{id:"network-transaction-chains"},"Network transaction chains"),(0,n.kt)("p",null,"Network transaction chains are a way to annonce information to the network through consensus and replicated throw all the nodes."),(0,n.kt)("p",null,"Other networks may leverages gossip for P2P information, Archethic uses transaction based node information for P2P connectivity and cryptography.\nSo when a node joins/rejoins the network or when its IP/Port/Key changed, a new transaction is dissiminated to all the nodes in the network after its validation."),(0,n.kt)("p",null,"Then each node knows the entire list of nodes allowed to participate in the network through the use of Node transaction chains.\nTo provide a high level of security and privacy, each connection is encrypted and authenticated by the first node public key known from the transaction chains."),(0,n.kt)("h3",{id:"beacons-chains"},"Beacons Chains"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/learn/sharding/beacon-chain"},"BeaconChain")," is a sharded layer able to monitor the entire network and therefore able to snapshot and sampling P2P availability/latencies to produce summaries each day to maintain a qualify vision of the network."),(0,n.kt)("p",null,"The P2P availability can also be broadcasted to the network in a shorter time range (such a epoch/slot times) to provide a fresheer node availability."),(0,n.kt)("h3",{id:"data-propogation"},"Data propogation"),(0,n.kt)("p",null,"Archethic uses a ",(0,n.kt)("a",{parentName:"p",href:"/learn/sharding"},"sharding")," and distributed replication.\nThis property limits the number of information and messages sent throw the network to reduce bandwidth and data traffic"))}d.isMDXComponent=!0},8517:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/broadcast-c18e0f2b670f7a2d10c0b2e372e191be.svg"},4989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gossip-5aba8d31999ec7981edfdd3fe1b5c7ce.svg"},4064:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/supervised_multicast-928366485a4348d3539b30b60bcc06ea.svg"}}]);