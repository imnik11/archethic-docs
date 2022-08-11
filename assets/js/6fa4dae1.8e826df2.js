"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94392:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"transaction-validation",title:"Pending transaction validation"},o=void 0,c={unversionedId:"build/core/mining/transaction-validation",id:"build/core/mining/transaction-validation",title:"Pending transaction validation",description:"When a transaction is under validation a process is started to perform the ARCH consensus workflow.",source:"@site/docs/build/core/mining/pending-transaction-validation.md",sourceDirName:"build/core/mining",slug:"/build/core/mining/transaction-validation",permalink:"/archethic-docs/build/core/mining/transaction-validation",tags:[],version:"current",lastUpdatedAt:1660221531,formattedLastUpdatedAt:"8/11/2022",frontMatter:{id:"transaction-validation",title:"Pending transaction validation"},sidebar:"docs",previous:{title:"Proof of Work algorithm",permalink:"/archethic-docs/build/core/mining/proof-of-work"},next:{title:"Transaction context retrieval",permalink:"/archethic-docs/build/core/mining/transaction-context"}},l=[{value:"Smart contract verification",id:"smart-contract-verification",children:[],level:2},{value:"Transaction type verification",id:"transaction-type-verification",children:[{value:"Node transaction verification",id:"node-transaction-verification",children:[],level:3},{value:"Node shared secrets transaction verification",id:"node-shared-secrets-transaction-verification",children:[],level:3},{value:"Token transaction verification",id:"token-transaction-verification",children:[],level:3},{value:"Oracle transaction verification",id:"oracle-transaction-verification",children:[],level:3},{value:"OracleSummary transaction verification",id:"oraclesummary-transaction-verification",children:[],level:3},{value:"Code proposal transaction verification",id:"code-proposal-transaction-verification",children:[],level:3},{value:"Code approval transaction verification",id:"code-approval-transaction-verification",children:[],level:3}],level:2}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a transaction is under validation a process is started to perform the ARCH consensus workflow."),(0,r.kt)("p",null,"At the beginning of this workflow, a prior validation is done to detect if the transaction is errornous according of several implementations based on the type of the transactions and other criterias."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check of the previous signature"),(0,r.kt)("li",{parentName:"ol"},"Check if there is smart contract, of its validity"),(0,r.kt)("li",{parentName:"ol"},"Check the content size does not exceed the threshold defined in the configuration"),(0,r.kt)("li",{parentName:"ol"},"Provide verification based on the transaction type")),(0,r.kt)("h2",{id:"smart-contract-verification"},"Smart contract verification"),(0,r.kt)("p",null,"If a transaction contains smart contract, it needs to verify certains things to be sure the smart contract is valid and the nodes will be able to interpret the contract, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parse the contract and determines its validity"),(0,r.kt)("li",{parentName:"ul"},"If an ownership and its secret have been encoded for the node shared storage nonce public key, so they will be able create new transaction on the chain")),(0,r.kt)("h2",{id:"transaction-type-verification"},"Transaction type verification"),(0,r.kt)("h3",{id:"node-transaction-verification"},"Node transaction verification"),(0,r.kt)("p",null,'Before to join the network, node must submit a transaction with a type "node".\nThe following checks are performed:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoding of the transaction's content"),(0,r.kt)("li",{parentName:"ul"},"Assert the origin key is authorized along with the certification. (See ",(0,r.kt)("a",{parentName:"li",href:"/learn/cryptography/hardware-root-of-trust"},"Hardware Root of Trust"),")"),(0,r.kt)("li",{parentName:"ul"},"Check if there are not already existing nodes with the same ip, port and public key")),(0,r.kt)("h3",{id:"node-shared-secrets-transaction-verification"},"Node shared secrets transaction verification"),(0,r.kt)("p",null,"Periodically the nodes submit a renewal of node shared secrets through a transaction.\nThe following checks are performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoding of the transactio's content"),(0,r.kt)("li",{parentName:"ul"},"Check is the new authorized node proposed are available")),(0,r.kt)("h3",{id:"token-transaction-verification"},"Token transaction verification"),(0,r.kt)("p",null,'To create a new asset (Token), a transaction with a type "token" is submitted to the network.'),(0,r.kt)("p",null,"The nodes asserts the content of the Token transactions respects the formatting to be able for the node to interpret it and mint tokens."),(0,r.kt)("h3",{id:"oracle-transaction-verification"},"Oracle transaction verification"),(0,r.kt)("p",null,"When the OracleChain polled some external data and build a transaction to propose the new changes, the nodes will assert the content from the services data are correct regarding the service SLA. (See ",(0,r.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/service"},"OracleChain Service"),")"),(0,r.kt)("h3",{id:"oraclesummary-transaction-verification"},"OracleSummary transaction verification"),(0,r.kt)("p",null,"Periodically, after a cycle/epoch, the nodes submit a transaction which summarizes the entire oracle chain data for this epoch.\nThen the nodes have to assert the changes through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetching the entire oracle chain for this epoch"),(0,r.kt)("li",{parentName:"ul"},"Assert the aggregated content in the oracle chain summary matches the data from all the transaction in the oracle chain ")),(0,r.kt)("h3",{id:"code-proposal-transaction-verification"},"Code proposal transaction verification"),(0,r.kt)("p",null,"When a new upgrade of the network is proposed, a transaction embeds the changes and is sent to the network. (See: On-Chain Governance "),(0,r.kt)("p",null,"The following checks are performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoding the proposal changes (like Git patch)"),(0,r.kt)("li",{parentName:"ul"},"Assert the validity of the changes: format, conformity with the latest Git commit")),(0,r.kt)("h3",{id:"code-approval-transaction-verification"},"Code approval transaction verification"),(0,r.kt)("p",null,"When an updated have been proposed, technical commitee member can vote for a proposal, then a transaction is sent. (See: On-Chain Governance)"),(0,r.kt)("p",null,"The following checks are performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check if the approver is a member of the technical commitee,"),(0,r.kt)("li",{parentName:"ul"},"Check if the proposal exists"),(0,r.kt)("li",{parentName:"ul"},"Check if the proposal hasn't been signed by the approver earlier")))}d.isMDXComponent=!0}}]);