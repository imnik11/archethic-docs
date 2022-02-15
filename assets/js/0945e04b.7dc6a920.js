"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[611],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65484:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={id:"api",title:"Ledger Application API"},s=void 0,p={unversionedId:"build/clients/ledger-wallet/api",id:"build/clients/ledger-wallet/api",title:"Ledger Application API",description:"Reference Repository:",source:"@site/docs/build/clients/ledger-wallet/api.md",sourceDirName:"build/clients/ledger-wallet",slug:"/build/clients/ledger-wallet/api",permalink:"/archethic-docs/build/clients/ledger-wallet/api",tags:[],version:"current",lastUpdatedAt:1644954731,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"api",title:"Ledger Application API"},sidebar:"docs",previous:{title:"Ledger wallet",permalink:"/archethic-docs/build/clients/ledger-wallet"},next:{title:"Contributing",permalink:"/archethic-docs/contributing"}},d=[{value:"GET VERSION",id:"get-version",children:[],level:2},{value:"GET DEVICE ORIGIN PUBLIC KEY",id:"get-device-origin-public-key",children:[],level:2},{value:"GET ARCHETHIC ADDRESS",id:"get-archethic-address",children:[],level:2},{value:"SIGN TRANSACTION",id:"sign-transaction",children:[],level:2}],c={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reference Repository:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger/tree/master/src"},"ArchEthic BOLOS App")))),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h2",{id:"get-version"},"GET VERSION"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getVersion.c"},"Source File: getVersion.c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Get version returns the version of Device Application on Ledger"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Function Signature\n",(0,r.kt)("strong",{parentName:"p"},"handleGetVersion(uint8_t p1, uint8_t p2, uint8_t ","*","dataBuffer, uint16_t dataLength, volatile unsigned int ","*","flags)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"p1")," -> APDU Parameter (Not Concerned in our context)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"p2")," ->  APDU Parameter (Not Concerned in our context)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"*","dataBuffer")," -> NULL (Not required for getting version)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dataLength")," -> Length of the dataBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"*","flags")," -> ",(0,r.kt)("strong",{parentName:"p"},"Modes (respond immediately(sync), process and respond(async))")),(0,r.kt)("p",{parentName:"li"},"There is a general buffer ",(0,r.kt)("strong",{parentName:"p"},"G_io_apdu_buffer")," (already in ledger SDK) for both input and output, we copy version to this buffer from ",(0,r.kt)("strong",{parentName:"p"},"APPVERSION")," which is defined in Makefile. As we only need integer, so we subtract '0' from the APPVERSION","[0 | 2 | 4]",".\nAPPVERSION and APPNAME are defined in the makefile of the project."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"io_exchange_with_code(SW_OK, 3)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- It adds status at the end of the Buffer (G_io_apdu_buffer).\n- **SW_OK** (0x9000) adds status code at the end of the buffer.\n- 3 is the length of the data in the buffer. \n")))))),(0,r.kt)("h2",{id:"get-device-origin-public-key"},"GET DEVICE ORIGIN PUBLIC KEY"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getPublicKey.c"},"Source File: getPublicKey.c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gets the hardware(device origin) public key from ledger device."))),(0,r.kt)("p",null,"It returns the public key derived from the hardware ledger device seed (",(0,r.kt)("strong",{parentName:"p"},"HARDWARE SEED"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Function Signature\n",(0,r.kt)("strong",{parentName:"li"},"handleGetPublicKey(uint8_t p1, uint8_t p2, uint8_t ","*","dataBuffer, uint16_t dataLength, volatile unsigned int ","*","flags)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"*","flags |= IO_ASYNCH_REPLY;"),"\nThis is added to get response from the user of HID. So needed to be set to the ASYNC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getOriginPublicKey(cx_ecfp_public_key_t ","*","publicKey)"),"\nThis calls ",(0,r.kt)("strong",null,"deriveArchethicKeyPair")," and return it.\n",(0,r.kt)("inlineCode",{parentName:"li"},"deriveArchEthicKeyPair(CX_CURVE_SECP256K1, 650, 0xffff, 0, NULL, 0, NULL, publicKey);"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"- First Param** is the curve type which is fixed in our case.\n- Second Param** is the coin type which is defined for the [UCO Token]()\n- 3rd Param** is for the account which account to get,  which is defined as: \n       - $account =$ Depends on the intended use of the key.\n       - Currently fixed values: 0xFFFF for $o_{key}$, 0x0000 for a simple $w_{key}$\n- 4th Param** is address index \n- 5th Param** is masterSeed which is set to NULL because we need the device origin master seed.\n- 6th Param** is the master seed Length\n- 7th param** is the structure to store public key\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Function Signature\n",(0,r.kt)("strong",{parentName:"p"},"deriveArchEthicKeyPair(cx_curve_t curve, uint32_t coin_type, uint32_t account, uint32_t address_index, uint8_t ","*","masterSeed, uint8_t masterSeedLen, cx_ecfp_private_key_t ","*","privateKey, cx_ecfp_public_key_t ","*","publicKey)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This function first checks the curve type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cx_curve_t"),", which sets the mode for the which it needs to perform operation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next depending upon the account type as defined in the specification (0xffff | 0x0000) it derives the private key from the masterseed."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When the account type is ",(0,r.kt)("inlineCode",{parentName:"li"},"0xffff")," then ",(0,r.kt)("strong",{parentName:"li"},"os_perso_derive_node_with_seed()")," function is called which derives the key from the ledger hardware origin key."),(0,r.kt)("li",{parentName:"ul"},"When account type is ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0000")," then it derives the rawPrivateKey from the from ",(0,r.kt)("strong",{parentName:"li"},"archethic_derive_with_seed_key()")," function which derives the key as per provided params."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next it checks if there is a ",(0,r.kt)("strong",{parentName:"p"},"publicKey")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If that is the case then it derives the corresponding public key and generates from the walletPrivateKey"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there is ",(0,r.kt)("strong",{parentName:"p"},"privateKey")," the it simple returns the ",(0,r.kt)("strong",{parentName:"p"},"privateKey"),".\n"))))),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As Public Key is in format: ",(0,r.kt)("strong",{parentName:"p"},"[curve_type, device_origin, 04xy]")),(0,r.kt)("p",{parentName:"div"},"02 -> Curve Type 04 -> Device Origin 04 -> uncompressed "),(0,r.kt)("p",{parentName:"div"},"X -> 52e77c79bea0f84e2d9c40356932fb0dd31688c23d6b6e9ac99d2869dc407692"),(0,r.kt)("p",{parentName:"div"},"Y -> 1e731fb84d0a094c6273fffed68147c381a273c83868cdeb9b81c7ec790c6d38"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since raw private key is in ",(0,r.kt)("strong",{parentName:"p"},"bytes")," it needs to be converted which is done by the function cx_ecfp_init_private_key(curve, rawPrivateKey, 32, &walletPrivateKey)."))),(0,r.kt)("h2",{id:"get-archethic-address"},"GET ARCHETHIC ADDRESS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getAddress.c"},"Source File: getAddress.c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Return the archethic address from the ledger including curve type in the start"))),(0,r.kt)("p",null,"INS = 04\nLc = Data Length\naddress_index = 4 bytes (bip44)\newk",(0,r.kt)("sub",null,"aes")," = encrypted wallet key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Function Signature\n",(0,r.kt)("strong",{parentName:"li"},"handleGetAddress(uint8_t p1, uint8_t p2, uint8_t ","*","dataBuffer, uint16_t dataLength, volatile unsigned int ","*","flags)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First 4 bytes are address index hence we store then in ",(0,r.kt)("inlineCode",{parentName:"li"},"address_index")," from the data buffer (Converting them according to thier byte ordering.)"),(0,r.kt)("li",{parentName:"ul"},"We performECDH to get the secret pointX on the curve,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"performECDH(uint8_t ","*","ephPublicKey, uint8_t ephPublicKeySize, uint8_t ","*","ecdhPointX)")),(0,r.kt)("li",{parentName:"ul"},"This derives an archethic keypair first with function ",(0,r.kt)("inlineCode",{parentName:"li"},"deriveArchEthicKeyPair")," and gets originPrivateKey"),(0,r.kt)("li",{parentName:"ul"},"The performs ecdh with function ",(0,r.kt)("inlineCode",{parentName:"li"},"cx_ecdh")," with the originPrivateKey and takes publickey and finds the ecdhPointX "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cx_ecdh(&originPrivateKey, CX_ECDH_X, ephPublicKey, ephPublicKeySize, ecdhPointX, 32);")),(0,r.kt)("li",{parentName:"ul"},"publicKey is taken from the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataBuffer")))),(0,r.kt)("li",{parentName:"ul"},"Now we decrypt the wallet with the ecdhPointX ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"decryptWallet(ecdhPointX, sizeof(ecdhPointX), dataBuffer, dataLength, g_wallet.encodedWallet, &g_wallet.walletLen);")),(0,r.kt)("li",{parentName:"ul"},"Since we have moved pointer we now only have ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_tag")," 16 bytes and enc($wk_{aes}$) 32bytes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Inside Decrypt wallet we first calculate the ",(0,r.kt)("inlineCode",{parentName:"li"},"aes_key_iv_tag")," from the ecdhPointX by double hashing it from the sha512 function $sha512(sha512(ecdh","_","secret\\ or\\ PointX))$. "),(0,r.kt)("li",{parentName:"ul"},"we get 3 parts from above double hashing in 64 bytes which are",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aes_key")," ","[32bytes]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iv")," ","[16bytes]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auth_seed")," ","[16bytes]"))),(0,r.kt)("li",{parentName:"ul"},"Now we get sha256 has of auth_seed in ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_key")),(0,r.kt)("li",{parentName:"ul"},"And now we do hmac(auth",(0,r.kt)("em",{parentName:"li"},"key , enc($wk"),"{aes}$)) and get ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_tag")," which are first 16 bytes from hmac result. $Rest\\ 16\\ bytes\\ are\\ reserved$"),(0,r.kt)("li",{parentName:"ul"},"Now we compare if auth_tag equals to auth_tag supplied in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataBuffer")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If if doesn't return ",(0,r.kt)("inlineCode",{parentName:"li"},"0xBADDECODE")),(0,r.kt)("li",{parentName:"ul"},"If it does",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Decrypt the wallet and return the ",(0,r.kt)("strong",{parentName:"li"},"encoded wallet")))))))),(0,r.kt)("li",{parentName:"ul"},"Now get the BIP44Paths from the encoded wallet according to specificaton",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"getBIP44Path(address_index, g_wallet.encodedWallet, g_wallet.walletLen, 0, g_bip44_path, &bip44pathlen);")),(0,r.kt)("li",{parentName:"ul"},"This does according to address index which were first 4 bytes of ",(0,r.kt)("inlineCode",{parentName:"li"},"dataBuffer")),(0,r.kt)("li",{parentName:"ul"},"This returns the bip44Path in ",(0,r.kt)("inlineCode",{parentName:"li"},"char* string_bip_44")))),(0,r.kt)("li",{parentName:"ul"},"Now Generate Archethic Address from the Encoded Wallet and set as required. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"generateArchEthicAddress(uint8_t hash_type, uint32_t address_index, uint8_t ","*","encoded_wallet, uint8_t ","*","wallet_len, uint32_t sequence_no, uint8_t ","*","address, uint8_t ","*","address_len)")),(0,r.kt)("li",{parentName:"ul"},"For now only support hash_type ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256")),(0,r.kt)("li",{parentName:"ul"},"Returns address in ",(0,r.kt)("inlineCode",{parentName:"li"},"uint8_t *address"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It generates key from the encoded wallet and storesit in ",(0,r.kt)("inlineCode",{parentName:"li"},"cx_ecfp_public_key_t")," structure"),(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"generateKeyFromWallet(address_index, encoded_wallet, wallet_len, sequence_no, &curve_type, NULL, &publicKey)")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Derives Archethic Keypair depending on the supplied params:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"coin_type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"curve")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"address_index")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"publicKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"privateKey"))))))))))))))),(0,r.kt)("h2",{id:"sign-transaction"},"SIGN TRANSACTION"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger/blob/master/src/signHash.c"},"Source File: signHash.c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Returns APDU response as ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction Hash | Public Key | ASN_DER_SIGN")," in success"))),(0,r.kt)("p",null,"INS = 08\naddress_index = 4 bytes (bip44)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Funcion Signature:\n",(0,r.kt)("strong",{parentName:"li"},"handleSignHash(uint8_t p1, uint8_t p2, uint8_t *dataBuffer, uint16_t dataLength, volatile unsigned int ","*","flags)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First 4 bytes are address index hence we store then in ",(0,r.kt)("inlineCode",{parentName:"li"},"address_index")," from the data buffer (Converting them according to thier byte ordering.)"),(0,r.kt)("li",{parentName:"ul"},"Then we check for addresslength ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if %2 == 0 then SHA256 or SHA3_256 and length = 34"),(0,r.kt)("li",{parentName:"ul"},"if %2 == 1 then SHA512 or SHA3_512 and length = 66"))),(0,r.kt)("li",{parentName:"ul"},"We copy the recieverAddress upto the addressLength in previous step to ",(0,r.kt)("inlineCode",{parentName:"li"},"g_tx.recieverAddr")),(0,r.kt)("li",{parentName:"ul"},"Then get next 8 bytes as amount and convert it to big endian",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Then for display convert it to float and set in ",(0,r.kt)("inlineCode",{parentName:"li"},"g_amount")," for display"))),(0,r.kt)("li",{parentName:"ul"},"performECDH to get ecdhPointX ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We performECDH to get the secret pointX on the curve,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"performECDH(uint8_t ","*","ephPublicKey, uint8_t ephPublicKeySize, uint8_t ","*","ecdhPointX)")),(0,r.kt)("li",{parentName:"ul"},"This derives an archethic keypair first with function ",(0,r.kt)("inlineCode",{parentName:"li"},"deriveArchEthicKeyPair")," and gets originPrivateKey"),(0,r.kt)("li",{parentName:"ul"},"The performs ecdh with function ",(0,r.kt)("inlineCode",{parentName:"li"},"cx_ecdh")," with the originPrivateKey and takes publickey and finds the ecdhPointX "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cx_ecdh(&originPrivateKey, CX_ECDH_X, ephPublicKey, ephPublicKeySize, ecdhPointX, 32);")))))),(0,r.kt)("li",{parentName:"ul"},"Now we decrypt the wallet with the ecdhPointX ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"decryptWallet(ecdhPointX, sizeof(ecdhPointX), dataBuffer, dataLength, g_wallet.encodedWallet, &g_wallet.walletLen);")),(0,r.kt)("li",{parentName:"ul"},"Since we have moved pointer we now only have ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_tag")," 16 bytes and enc($wk_{aes}$) 32bytes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Inside Decrypt wallet we first calculate the ",(0,r.kt)("inlineCode",{parentName:"li"},"aes_key_iv_tag")," from the ecdhPointX by double hashing it from the sha512 function $sha512(sha512(ecdh","_","secret\\ or\\ PointX))$. "),(0,r.kt)("li",{parentName:"ul"},"we get 3 parts from above double hashing in 64 bytes which are",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aes_key")," ","[32bytes]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iv")," ","[16bytes]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auth_seed")," ","[16bytes]"))),(0,r.kt)("li",{parentName:"ul"},"Now we get sha256 has of auth_seed in ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_key")),(0,r.kt)("li",{parentName:"ul"},"And now we do hmac(auth",(0,r.kt)("em",{parentName:"li"},"key , enc($wk"),"{aes}$)) and get ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_tag")," which are first 16 bytes from hmac result. $Rest\\ 16\\ bytes\\ are\\ reserved$"),(0,r.kt)("li",{parentName:"ul"},"Now we compare if auth_tag equals to auth_tag supplied in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataBuffer")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If if doesn't return ",(0,r.kt)("inlineCode",{parentName:"li"},"0xBADDECODE")),(0,r.kt)("li",{parentName:"ul"},"If it does",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Decrypt the wallet and return the ",(0,r.kt)("strong",{parentName:"li"},"encoded wallet")))))))))),(0,r.kt)("li",{parentName:"ul"},"Now Generate Archethic Address from the Encoded Wallet and set as required. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"generateArchEthicAddress(uint8_t hash_type, uint32_t address_index, uint8_t ","*","encoded_wallet, uint8_t ","*","wallet_len, uint32_t sequence_no, uint8_t ","*","address, uint8_t ","*","address_len)")),(0,r.kt)("li",{parentName:"ul"},"For now only support hash_type ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256")),(0,r.kt)("li",{parentName:"ul"},"Returns address in ",(0,r.kt)("inlineCode",{parentName:"li"},"uint8_t *address")))),(0,r.kt)("li",{parentName:"ul"},"Now get the BIP44Paths from the encoded wallet according to specificaton",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fn Signature ",(0,r.kt)("strong",{parentName:"li"},"getBIP44Path(address_index, g_wallet.encodedWallet, g_wallet.walletLen, 0, g_bip44_path, &bip44pathlen);")),(0,r.kt)("li",{parentName:"ul"},"This does according to address index which were first 4 bytes of ",(0,r.kt)("inlineCode",{parentName:"li"},"dataBuffer")),(0,r.kt)("li",{parentName:"ul"},"This returns the bip44Path in ",(0,r.kt)("inlineCode",{parentName:"li"},"char* string_bip_44")))),(0,r.kt)("li",{parentName:"ul"},"Next we calulate the transactionHash",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Function Signature\n",(0,r.kt)("strong",{parentName:"li"},"getTransactionHash(uint8_t ","*","senderAddr, uint8_t senderAddrLen,\nuint8_t ","*","receiveAddr, uint8_t receiveAddrLen,\nuint8_t ","*","amount, uint8_t ","*","txHash, uint8_t ","*","txHashLen)")),(0,r.kt)("li",{parentName:"ul"},"Format for Transaction Hash Generation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tx_version | senderAddr | tx_type | code_size | content_size | ownership_length | total_uco_transfers | recieverAddr | amount | total_nft_transfers | recipients"))),(0,r.kt)("li",{parentName:"ul"},"We apply ",(0,r.kt)("inlineCode",{parentName:"li"},"cx_hash_sha256()")," and return the hash in ",(0,r.kt)("inlineCode",{parentName:"li"},"txHash")))),(0,r.kt)("li",{parentName:"ul"},"We prompt user in GUI to approve the transaction"),(0,r.kt)("li",{parentName:"ul"},"Once approve we performECDSA on the transactionHash",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Function Signature\n",(0,r.kt)("strong",{parentName:"li"},"performECDSA(uint8_t ","*","txHash, uint8_t txHashLen, uint32_t address_index, uint8_t ","*","encoded_wallet, uint8_t ","*","wallet_len, uint8_t sequence_no, uint8_t ","*","asn_sign, uint8_t ","*","sign_len)")),(0,r.kt)("li",{parentName:"ul"},"We generateKey from Wallet Similar to when getting address and give back ",(0,r.kt)("inlineCode",{parentName:"li"},"publicKey")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"privateKey")),(0,r.kt)("li",{parentName:"ul"},"We copy curve_type on asn_sign buffer"),(0,r.kt)("li",{parentName:"ul"},"We set 0 to signify onchain wallet"),(0,r.kt)("li",{parentName:"ul"},"We copy the publicKey on asn_sign buffer"),(0,r.kt)("li",{parentName:"ul"},"We sign the txnHash with the privateKet and append signature to asn_sign buffer "),(0,r.kt)("li",{parentName:"ul"},"We increase sign_len by publicKey length + 2 bytes"))),(0,r.kt)("li",{parentName:"ul"},"Once signature is performed we copy the txnHash to the ",(0,r.kt)("inlineCode",{parentName:"li"},"G_io_apdu_buffer")),(0,r.kt)("li",{parentName:"ul"},"Then, we copy the contents of encodedWallet on which we have overwritten the signature to the ",(0,r.kt)("inlineCode",{parentName:"li"},"G_io_apdu_buffer")),(0,r.kt)("li",{parentName:"ul"},"And we return the APDU with SW_OK and total length as ",(0,r.kt)("inlineCode",{parentName:"li"},"txnhash length + walletLen"))))))}u.isMDXComponent=!0}}]);