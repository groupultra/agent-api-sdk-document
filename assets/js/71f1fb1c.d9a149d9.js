"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88],{6121:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var t=i(4848),o=i(8453);const s={},c=void 0,r={id:"Communication",title:"Communication",description:"WS_URL",source:"@site/docs/Communication.md",sourceDirName:".",slug:"/Communication",permalink:"/agent-api-sdk-document/docs/Communication",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Communication.md",tags:[],version:"current",frontMatter:{},sidebar:"Communication",next:{title:"Type",permalink:"/agent-api-sdk-document/docs/category/type"}},l={},u=[{value:"WS_URL",id:"ws_url",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"ws_url",children:"WS_URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wss://ws.moobius.net\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u672c\u6587\u6863\u4ec5\u9610\u8ff0 websocket \u7684\u6c9f\u901a\u534f\u8bae\uff0c\u6240\u6709\u4e0d\u5728\u6b64\u6587\u6863\u91cc\u7684 functionality \u90fd\u4f7f\u7528 HTTP \u63a5\u53e3\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4efb\u4f55\u4eba\u5747\u53ef\u4ee5\u4e0e websocket \u7684\u516c\u5f00\u94fe\u63a5\u5efa\u7acb connection\uff0c\u4f46\u662f\u8981\u6267\u884c login \u4e4b\u540e\uff0c\u624d\u80fd\u8fdb\u884c\u5177\u4f53\u7684\u64cd\u4f5c\u3002\u7528\u6237\u7684 login \u9700\u8981\u6267\u884c user_login\uff0c\u7528 access_token \u8fdb\u884c\u767b\u5f55\u3002\u767b\u5f55\u4e4b\u540e\uff0c\u9700\u8981\u5728\u6240\u6709\u7684\u4ea4\u4e92\u91cc\u90fd\u5e26\u4e0a\u81ea\u5df1\u7684 user_id\u3002user_id \u662f\u5206\u914d\u7684\u7528\u6237\u7684\u552f\u4e00\u8bc6\u522b id\uff0c\u65e0\u8bba\u4f55\u65f6\u767b\u5f55\u90fd\u4fdd\u6301\u4e0d\u53d8\u3002"}),"\n",(0,t.jsx)(n.li,{children:"service \u7528 access_token \u548c service_id \u8fdb\u884c\u767b\u5f55\uff0c\u767b\u5f55\u4e4b\u540e\uff0c\u9700\u8981\u5728\u6240\u6709\u7684\u4ea4\u4e92\u91cc\u90fd\u5e26\u4e0a\u81ea\u5df1\u7684 service_id\u3002\u6bcf\u4e2a service_id \u552f\u4e00\uff0c\u4fdd\u6301\u4e0d\u53d8\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u540c\u4e00\u4e2a user \u6216 service\uff0c\u5f53\u524d\u53ea\u80fd\u4e00\u4e2a\u8bbe\u5907\u767b\u5f55\uff0c\u53e6\u4e00\u4e2a\u8bbe\u5907\u767b\u5f55\u65f6\uff0c\u4f1a\u81ea\u52a8\u9876\u6389\u539f\u672c\u767b\u5f55\u7684\u8bbe\u5907\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0e websocket \u4ea4\u4e92\u6240\u53d1\u9001\u7684\u6240\u6709\u5185\u5bb9\uff0c\u90fd\u662f json \u683c\u5f0f\u7684\uff0c\u4e0d\u8981\u6c42\u7f8e\u89c2\uff0c\u53ef\u4ee5\u5ffd\u7565\u6240\u6709\u6362\u884c\u4e0e\u7a7a\u683c\uff1b\u5176\u4e2d\u9876\u5c42\u7684 type\u3001request_id\u3001user_id\u3001body \u662f\u5fc5\u586b\u7684\u3002body \u662f\u4e00\u4e2a object\uff0c\u5176\u4e2d\u6240\u6709\u4e0b\u9762\u6587\u6863\u4e2d\u5199\u51fa\u6765\u7684 key \u90fd\u662f\u5176 subtype \u4e0b\u5fc5\u586b\u7684\uff0c\u6240\u6709\u9009\u586b\u7684\u5728 context \u91cc\u9762\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0b\u6587\u4e2d\u7684\u6240\u6709 uuid \u5747\u4e3a uuid4\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import uuid\nprint(str(uuid.uuid4()))\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"\u672c\u6587\u6863\u5bf9\u4e8e\u6bcf\u4e2a\u5177\u4f53 type \u4f1a\u7ed9\u51fa\u4e00\u4e2a JSON \u7684\u793a\u4f8b\uff0c\u5176\u4e2d\u7684\u503c\u662f\u968f\u673a\u751f\u6210\u7684\u4ec5\u4f5c\u53c2\u8003\uff0c\u4e0d\u80fd\u76f4\u63a5\u7528\u6765\u6d4b\u8bd5\u3002\u8868\u683c\u4e2d\u4f1a\u5bf9\u8be5 type \u7684 JSON \u7684\u6bcf\u4e2a\u5b57\u6bb5\u505a\u8be6\u7ec6\u7684\u89e3\u91ca\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e8e\u6bcf\u4e2a type \u800c\u8a00\uff0c\u53d1\u8d77\u548c\u6536\u5230\u7684\u6d88\u606f\u7ed3\u6784\u4f1a\u6709\u4e9b\u5fae\u7684\u53d8\u5316\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u8868\u683c\u4e2d\u7684\u8bf4\u660e\u3002\u5bf9\u4e8e\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u5bf9\u63a5\u65f6\u4f1a\u9488\u5bf9\u53d1\u9001\u548c\u63a5\u6536\u505a\u4e0d\u540c\u7684\u89e3\u6790\u5904\u7406\u3002\u6807\u6ce8\u201cmoobius \u751f\u6210\u201d\u7684\u5728\u53d1\u9001\u65f6\u4e0d\u9700\u5e26\uff0c\u6807\u6ce8\u201cmoobius \u5254\u9664\u201d\u7684\u63a5\u6536\u8005\u4e0d\u4f1a\u5b9e\u9645\u6536\u5230\uff0c\u4f46\u662f\u5e94\u5f53\u5e26\uff0c\u4ee5\u4fbf moobius \u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u7528\u6237\u548c channel \u7684\u4e00\u4e9b\u4ea4\u4e92\u7531 moobius \u8d1f\u8d23\uff1a\u83b7\u53d6 channel \u5217\u8868\u662f moobius \u8d1f\u8d23\u7684\uff0cchannel \u672c\u8eab\u4e0d\u80fd\u9009\u62e9\u662f\u5426\u5bf9\u67d0\u4e2a\u7279\u5b9a\u7528\u6237\u53ef\u89c1\uff1bjoin \u6216 leave channel \u4e00\u5b9a\u662f\u7528\u6237\u53d1\u8d77\u7684\uff0cchannel \u4e0d\u80fd\u8bf1\u5bfc\u7528\u6237\u8fdb\u884c\u8fd9\u4e9b\u884c\u4e3a\uff1bchannel \u4e0d\u80fd\u62d2\u7edd\u7528\u6237 join\uff0c\u4f46\u53ef\u4ee5\u4e0d\u7ed9\u7528\u6237\u63d0\u4f9b\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6240\u6709\u5bf9\u7528\u6237\u7684\u6307\u4ee3\u5747\u4f7f\u7528 group_id \u5b8c\u6210\uff0c\u6c38\u8fdc\u4e0d\u88f8\u4f20 uuid[]\uff08by \u732b\u732b\u732b\uff09"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);