(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{494:function(e,t,n){"use strict";n.r(t);var m=n(228),a=n(227),u=n(226),o=n(192),c=n(191),r=n(197),i=n.n(r),l={name:"menu-default",data:function(){return{selected:["support"],selectTab1:[1],input1:'```html\n<x-menu :selected.sync="selected"\n        text-color="#fff"\n        active-color="#ffd04b"\n        active-back-ground-color="#515151"\n        back-ground-color="#545c64"\n>\n          <x-sub-menu name="extension">\n         <template slot="title">扩展</template>\n              <x-menu-item name="mac">for Mac</x-menu-item>\n                     <x-menu-item name="windows">for Windows</x-menu-item>\n                 </x-sub-menu>\n                  <x-sub-menu name="learn">\n                    <template slot="title">如何使用</template>\n                   <x-menu-item name="fast">快速入门</x-menu-item>\n                  <x-menu-item name="advanced">进阶配置</x-menu-item>\n                <x-menu-item name="language">多语言支持</x-menu-item>\n                       <x-sub-menu name="package">\n                      <template slot="title">打包管理</template>\n                      <x-sub-menu name="webpack">\n                <template slot="title">webpack</template>\n                   <x-menu-item name="rookie">webpack快速上手</x-menu-item>\n                         <x-menu-item name="master">webpack从入门到入土</x-menu-item>\n                       <x-menu-item name="fuck">配你🐴呢</x-menu-item>\n                </x-sub-menu>\n     <x-menu-item name="parcel">使用parcel</x-menu-item>\n             </x-sub-menu>\n             </x-sub-menu>\n         <x-menu-item name="connect">联系我们</x-menu-item>\n            <x-menu-item name="support">其他支持</x-menu-item>\n</x-menu>\n```'}},components:{"x-menu":m.a,"x-menu-item":a.a,"x-sub-menu":u.a,"x-collapse":o.a,"x-collapse-item":c.a},computed:{html:function(){return i()(this.input1)}},beforeDestroy:function(){this.$el.remove()}},s=n(1),v=Object(s.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"50px"}},[n("x-collapse",{attrs:{selected:e.selectTab1,exhibition:""},on:{"update:selected":function(t){e.selectTab1=t}}},[n("template",{slot:"description"},[n("div",{staticStyle:{color:"#999999"}},[n("x-menu",{attrs:{selected:e.selected,"text-color":"#fff","active-color":"#ffd04b","active-back-ground-color":"#515151","back-ground-color":"#545c64"},on:{"update:selected":function(t){e.selected=t}}},[n("x-sub-menu",{attrs:{name:"extension"}},[n("template",{slot:"title"},[e._v("扩展")]),e._v(" "),n("x-menu-item",{attrs:{name:"mac"}},[e._v("for Mac")]),e._v(" "),n("x-menu-item",{attrs:{name:"windows"}},[e._v("for Windows")])],2),e._v(" "),n("x-sub-menu",{attrs:{name:"learn"}},[n("template",{slot:"title"},[e._v("如何使用")]),e._v(" "),n("x-menu-item",{attrs:{name:"fast"}},[e._v("快速入门")]),e._v(" "),n("x-menu-item",{attrs:{name:"advanced"}},[e._v("进阶配置")]),e._v(" "),n("x-menu-item",{attrs:{name:"language"}},[e._v("多语言支持")]),e._v(" "),n("x-sub-menu",{attrs:{name:"package"}},[n("template",{slot:"title"},[e._v("打包管理")]),e._v(" "),n("x-sub-menu",{attrs:{name:"webpack"}},[n("template",{slot:"title"},[e._v("webpack")]),e._v(" "),n("x-menu-item",{attrs:{name:"rookie"}},[e._v("webpack快速上手")]),e._v(" "),n("x-menu-item",{attrs:{name:"master"}},[e._v("webpack从入门到入土")]),e._v(" "),n("x-menu-item",{attrs:{name:"fuck"}},[e._v("配你🐴呢")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"parcel"}},[e._v("使用parcel")])],2)],2),e._v(" "),n("x-menu-item",{attrs:{name:"connect"}},[e._v("联系我们")]),e._v(" "),n("x-menu-item",{attrs:{name:"support"}},[e._v("其他支持")])],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("code",[e._v("text-color")]),e._v("文字颜色\n                "),n("br"),e._v(" "),n("code",[e._v("active-color")]),e._v("被选中颜色\n                "),n("br"),e._v(" "),n("code",[e._v("back-ground-color")]),e._v("正常背景色\n                "),n("br"),e._v(" "),n("code",[e._v("active-back-ground-color")]),e._v("被选中的背景色\n                "),n("br"),e._v("\n                如果你想要自定义主题，必须这四个都修改,"),n("code",[e._v("hover")]),e._v("既是被选中的颜色，icon的颜色和文字颜色同步\n                后面会单独给个。\n                "),n("br")],1)]),e._v(" "),n("x-collapse-item",{attrs:{name:"1",title:"展示代码",title2:"隐藏代码"}},[n("div",{domProps:{innerHTML:e._s(e.html)}})])],2)],1)},[],!1,null,"e9dd7dbc",null);t.default=v.exports}}]);