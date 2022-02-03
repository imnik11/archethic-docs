"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[568],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"arch-consensus",title:"ARCH consensus"},s=void 0,c={unversionedId:"learn/arch-consensus",id:"learn/arch-consensus",title:"ARCH consensus",description:"ARCHEthic Blockchain is using a new consensus called ARCH (Atomic Rotating Commitment Heuristic) for an uncompromising consensus to support high scalability and high throughput.",source:"@site/docs/learn/arch_consensus.md",sourceDirName:"learn",slug:"/learn/arch-consensus",permalink:"/archethic-docs/learn/arch-consensus",tags:[],version:"current",lastUpdatedAt:1643897567,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"arch-consensus",title:"ARCH consensus"},sidebar:"docs",previous:{title:"TransactionChains",permalink:"/archethic-docs/learn/transaction-chain"},next:{title:"Proof of Work",permalink:"/archethic-docs/learn/arch-consensus/proof-of-work"}},d=[{value:"Atomic Commitment",id:"atomic-commitment",children:[],level:2},{value:"Rotating Election",id:"rotating-election",children:[],level:2},{value:"Workflow",id:"workflow",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ARCHEthic Blockchain is using a new consensus called ",(0,o.kt)("inlineCode",{parentName:"p"},"ARCH")," (Atomic Rotating Commitment Heuristic) for an uncompromising consensus to support high scalability and high throughput."),(0,o.kt)("p",null,"ARCHEthic Blockchain is based on three properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Security: Each transaction is validated atomically"),(0,o.kt)("li",{parentName:"ul"},"Data consistency: Algorithms ensure to access the latest write and maximum availability"),(0,o.kt)("li",{parentName:"ul"},"Fault tolerance: Allow nodes to operate independently even in case of disaster")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ARCH")," consensus is defined by three concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Atomic Commitment"),": The most absolute form a consensus which implies 100% of concordant responses for the acceptance or refusal of the transaction validation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Heuristic"),": Set of algorithms which manages the entire network, allowing to elect in a decentralized and coordinated way the nodes in charge to validate or store the transaction chains"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Rotating"),": Node election is constantly changing. No nodes can predict which nodes will validate the transaction before its arrives.")),(0,o.kt)("h2",{id:"atomic-commitment"},"Atomic Commitment"),(0,o.kt)("p",null,"ARCHEthic Blockchain is based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Hypergeometric distribution")," laws which from an unpredictable election and formal consensus make it possible to obtain with certainty (99.99999999%) the same answer by querying 197 nodes as would be obtained by querying 100 000 nodes."),(0,o.kt)("p",null,"Therefore, it makes possible the consensus establishment with a small part of nodes and can resist to attacks of 90% of malicious nodes. "),(0,o.kt)("p",null,"The risk of related availability is ensured by a strict management of the disruptive nodes, which are banished after investigation of the origin of the disagreement."),(0,o.kt)("p",null,"By supporting more 90% of malicious nodes into its network, ",(0,o.kt)("inlineCode",{parentName:"p"},"ARCH")," consensus is above aeronautical or nuclear standard, thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Atomic Commitment")," which request the total agreement of the validation nodes and from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Malicious Detection")," algorithm to detect the malicious nodes."),(0,o.kt)("h2",{id:"rotating-election"},"Rotating Election"),(0,o.kt)("p",null,"Each rotating election is unpredictable, but still verifiable and reproducible.\nThe rotating algorithm sort a list of nodes based on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hash of transaction"),": Unpredictable until the transaction arrives"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Daily nonce"),": Secret shared between the authorized nodes and renewed daily"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node public key"),": Last node public key")),(0,o.kt)("p",null,"The rotating election produces a proof, named: ",(0,o.kt)("inlineCode",{parentName:"p"},"Proof of Election")," which can be verified by any other nodes to ensure the right election of nodes."),(0,o.kt)("p",null,"From this algorithm, we get a list of nodes which can be filtered according to the constraints of the validation of the transaction."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"P2P availability"),(0,o.kt)("li",{parentName:"ul"},"Geographical distribution")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"When a transaction is willing to be validated, its follows the given workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The transaction is received by any node (aka ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome node"),")"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome Node")," determines the validation nodes from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Rotating Election")," algorithm and forward the transaction"),(0,o.kt)("li",{parentName:"ol"},"The validation nodes after receiving the transaction start some preliminary job to gather the context of the transaction:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Previous transaction"),(0,o.kt)("li",{parentName:"ul"},"List of unspent outputs"))),(0,o.kt)("li",{parentName:"ol"},"After the context building, the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes")," communicate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Coordinator Node")," the list of storage nodes involved to gather this information."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Coordinator Node")," can build the ",(0,o.kt)("inlineCode",{parentName:"li"},"Validation Stamp")," and compute the replication tree. Then it transmits them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes")," verify the content of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Validation Stamp"),", sign with or without inconsistencies, and send the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamp")," to all the validation nodes involved."),(0,o.kt)("li",{parentName:"ol"},"Once all the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamps")," are received and if the ",(0,o.kt)("inlineCode",{parentName:"li"},"Atomic Commitment")," is reached, the replication phase starts."),(0,o.kt)("li",{parentName:"ol"},"Validation nodes send the transaction to the respective storage nodes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage nodes responsible for the new transaction chain"),(0,o.kt)("li",{parentName:"ul"},"Storage nodes responsible for the outputs of the transactions (transaction's movements addresses, node movements, recipients)"),(0,o.kt)("li",{parentName:"ul"},"Storage nodes responsible for the ",(0,o.kt)("a",{parentName:"li",href:"/learn/sharding/beacon-chain"},"Beacon Chain"))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"The storage for the new transaction chain will notify the validation nodes and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome Node")," about the replication, and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome Node")," will notify the client about it.")))}m.isMDXComponent=!0}}]);