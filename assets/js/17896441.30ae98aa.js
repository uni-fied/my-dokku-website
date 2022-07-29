"use strict";(self.webpackChunkmy_dokku_website=self.webpackChunkmy_dokku_website||[]).push([[918],{8043:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),i=a(5281),c=a(7462),o=a(5999),d=a(2244);function m(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,c.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,c.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(2263),v=a(9960),b=a(143),h=a(373),p=a(4477);const g={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=g[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(v.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,u.Z)(),{pluginId:s}=(0,b.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,h.J)(s),{latestDocSuggestion:o,latestVersionSuggestion:d}=(0,b.Jo)(s),m=null!=o?o:(v=d).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:d.label,to:m.path,onClick:()=>c(d.name)})))}function N(e){let{className:t}=e;const a=(0,p.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function k(e){let{className:t}=e;const a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function C(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:i.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var T=a(6114),x=a(1526);const H="lastUpdated_vbeJ";function U(e){return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x.Z,e)))}function y(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",H)},(a||r)&&n.createElement(C,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function A(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:c,lastUpdatedBy:o,tags:d}=a,m=d.length>0,u=!!(r||s||o);return m||u?n.createElement("footer",{className:(0,l.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(U,{tags:d}),u&&n.createElement(y,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:c})):null}var w=a(9407),I=a(6043),M=a(3743);const B="tocCollapsibleButton_TO0P",V="tocCollapsibleButtonExpanded_MG3E";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,c.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",B,!t&&V,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const S="tocCollapsible_ETCw",P="tocCollapsibleContent_vkbj",R="tocCollapsibleExpanded_sAul";function D(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:c}=(0,I.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(S,!i&&R,a)},n.createElement(O,{collapsed:i,onClick:c}),n.createElement(I.z,{lazy:!0,className:P,collapsed:i},n.createElement(M.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var z=a(2503),F=a(2802),q=a(8596),j=a(4996);function G(e){return n.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const J={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Q(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(v.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function W(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,c.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function X(){const e=(0,j.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(v.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",J.breadcrumbsItemLink),href:e},n.createElement(G,{className:J.breadcrumbHomeIcon})))}function Y(){const e=(0,F.s1)(),t=(0,q.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,J.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(X,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(W,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(Q,{href:t.href,isLast:l},t.label))})))):null}var K=a(3548);const $="docItemContainer_Adtb",ee="docItemCol_GujU",te="tocMobile_aoJ5";function ae(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:i}=a,{keywords:c}=s,{description:o,title:d}=l,m=null!=(t=i.image)?t:s.image;return n.createElement(r.d,{title:d,description:o,keywords:c,image:m})}function ne(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:c,hide_table_of_contents:o,toc_min_heading_level:d,toc_max_heading_level:u}=r,{title:v}=a,b=!c&&void 0===t.contentTitle,h=(0,s.i)(),p=!o&&t.toc&&t.toc.length>0,g=p&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!o&&ee)},n.createElement(N,null),n.createElement("div",{className:$},n.createElement("article",null,n.createElement(Y,null),n.createElement(k,null),p&&n.createElement(D,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,l.Z)(i.k.docs.docTocMobile,te)}),n.createElement("div",{className:(0,l.Z)(i.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},v)),n.createElement(K.Z,null,n.createElement(t,null))),n.createElement(A,e)),n.createElement(m,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:i.k.docs.docTocDesktop})))}function le(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(ae,e),n.createElement(ne,e))}},6114:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),i=a(6010);const c="iconEdit_eYIM";function o(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},9407:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),s=a(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),l=a(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var i=a(6668);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function o(e,t){var a;let{anchorTopOffset:n}=t;const l=e.find((e=>c(e).top>=n));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=o(i,{anchorTopOffset:a.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const h=(0,i.L)(),p=null!=d?d:h.tableOfContents.minHeadingLevel,g=null!=u?u:h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(c&&o)return{linkClassName:c,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:g}}),[c,o,p,g])),l.createElement(v,(0,n.Z)({toc:E,className:a,linkClassName:c},b))}},3008:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function o(e){let{permalink:t,label:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,o?c:i)},a,o&&n.createElement("span",null,o))}},1526:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(5999),s=a(3008);const i="tags_jXut",c="tag_QGVx";function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:c},n.createElement(s.Z,{label:t,permalink:a}))}))))}},4477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);