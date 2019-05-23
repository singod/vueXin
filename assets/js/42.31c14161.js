(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{202:function(t,e,o){},208:function(t,e,o){"use strict";var n=o(202);o.n(n).a},210:function(t,e,o){"use strict";o(196);var n,s={name:"toast",components:{"x-icon":o(190).a},props:{type:{type:String,validator:function(t){return["success","warn","error"].indexOf(t)>-1}},autoClosed:{type:[Boolean,Number],default:2,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:null,closeIcon:"wrong",callback:function(){}}},validator:function(t){var e=["wrong","correct"].indexOf(t.closeIcon)>-1;return t.text||t.closeIcon?t.text&&t.text.length>5?console.error("不能输入超过5个字"):!!e:console.error("至少设置一项")}},enableHTML:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","center"].indexOf(t)>-1}}},mounted:function(){this.exeAutoClosed(),this.updateStyles()},computed:{typeSelect:function(){if(this.type)return"type-".concat(this.type)},typeStyle:function(){if(this.type){return{success:"fill:#67c23a;",warn:"fill:#e6a23c;",error:"fill:#f56c6c;"}[this.type]}},toastClass:function(){return"position-".concat(this.position)}},methods:{updateStyles:function(){var t=this,e=this.$refs.toast.getBoundingClientRect().height;this.$nextTick(function(){t.$refs.divided.style.height="".concat(.8*e,"px")})},exeAutoClosed:function(){var t=this;this.autoClosed&&setTimeout(function(){t.close()},1e3*this.autoClosed)},leaveActive:function(){var t=this.$el.getBoundingClientRect(),e=t.bottom,o=t.height,n=t.top,s=this.$el.style,c=this.position;"top"===c?s.top="".concat(n-o,"px"):"bottom"===c?s.top="".concat(e+o,"px"):"center"===c&&(s.opacity=0)},close:function(){var t=this;this.leaveActive(),setTimeout(function(){t.$el.remove(),t.$emit("close"),t.$destroy()},450)},onClickClosed:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},c=(o(208),o(1)),i=Object(c.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"toast",staticClass:"toast",class:[t.toastClass,t.typeSelect]},[t.type?o("div",{staticClass:"toast-icon"},[o("x-icon",{staticStyle:{width:"2em",height:"2em"},attrs:{name:t.type}})],1):t._e(),t._v(" "),o("div",{staticClass:"message"},[t.enableHTML?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),o("p",{ref:"divided",staticClass:"divided"}),t._v(" "),t.closeButton?o("span",{staticClass:"close",on:{click:t.onClickClosed}},[t.closeButton.text&&!t.closeButton.closeIcon?o("div",[t._v("\n            "+t._s(t.closeButton.text)+"\n        ")]):t._e(),t._v(" "),t.closeButton.closeIcon?o("x-icon",{staticClass:"close-icon",staticStyle:{width:"1em",height:"1em"},style:t.typeStyle,attrs:{name:t.closeButton.closeIcon}}):t._e()],1):t._e()])},[],!1,null,"6fd35fc5",null).exports;e.a={install:function(t,e){t.prototype.$toast=function(e,o){n&&n.close(),n=function(t){var e=t.Vue,o=t.msg,n=t.propsData,s=t.onClose,c=new(e.extend(i))({propsData:n});return c.$slots.default=[o],c.$mount(),c.$on("close",s),document.body.appendChild(c.$el),c}({Vue:t,msg:e,propsData:o,onClose:function(){n=null}})}}}},486:function(t,e,o){"use strict";o.r(e);var n=o(235),s=o(192),c=o(191),i=o(210),l=o(198),a=o(197),r=o.n(a);o(0).a.use(i.a);var u={name:"grid-arrange",data:function(){return{selectTab:[1],input1:'```html\n<x-button @click="showMsg1">默认消息</x-button>\n<x-button @click="showMsg2" type="success">成功消息</x-button>\n<x-button @click="showMsg3" type="warn">警告消息</x-button>\n<x-button @click="showMsg4" type="error">错误信息</x-button>\n```',input2:"```js\nexport default {\n    methods:{\n     showMsg1() {\n          this.$toast('默认的消息',{  \n      })\n                },\n     showMsg2() {\n         this.$toast('这是一条成功消息',{\n          type:'success'\n        })\n       },\n     showMsg3() {\n         this.$toast('这是一条警告消息',{\n          type:'warn'\n         })\n         },\n     showMsg4() {\n        this.$toast('这是一条错误消息',{\n        type:'error'\n       })\n     },\n  },\n}\n```"}},methods:{showMsg1:function(){this.$toast("默认的消息",{})},showMsg2:function(){this.$toast("这是一条成功消息",{type:"success"})},showMsg3:function(){this.$toast("这是一条警告消息",{type:"warn"})},showMsg4:function(){this.$toast("这是一条错误消息",{type:"error"})}},components:{"x-popover":n.a,"x-collapse":s.a,"x-collapse-item":c.a,"x-button":l.a},computed:{html:function(){return r()(this.input1)},js:function(){return r()(this.input2)}},beforeDestroy:function(){this.$el.remove()}},p=o(1),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-top":"30px"}},[o("div",{staticStyle:{"margin-top":"20px"}},[o("x-collapse",{attrs:{selected:t.selectTab,exhibition:""},on:{"update:selected":function(e){t.selectTab=e}}},[o("template",{slot:"description"},[o("x-button",{on:{click:t.showMsg1}},[t._v("默认消息")]),t._v(" "),o("x-button",{attrs:{type:"success"},on:{click:t.showMsg2}},[t._v("成功消息")]),t._v(" "),o("x-button",{attrs:{type:"warn"},on:{click:t.showMsg3}},[t._v("警告消息")]),t._v(" "),o("x-button",{attrs:{type:"error"},on:{click:t.showMsg4}},[t._v("错误信息")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{color:"#666666"}},[t._v("在事件绑定中使用 "),o("code",[t._v("$toast")]),t._v("调用,可以通过设置 "),o("code",[t._v("type")]),t._v(" 设置消息的(目前三种)的样式\n                    "),o("br"),t._v("\n                    默认是自动关闭的，可以通过 "),o("code",[t._v("autoClosed")]),t._v("设置弹框的自动关闭\n                ")])],1),t._v(" "),o("x-collapse-item",{attrs:{name:"1",title:"展示代码",title2:"隐藏代码"}},[o("div",{domProps:{innerHTML:t._s(t.html)}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.js)}})])],2)],1)])},[],!1,null,"45fd1e8c",null);e.default=d.exports}}]);