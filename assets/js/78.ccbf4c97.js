(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{477:function(v,_,i){"use strict";i.r(_);var s=i(2),e=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1678522059062-1ec29669-905c-4389-9e08-b362007aedc4.png",alt:"image.png"}})]),v._v(" "),_("ol",[_("li",[v._v("Redis为什么这么快？答了数据结构的优化、AIO、内存存储。又问了Mysql不是AIO吗？是怎么实现的？说了没看就没细问（4年 1面 高德）")]),v._v(" "),_("li",[v._v("redis缓存回收机制，准备同步，哨兵机制（网易 1面）")]),v._v(" "),_("li",[v._v("分布式缓存redis原理（网易 2面）")]),v._v(" "),_("li",[v._v("分布式缓存读写不一致问题（网易 2面）（蚂蚁 3面）（滴滴 1面 1年）（字节 2年 1面）")]),v._v(" "),_("li",[v._v("Redis缓存雪崩？击穿？穿透？（蚂蚁 3面）")]),v._v(" "),_("li",[v._v("Redis的分布式锁有了解吗？如何实现的？说说Jedis, Lettece 和 Redission的适用场景？Redission底层实现原理？（滴滴 1面 1年）")]),v._v(" "),_("li",[v._v("redis缓存是单线程还是多线程的呀？既然redis是单线程为什么还能处理大量的读请求呢？（滴滴 3面 1年）")]),v._v(" "),_("li",[v._v("介绍下缓存击穿, 缓存雪崩, 缓存穿透是什么？解决方案？（滴滴 3面 1年）")]),v._v(" "),_("li",[v._v("Redis有用过失效时间对吧？如果没有失效时间, 你自己如何去实现一个失效时间？（滴滴 3面 1年）")]),v._v(" "),_("li",[v._v("Redis 在项目中是用来做什么的（字节 2年 1面）")]),v._v(" "),_("li",[v._v("Redis的两种持久化模式（字节 2年 2面）")]),v._v(" "),_("li",[v._v("一致性hash原理，解决什么问题，数据倾斜，为什么是2的32次方，20次方可以么（阿里 1面）")]),v._v(" "),_("li",[v._v("redis缓存穿透，布隆过滤器，怎么使用，有什么问题，怎么解决这个问题（阿里 1面）")]),v._v(" "),_("li",[v._v("redis分布式锁，过期时间怎么定的，如果一个业务执行时间比较长，锁过期了怎么办，怎么保证释放锁的一个原子性，你们redis是集群的么，讲讲redlock算法（阿里 1面）")]),v._v(" "),_("li",[v._v("redis线程模型，单线程有什么优缺点，为什么单线程能保证高性能，什么情况下会出现阻塞，怎么解决（阿里 2面）")]),v._v(" "),_("li",[v._v("你们用的redis集群么，扩容的过程，各个节点间怎么通信的（阿里 3面）")]),v._v(" "),_("li",[v._v("怎么保证redis和mysql的一致性，redis网络原因执行超时了会执行成功么，那不成功怎么保证数据一致性（阿里 4面）")]),v._v(" "),_("li",[v._v("redis持久化过程，aof持久化会出现阻塞么，一般什么情况下使用rdb，aof（阿里 4面）")]),v._v(" "),_("li",[v._v("你们用redis么，用来做什么，什么场景使用的，遇到过什么问题，怎么解决的（阿里 5面）")]),v._v(" "),_("li",[v._v("实际项目中使用redis，用来做什么，为什么用redis做缓存不用mysql 持久化，redis为什么比mysql快（斗鱼 1面）")]),v._v(" "),_("li",[v._v("redis主从同步流程，io多路复用原理；（蚂蚁 1面）")]),v._v(" "),_("li",[v._v("redis极热key问题（读写分离，客户端缓存）（蚂蚁 2面）")]),v._v(" "),_("li",[v._v("redis分布式锁，主从不一致问题如何解决（ Redlock）（蚂蚁 2面）")]),v._v(" "),_("li",[v._v("redis了解吗？你说说怎么用redis实现分布式锁？（美团 1面）")]),v._v(" "),_("li",[v._v("redis集群高可用原理，一台挂了，怎么切换到另一台（蚂蚁 3年 1面）")]),v._v(" "),_("li",[v._v("项目中为什么使用Redis？\n"),_("ol",[_("li",[v._v("Redis的性能优化你如何实现？")]),v._v(" "),_("li",[v._v("从底层实现角度讲讲Redis为什么快?")]),v._v(" "),_("li",[v._v("线上Redis有哪些事项需要注意?")]),v._v(" "),_("li",[v._v("线上如何让Redis 6.x性能发挥到最大?")]),v._v(" "),_("li",[v._v("线上Redis持久化方案如何选型?为什么?")]),v._v(" "),_("li",[v._v("谈谈Redis底层多路复用实现细节")]),v._v(" "),_("li",[v._v("有没有使用Redis做过设计呢?")])])]),v._v(" "),_("li",[v._v("Redis 主从复制的原理**（美团）**")]),v._v(" "),_("li",[v._v("说下哈希一致性算法？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis的hash数据结构和如何扩容**（腾讯）**")]),v._v(" "),_("li",[v._v("Redis 挂了怎么解决？（增加本地缓存）（"),_("strong",[v._v("百世物流")]),v._v("）")]),v._v(" "),_("li",[v._v("分布式锁的使用（"),_("strong",[v._v("光云")]),v._v("）\n"),_("ol",[_("li",[v._v("为什么使用Redisson")]),v._v(" "),_("li",[v._v("Redisson 挂了一台怎么办")]),v._v(" "),_("li",[v._v("redis为什么可以实现锁")]),v._v(" "),_("li",[v._v("分布式锁还有其他的方式吗")])])]),v._v(" "),_("li",[v._v("redis 持久化（"),_("strong",[_("em",[v._v("光云")])]),v._v("）")]),v._v(" "),_("li",[v._v("Redis 为什么那么快？"),_("strong",[v._v("（来未来科技）")]),v._v(" "),_("ol",[_("li",[v._v("讲一下常见的IO模型")]),v._v(" "),_("li",[v._v("用主从redis 做锁可以吗？有什么问题？")])])]),v._v(" "),_("li",[v._v("Redis "),_("strong",[v._v("（大搜车）")]),v._v(" "),_("ol",[_("li",[v._v("介绍一下线上redis的使用。")]),v._v(" "),_("li",[v._v("redis 挂了怎么办？")]),v._v(" "),_("li",[v._v("如何保证 本地缓存 和 redis 还有mysql 的数据一致性")]),v._v(" "),_("li",[v._v("延迟双删的策略。")]),v._v(" "),_("li",[v._v("redis 的缓存穿透如何解决？")]),v._v(" "),_("li",[v._v("布隆过滤器 如何实现的？")]),v._v(" "),_("li",[v._v("10W 数据 和1W数据 布隆过滤器的长度是否是变化的？不变的话是多大？（这个要结合误差率来回答）")])])]),v._v(" "),_("li",[v._v("redis**（银泰）**\n"),_("ol",[_("li",[v._v("项目中redis用来做什么了？")]),v._v(" "),_("li",[v._v("redis 还能干嘛。（说了一下五种数据结构的用途，还有分布式锁。）")]),v._v(" "),_("li",[v._v("redis 单线程为啥快？多线程会有哪些问题？")]),v._v(" "),_("li",[v._v("分布式锁聊一下。")]),v._v(" "),_("li",[v._v("redis 如何实现 可重入锁？")])])]),v._v(" "),_("li",[v._v("redis "),_("strong",[v._v("（有赞）")]),v._v(" "),_("ol",[_("li",[v._v("缓存异常情况如何处理？")]),v._v(" "),_("li",[v._v("热key的问题处理。")]),v._v(" "),_("li",[v._v("你在线上会做兜底方案吗？")]),v._v(" "),_("li",[v._v("开发周期不够怎么办？（周末加班也要完成该问题）")])])]),v._v(" "),_("li",[v._v("你们系统中分布式锁是如何实现的？(当时回答采用 redis 实现，set(key,value,nx,ex,expire)) "),_("strong",[v._v("（美团）")])]),v._v(" "),_("li",[v._v("上面使用 redis 实现分布式锁会存在什么问题？ "),_("strong",[v._v("（美团）")])]),v._v(" "),_("li",[v._v("项目中除了使用 redis 实现分布式锁，还有哪些使用场景？ "),_("strong",[v._v("（美团）")])]),v._v(" "),_("li",[v._v("redis 的数据持久化机制？如何保证数据不丢失？当 redis 内存满了以后，内存的淘汰策略？ "),_("strong",[v._v("（美团）")])]),v._v(" "),_("li",[v._v("redis 实现分布式锁的原理？redis 的分布式锁有什么问题？lua 脚本熟悉吗？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis 中 key 的过期策略是什么？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis 的持久化机制？AOF 和 RDB 的区别？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("什么是缓存击穿、缓存穿透、缓存雪崩？如何处理？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis 持久化的机制？如何保证数据不丢失？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis 的内存淘汰策略？key 的过期策略？"),_("strong",[v._v("（字节）")])]),v._v(" "),_("li",[v._v("redis 实现分布式锁存在什么问题？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("redis 分布式锁与 lua 脚本？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("redission 了解过吗？说说它的实现原理？"),_("strong",[v._v("腾讯")])]),v._v(" "),_("li",[v._v("使用 redis 过程中遇到过什么问题？如何解决热 key 问题？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("你们的 redis 使用的那种模式？集群模式和哨兵模式的区别？集群模式和哨兵模式如何保证 redis 集群的高可用？redis 集群的故障转移过程？"),_("em",[v._v("**")]),v._v("（腾讯）_**")]),v._v(" "),_("li",[v._v("raft 协议的原理？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("redis 集群如何实现扩容？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("redis 的 rehash 的过程？"),_("strong",[v._v("（腾讯）")])]),v._v(" "),_("li",[v._v("Redis 有哪些数据类型？List 中数据非常多怎么办？"),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("Redis 的持久化机制？AOF 和 RDB 的优缺点？"),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("Redis 的高可用怎么保证？线上有多少台机器？怎么部署的？"),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("Redis 实现分布式锁的原理？存在什么问题？"),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("Redis 中遇到热 key 会造成什么问题？如何发现热 key？如何解决热 key 的问题？"),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("redis如果list较大，怎么优化 "),_("strong",[v._v("（阿里）")])]),v._v(" "),_("li",[v._v("redis的跳表用在哪，为什么用跳表 "),_("strong",[v._v("（美团）")])]),v._v(" "),_("li",[v._v("redis cluster集群扩容怎么数据平滑过度，从客户端设计 "),_("strong",[v._v("（YY）")])]),v._v(" "),_("li",[v._v("redis热key怎么解决？"),_("strong",[v._v("（饿了吗）")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);