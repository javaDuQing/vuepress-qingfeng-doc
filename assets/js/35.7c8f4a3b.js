(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{432:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"raid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid"}},[t._v("#")]),t._v(" RAID")]),t._v(" "),a("p",[t._v("RAID /reid/（廉价磁盘冗余阵列）技术主要是为了改善磁盘的访问延迟，增强磁盘的可用性和容错能力。目前服务器级别的计算机都支持插入多块磁盘（8块或者更多），通过使用 RAID 技术，实现数据在多块磁盘上的并发读写和数据备份")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("RAID 类型")])]),t._v(" "),a("th",[a("strong",[t._v("访问速度")])]),t._v(" "),a("th",[a("strong",[t._v("数据可靠性")])]),t._v(" "),a("th",[a("strong",[t._v("磁盘利用率")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RAID 0")]),t._v(" "),a("td",[t._v("很快")]),t._v(" "),a("td",[t._v("很低")]),t._v(" "),a("td",[t._v("100%")])]),t._v(" "),a("tr",[a("td",[t._v("RAID 1")]),t._v(" "),a("td",[t._v("很慢")]),t._v(" "),a("td",[t._v("很高")]),t._v(" "),a("td",[t._v("50%")])]),t._v(" "),a("tr",[a("td",[t._v("RAID 10")]),t._v(" "),a("td",[t._v("中等")]),t._v(" "),a("td",[t._v("很高")]),t._v(" "),a("td",[t._v("50%")])]),t._v(" "),a("tr",[a("td",[t._v("RAID 5")]),t._v(" "),a("td",[t._v("较快")]),t._v(" "),a("td",[t._v("较高")]),t._v(" "),a("td",[t._v("（N - 1）/N")])]),t._v(" "),a("tr",[a("td",[t._v("RAID 6")]),t._v(" "),a("td",[t._v("较快")]),t._v(" "),a("td",[t._v("较（ RAID 5 ）高")]),t._v(" "),a("td",[t._v("（N - 2）/N")])])])]),t._v(" "),a("h3",{attrs:{id:"raid-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-0"}},[t._v("#")]),t._v(" RAID 0")]),t._v(" "),a("p",[t._v("数据在从内存缓冲区写入磁盘时，根据磁盘数量将数据分成 N 份，这些数据同时并发写入 N 块磁盘，使得数据整体写入速度是一块磁盘的 N 倍。读取时也一样，因此 RAID 0 具有极快的数据读写速度，但是 RAID 0 不做数据备份，N 块磁盘中只要有一块损坏，数据完整性就被破坏，所有磁盘的数据都会损坏")]),t._v(" "),a("h3",{attrs:{id:"raid-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-1"}},[t._v("#")]),t._v(" RAID 1")]),t._v(" "),a("p",[t._v("数据在写磁盘时，将一份数据同时写入两块磁盘，这样任何一块磁盘损坏都不会导致数据丢失，插入一块新磁盘就可以通过复制数据的方式自动修复，具有极高的可靠性")]),t._v(" "),a("h3",{attrs:{id:"raid-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-10"}},[t._v("#")]),t._v(" RAID 10")]),t._v(" "),a("p",[t._v("结合 RAID 0 和 RAID 1 两种方案，将所有磁盘平均分成两份，数据同时在两份磁盘写入，相当于 RAID1 ,但是在每一份磁盘里面的 N/2 块磁盘上，利用 RAID 0 技术并发读写，既提高可靠性又改善性能，不过 RAID 10 的磁盘利用率较低，有一半的磁盘用来写备份数据")]),t._v(" "),a("h3",{attrs:{id:"raid-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-3"}},[t._v("#")]),t._v(" RAID 3")]),t._v(" "),a("p",[t._v("一般情况下，一台服务器上不会出现同时损坏两块磁盘的情况，在只损坏一块磁盘的情况下，如果能利用其他磁盘的数据恢复损坏磁盘的数据，这样在保证可靠性的性能的同时，磁盘利用率也得到大幅提升")]),t._v(" "),a("p",[t._v("在数据写入磁盘的时候，将数据分成 N-1 份，并发写入 N-1 块磁盘，并在第 N 块磁盘记录校验数据，任何一块磁盘损坏（包括校验数据磁盘），都可以利用其他 N-1 块磁盘的数据修复")]),t._v(" "),a("p",[t._v("但是在数据修改较多的场景中，修改任何磁盘数据都会导致第 N 块磁盘重写校验数据，频繁写入的后果是第 N 块磁盘比其他磁盘容易损坏，需要频繁更换，所以 RAID 3 很少在实践中使用。")]),t._v(" "),a("h3",{attrs:{id:"raid-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-5"}},[t._v("#")]),t._v(" RAID 5")]),t._v(" "),a("p",[t._v("相比RAID 3，方案RAID 5 被更多的使用\nRAID 5 和 RAID 3 很相似，但是校验数据不是写入第 N 块磁盘，而是螺旋式地写入所有磁盘中。这样校验数据的修改也被平均到所有磁盘上，避免 RAID 3 频繁写一块磁盘的情况")]),t._v(" "),a("h3",{attrs:{id:"raid-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raid-6"}},[t._v("#")]),t._v(" RAID 6")]),t._v(" "),a("p",[t._v("如果数据需要很高的可靠性，在出现同时损坏两块磁盘的情况下（或者运维管理水平比较落后，坏了一块磁盘但是迟迟没有更换，导致又坏了一块磁盘），仍然需要修复数据，这时候可以使用 RAID 6")]),t._v(" "),a("p",[t._v("RAID 6 和 RAID 5 类似，但是数据只写入 N-2 块磁盘，并在两块磁盘中写入校验信息")]),t._v(" "),a("h2",{attrs:{id:"hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs"}},[t._v("#")]),t._v(" HDFS")]),t._v(" "),a("p",[t._v("RAID 技术可以通过硬件实现，比如专用的 RAID 卡或者主板直接支持，也可以通过软件实现。RAID 技术在传统关系数据库及文件系统中应用比较广泛，但是在NoSQL，以及分布式文件系统中，RAID 技术却遭到冷落")]),t._v(" "),a("p",[t._v("例如在 HDFS（Hadoop 分布式文件系统）中，系统在整个存储集群的多台服务器上进行并发读写和备份，可以看作在服务器集群规模上实现了类似 RAID 的功能，因此不需要 RAID")]),t._v(" "),a("p",[t._v("HDFS 以块（Block）为单位管理文件内容，一个文件被分割成若干个 Block，当应用程序写文件时，每写完一个 Block，HDFS就将其自动复制到另外两个机器上，保证每个 Block 有 3 个副本，即使有两台服务器宕机，数据依旧可以访问，相当于实现了 RAID 1 的数据复制功能")]),t._v(" "),a("p",[t._v("当对文件进行处理计算时，通过 MapReduce 并发计算任务框架，可以启动多个计算子任务（MapReduce Task），同时读取文件的多个 Block，相当于实现了 RAID 0 的并发访问功能\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1649772190910-3711755b-f00a-4e25-aab8-498fea052f43.png#clientId=u19837887-394f-4&from=paste&height=292&id=u8ac6cd76&name=image.png&originHeight=630&originWidth=1076&originalType=binary&ratio=1&rotation=0&showTitle=false&size=399497&status=done&style=none&taskId=ub6f01f22-7dd6-4f87-90d7-9f6ece87c52&title=&width=498",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1649772262936-26cca73b-d23a-4a31-bd3a-44522cf6abf2.png#clientId=u4104f609-0d5d-4&from=paste&height=578&id=u5dc886fa&name=image.png&originHeight=873&originWidth=1029&originalType=binary&ratio=1&rotation=0&showTitle=false&size=491767&status=done&style=none&taskId=u235d6d8a-e4c4-4dd6-94ea-d7af9b746eb&title=&width=681",alt:"image.png"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("from：《大型网站技术架构：核心原理与案例分析》")])])}),[],!1,null,null,null);a.default=r.exports}}]);