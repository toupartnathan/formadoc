"use strict";(self.webpackChunkformadoc=self.webpackChunkformadoc||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Introduction",l={unversionedId:"annexe3/intro",id:"annexe3/intro",title:"Introduction",description:"L'annexe 3 est une annexe r\xe9alis\xe9 lorsque l'apprenant dans son cursus d'apprentissage doit r\xe9aliser une/plusieurs p\xe9riode(s) de mobilit\xe9e international.",source:"@site/docs/annexe3/intro.md",sourceDirName:"annexe3",slug:"/annexe3/intro",permalink:"/formadoc/docs/annexe3/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/annexe3/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"G\xe9n\xe9rateur Annexe 3",permalink:"/formadoc/docs/category/g\xe9n\xe9rateur-annexe-3"},next:{title:"Solution",permalink:"/formadoc/docs/annexe3/solution_technique"}},s={},p=[{value:"Type d&#39;application",id:"type-dapplication",level:2},{value:"Partie Admin",id:"partie-admin",level:3},{value:"Partie g\xe9n\xe9ration de l&#39;attestation",id:"partie-g\xe9n\xe9ration-de-lattestation",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"L'annexe 3 est une annexe r\xe9alis\xe9 lorsque l'apprenant dans son cursus d'apprentissage doit r\xe9aliser une/plusieurs p\xe9riode(s) de mobilit\xe9e international.\nLe but est de pr\xe9sicer des p\xe9riodes (1 a 5) avec donc une date minimal et une date maximal pour chacune d'elle, avec ces donn\xe9es et selon l'opco concern\xe9e par le contrat d'apprentissage de produire un document qui selon les pr\xe9dictions renseigne les montant de prise en charge.\nL'application ets utilis\xe9e aussi bien par MySupv1 que MySupv2"),(0,i.kt)("h2",{id:"type-dapplication"},"Type d'application"),(0,i.kt)("p",null,"L'application se d\xe9compse en 2 partie distincts, une partie admin et une partie qui permet la g\xe9n\xe9ration de l'annexe."),(0,i.kt)("h3",{id:"partie-admin"},"Partie Admin"),(0,i.kt)("p",null,"Cette partie permet a un utilisateur de Formasup de modifer le/les motants et les criteres d'\xe9lgibiliter pour chaun des OPCO, ainsi que de modifier les template utiliser."),(0,i.kt)("h3",{id:"partie-g\xe9n\xe9ration-de-lattestation"},"Partie g\xe9n\xe9ration de l'attestation"),(0,i.kt)("p",null,"Lors du conventionement la secr\xe9taire d'un contrat d'apprentissage, dans l'outil MySup, la secr\xe9atire clique sur le lien qui permet d'arriver sur notre application, ou elle renseigne les diff\xe9rente p\xe9riode de mobiliters, puis elle valide la g\xe9n\xe9ration.\nSelon les p\xe9riodes rensigni\xe9e et les criteres d'\xe9ligibiter de l'OPCO concern\xe9e par ce contrat, le document et completer par le forfait qui corespond ou si aucun ne corepond par le forfait maximum de l'opco."))}u.isMDXComponent=!0}}]);