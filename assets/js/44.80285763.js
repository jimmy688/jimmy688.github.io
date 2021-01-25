(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1987:function(t,a,e){"use strict";e.r(a);var s=e(17),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"搭建harbor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建harbor"}},[t._v("#")]),t._v(" 搭建harbor")]),t._v(" "),s("p",[t._v("下载harbor离线安装包：https://github.com/goharbor/harbor/releases")]),t._v(" "),s("p",[s("img",{attrs:{src:e(495),alt:"image-20201223151811570"}})]),t._v(" "),s("p",[t._v("解压安装包：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar -zxvf harbor-offline-installer-v2.1.2.tgz\ncd harbor\n")])])]),s("p",[t._v("修改docker.yml配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cp harbor.yml.tmpl harbor.yml\nvi harbor.yml\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Configuration file of Harbor")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## The IP address or hostname to access admin UI and registry service.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.")]),t._v("\nhostname: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".116.133\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## http related config")]),t._v("\nhttp:\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## port for http, default is 80. If https enabled, this port will redirect to https port")]),t._v("\n  port: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## https related config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#https:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## https port for harbor, default is 443")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## port: 443")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## The path of cert and key files for nginx")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##  certificate: /your/certificate/path")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##  private_key: /your/private/key/path")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ## Uncomment following will enable tls communication between all harbor components")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## internal_tls:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   ## set enabled to true means internal tls is enabled")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   enabled: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   ## put your cert and key files on dir")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   dir: /etc/harbor/tls/internal")]),t._v("\n")])])]),s("p",[t._v("更新harbor配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./prepare\n")])])]),s("p",[t._v("开始安装：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./install.sh\n")])])]),s("p",[t._v("使用ip验证登录harbor：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("用户名：admin\n密码：Harbor12345\n")])])]),s("h2",{attrs:{id:"harbor-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#harbor-api"}},[t._v("#")]),t._v(" harbor api")])])}),[],!1,null,null,null);a.default=r.exports},495:function(t,a,e){t.exports=e.p+"assets/img/image-20201223151811570.88cfad70.png"}}]);