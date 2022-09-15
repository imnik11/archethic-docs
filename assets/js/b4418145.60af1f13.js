"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5855],{5488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));a(1839);const l={id:"ledger-wallet",title:"Ledger wallet"},r="Introduction",o={unversionedId:"build/clients/ledger-wallet",id:"build/clients/ledger-wallet",title:"Ledger wallet",description:"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets.",source:"@site/docs/build/clients/ledger-wallet.md",sourceDirName:"build/clients",slug:"/build/clients/ledger-wallet",permalink:"/archethic-docs/build/clients/ledger-wallet",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256837,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"ledger-wallet",title:"Ledger wallet"},sidebar:"docs",previous:{title:"Archethic's wallet access",permalink:"/archethic-docs/build/clients/wallet-access"},next:{title:"Ledger Application API",permalink:"/archethic-docs/build/clients/ledger-wallet/api"}},s={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Instruction",id:"installation-instruction",level:2},{value:"Testing",id:"testing",level:2},{value:"Demo",id:"demo",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets."),(0,n.kt)("p",null,"Types of software wallets include web (or crypto exchange) wallets, mobile wallets, and desktop wallets. A hardware wallet is a physical device that secures access to your cryptos offline (",(0,n.kt)("a",{parentName:"p",href:"https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-wallet/#:~:text=There%20are%20two%20basic%20types,access%20to%20your%20cryptos%20offline."},"source"),"). This guide explains interaction and testing of hardware wallet, specifically the Ledger Device (Nano S) with archethic testnet."),(0,n.kt)("p",null,"A Ledger Device is a hardware root of trust based wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/hlFqBsS.png",alt:null})),(0,n.kt)("p",null,"As given in the figure, there are 3 important components inorder to support ledger device for a given blockchain."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bolos Application\nThis application is written in C and resides on the physical Ledger device. For Archethic's blockchain, this can be found on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger"},"Archethic's github")," and the functional documentation for the app can be found on the official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-docs/blob/docusaurus/development/wallets/hardware/ledger/archethic_bolos_app.md"},"docs repository"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Companion App\nThis is the application which acts like a bridge of communication between user/blockchain and the Bolos application mentioned above. For Archethic's blockchain, this is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA (CLI)")," and Flutter based ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic_wallet"},"Wallet (GUI)"),".\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remote backend\nThis is the node which accepts data (signed transactions) from the Companion app mentioned above inorder to include it into the blockchain. For Archethic's blockchain, it is the testnet node. Once transaction is published, the data can be verified on ",(0,n.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/explorer"},"archethic.net"),"."))),(0,n.kt)("h2",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"This guide will help you to connect your Ledger device to ALCA, dedicated Command Line Interface (CLI). ALCA (Archethic Ledger CLI App) enables you to Send and Receive UCOs on Archethic Testnet with the Ledger Device."),(0,n.kt)("p",null,"Soon, ALCA will be replaced by Archethic's Wallet, which is GUI-based, thus enabling non-tech users to experiment with Archethic's testnet."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("p",{parentName:"admonition"},"This is a developer guide and not for general public. This guide assumes the reader has a prior knowledge of ArcEthic and Ledger Ecosystem.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A more general public guide will soon be released once security audit for developer release is done and GUI support for Ledger Device is added to current Archethic's Wallet (Mobile + Desktop)")),(0,n.kt)("p",null,"Before You Start, Make Sure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You\u2019ve ",(0,n.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793?docs=true"},"initialized")," your Ledger Device."),(0,n.kt)("li",{parentName:"ul"},"The latest firmware is ",(0,n.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true"},"installed")," (Ledger Nano S)."),(0,n.kt)("li",{parentName:"ul"},"Archethic Bolos App is ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-ledger"},"loaded")," on Ledger (Tested with Nano S only)."),(0,n.kt)("li",{parentName:"ul"},"Install the latest version of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA"),"."),(0,n.kt)("li",{parentName:"ul"},"Nodejs (v14.0+)")),(0,n.kt)("h2",{id:"installation-instruction"},"Installation Instruction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clone the repository from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app.git"},"github")),(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install")," from root folder of the project"),(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"npm link")),(0,n.kt)("li",{parentName:"ul"},"Use it as ledger_cli (commands)")),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"From Terminal use it as ",(0,n.kt)("inlineCode",{parentName:"p"},"ledger_cli (about | getAppVersion | getPublicKey | getArchAddress | sendTxn")),(0,n.kt)("h2",{id:"demo"},"Demo"),(0,n.kt)("p",null,"The demo shows various screens a user will be shown for getting origin public key, onchain wallet address and performing signature on transaction involving single UCO transfer at a time between 2 parties."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/gk8Q9Ku.gif",alt:null})))}h.isMDXComponent=!0}}]);