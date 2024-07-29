"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7615],{7425:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=t(4848),r=t(8453);const d={},c=void 0,o={id:"Moobius/copy",title:"copy",description:"Copy",source:"@site/docs/Moobius/copy.md",sourceDirName:"Moobius",slug:"/Moobius/copy",permalink:"/agent-api-sdk-document/docs/next/Moobius/copy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Copy",id:"copy",level:2}];function a(e){const s={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"copy",children:"Copy"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'moobius sends "copy" to confirm a packet is sent to the moobius, no matter if packets come from users or services.'}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"System level, uses the same request_id as the packet that triggers the copy. Body contains messages to indicate whether the packet is processed correctly or some error occurs. Status indicates success or failure; message in the content indicates extra info or error details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Moobius confirms it has received a packet:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "type": "copy",\n  "body": {\n    "request_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",\n    "origin_type": "message_up",\n    "status": true,\n    "context": {}\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"origin_type"}),(0,n.jsx)(s.th,{children:"status_type"}),(0,n.jsx)(s.th,{children:"Desc"}),(0,n.jsx)(s.th,{children:"Context"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_up"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"Upward message sent successful"}),(0,n.jsx)(s.td,{children:"message_id"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_up"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"Upward message sent failed due to some reason"}),(0,n.jsx)(s.td,{children:"reason"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_down"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"Downward message sent successful"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_down"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"Downward message sent failed due to some reason"}),(0,n.jsx)(s.td,{children:"reason"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_login"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_login"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"reason"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"service_login"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"service_login"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"reason"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(6540);const r={},d=n.createContext(r);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);