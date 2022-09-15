"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6518],{2658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));a(1839);const i={id:"memory-table",title:"OracleChain Memory Tables"},l=void 0,o={unversionedId:"build/core/oracle-chain/memory-table",id:"build/core/oracle-chain/memory-table",title:"OracleChain Memory Tables",description:"OracleChain component provides scheduler and services to maintain transaction chain and real world data integration.",source:"@site/docs/build/core/oracle-chain/mem_table.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/memory-table",permalink:"/archethic-docs/build/core/oracle-chain/memory-table",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256837,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"memory-table",title:"OracleChain Memory Tables"},sidebar:"docs",previous:{title:"OracleChain Scheduler",permalink:"/archethic-docs/build/core/oracle-chain/scheduler"},next:{title:"BeaconChain",permalink:"/archethic-docs/build/core/beacon-chain"}},c={},d=[],m={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"OracleChain component provides ",(0,n.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/scheduler"},"scheduler")," and ",(0,n.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/service"},"services")," to maintain transaction chain and real world data integration."),(0,n.kt)("p",null,"But we need a way to access quickly this information for better computation latency."),(0,n.kt)("p",null,"For this purpose, the OracleChain service maintains a memory table using ETS to hold the information according to their date."),(0,n.kt)("p",null,"It represented in that way:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Data")))),(0,n.kt)("p",null,"For example for the UCO service we may have:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1622801400"),(0,n.kt)("td",{parentName:"tr",align:null},"UCO"),(0,n.kt)("td",{parentName:"tr",align:null},'%{ "eur" => 0.02 }')))),(0,n.kt)("p",null,"The table is loading after each oracle or oracle summary transaction and during the bootstrap for faster computation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The transaction's fee algorithm is using this cached information to provide this computation quickly")))}s.isMDXComponent=!0}}]);