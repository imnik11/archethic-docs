"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"core",title:"Core development"},c=void 0,s={unversionedId:"build/core",id:"build/core",title:"Core development",description:"ARCHEthic Node repository can be found here",source:"@site/docs/build/core.md",sourceDirName:"build",slug:"/build/core",permalink:"/archethic-docs/build/core",tags:[],version:"current",lastUpdatedAt:1646861078,formattedLastUpdatedAt:"3/9/2022",frontMatter:{id:"core",title:"Core development"},sidebar:"docs",previous:{title:"Testnet",permalink:"/archethic-docs/build/testnet"},next:{title:"TPM Implementation",permalink:"/archethic-docs/build/core/tpm"}},u=[{value:"Technology Stack",id:"technology-stack",children:[{value:"Why Elixir ?",id:"why-elixir-",children:[],level:3},{value:"Why C ?",id:"why-c-",children:[],level:3},{value:"Why ScyllaDB ?",id:"why-scylladb-",children:[],level:3}],level:2},{value:"Structure",id:"structure",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ARCHEthic Node repository can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node"},"here")),(0,r.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("p",null,"ARCHEthic Blockchain node used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elixir"),(0,r.kt)("li",{parentName:"ul"},"C"),(0,r.kt)("li",{parentName:"ul"},"ScyllaDB")),(0,r.kt)("h3",{id:"why-elixir-"},"Why Elixir ?"),(0,r.kt)("p",null,"Elixir is a dynamic, functional language for building scalable and maintainable applications."),(0,r.kt)("p",null,"It leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems. "),(0,r.kt)("p",null,"Elixir is successfully used in web development, embedded software, data ingestion, and multimedia processing, across a wide range of industries."),(0,r.kt)("p",null,"When we are building P2P systems and Blockchain technologies we need to think about fault-tolerance, low-latency, concurrent/parallelism.\nElixir matches all those requirements."),(0,r.kt)("p",null,"Because all Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages, we can build fast\nprocessing of data which result in a high TPS for a better scalability."),(0,r.kt)("p",null,"The unavoidable truth about software running in production is that things will go wrong."),(0,r.kt)("p",null,"Even more when we take network, file systems, and other third-party resources into account."),(0,r.kt)("p",null,"Elixir provides supervisors which describe how to restart parts of your system when things go awry, going back to a known initial state that is guaranteed to work."),(0,r.kt)("p",null,"This feature ensures in case of failure, the entire system will not be down, and the isolation provided by the processes and their restarting strategy helps us to achieve it."),(0,r.kt)("p",null,"Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable."),(0,r.kt)("p",null,"Out of the box, Erlang VM provides the capability to hot reload code, which is the best case scenario if we want to provide an on-chain governance without restarting nodes."),(0,r.kt)("h3",{id:"why-c-"},"Why C ?"),(0,r.kt)("p",null,"We need to interact with hardware components and C seems the best candidate, so we are using this language to communicate with TPM for instance."),(0,r.kt)("p",null,"But also, for some intensive task which are really complex in computing, we rely on C to perform those processing."),(0,r.kt)("h3",{id:"why-scylladb-"},"Why ScyllaDB ?"),(0,r.kt)("p",null,"ScyllaDB is a NoSQL database built from the idea of Cassandra - Wide Column Database - but with more efficiency in terms of memory consumption and CPU processing.\nAs it's implemented in C++, it's faster and lightweight and takes advantage of low-level Linux primitives."),(0,r.kt)("p",null,"We are using a Wide Column Database, but we want to be able to fetch only some part of the data, so a column database fits really well for this kind of purpose.\nMoreover, we want a database with a high throughput in writing, and ScyllaDB fits really well with its LSM storage engine."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"Code base is divided into domains (contexts) for better single responsibility principle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransactionChain"),": Manage transaction data structure and chain management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB"),": Manage all the database queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Crypto"),": Manage all the cryptographic operations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"P2P"),": Manage the P2P node listing and node communication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Election"),": Manage the node election algorithms"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mining"),": Manage transaction validation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Replication"),": Manage the replication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BeaconChain"),": Manage BeaconChain subset and synchronization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OracleChain"),": Manage OracleChain services, polling and scheduling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SharedSecrets"),": Manage Shared Secrets scheduling and listing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelfRepair")," : Manage the SelfRepair scheduling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bootstrap"),": Manage the node bootstrapping")))}p.isMDXComponent=!0}}]);