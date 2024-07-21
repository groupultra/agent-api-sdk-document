"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2358],{5874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var c=t(4848),s=t(8453);const i={},d=void 0,r={id:"User/User Action",title:"User Action",description:"Action",source:"@site/docs/User/User Action.md",sourceDirName:"User",slug:"/User/User Action",permalink:"/agent-api-sdk-document/docs/User/User Action",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/User/User Action.md",tags:[],version:"current",frontMatter:{},sidebar:"Communication",previous:{title:"User Event",permalink:"/agent-api-sdk-document/docs/User/User Event"},next:{title:"Service",permalink:"/agent-api-sdk-document/docs/Service/"}},l={},a=[{value:"Action",id:"action",level:2},{value:"Button Click",id:"button-click",level:2},{value:"Context Menu Click",id:"context-menu-click",level:2}];function o(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u7531 service \u5904\u7406\u7684\u7528\u6237\u64cd\u4f5c\uff0c\u4ece\u4e1a\u52a1\u529f\u80fd\u89d2\u5ea6\u8bb2\u5c5e\u4e8e\u4f4e\u9891\u64cd\u4f5c\uff08\u76f8\u5bf9\u4e8e User Event (message_up+button_click)\uff09\uff0c\u56e0\u6b64\u5408\u5e76\u4e3a\u4e00\u4e2a\uff0c\u5404 subtype \u4e2d\u5b9a\u4e49\u5177\u4f53\u7c7b\u578b\u3002\u76ee\u524d\u7684\u524d\u7aef\u4f1a\u5728\u7528\u6237\u6253\u5f00 channel \u7684\u65f6\u5019\u53d1\u9001\u5404\u79cd fetch action\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"user -> moobius -> service"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"request"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "type": "action",\n  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",\n  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "body": {\n    "subtype": "join_channel",\n    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",\n    "context": {}\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Field"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Value"}),(0,c.jsx)(n.th,{children:"Desc"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"type"}),(0,c.jsx)(n.td,{children:"string"}),(0,c.jsx)(n.td,{children:"action"}),(0,c.jsx)(n.td,{children:"\u6d88\u606f\u7c7b\u578b"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"request_id"}),(0,c.jsx)(n.td,{children:"uuid"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"user_id"}),(0,c.jsx)(n.td,{children:"uuid"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"body - subtype"}),(0,c.jsx)(n.td,{children:"string"}),(0,c.jsx)(n.td,{children:'"join_channel" / "leave_channel" / "fetch_characters" / "fetch_buttons" / "fetch_channel_info" / "fetch_canvas" / "fetch_style" / "fetch_context_menu"'}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"body - channel_id"}),(0,c.jsx)(n.td,{children:"uuid"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"body - context"}),(0,c.jsx)(n.td,{children:"object"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"\u975e\u5fc5\u987b"})]})]})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"service \u6536\u5230\u7684 response\uff1a"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "type": "action",\n  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "body": {\n    "subtype": "join_channel",\n    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",\n    "context": {}\n  }\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"button-click",children:"Button Click"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7528\u6237\u53d1\u8d77\u7684 service \u7279\u5b9a\u529f\u80fd\u8c03\u7528\uff08\u6309\u94ae\uff09\nUser -> moobius -> service: moobius \u4ec5\u4ec5\u8d77\u5230\u4f20\u9012\u6d88\u606f\u7684\u89d2\u8272\uff0c\u4e0d\u5165\u5e93"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "type": "button_click",\n  "request_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "body": {\n    "button_id": "button_id",\n    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",\n    "arguments": [\n      {\n        "name": "arg1",\n        "value": 123\n      },\n      {\n        "name": "arg2",\n        "value": "also could be a string"\n      }\n    ],\n    "context": {}\n  }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"arguments \u53c2\u89c1 update \u4e2d\u7684 button\uff0cvalue \u53ef\u80fd\u4e3a string \u6216 int\uff0c\u7531\u524d\u7aef\u6821\u9a8c\uff0cservice \u4e5f\u4f1a\u6821\u9a8c"}),"\n",(0,c.jsx)(n.h2,{id:"context-menu-click",children:"Context Menu Click"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7528\u6237\u70b9\u51fb\u53f3\u952e\u83dc\u5355\nUser -> moobius -> service: moobius \u4ec5\u4ec5\u8d77\u5230\u4f20\u9012\u6d88\u606f\u7684\u89d2\u8272\uff0c\u4e0d\u5165\u5e93"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "type": "menu_click",\n  "request_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",\n  "body": {\n    "item_id": "item_id",\n    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",\n    "message_id": "35880247-99ba-48c6-8283-b5e87159ce38",\n    "message_subtype": "text",\n    "message_content": {\n      "text": "test message"\n    },\n    "arguments": [\n      {\n        "name": "arg1",\n        "value": 123\n      },\n      {\n        "name": "arg2",\n        "value": "also could be a string"\n      }\n    ],\n    "context": {}\n  }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"arguments \u4e0e button click \u57fa\u672c\u4e00\u81f4\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var c=t(6540);const s={},i=c.createContext(s);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);