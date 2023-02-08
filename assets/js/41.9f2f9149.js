(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{440:function(t,e,a){"use strict";a.r(e);var i=a(2),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("常见的信息过滤与反垃圾手段有以下几种：")]),t._v(" "),e("h2",{attrs:{id:"文本匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本匹配"}},[t._v("#")]),t._v(" 文本匹配")]),t._v(" "),e("p",[t._v("正则表达式：主要解决敏感词过滤的问题，一般使用正则表达式匹配。但正则表达式的效率一般较差")]),t._v(" "),e("p",[t._v("Trie 算法（前缀树）：当并发量较高时，就需要更合适的方法，一般是 Trie 树的变种，空间和时间复杂度都比较好的有双数组 Trie 算法等（先分词，然后看看词在不在前缀树中）")]),t._v(" "),e("p",[t._v("Hash 表达式：更简单的实现是通过构造多级 Hash 表进行文本匹配。该方案处理速度较快，稍加变形，即可适应各种过滤场景，缺点是使用 Hash 表会浪费部分内存空间，如果网站敏感词数量不多，浪费部分内存还是可以接受的\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650187041731-4f27475a-bb6d-479a-8f27-086708fba856.png#clientId=u38d93476-f1e3-4&from=paste&height=644&id=u1c600cc0&name=image.png&originHeight=644&originWidth=1570&originalType=binary&ratio=1&rotation=0&showTitle=false&size=574774&status=done&style=none&taskId=u107b7b86-3e9d-4359-989d-eafa1d870d0&title=&width=1570",alt:"image.png"}})]),t._v(" "),e("h2",{attrs:{id:"分类算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类算法"}},[t._v("#")]),t._v(" 分类算法")]),t._v(" "),e("p",[t._v("早期网站识别垃圾信息主要手段是人工方式，后台运营人员对信息进行人工审核\n自动化方法是采用分类算法。以反垃圾邮件为例说明分类算法的使用，先将批量已分类的邮件样本输入分类算法进行训练，得到一个垃圾邮件分类模型，然后利用分类算法结合分类模型对待处理邮件进行识别\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650186957427-d3aeae6c-1e8b-4e37-8e7c-ca0992b04c44.png#clientId=u38d93476-f1e3-4&from=paste&height=720&id=ud6d5f537&name=image.png&originHeight=720&originWidth=1856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=382818&status=done&style=none&taskId=ub7e2dabf-60e6-4c10-afea-015f29e1771&title=&width=1856",alt:"image.png"}})]),t._v(" "),e("h2",{attrs:{id:"黑名单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#黑名单"}},[t._v("#")]),t._v(" 黑名单")]),t._v(" "),e("p",[t._v("黑名单也可以用于信息去重，黑名单可以通过 Hash 表实现，该方法实现简单，时间复杂度小，满足一般场景使用。但是当黑名单列表非常大时，Hash 表需要占据极大的内存空间")]),t._v(" "),e("p",[t._v("在对过滤需求要求不完全精确的场景下，可用布隆过滤器代替Hash表。布隆过滤器是用它的发明者巴顿布隆的名字命名的，通过一个二进制列表和一组随机数映射函数实现\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650187012491-125d61b2-e9ad-4875-b9be-e497565ff5e3.png#clientId=u38d93476-f1e3-4&from=paste&height=350&id=u72e1432f&name=image.png&originHeight=792&originWidth=1302&originalType=binary&ratio=1&rotation=0&showTitle=false&size=308898&status=done&style=none&taskId=u906273fd-0390-43cc-a3b1-e67e401f8a6&title=&width=576",alt:"image.png"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650186630673-b6ca2233-ad13-4be3-bd0b-836cb6aa57ed.png#clientId=u38d93476-f1e3-4&from=paste&height=324&id=u1785e84c&originHeight=579&originWidth=1230&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u500e5bf6-319d-420f-a060-5e58bec81b5&title=&width=688",alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);