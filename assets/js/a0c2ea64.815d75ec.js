"use strict";(self.webpackChunkagent_api_sdk_document=self.webpackChunkagent_api_sdk_document||[]).push([[7763],{5136:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(4848),t=s(8453);const r={description:"The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh."},o=void 0,a={id:"docs/Auth",title:"Auth",description:"The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh.",source:"@site/versioned_docs/version-1.0.0/docs/Auth.md",sourceDirName:"docs",slug:"/docs/Auth",permalink:"/agent-api-sdk-document/docs/docs/Auth",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{description:"The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh."},sidebar:"introduction",previous:{title:"Method References",permalink:"/agent-api-sdk-document/docs/Method References"},next:{title:"Channel",permalink:"/agent-api-sdk-document/docs/docs/Channel"}},c={},d=[{value:"auth.sign_up",id:"authsign_up",level:3},{value:"auth.sign_in",id:"authsign_in",level:3},{value:"auth.sign_out",id:"authsign_out",level:3},{value:"auth.refresh",id:"authrefresh",level:3},{value:"auth.confirm_sign_up",id:"authconfirm_sign_up",level:3},{value:"auth.resend_confirmation",id:"authresend_confirmation",level:3},{value:"auth.confirm_reset_password",id:"authconfirm_reset_password",level:3},{value:"auth.forgot_password",id:"authforgot_password",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"authsign_up",children:"auth.sign_up"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"User registration, send verification code to email"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.sign_up({\n  password: "password",\n  username: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"authsign_in",children:"auth.sign_in"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"User login to obtain user token"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.sign_in({\n  password: "password",\n  username: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"authsign_out",children:"auth.sign_out"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"User logs out, clears login status"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"moobius_client.auth.sign_out();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"authrefresh",children:"auth.refresh"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Refresh login status and update user token"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"moobius_client.auth.sign_out();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"authconfirm_sign_up",children:"auth.confirm_sign_up"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm registration of this email account"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.confirm_sign_up({\n  confirmation_code: "123456", // 6-digit email verification code\n  username: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"authresend_confirmation",children:"auth.resend_confirmation"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Resend registration verification code"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.resend_confirmation({\n  username: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"authconfirm_reset_password",children:"auth.confirm_reset_password"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm the email account to reset the password"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.confirm_reset_password({\n  confirmation_code: "123456", // 6-digit email verification code\n  password: "new password",\n  username: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"authforgot_password",children:"auth.forgot_password"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Forgot passwordSend verification code"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'moobius_client.auth.forgot_password({\n  username: "email",\n});\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);