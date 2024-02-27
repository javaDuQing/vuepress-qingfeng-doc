(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{440:function(t,e,i){"use strict";i.r(e);var a=i(2),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"几个9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几个9"}},[t._v("#")]),t._v(" 几个9")]),t._v(" "),e("p",[t._v("在系统的高可靠性（也称为可用性，英文描述为HA，High Available）里有个衡量其可靠性的标准——X个9（也叫Service-Level Agreement，SLA，业界一般用几个9的SLA服务等级来衡量互联网应用的可用性），这个X是代表数字3~5。X个9表示在系统1年时间的使用过程中，系统可以正常使用时间与总时间（1年）之比，我们通过下面的计算来感受下X个9在不同级别的可靠性差异")]),t._v(" "),e("ul",[e("li",[t._v("3个9：(1-99.9%)"),e("em",[t._v("365")]),t._v("24=8.76小时，表示该系统在连续运行1年时间里最多可能的业务中断时间是8.76小时")]),t._v(" "),e("li",[t._v("4个9：(1-99.99%)"),e("em",[t._v("365")]),t._v("24=0.876小时=52.6分钟，表示该系统在连续运行1年时间里最多可能的业务中断时间是52.6分钟")]),t._v(" "),e("li",[t._v("5个9：(1-99.999%)"),e("em",[t._v("365")]),t._v("24*60=5.26分钟，表示该系统在连续运行1年时间里最多可能的业务中断时间是5.26分钟")])]),t._v(" "),e("p",[t._v("那么X个9里的X只代表数字3~5，为什么没有1~2，也没有大于6的呢？我们接着往下计算：")]),t._v(" "),e("ul",[e("li",[t._v("1个9：(1-90%)*365=36.5天")]),t._v(" "),e("li",[t._v("2个9：(1-99%)*365=3.65天")]),t._v(" "),e("li",[t._v("6个9：(1-99.9999%)"),e("em",[t._v("365")]),t._v("24"),e("em",[t._v("60")]),t._v("60=31秒")])]),t._v(" "),e("p",[t._v("可以看到1个9和、2个9分别表示一年时间内业务可能中断的时间是36.5天、3.65天，这种级别的可靠性或许还不配使用“可靠性”这个词；而6个9则表示一年内业务中断时间最多是31秒，那么这个级别的可靠性并非实现不了，而是要做到从“5个9” 到“6个9”的可靠性提升的话，后者需要付出比前者几倍的成本\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648641737087-ab930adc-f5e4-4c6a-84a1-398b4fc4e311.png#clientId=uc2fbe363-3fc7-4&from=paste&height=196&id=uc2185669&name=image.png&originHeight=356&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=178376&status=done&style=none&taskId=u1b6fe5b6-4743-4572-afa0-891da7c8a74&title=&width=645",alt:"image.png"}})]),t._v(" "),e("ul",[e("li",[t._v("一般来说，2 个 9 表示系统基本可用，年度不可用时间小于 88 小时")]),t._v(" "),e("li",[t._v("3 个 9 是较高可用，年度不可用时间小于 9 个小时")]),t._v(" "),e("li",[t._v("4 个 9 是具有自动恢复能力的高用可，年度不可用时间小于 53 分钟 "),e("strong",[t._v("（电商平台中（比如淘宝、京东、拼多多）都是在这个等级）")])]),t._v(" "),e("li",[t._v("5 个 9 指极高的可用性，年度不可用时间小于 5 分钟")])]),t._v(" "),e("h2",{attrs:{id:"影响请求占比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响请求占比"}},[t._v("#")]),t._v(" 影响请求占比")]),t._v(" "),e("p",[t._v("要知道，任何一家互联网公司，都有流量的低峰期和高峰期，你在低峰期停机 1 分钟和高峰期停机 1 分钟，对业务影响的结果完全不同。如果认识不到这一点，面试官很容易认为你很业余，并没有实践经验。")]),t._v(" "),e("p",[t._v("所以，仅凭理论指标在有些情况下是不能满足实际需求的，那有没有更加科学的度量方式呢？答案就是基于一段\n时间（比如 1 年）的停机影响的请求量占比，进行评估，公式如下：\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648642258231-07a2dd84-e6d7-4ceb-bf8e-d80a30c81cf9.png#clientId=ued3ed590-1253-4&from=paste&id=ud09f9ebf&originHeight=32&originWidth=187&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u440e0892-34e7-4f67-b144-bfc186b0e14&title=",alt:""}})]),t._v(" "),e("p",[t._v("这样一来，你就可以评估，业务在高峰期停机和在低峰期停机分别造成多少的损失了。所以，如果你再回答系统高可用指标的时候，我建议你可以遵循这样的套路：先摆明度量的两种方式，“N 个 9” 和 “影响请求量占比”，然后再结合实际业务场景表明第二种方式的科学性")])])}),[],!1,null,null,null);e.default=v.exports}}]);