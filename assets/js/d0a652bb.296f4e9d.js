"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5944],{9182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=n(1839);const s={id:"explorer",title:"Beacon Explorer"},r=void 0,l={unversionedId:"learn/sharding/beacon-chain/explorer",id:"learn/sharding/beacon-chain/explorer",title:"Beacon Explorer",description:"Archethic Blockchain leverages Sharding to outperform the exiting blockchains using shards called: subsets and BeaconChain Explorer displays the entire transactions across subsets.",source:"@site/docs/learn/sharding/beacon-chain/explorer.md",sourceDirName:"learn/sharding/beacon-chain",slug:"/learn/sharding/beacon-chain/explorer",permalink:"/archethic-docs/learn/sharding/beacon-chain/explorer",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256837,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"explorer",title:"Beacon Explorer"},sidebar:"docs",previous:{title:"Beacon Chain",permalink:"/archethic-docs/learn/sharding/beacon-chain"},next:{title:"Replication attestation",permalink:"/archethic-docs/learn/sharding/replication-attestation"}},c={},h=[{value:"Concepts",id:"concepts",level:2},{value:"Slot",id:"slot",level:3},{value:"Epoch",id:"epoch",level:3},{value:"Subset",id:"subset",level:3},{value:"Process to get transaction notifications",id:"process-to-get-transaction-notifications",level:2},{value:"How to get transactions in realtime",id:"how-to-get-transactions-in-realtime",level:2}],d={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Archethic")," Blockchain leverages ",(0,o.kt)("inlineCode",{parentName:"p"},"Sharding")," to outperform the exiting blockchains using shards called: ",(0,o.kt)("inlineCode",{parentName:"p"},"subsets")," and BeaconChain Explorer displays the entire transactions across subsets.\nSo, users can overcome the overhead of searching in each shard."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"To better understand about Beacon Chain Explorer one need to first have overview the some basic concepts below: "),(0,o.kt)("h3",{id:"slot"},"Slot"),(0,o.kt)("p",null,"It is the time interval for a slot. We can explicitly give any time interval based on our testnet/mainnet environmnent."),(0,o.kt)("p",null,"A slot is responsible for transaction being added to the Beacon Chain and shards. ",(0,o.kt)("a",{parentName:"p",href:"/learn/sharding/beacon-chain#slot"},"See Slot")),(0,o.kt)("h3",{id:"epoch"},"Epoch"),(0,o.kt)("p",null,"It is an time interval within Archethic network for the Beacon chain subsets.\nOne epoch maybe having many slots based on slot timer interval.\nAt each epoch a new transaction is emitter to have a summary of the entire epoch."),(0,o.kt)("p",null,"Epoch interval may differ between mainnet, testnet or development. For instance mainnet epoch interval is daily while testnet for now is each minute to ease the integration and simulation of the network."),(0,o.kt)("p",null,"So in this time interval beacon transactions are sealing the transaction in the current beacon summary transaction and replicates the transactions to other nodes."),(0,o.kt)("h3",{id:"subset"},"Subset"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Archethic")," Blockchain have 256 subsets, from 00 to FF ","[0-255]"," (two nimbles) as the byte capacity and the first byte of the transaction."),(0,o.kt)("h2",{id:"process-to-get-transaction-notifications"},"Process to get transaction notifications"),(0,o.kt)("p",null,"Beacon Chain will store the transactions in slots and at the beacon summary time all those transactions are summarized and will be replicated among the beacon storage nodes which are elected are storage nodes."),(0,o.kt)("p",null,"The day 1 will be the next beacon summary date from the first node enrollment date, which means, if the first node joins on ",(0,o.kt)("inlineCode",{parentName:"p"},"02/11/2021 10:00:00"),", the beacon chain date to pull will be ",(0,o.kt)("inlineCode",{parentName:"p"},"03/11/2021 00:00:00")),(0,o.kt)("p",null,"The explorer expose then a pagination based on date, since we can easily reproduce the addresses through a deterministic\naddress generation based on date."),(0,o.kt)("p",null,"So from the ",(0,o.kt)("inlineCode",{parentName:"p"},"day 1")," until now, we can offer pagination over the beacon summaries."),(0,o.kt)("p",null,"Because we are able to have a reproducible storage node election algorithm we can fetch data for a give date\nfor the right nodes."),(0,o.kt)("h2",{id:"how-to-get-transactions-in-realtime"},"How to get transactions in realtime"),(0,o.kt)("p",null,"When a client is displaying the beacon chain explorer, a request is sent to the BeaconChain subset in charge of the current slot, to subscribe notifications about transactions replications."),(0,o.kt)("p",null,"On the BeaconChain, once a transaction is replicated a subset will enlist it for the next slot to be persisted."),(0,o.kt)("p",null,"Then we have the capability to notify subscribed clients (aka explorer nodes) the transaction completion."),(0,o.kt)("p",null,"But because Archethic is using a rotating sharding implementation, the nodes involved for a given slot will change over the time, therefore behind the scenes the explorer will subscribe for each new slot to have the latest transactions in a soft real time fashion."),(0,o.kt)(i.G,{chart:"graph TD\n    A[Explorer] --\x3e|Subscribe to updates| B{BeaconChains}\n    B --\x3eD[Subset 0]\n    B --\x3eE[Subset 1]\n    B --\x3eF[Subset 2]\n    F --\x3e|Notify new transaction|A\n    \n    X[Transaction Validator] --\x3e|Attest transaction|F",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);