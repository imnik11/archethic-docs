"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9254],{8616:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>M,default:()=>o,frontMatter:()=>c,metadata:()=>I,toc:()=>g});var a=t(7462),n=(t(7294),t(3905));t(1839);const c={id:"keychain",title:"Keychain"},M=void 0,I={unversionedId:"learn/decentralized-id/keychain",id:"learn/decentralized-id/keychain",title:"Keychain",description:"Archethic's keychain is new concept to make wallet accessible, configurable and interoperable with several service providers and why not multi chains.",source:"@site/docs/learn/decentralized-id/keychain.md",sourceDirName:"learn/decentralized-id",slug:"/learn/decentralized-id/keychain",permalink:"/archethic-docs/learn/decentralized-id/keychain",draft:!1,tags:[],version:"current",lastUpdatedAt:1664885482,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{id:"keychain",title:"Keychain"},sidebar:"docs",previous:{title:"Decentralized Identity",permalink:"/archethic-docs/learn/decentralized-id"},next:{title:"Tokens",permalink:"/archethic-docs/learn/token"}},d={},g=[{value:"Key generation",id:"key-generation",level:2},{value:"End to end encryption",id:"end-to-end-encryption",level:2},{value:"Standard compliance",id:"standard-compliance",level:2},{value:"Customization",id:"customization",level:2}],l={toc:g};function o(e){let{components:i,...c}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,c,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic's keychain is new concept to make wallet accessible, configurable and interoperable with several service providers and why not multi chains."),(0,n.kt)("p",null,"It describes wallet which is stored encrypted on chain, as only you and the authorized access or person you allowed, to be able to decrypt and build transactions from it."),(0,n.kt)("h2",{id:"key-generation"},"Key generation"),(0,n.kt)("p",null,"Technically speaking, this wallet - also referenced as ",(0,n.kt)("inlineCode",{parentName:"p"},"Decentralized Identity")," - is made up of randomly generated ",(0,n.kt)("inlineCode",{parentName:"p"},"seed")," (root key) from which it's possible to generate all keys according to a path of derivation. "),(0,n.kt)("p",null,"So for any acess to a service or an application, a key will be generated on the fly from the ",(0,n.kt)("inlineCode",{parentName:"p"},"seed")," (root key) and the first public key associated with a service or an application."),(0,n.kt)("p",null,"Thus allowing creating an infinite number of identities without even having to store related keys. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(4449).Z,width:"372",height:"259"})),(0,n.kt)("h2",{id:"end-to-end-encryption"},"End to end encryption"),(0,n.kt)("p",null,"While this wallet or keychain being on-chain, it still remains secure as no other party (at least non authorized) can access with service keys. "),(0,n.kt)("p",null,"This is possible as we are using end to end encryption and elliptic curve cryptography."),(0,n.kt)("p",null,"Each keychain/wallet generated is embedded into a transaction encrypted using an AES key itself encrypted with a list of authorized keys or authenticated access (biometric, smartphone, USB, etc.)"),(0,n.kt)("p",null,"Once generated, we also create transactions for the access of this keychain.\nSo in other words, each access have its own transaction chain, where the keychain's location is encrypted as well."),(0,n.kt)("p",null,"Then in order to retrieve or access your keychain, your authentication method should retrieve its transaction chain, then decrypt the keychain's location, download the keychain transaction and finally decrypt the keychain with the right AES key."),(0,n.kt)("p",null,"This avoids disclosure of critical information and prevents unauthorized access."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(3719).Z,width:"767",height:"362"})),(0,n.kt)("h2",{id:"standard-compliance"},"Standard compliance"),(0,n.kt)("p",null,"Archethic decentralized identity and keychain concepts is also compliant with industry standard in the field of online and digital identity."),(0,n.kt)("p",null,"Then once created, the keychain embedded on-chain a representation of a ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"W3C DID (Decentralized Identitifier)")," document which help the discovery of your key materials."),(0,n.kt)("p",null,"It displays a JSON message with the list of public key you own and you allow other parties to interact with, such as your main Archethic public key or your Amazon public for example."),(0,n.kt)("p",null,"This coupled with ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"verifiable credentials")," and ",(0,n.kt)("a",{parentName:"p",href:"https://webauthn.io/"},"WebAuthn (Website authentication without password)")," make the complete usage of decentralized identity possible."),(0,n.kt)("h2",{id:"customization"},"Customization"),(0,n.kt)("p",null,"Because this wallet should be your digital identity security, we can customized the services and way the keys are generated."),(0,n.kt)("p",null,"Each service in the keychain is joined with other properties customizable:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"derivation path: this will inform how the key will be generated. For example, the default one is ",(0,n.kt)("inlineCode",{parentName:"li"},"m/650'/0/0")," informing we are using Archethic derivation method (",(0,n.kt)("inlineCode",{parentName:"li"},"650")," instead of the usual BIP44) and then the ",(0,n.kt)("inlineCode",{parentName:"li"},"0/0")," indicates the first account and the first key of the chain.")),(0,n.kt)("p",null,"But nothing prevent to add something like: ",(0,n.kt)("inlineCode",{parentName:"p"},"m/650'/Amazon/0")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"m/650'/JohnDoeUCO@!/0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"curve: this indicates during the derivate key which elliptic curve we want to use. (Ed25519, NIST, Bitcoin curve)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"hash algorithm: this is used in the transaction address generation from the key produced, by default it's associated to ",(0,n.kt)("inlineCode",{parentName:"p"},"sha256")," but if you want higher security you could use something like ",(0,n.kt)("inlineCode",{parentName:"p"},"sha3-512")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"blake2b")))))}o.isMDXComponent=!0},3719:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/keychain-access-wallet-780a9e51e7490fb38fe1171ddd8e028f.svg"},4449:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM3MS41NTA0NzYwNzQyMTg3NSAyNTguNTYyODA1MTc1NzgxMjUiIHdpZHRoPSIzNzEuNTUwNDc2MDc0MjE4NzUiIGhlaWdodD0iMjU4LjU2MjgwNTE3NTc4MTI1Ij4KICA8IS0tIHN2Zy1zb3VyY2U6ZXhjYWxpZHJhdyAtLT4KICAKICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgQGZvbnQtZmFjZSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICJWaXJnaWwiOwogICAgICAgIHNyYzogdXJsKCJodHRwczovL2V4Y2FsaWRyYXcuY29tL1ZpcmdpbC53b2ZmMiIpOwogICAgICB9CiAgICAgIEBmb250LWZhY2UgewogICAgICAgIGZvbnQtZmFtaWx5OiAiQ2FzY2FkaWEiOwogICAgICAgIHNyYzogdXJsKCJodHRwczovL2V4Y2FsaWRyYXcuY29tL0Nhc2NhZGlhLndvZmYyIik7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgMTApIHJvdGF0ZSgwIDQ5IDI0Ljc2NTY4NjAzNTE1NjI1KSI+PHBhdGggZD0iTS0xLjQ3IDAuNDkgQzMwLjgxIC0xLjc0LCA2MS44MyAtMS41NywgOTguMDUgLTEuMjIgTS0wLjI5IC0wLjQzIEMzMS4wNyAwLjMzLCA2My43NCAtMC4zNCwgOTguNSAwLjA1IE05Ni42IDAuOTYgQzk2LjQgMTEuNTgsIDEwMC4xNCAyMi40MywgOTcuODMgNTAuOSBNOTguMDYgMC4yNiBDOTguNSAxMC4yNywgOTguMzYgMjEuMjEsIDk3LjY3IDUwLjIyIE05Ny4yOSA0Ny44MiBDNjguODcgNTAuMSwgMzcuNjkgNTAuNjEsIDEuMDggNTAuMTIgTTk3LjggNDkuNTEgQzYwLjIzIDQ4Ljc4LCAyMi4wNyA1MC4zMiwgMC45MSA0OS44OSBNLTEuNDggNDguNjQgQy0wLjQ5IDMyLjg1LCAxLjA4IDE0LjcsIC0wLjM2IDEuODUgTTAuMzQgNDkuMjMgQy0wLjYxIDM3LjgxLCAtMC4xIDI4LjYzLCAwLjM5IDAuMTkiIHN0cm9rZT0iIzVmM2RjNCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDIyLjI2NTY4NjAzNTE1NjI1KSByb3RhdGUoMCA0NCAxMi41KSI+PHRleHQgeD0iNDQiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjNWYzZGM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5TZWVkPC90ZXh0PjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4LjQ5MjAwNDM5NDUzMTI1IDYzLjU2MjE5NDgyNDIxODc1KSByb3RhdGUoMCAtMC40MzE3NTc1MzQ0ODE1NjIzIDg4LjE0OTE4NjA4NDY4MDI1KSI+PHBhdGggZD0iTTAgMCBDLTAuMTQgMjkuMzgsIC0wLjcyIDE0Ni45MiwgLTAuODYgMTc2LjMgTTAgMCBDLTAuMTQgMjkuMzgsIC0wLjcyIDE0Ni45MiwgLTAuODYgMTc2LjMiIHN0cm9rZT0iIzVmM2RjNCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LjI2OTQwOTE3OTY4NzUgMTA3Ljc0MDQ3ODUxNTYyNSkgcm90YXRlKDAgNjEuMzA4MjYyOTg0MDgyMDkgMC4yMDY2MjIwNDU5NjUxOTAxOCkiPjxwYXRoIGQ9Ik0tMC41OSAwLjgxIEMyMC4wMyAwLjc4LCAxMDIuNzIgLTAuNDEsIDEyMy4yIC0wLjQ3IE0xLjMxIDAuMTkgQzIxLjg5IDAuMzUsIDEwMi42OCAxLjEzLCAxMjIuNzMgMC44MiIgc3Ryb2tlPSIjNWYzZGM0IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuMjY5NDA5MTc5Njg3NSAxMDcuNzQwNDc4NTE1NjI1KSByb3RhdGUoMCA2MS4zMDgyNjI5ODQwODIwOSAwLjIwNjYyMjA0NTk2NTE5MDE4KSI+PHBhdGggZD0iTTk1LjkxIDEyLjYzIEMxMDEuMDYgOC42NywgMTA5Ljg1IDQuMDEsIDEyMS44NiAtMC44OCBNOTQuNiAxMC4yOCBDMTAxLjkzIDkuMjEsIDEwOC4xNiA1LjYzLCAxMjIuOTYgMS4zNyIgc3Ryb2tlPSIjNWYzZGM0IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuMjY5NDA5MTc5Njg3NSAxMDcuNzQwNDc4NTE1NjI1KSByb3RhdGUoMCA2MS4zMDgyNjI5ODQwODIwOSAwLjIwNjYyMjA0NTk2NTE5MDE4KSI+PHBhdGggZD0iTTk1Ljg5IC03LjkgQzEwMSAtNi41NiwgMTA5Ljc5IC01LjkxLCAxMjEuODYgLTAuODggTTk0LjU4IC0xMC4yNCBDMTAxLjc0IC02LjQxLCAxMDcuOTggLTUuMDksIDEyMi45NiAxLjM3IiBzdHJva2U9IiM1ZjNkYzQiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Mi41MTgyNDk1MTE3MTg3NSAxNzAuMjY4NTI0MTY5OTIxODgpIHJvdGF0ZSgwIDYxLjU1MzkyODE1MDI0NTk1IDAuMTIyNDM3NjEyMzM5ODY1NjEpIj48cGF0aCBkPSJNLTAuOTggMC44OCBDMTkuMTkgMC43NywgMTAwLjk4IC0wLjM2LCAxMjEuNjkgLTAuNjQgTTAuNzEgMC4zIEMyMS4yMiAwLjM0LCAxMDMuNyAwLjU5LCAxMjQuMDggMC41NiIgc3Ryb2tlPSIjNWYzZGM0IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjIuNTE4MjQ5NTExNzE4NzUgMTcwLjI2ODUyNDE2OTkyMTg4KSByb3RhdGUoMCA2MS41NTM5MjgxNTAyNDU5NSAwLjEyMjQzNzYxMjMzOTg2NTYxKSI+PHBhdGggZD0iTTk3LjM2IDkuNzggQzEwNC45MSA4Ljk4LCAxMTQuNzkgMy45MywgMTI1Ljc2IDAuMzQgTTk1LjYyIDExLjM4IEMxMDUuNDIgOC4wNiwgMTE1LjAxIDQsIDEyMy43OSAxLjU1IiBzdHJva2U9IiM1ZjNkYzQiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Mi41MTgyNDk1MTE3MTg3NSAxNzAuMjY4NTI0MTY5OTIxODgpIHJvdGF0ZSgwIDYxLjU1MzkyODE1MDI0NTk1IDAuMTIyNDM3NjEyMzM5ODY1NjEpIj48cGF0aCBkPSJNOTcuMzggLTEwLjc0IEMxMDQuOTMgLTQuMTksIDExNC44MSAtMS44OSwgMTI1Ljc2IDAuMzQgTTk1LjY1IC05LjE0IEMxMDUuNjEgLTUuNTgsIDExNS4xOSAtMi43NiwgMTIzLjc5IDEuNTUiIHN0cm9rZT0iIzVmM2RjNCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTQuNTUxMDg2NDI1NzgxMjUgOTMuMzAxODE4ODQ3NjU2MjUpIHJvdGF0ZSgwIDU5LjUgMTIuNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMzY0ZmM3IiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPldhbGxldCBVQ08xPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTMuMDQyMzU4Mzk4NDM3NSAxNTYuNjYyMjkyNDgwNDY4NzUpIHJvdGF0ZSgwIDY4LjUgMTIuNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMmI4YTNlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPldhbGxldCBCaXRjb2luPC90ZXh0PjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4LjMzMzY3OTE5OTIxODc1IDIzNy41NzYwMTkyODcxMDkzOCkgcm90YXRlKDAgNjYuNDAxMDMzMTUzOTQzNzMgMC41MzYyMTQ3Mzc5ODQ1MjI2KSI+PHBhdGggZD0iTTAuOTYgMC45MSBDMjMgMS4wMSwgMTEwLjU2IDEuMzgsIDEzMi44IDEuMzcgTTAuMDEgMC4zNSBDMjEuOCAwLjA0LCAxMDkuMjQgLTAuMDMsIDEzMS42IC0wLjMiIHN0cm9rZT0iIzVmM2RjNCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4LjMzMzY3OTE5OTIxODc1IDIzNy41NzYwMTkyODcxMDkzOCkgcm90YXRlKDAgNjYuNDAxMDMzMTUzOTQzNzMgMC41MzYyMTQ3Mzc5ODQ1MjI2KSI+PHBhdGggZD0iTTEwNC45OSA5LjM0IEMxMTQuNTQgOC4xLCAxMjMuNDIgMS41NCwgMTMxLjI2IDAuMzMgTTEwMi42NSAxMC43IEMxMTIuOTkgNi44NiwgMTE5LjggMi43NiwgMTMxLjY2IC0wLjQxIiBzdHJva2U9IiM1ZjNkYzQiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OC4zMzM2NzkxOTkyMTg3NSAyMzcuNTc2MDE5Mjg3MTA5MzgpIHJvdGF0ZSgwIDY2LjQwMTAzMzE1Mzk0MzczIDAuNTM2MjE0NzM3OTg0NTIyNikiPjxwYXRoIGQ9Ik0xMDQuODcgLTExLjE4IEMxMTQuNiAtNS4zMywgMTIzLjUxIC00LjgsIDEzMS4yNiAwLjMzIE0xMDIuNTMgLTkuODIgQzExMi44OCAtNy40NSwgMTE5LjcyIC01LjM0LCAxMzEuNjYgLTAuNDEiIHN0cm9rZT0iIzVmM2RjNCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTguNTUwNDc2MDc0MjE4NzUgMjIzLjU2MjgwNTE3NTc4MTI1KSByb3RhdGUoMCA3MS41IDEyLjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iI2Q5NDgwZiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5XYWxsZXQgQW1hem9uPC90ZXh0PjwvZz48L3N2Zz4="}}]);