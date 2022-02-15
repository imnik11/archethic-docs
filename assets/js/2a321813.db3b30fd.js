"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[483],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,k=p["".concat(d,".").concat(m)]||p[m]||h[m]||r;return n?i.createElement(k,s(s({ref:t},c),{},{components:n})):i.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],o={id:"tpm",title:"TPM Implementation"},d=void 0,l={unversionedId:"build/core/tpm",id:"build/core/tpm",title:"TPM Implementation",description:"This section explains the HRT TPM Library implementation.",source:"@site/docs/build/core/tpm.md",sourceDirName:"build/core",slug:"/build/core/tpm",permalink:"/archethic-docs/build/core/tpm",tags:[],version:"current",lastUpdatedAt:1644954731,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"tpm",title:"TPM Implementation"},sidebar:"docs",previous:{title:"Core development",permalink:"/archethic-docs/build/core"},next:{title:"Yubikey implementation",permalink:"/archethic-docs/build/core/yubikey"}},c=[{value:"Global Variables",id:"global-variables",children:[],level:2},{value:"void keyToASN():",id:"void-keytoasn",children:[],level:2},{value:"void signToASN(BYTE <em>r, INT sizeR, BYTE </em>s, INT sizeS, INT *asnSignSize)",id:"void-signtoasnbyte-r-int-sizer-byte-s-int-sizes-int-asnsignsize",children:[],level:2},{value:"void generatePublicKey(INT keyIndex)",id:"void-generatepublickeyint-keyindex",children:[],level:2},{value:"setRootKey()",id:"setrootkey",children:[],level:2},{value:"updateHandlesIndexes()",id:"updatehandlesindexes",children:[],level:2},{value:"initializeTPM(INT keyIndex):",id:"initializetpmint-keyindex",children:[],level:2},{value:"getKeyIndex():",id:"getkeyindex",children:[],level:2},{value:"setKeyIndex(INT keyIndex):",id:"setkeyindexint-keyindex",children:[],level:2},{value:"getPublicKey(INT keyIndex, INT *publicKeySize):",id:"getpublickeyint-keyindex-int-publickeysize",children:[],level:2},{value:"signECDSA(INT keyIndex, BYTE <em>hashToSign, INT </em>eccSignSize, bool increment):",id:"signecdsaint-keyindex-byte-hashtosign-int-eccsignsize-bool-increment",children:[],level:2},{value:"getECDHPoint(INT keyIndex, BYTE *euphemeralKey):",id:"getecdhpointint-keyindex-byte-euphemeralkey",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section explains the HRT TPM Library implementation. "),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reference Files:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/tpm-core/blob/main/uniris-tpm.c"},"uniris-tpm.c"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/tpm-core/blob/main/uniris-tpm.h"},"uniris-tpm.h")))),(0,r.kt)("h2",{id:"global-variables"},"Global Variables"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The global variables are defined as static to maintain the static lifecycle of the global variable, to prevent data leak and external access of the variables."))),(0,r.kt)("h2",{id:"void-keytoasn"},"void keyToASN():"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function converts raw elliptical public key generated by TPM   to ASN1 DER encoding. "))),(0,r.kt)("p",null,"TPM generated uncompressed public key does not include the curve information required for elliptic key cryptography. keyToASN() encodes the raw public key by appending curve information to it."),(0,r.kt)("p",null,"The ASN DER Public Key is an outer structure which contains 2 inner structures. First inner structure having key type and curve type and second inner structure containning the raw key. The structure containning public key is a header containing ","[0x00 0x04 x coordinate y coordinate]","."),(0,r.kt)("p",null,"The following structure  is the format of ASN DER: "),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"ASN DER Public Key = [ ","[ [keytype] [curvetype] ][publickey]"," ]"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic Flow:"),"\nThe function adds the headers squentially and then the raw x coordinate of public key and then the y coordinate finally the size is updated."),(0,r.kt)("h2",{id:"void-signtoasnbyte-r-int-sizer-byte-s-int-sizes-int-asnsignsize"},"void signToASN(BYTE ",(0,r.kt)("em",{parentName:"h2"},"r, INT sizeR, BYTE "),"s, INT sizeS, INT *asnSignSize)"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Converts uncompressed signature values to ASN DER format."))),(0,r.kt)("p",null,"TPM generates the raw signature in form of integer values : R & S. signToASN() converts these raw values  into ASN DER format. It first prepends the ASN sequence then checks the MSB of R .  If it is 1 then it prepends a byte (0) to R otherwise it move on to increase the index pointed to the asn by the size of R.\nSimilarly, it does the above for S."),(0,r.kt)("h2",{id:"void-generatepublickeyint-keyindex"},"void generatePublicKey(INT keyIndex)"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Generates public key on the endorsement key hierarchy of TPM by taking one byte key index as input."))),(0,r.kt)("p",null,"Firstly, the template of the public key is defined in the inPublicECC which contains the endorsement key template such that certificate on the keys can be generated except modifying the endorsement key object attributes.\nThe inPublicECC structure defines the following sub-structure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"publicArea : defines the attributes of the public key to be generated. For endorsement key the signing operation is restricted due to privacy concern, defined under this structure.  In this case we are generating key in the endordement hierarchy by using the template of the endorsement key.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The object attributes of generating key are as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'* TPMA_OBJECT_USERWITHAUTH: Signifies the approval of "USER" actions with associated with the public key with a password.\n* TPMA_OBJECT_ADMINWITHPOLICY: Signifies the Approval of "ADMIN" role actions with this object may only be done with a policy session.\n* TPMA_OBJECT_SIGN_ENCRYPT: For a symmetric cipher object, the private portion of the key be used to encrypt. For other objects, the private portion of the key can be used to sign.\n* TPMA_OBJECT_DECRYPT:The private portion of the key can be used to decrypt\n* TPMA_OBJECT_FIXEDTPM: Indicates that the hierarchy of the key genrated cannot be changed.\n* TPMA_OBJECT_FIXEDPARENT:Indicates that the parent of the object cannot be changed.\n* TPMA_OBJECT_SENSITIVEDATAORIGIN: Indicates that the sensitive data is generated by the TPM on the key generation except the authvalue.\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".objectAttributes = (TPMA_OBJECT_USERWITHAUTH |\n                                 TPMA_OBJECT_ADMINWITHPOLICY |\n                                 TPMA_OBJECT_SIGN_ENCRYPT |\n                                 TPMA_OBJECT_DECRYPT |\n                                 TPMA_OBJECT_FIXEDTPM |\n                                 TPMA_OBJECT_FIXEDPARENT |\n                                 TPMA_OBJECT_SENSITIVEDATAORIGIN),\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object attributes for generating under Endorsement key hierarchy:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TPMA_OBJECT_RESTRICTED:  Key usage is restricted to manipulate structures of known format.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Endorsement key has same template except that there is no SIGN_ENCRYPT FLAG in the object attribute."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".objectAttributes = (TPMA_OBJECT_RESTRICTED |\n                                 TPMA_OBJECT_ADMINWITHPOLICY |\n                                 TPMA_OBJECT_DECRYPT |\n                                 TPMA_OBJECT_FIXEDTPM |\n                                 TPMA_OBJECT_FIXEDPARENT |\n                                 TPMA_OBJECT_SENSITIVEDATAORIGIN),\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"authPolicy: this substructure contains a 32 byte buffer with values exactly same  as endorsement key attributes. This parameter associates the generated key template to the TPM hence during certificate generation the CA is able to return the certificate for the public key generated under Endorsement key hierarchy.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".authPolicy = {\n                .size = 32,\n                .buffer = {0x83, 0x71, 0x97, 0x67, 0x44, 0x84, 0xB3, 0xF8, 0x1A, 0x90, 0xCC,\n                           0x8D, 0x46, 0xA5, 0xD7, 0x24, 0xFD, 0x52, 0xD7, 0x6E, 0x06, 0x52,\n                           0x0B, 0x64, 0xF2, 0xA1, 0xDA, 0x1B, 0x33, 0x14, 0x69, 0xAA}},\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"parameters: In the parameter structure we define the algorithm to be used for private key cryptography and public key cryptography operations.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," .parameters.eccDetail = {.symmetric = {\n                                         .algorithm = TPM2_ALG_AES,\n                                         .keyBits.aes = 128,\n                                         .mode.sym = TPM2_ALG_CFB,\n                                     },\n                                     .scheme = {.scheme = TPM2_ALG_NULL, .details = {.ecdsa = {.hashAlg = TPM2_ALG_SHA256}}},\n                                     .curveID = TPM2_ECC_NIST_P256,\n                                     .kdf = {.scheme = TPM2_ALG_NULL, .details = {}}},\n")),(0,r.kt)("p",null," After definning the template of the public key, a unique data is passed to each key in the unique structure of inPublicEC which is root key hash and key index. For the root key the root key hash is 0 and key index is 0. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".unique.ecc = {.x = {.size = 32, .buffer = {0}}, .y = {.size = 32, .buffer = {0}}},\n")),(0,r.kt)("p",null,"The primary key is created by using Esys_CreatePrimary() function with the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESYS_TR_RH_ENDORSEMENT: To generate key in the endorsement hierarchy6."),(0,r.kt)("li",{parentName:"ul"},"ESYS_TR_PASSWORD: indicates a password authorization"),(0,r.kt)("li",{parentName:"ul"},"inPublicECC: the public key template defined is passed.")),(0,r.kt)("p",null,"Finally the created key is converted to ASN DER format."),(0,r.kt)("h2",{id:"setrootkey"},"setRootKey()"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Initializes root key by calling generatePublicKey(0) since 0 is the index of root key."))),(0,r.kt)("p",null,"It also sets the root key hash. It is calculated by concatenating the raw x and y part of the root key and then hashing it."),(0,r.kt)("p",null,"The rootkey hash is stored statically and is important for every new primary key generation since it is passed as parameter to the unique structure of inPublicEC.X part. The key index is passed as parameter to the inpublicEc.y."),(0,r.kt)("h2",{id:"updatehandlesindexes"},"updateHandlesIndexes()"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Increments the current index value by 1 and also updates all the corresponding keys."))),(0,r.kt)("p",null,"Flushes the previous key handles index and points it to the nextKeyHandle  then increments NEXT index by 1 to store it in the nextkeyindex. Then generates a new public key by sending nextkeyIndex as the parameter. Finally it assigns the currentKeyhandle to the nextkey handle ."),(0,r.kt)("h2",{id:"initializetpmint-keyindex"},"initializeTPM(INT keyIndex):"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Initializes TPM  context by calling Esys_Initialize() function and sets the previous key handle and nextkey handle as null. Then it sets the root key and key index."))),(0,r.kt)("h2",{id:"getkeyindex"},"getKeyIndex():"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Returns previous key index because that is the "current" key index used for performing signature.'))),(0,r.kt)("h2",{id:"setkeyindexint-keyindex"},"setKeyIndex(INT keyIndex):"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sets the previous key index (which is our current key) to the key index passed as parameter."))),(0,r.kt)("p",null,"Also sets keyIndex+1 as the nextKey index."),(0,r.kt)("p",null,"For the key generated at after first  initialization it flushes the previous key handle and generates the key with keyIndex then points then populates the previous key handle with the current key handle value.\nNext it generates the public key with keyIndex+1 and stores it in the nextkey handle. "),(0,r.kt)("h2",{id:"getpublickeyint-keyindex-int-publickeysize"},"getPublicKey(INT keyIndex, INT *publicKeySize):"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Returns the public key for the given index."))),(0,r.kt)("p",null,"Takes keyIndex and returns root key if the keyINDEX is 0, next key if the keyindex matches with the nextKey index,  previous key if the keyINdex matches with the previous Key index. "),(0,r.kt)("p",null,"If it matches with none of these indexes, then it flushes the root key from the tpm (due to the limit of max 3 transient handles), generates the key for the corresponding keyIndex and copies it into temp key then flushes it from the TPM. Finally, it regenerates the root key and then returns temp key."),(0,r.kt)("h2",{id:"signecdsaint-keyindex-byte-hashtosign-int-eccsignsize-bool-increment"},"signECDSA(INT keyIndex, BYTE ",(0,r.kt)("em",{parentName:"h2"},"hashToSign, INT "),"eccSignSize, bool increment):"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Signs the given hash using the key referred by the key index."))),(0,r.kt)("p",null,"Converts the byte  hash to TPM2B_hash object and then checks the key index . If it is root key or previous key then assigns it to the signing key handle otherwise; "),(0,r.kt)("p",null,"Sets the previous key index to the given keyindex  by calling setkeyindex() function and assigns it to the signing handle. It signs the hash using Esys_Sign() function. Finally the signature is converted to ASN DER format which is returned by signECDSA()."),(0,r.kt)("h2",{id:"getecdhpointint-keyindex-byte-euphemeralkey"},"getECDHPoint(INT keyIndex, BYTE *euphemeralKey):"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Performs Elliptic Curve Diffe Hellmen Key Exchange using the private part of the key referred by the Key Index and public euphemeral key. Returns the derived shared secret uncompressed point."))),(0,r.kt)("p",null,"Takes the key index and checks whether it's previous key, next key or root key. If it's one of these then it assigns it to the  ECDH key handle  else it removes the root key and generates a new key for the given key index and use it in the ECDH handle. "),(0,r.kt)("p",null,"Next, it re-structures the euphemeral key with the format 04 x y and generates an ECDH point using the Esys_ECDH_ZGen() function and stores it 04 x y format in zPoint which is then returned by the function."))}p.isMDXComponent=!0}}]);