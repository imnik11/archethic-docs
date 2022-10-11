"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2491],{6944:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>s,default:()=>b,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var o=a(7462),l=a(7294),i=a(3905);a(1839);const n={id:"validation-stamp",title:"ValidationStamp",hide_table_of_contents:!1},s=void 0,d={unversionedId:"build/api/schema/objects/validation-stamp",id:"build/api/schema/objects/validation-stamp",title:"ValidationStamp",description:"[ValidationStamp] represents the validation performs by the coordinator",source:"@site/docs/build/api/schema/objects/validation-stamp.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/validation-stamp",permalink:"/archethic-docs/build/api/schema/objects/validation-stamp",draft:!1,tags:[],version:"current",lastUpdatedAt:1665513042,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"validation-stamp",title:"ValidationStamp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"UnspentOutput",permalink:"/archethic-docs/build/api/schema/objects/unspent-output"},next:{title:"balance",permalink:"/archethic-docs/build/api/schema/queries/balance"}},r={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>ledgerOperations</b></code><Bullet /><code>LedgerOperations</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-validationstampbledgeroperationsbcodeledgeroperations-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>proofOfIntegrity</b></code><Bullet /><code>Hash</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbproofofintegritybcodehash-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>proofOfWork</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbproofofworkbcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>signature</b></code><Bullet /><code>Hex</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbsignaturebcodehex-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbtimestampbcodetimestamp-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:c,Bullet:p,SpecifiedBy:m,Badge:h};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"[ValidationStamp]"," represents the validation performs by the coordinator\nIt includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Proof of work: Public key matching the origin signature"),(0,i.kt)("li",{parentName:"ul"},"Proof of integrity: Hash of the previous proof of integrity and the transaction"),(0,i.kt)("li",{parentName:"ul"},"Ledger operations: All the operations performed by the transaction"),(0,i.kt)("li",{parentName:"ul"},"Signature: Coordinator signature of the stamp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidationStamp {\n  ledgerOperations: LedgerOperations\n  proofOfIntegrity: Hash\n  proofOfWork: PublicKey\n  signature: Hex\n  timestamp: Timestamp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationstampbledgeroperationsbcodeledgeroperations-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,i.kt)("b",null,"ledgerOperations"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ledger-operations"},(0,i.kt)("inlineCode",{parentName:"a"},"LedgerOperations"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationstampbproofofintegritybcodehash-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,i.kt)("b",null,"proofOfIntegrity"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hash"},(0,i.kt)("inlineCode",{parentName:"a"},"Hash"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationstampbproofofworkbcodepublickey-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,i.kt)("b",null,"proofOfWork"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationstampbsignaturebcodehex-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,i.kt)("b",null,"signature"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hex"},(0,i.kt)("inlineCode",{parentName:"a"},"Hex"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationstampbtimestampbcodetimestamp-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,i.kt)("b",null,"timestamp"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);