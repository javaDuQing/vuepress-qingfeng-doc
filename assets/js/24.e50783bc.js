(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{420:function(a,e,t){"use strict";t.r(e);var i=t(2),r=Object(i.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("em",[a._v("限流、熔断、降级hystrix都可以做")]),a._v(" "),e("em",[a._v("来源：")]),e("a",{attrs:{href:"https://pan.baidu.com/play/video#/video?path=%2F%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99%2FJava%E5%B7%A5%E7%A8%8B%E5%B8%88%E9%9D%A2%E8%AF%95%E7%AA%81%E5%87%BB%EF%BC%9A%E7%AC%AC1%E5%AD%A3%2F52_%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E9%AB%98%E5%8F%AF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%EF%BC%9F%E9%99%90%E6%B5%81%EF%BC%9F%E7%86%94%E6%96%AD%EF%BC%9F%E9%99%8D%E7%BA%A7%EF%BC%9F%E4%BB%80%E4%B9%88%E9%AC%BC%EF%BC%81%2F01_%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D%2F%E8%A7%86%E9%A2%91.avi",target:"_blank",rel:"noopener noreferrer"}},[e("em",[a._v("如何设计一个高可用系统架构")]),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"_1-总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-总览"}},[a._v("#")]),a._v(" 1 总览")]),a._v(" "),e("h3",{attrs:{id:"_1-1-设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-设计原则"}},[a._v("#")]),a._v(" 1.1 设计原则")]),a._v(" "),e("ol",[e("li",[e("em",[a._v("对依赖服务调用时出现的延迟和调用失败进行控制和容错保护")])]),a._v(" "),e("li",[e("em",[a._v("在复杂的分布式系统中，阻止某一个依赖服务的故障在整个系统中蔓延（雪崩）")])]),a._v(" "),e("li",[e("em",[a._v("提供fail-fast和快速恢复的支持")])]),a._v(" "),e("li",[e("em",[a._v("提供fail back优雅降级的支持")])]),a._v(" "),e("li",[e("em",[a._v("支持近实时的监控，报警以及运维操作")])])]),a._v(" "),e("h3",{attrs:{id:"_1-2-更细节的设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-更细节的设计原则"}},[a._v("#")]),a._v(" 1.2 更细节的设计原则")]),a._v(" "),e("ol",[e("li",[e("em",[a._v("阻止任何一个依赖服务耗尽所有的资源，例如A服务依赖B,C服务，当B服务调不通的时候，不能让所有的线程都阻塞在调用B服务上，应该让一部分线程去调用C服务（hytrix的资源隔离技术）")])]),a._v(" "),e("li",[e("em",[a._v("避免请求排队和积压，采用线程和fail fast来控制")])]),a._v(" "),e("li",[e("em",[a._v("提供fail back降级机制来应对故障")])]),a._v(" "),e("li",[e("em",[a._v("通过近实时的统计/监控/报警功能，来提高故障发现的速度")])]),a._v(" "),e("li",[e("em",[a._v("通过近实时的属性和配置热修改功能，来提高故障恢复的速度")])])]),a._v(" "),e("h3",{attrs:{id:"_1-3-具体实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-具体实现"}},[a._v("#")]),a._v(" 1.3 具体实现")]),a._v(" "),e("ol",[e("li",[e("em",[a._v("通过HystrixCommand或HystrixObservableCommand来封装对外部依赖的访问请求，这个访问请求一般会在独立的线程中（假如服务A的a方法要调用B,C服务，a方法是一个线程，调用B，C分别用两个独立的线程）")])]),a._v(" "),e("li",[e("em",[a._v("对于超出我们设定阈值的服务调用，直接进行超时，不允许其耗费过长的时间阻塞住")])]),a._v(" "),e("li",[e("em",[a._v("为每一个依赖服务维护一个独立的线程池，或者是semaphore，当线程池已满时，直接拒绝对这个服务的调用")])]),a._v(" "),e("li",[e("em",[a._v("对依赖服务的调用成功次数，失败次数，拒绝次数，超时次数，进行统计")])]),a._v(" "),e("li",[e("em",[a._v("如果对一个依赖服务的调用失败次数超过一定的阈值，自动进行熔断，在一定时间对该服务的调用直接降级，一段时间后再自动尝试恢复")])]),a._v(" "),e("li",[e("em",[a._v("当一个服务调用失败，超时等异常情况时，自动调用failback进行降级")])]),a._v(" "),e("li",[e("em",[a._v("对属性和配置的修改提供近实时的支持")])])]),a._v(" "),e("h3",{attrs:{id:"_1-4-运行架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-运行架构"}},[a._v("#")]),a._v(" 1.4 运行架构")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1627724398219-1b1190a6-2884-47c6-baac-aa8c7ab32b8d.png#clientId=ud232b3ee-4f6b-4&from=ui&id=uef6165d9&name=2879A044-253F-4A76-B294-7A26F05A01EA.png&originHeight=353&originWidth=699&originalType=binary&ratio=1&size=276388&status=done&style=none&taskId=u166d464e-b900-4762-b1e4-b44110d390d",alt:"2879A044-253F-4A76-B294-7A26F05A01EA.png"}}),a._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1627724887857-fc2cbaa1-932d-4ed7-868f-48a1a9e4f82a.png#clientId=ua824ed70-1807-4&from=paste&id=uf1640fa4&name=image.png&originHeight=530&originWidth=1240&originalType=binary&ratio=1&size=292311&status=done&style=none&taskId=ua797243c-18b7-4592-8c83-2a26e9b54d0",alt:"image.png"}})]),a._v(" "),e("h3",{attrs:{id:"_1-5-使用情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-使用情况"}},[a._v("#")]),a._v(" 1.5 使用情况")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1627725250633-1dc3de28-d970-4691-95c5-f667b7154ef8.png#clientId=uf4fec707-eb19-4&from=paste&height=474&id=u473d6230&name=image.png&originHeight=474&originWidth=1306&originalType=binary&ratio=1&size=91780&status=done&style=none&taskId=ub220580b-23ce-4bf1-aeaf-eb1b420a23f&width=1306",alt:"image.png"}}),a._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1627725273887-635f67cb-57fd-44f0-ae9a-7bab460b3bcb.png#clientId=uf4fec707-eb19-4&from=paste&height=236&id=u1da87b69&name=image.png&originHeight=236&originWidth=848&originalType=binary&ratio=1&size=43013&status=done&style=none&taskId=ufb2c4bce-007e-44a3-8949-e0a1a6cd8b1&width=848",alt:"image.png"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);