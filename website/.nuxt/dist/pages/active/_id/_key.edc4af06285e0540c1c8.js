webpackJsonp([25],{"/ghZ":function(t,e,a){var n=a("AMjE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("11992aa0",n,!0)},"/myT":function(t,e,a){"use strict";var n=a("V8bM"),s=a("y8ae");a("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user,isInputFocus:!1}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;n.a.logout().then(function(e){e.errNo===s.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"17iU":function(t,e,a){t.exports=a.p+"img/round_check_fill.df1f30b.png"},"9oAv":function(t,e,a){"use strict";var n=a("FhoZ"),s=a.n(n);if(s.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+s.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},AMjE:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},EOU5:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("go-header",{attrs:{userStatus:t.user}}),a("div",{staticClass:"golang-forget-container"},[a("h1",[t._v("账号中心")]),a("p",{staticClass:"golang-forget-title"},[t._v("账号激活")]),a("div",{staticClass:"golang-forget-form",attrs:{id:"reset"}},[t.success?a("div",{staticClass:"signup-form"},[t._m(0),a("p",{staticClass:"forget-success-info"},[a("span",{staticClass:"no-underline"},[t._v(t._s(t.email))]),t._v(" 激活成功 "),a("a",{staticClass:"forget-resend",attrs:{href:"/signin"}},[t._v("立即登陆")])])]):t._e(),t.error?a("div",[a("p",{staticClass:"forget-success-info"},[t._v(t._s(t.error))])]):t._e()])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"forget-success-icon"},[n("img",{attrs:{src:a("17iU"),alt:""}})])}],r={render:n,staticRenderFns:s};e.a=r},ItGS:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"body{background-color:#e1e1e1}.golang-footer{position:fixed;bottom:0;width:100%}.golang-forget-container{width:1200px;margin:0 auto;height:560px;margin-top:20px;background-color:#fff;padding:20px}.golang-forget-container h1{font-size:24px}.golang-forget-title{height:30px;line-height:30px;background-color:#80bd01;color:#fff;font-size:14px;margin-top:15px;padding-left:10px}.golang-forget-form{width:400px;margin:0 auto;margin-top:60px}.forget-button{width:400px}.reset-pwd-button{margin-left:80px;width:300px}.forget-success-icon{text-align:center}.forget-success-icon img{widows:80px;height:80px}.forget-success-info{text-align:center;font-size:16px;font-weight:700;margin-top:30px}.reset-container{padding-top:20px}.reset-form{width:380px;margin:0 auto}.signup-input{width:300px}.forget-resend{color:#007fff;margin-left:10px;cursor:pointer}.forget-resend:hover{color:#007fff;text-decoration:none;text-decoration:underline}.not-resend{color:#9e9e9e;margin-left:10px;cursor:not-allowed}",""])},J3Se:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer"},[a("div",{staticClass:"golang-footer-page-link"},[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[a("div",{staticClass:"golang-footer-github"},[a("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),a("span",[t._v("  | ")]),a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/vote"}},[t._v("投票")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/links"}},[t._v("友情链接")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer-copyright"},[a("span",[t._v("© 2017 "),a("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),a("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),a("span",[t._v(" | ")]),a("span",[t._v("京ICP备12045181号-2")])])}],r={render:n,staticRenderFns:s};e.a=r},Y9Kp:function(t,e,a){"use strict";function n(t){a("ksNY")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("qSYz"),r=a("EOU5"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.default=c.exports},"YXP+":function(t,e,a){"use strict";function n(t){a("/ghZ")}var s=a("/myT"),r=a("mh+5"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},ksNY:function(t,e,a){var n=a("ItGS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a5245376",n,!0)},"mh+5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header"},[a("div",{staticClass:"golang-top-box"},[a("div",{staticClass:"golang-top-header-left"},[t._m(0),a("div",{staticClass:"golang-header-search"},[a("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[a("p",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",style:{border:t.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(e){e.target.composing||(t.q=e.target.value)}}}),a("span",{staticClass:"search-icon"})])])])]),t._m(1),a("div",{staticClass:"golang-top-header-right"},[a("ul",[t._m(2),t._m(3),t.userData?[a("li",[a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[a("span",{staticClass:"header-avatar"},[a("img",{attrs:{src:t.user.avatarURL,alt:""}})]),a("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),a("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[a("li",[a("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人主页")])]),a("li",[a("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),a("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[a("a",{on:{click:t.onSignin}},[a("li",[t._v("登录")])]),t._m(4)]],2)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-logo-container"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[t._v("首页")])]),a("li",[a("a",{attrs:{href:"/vote"}},[t._v("投票")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),a("li",[a("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/signup"}},[a("li",[t._v("注册")])])}],r={render:n,staticRenderFns:s};e.a=r},qSYz:function(t,e,a){"use strict";var n=a("YXP+"),s=a("yqLL"),r=a("V8bM");e.a={data:function(){return{}},validate:function(t){var e=t.params,a=!!e.id,n=!!e.key;return a&&n},asyncData:function(t){return r.a.activeUser({client:t.req,params:{id:t.params.id||"",key:t.params.key||""}}).then(function(e){return 0===e.errNo?(console.log(e.data),{email:e.data.email,success:!0,error:"",user:t.user}):{success:!1,error:e.msg,user:t.user}})},head:function(){return{title:"账号激活"}},middleware:"userInfo",components:{"go-header":n.a,"go-footer":s.a}}},yqLL:function(t,e,a){"use strict";var n=a("J3Se"),s=a("VU/8"),r=s(null,n.a,!1,null,null,null);e.a=r.exports}});
//# sourceMappingURL=_key.edc4af06285e0540c1c8.js.map