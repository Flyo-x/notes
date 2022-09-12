(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{272:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"mousewheel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mousewheel"}},[t._v("#")]),t._v(" mousewheel")]),t._v(" "),a("p",[t._v("封装鼠标滚动指令。引入normalize-wheel插件，规范化鼠标滚动。判断是否火狐，封装方法，在初始化指令时调用")]),t._v(" "),a("h2",{attrs:{id:"repeat-click"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeat-click"}},[t._v("#")]),t._v(" repeat-click")]),t._v(" "),a("p",[t._v("封装重复点击指令。使用的是mousedown而不是click。")]),t._v(" "),a("h2",{attrs:{id:"emitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emitter"}},[t._v("#")]),t._v(" emitter")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("dispatch\n通知父级以上触发事件")])]),t._v(" "),a("li",[a("p",[t._v("broadcast\n通知子孙以下触发事件")])])]),t._v(" "),a("h2",{attrs:{id:"clickoutside"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clickoutside"}},[t._v("#")]),t._v(" clickoutside")]),t._v(" "),a("p",[t._v("这是一个指令，点击元素外面才会触发绑定的事件")]),t._v(" "),a("h2",{attrs:{id:"dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" dom")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("trim\n去掉前后空白和空白符")])]),t._v(" "),a("li",[a("p",[t._v("camelCase\n带有':,-,_'的后一位字母变成大写，首字母除外。并且moz[A-Z]的m变成大写。_全局匹配，separator匹配第一个括号，letter匹配第二个括号，offset偏移量。")])]),t._v(" "),a("li",[a("p",[t._v("on\n事件绑定，里面判断了是否服务端，是否有addEventListener方法。不明白为什么要判断是否服务端，服务端可以使用attachEvent❓")])]),t._v(" "),a("li",[a("p",[t._v("off\n解除事件绑定，和on有相同疑问")])]),t._v(" "),a("li",[a("p",[t._v("once\n只调用一次，封装了一下方法，执行完就解除绑定")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("listener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("hasClass\n判断节点是否有某个类，这里也做了兼容低版本的")])]),t._v(" "),a("li",[a("p",[t._v("addClass\n添加一个或多个类")])]),t._v(" "),a("li",[a("p",[t._v("removeClass\n删除一个或多个类")])]),t._v(" "),a("li",[a("p",[t._v("getStyle\n获取样式，可以看一下这篇文章"),a("a",{attrs:{href:"https://www.runoob.com/w3cnote/window-getcomputedstyle-method.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getComputedStyle"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("setStyle\n设置样式")])]),t._v(" "),a("li",[a("p",[t._v("isScroll\n是否滚动")])]),t._v(" "),a("li",[a("p",[t._v("getScrollContainer\n获取滚动的容器。从给定的节点，一层层往上推，直到window, document, document.documentElement")])]),t._v(" "),a("li",[a("p",[t._v("isInContainer\n判断元素是否在指定的容器内")])])]),t._v(" "),a("h2",{attrs:{id:"popper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#popper"}},[t._v("#")]),t._v(" popper")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://popper.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("定位引擎"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"resize-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resize-event"}},[t._v("#")]),t._v(" resize-event")]),t._v(" "),a("p",[t._v("监听容器的变化，触发一些事件。因为兼容问题，没有使用浏览器自带的，而是引入resize-observer-polyfill，并进行封装")]),t._v(" "),a("h2",{attrs:{id:"scroll-into-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-into-view"}},[t._v("#")]),t._v(" scroll-into-view")]),t._v(" "),a("p",[t._v("滚动到下拉框选中的值的位置")]),t._v(" "),a("h2",{attrs:{id:"scroll-into-view-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-into-view-2"}},[t._v("#")]),t._v(" scroll-into-view")]),t._v(" "),a("p",[t._v("计算滚动条的宽度")]),t._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" types")]),t._v(" "),a("p",[t._v("类型判断。")]),t._v(" "),a("ul",[a("li",[t._v("字符串")]),t._v(" "),a("li",[t._v("对象")]),t._v(" "),a("li",[t._v("html元素")]),t._v(" "),a("li",[t._v("函数")]),t._v(" "),a("li",[t._v("undefined（未定义）")]),t._v(" "),a("li",[t._v("defined（已定义）")])]),t._v(" "),a("h2",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util"}},[t._v("#")]),t._v(" util")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("hasOwn\n判断变量本身是否存在某属性，而不是原型链上的")])]),t._v(" "),a("li",[a("p",[t._v("extend\n把一个变量的属性复制到另一个变量，如果存在，则替换，浅拷贝。")])]),t._v(" "),a("li",[a("p",[t._v("toObject\n把对象变成数组")])]),t._v(" "),a("li",[a("p",[t._v("getValueByPath\n根据路径，获取对象的值")])]),t._v(" "),a("li",[a("p",[t._v("getPropByPath")])]),t._v(" "),a("li",[a("p",[t._v("generateId\n生成id")])]),t._v(" "),a("li",[a("p",[t._v("valueEquals\n判断数组是否相等")])]),t._v(" "),a("li",[a("p",[t._v("escapeRegexpString\n转义正则特殊字符串")])]),t._v(" "),a("li",[a("p",[t._v("isIE\n是否IE浏览器")])]),t._v(" "),a("li",[a("p",[t._v("isEdge\n是否Edge浏览器")])]),t._v(" "),a("li",[a("p",[t._v("isFirefox\n是否火狐浏览器")])]),t._v(" "),a("li",[a("p",[t._v("autoprefixer\n给transform，transition，animation添加前缀")])]),t._v(" "),a("li",[a("p",[t._v("kebabCase\nABDGE转成a-b-d-g-e")])]),t._v(" "),a("li",[a("p",[t._v("capitalize\n首字母大写")])]),t._v(" "),a("li",[a("p",[t._v("looseEqual\n判断两个值是否相等，只是使用了JSON.stringigy来判断，没有对循环引用作判断")])]),t._v(" "),a("li",[a("p",[t._v("arrayEquals\n判断数组是否相等")])]),t._v(" "),a("li",[a("p",[t._v("isEqual\n是否相等，如果两个值是数组，则用arrayEquals，否则用looseEqual")])]),t._v(" "),a("li",[a("p",[t._v("isEmpty\n是否为空，值得一看，各种没想到的空判断")])]),t._v(" "),a("li",[a("p",[t._v("rafThrottle\n使用requestAnimationFrame来实现throttle")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);