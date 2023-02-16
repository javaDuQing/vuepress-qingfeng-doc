(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{451:function(a,t,e){"use strict";e.r(t);var s=e(2),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("本文转载自："),t("a",{attrs:{href:"https://www.cnblogs.com/xiaolincoding/p/13719610.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("小林coding"),t("OutboundLink")],1)])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675843125540-11a8b2b8-4ddb-464e-8e09-96fbe048e53a.png#averageHue=%23f9f8f8&clientId=ua5111d2b-6680-4&from=paste&height=405&id=u30d4418b&name=image.png&originHeight=405&originWidth=613&originalType=binary&ratio=1&rotation=0&showTitle=false&size=37222&status=done&style=none&taskId=ufb149290-97ab-4e71-922d-c70d82bc238&title=&width=613",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"为什么要有-dma-技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-dma-技术"}},[a._v("#")]),a._v(" 为什么要有 DMA 技术")]),a._v(" "),t("p",[a._v("在没有 DMA 技术前，I/O 的过程是这样的：")]),a._v(" "),t("ul",[t("li",[a._v("CPU 发出对应的指令给磁盘控制器，然后返回；磁盘控制器收到指令后，于是就开始准备数据，会把数据放入到磁盘控制器的内部缓冲区中，然后产生一个中断；")]),a._v(" "),t("li",[a._v("CPU 收到中断信号后，停下手头的工作，接着把磁盘控制器的缓冲区的数据一次一个字节地读进自己的寄存器，然后再把寄存器里的数据写入到内存，而在数据传输的期间 CPU 是无法执行其他任务的")])]),a._v(" "),t("p",[a._v("为了方便你理解，我画了一副图：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675839690828-f0a8b80d-02a9-455a-ae11-1ac03f91b21e.png#averageHue=%23f9f8f8&clientId=u60205e35-9bfa-4&from=paste&height=785&id=ube29965b&name=image.png&originHeight=785&originWidth=1337&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107273&status=done&style=none&taskId=u9dcb974c-c82e-4bdc-a0a9-4b65f8b7771&title=&width=1337",alt:"image.png"}}),a._v("\n可以看到，整个数据的传输过程，都要需要 CPU 亲自参与搬运数据的过程，而且这个过程，CPU 是不能做其他事情的。简单的搬运几个字符数据那没问题，但是如果我们用千兆网卡或者硬盘传输大量数据的时候，都用 CPU 来搬运的话，肯定忙不过来")]),a._v(" "),t("p",[a._v("计算机科学家们发现了事情的严重性后，于是就发明了 "),t("strong",[a._v("DMA")]),a._v(" 技术，也就是直接内存访问（Direct Memory Access） 技术；什么是 DMA 技术？简单理解就是，在进行 I/O 设备和内存的数据传输的时候，数据搬运的工作全部交给 DMA 控制器，而 CPU 不再参与任何与数据搬运相关的事情，这样 CPU 就可以去处理别的事务")]),a._v(" "),t("p",[a._v("那使用 DMA 控制器进行数据传输的过程究竟是什么样的呢？下面我们来具体看看：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675840166450-0f2aa274-6cc2-4363-8972-3a262b6ea889.png#averageHue=%23fafaf9&clientId=u60205e35-9bfa-4&from=paste&height=860&id=u5bf3f32b&name=image.png&originHeight=860&originWidth=1832&originalType=binary&ratio=1&rotation=0&showTitle=false&size=138080&status=done&style=none&taskId=u2f2b9ced-c60d-4403-9787-9567c2fa839&title=&width=1832",alt:"image.png"}}),a._v("\n具体过程：")]),a._v(" "),t("ul",[t("li",[a._v("用户进程调用 read 方法，向操作系统发出 I/O 请求，请求读取数据到自己的内存缓冲区中，进程进入阻塞状态；")]),a._v(" "),t("li",[a._v("操作系统收到请求后，进一步将 I/O 请求发送 DMA，然后让 CPU 执行其他任务；")]),a._v(" "),t("li",[a._v("DMA 进一步将 I/O 请求发送给磁盘；")]),a._v(" "),t("li",[a._v("磁盘收到 DMA 的 I/O 请求，把数据从磁盘读取到磁盘控制器的缓冲区中，当磁盘控制器的缓冲区被读满后，向 DMA 发起中断信号，告知自己缓冲区已满；")]),a._v(" "),t("li",[a._v("DMA 收到磁盘的信号，将磁盘控制器缓冲区中的数据拷贝到内核缓冲区中，此时不占用 CPU，CPU 可以执行其他任务；")]),a._v(" "),t("li",[a._v("当 DMA 读取了足够多的数据，就会发送中断信号给 CPU；")]),a._v(" "),t("li",[a._v("CPU 收到 DMA 的信号，知道数据已经准备好，于是将数据从内核拷贝到用户空间，系统调用返回")])]),a._v(" "),t("p",[a._v("可以看到， 整个数据传输的过程，CPU 不再参与数据搬运的工作，而是全程由 DMA 完成，但是 CPU 在这个过程中也是必不可少的，因为传输什么数据，从哪里传输到哪里，都需要 CPU 来告诉 DMA 控制器")]),a._v(" "),t("blockquote",[t("p",[a._v("早期 DMA 只存在在主板上，如今由于 I/O 设备越来越多，数据传输的需求也不尽相同，所以每个 I/O 设备里面都有自己的 DMA 控制器")])]),a._v(" "),t("h2",{attrs:{id:"传统的文件传输有多糟糕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统的文件传输有多糟糕"}},[a._v("#")]),a._v(" 传统的文件传输有多糟糕")]),a._v(" "),t("p",[a._v("如果服务端要提供文件传输的功能，我们能想到的最简单的方式是：将磁盘上的文件读取出来，然后通过网络协议发送给客户端。")]),a._v(" "),t("p",[a._v("传统 I/O 的工作方式是，数据读取和写入是从用户空间到内核空间来回复制，而内核空间的数据是通过操作系统层面的 I/O 接口从磁盘读取或写入。")]),a._v(" "),t("p",[a._v("代码通常如下，一般会需要两个系统调用：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" tmp_buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" tmp_buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("代码很简单，虽然就两行代码，但是这里面发生了不少的事情：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675840406954-3dac74fb-38f0-4d4c-aa2a-e8eb9231784e.png#averageHue=%23f6f2e5&clientId=u6081d084-e8d0-4&from=paste&height=678&id=u157a25d7&name=image.png&originHeight=678&originWidth=1100&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76833&status=done&style=none&taskId=u366e170d-e952-4bd1-809e-73bf3afb106&title=&width=1100",alt:"image.png"}}),a._v("\n首先，期间共发生了 4 次用户态与内核态的上下文切换，因为发生了两次系统调用，一次是 read() ，一次是 write()，每次系统调用都得先从用户态切换到内核态，等内核完成任务后，再从内核态切换回用户态。")]),a._v(" "),t("p",[a._v("上下文切换到成本并不小，一次切换需要耗时几十纳秒到几微秒，虽然时间看上去很短，但是在高并发的场景下，这类时间容易被累积和放大，从而影响系统的性能。")]),a._v(" "),t("p",[a._v("其次，还发生了 4 次数据拷贝，其中两次是 DMA 的拷贝，另外两次则是通过 CPU 拷贝的，下面说一下这个过程：")]),a._v(" "),t("ul",[t("li",[a._v("第一次拷贝，把磁盘上的数据拷贝到操作系统内核的缓冲区里，这个拷贝的过程是通过 DMA 搬运的。")]),a._v(" "),t("li",[a._v("第二次拷贝，把内核缓冲区的数据拷贝到用户的缓冲区里，于是我们应用程序就可以使用这部分数据了，这个拷贝到过程是由 CPU 完成的。")]),a._v(" "),t("li",[a._v("第三次拷贝，把刚才拷贝到用户的缓冲区里的数据，再拷贝到内核的 socket 的缓冲区里，这个过程依然还是由 CPU 搬运的。")]),a._v(" "),t("li",[a._v("第四次拷贝，把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程又是由 DMA 搬运的。")])]),a._v(" "),t("p",[a._v("我们回过头看这个文件传输的过程，我们只是搬运一份数据，结果却搬运了 4 次，过多的数据拷贝无疑会消耗 CPU 资源，大大降低了系统性能")]),a._v(" "),t("p",[a._v("这种简单又传统的文件传输方式，存在冗余的上文切换和数据拷贝，在高并发系统里是非常糟糕的，多了很多不必要的开销，会严重影响系统性能。")]),a._v(" "),t("p",[a._v("所以，要想提高文件传输的性能，就需要减少「"),t("strong",[a._v("用户态与内核态的上下文切换")]),a._v("」和「"),t("strong",[a._v("内存拷贝")]),a._v("」的次数")]),a._v(" "),t("h2",{attrs:{id:"如何优化文件传输的性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何优化文件传输的性能"}},[a._v("#")]),a._v(" 如何优化文件传输的性能")]),a._v(" "),t("h3",{attrs:{id:"如何减少「用户态与内核态的上下文切换」的次数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何减少「用户态与内核态的上下文切换」的次数"}},[a._v("#")]),a._v(" 如何减少「用户态与内核态的上下文切换」的次数")]),a._v(" "),t("p",[a._v("读取磁盘数据的时候，之所以要发生上下文切换，这是因为用户空间没有权限操作磁盘或网卡，内核的权限最高，这些操作设备的过程都需要交由操作系统内核来完成，所以一般要通过内核去完成某些任务的时候，就需要使用操作系统提供的系统调用函数。")]),a._v(" "),t("p",[a._v("而一次系统调用必然会发生 2 次上下文切换：首先从用户态切换到内核态，当内核执行完任务后，再切换回用户态交由进程代码执行。")]),a._v(" "),t("p",[a._v("所以，"),t("strong",[a._v("要想减少上下文切换到次数，就要减少系统调用的次数")])]),a._v(" "),t("h3",{attrs:{id:"如何减少「数据拷贝」的次数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何减少「数据拷贝」的次数"}},[a._v("#")]),a._v(" 如何减少「数据拷贝」的次数")]),a._v(" "),t("p",[a._v("在前面我们知道了，传统的文件传输方式会历经 4 次数据拷贝，而且这里面，「从内核的读缓冲区拷贝到用户的缓冲区里，再从用户的缓冲区里拷贝到 socket 的缓冲区里」，这个过程是没有必要的。")]),a._v(" "),t("p",[a._v("因为文件传输的应用场景中，在用户空间我们并不会对数据「再加工」，所以数据实际上可以不用搬运到用户空间，因此"),t("strong",[a._v("用户的缓冲区是没有必要存在的")])]),a._v(" "),t("h2",{attrs:{id:"零拷贝技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#零拷贝技术"}},[a._v("#")]),a._v(" 零拷贝技术")]),a._v(" "),t("p",[a._v("零拷贝技术实现的方式通常有 2 种：")]),a._v(" "),t("ol",[t("li",[a._v("mmap + write")]),a._v(" "),t("li",[a._v("sendfile")])]),a._v(" "),t("p",[a._v("下面就谈一谈，它们是如何减少「上下文切换」和「数据拷贝」的次数")]),a._v(" "),t("h3",{attrs:{id:"mmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[a._v("#")]),a._v(" mmap")]),a._v(" "),t("p",[a._v("在前面我们知道，read() 系统调用的过程中会把内核缓冲区的数据拷贝到用户的缓冲区里，于是为了减少这一步开销，我们可以用 mmap() 替换 read() 系统调用函数")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("buf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mmap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sockfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("mmap() 系统调用函数会直接把内核缓冲区里的数据「映射」到用户空间，这样，操作系统内核与用户空间就不需要再进行任何的数据拷贝操作\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675840991993-f18f6581-1f5c-457c-a779-3d8390812b69.png#averageHue=%23f3f0e2&clientId=u5019c8d8-5634-4&from=paste&height=677&id=u4757102d&name=image.png&originHeight=677&originWidth=1100&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80245&status=done&style=none&taskId=u1b7d28e0-bbca-4113-b264-6bcbae33a48&title=&width=1100",alt:"image.png"}}),a._v("\n具体过程如下：")]),a._v(" "),t("ul",[t("li",[a._v("应用进程调用了 mmap() 后，DMA 会把磁盘的数据拷贝到内核的缓冲区里。接着，应用进程跟操作系统内核「共享」这个缓冲区；")]),a._v(" "),t("li",[a._v("应用进程再调用 write()，操作系统直接将内核缓冲区的数据拷贝到 socket 缓冲区中，这一切都发生在内核态，由 CPU 来搬运数据；")]),a._v(" "),t("li",[a._v("最后，把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程是由 DMA 搬运的。")])]),a._v(" "),t("p",[a._v("我们可以得知，通过使用 mmap() 来代替 read()， 可以减少一次数据拷贝的过程。\n但这还不是最理想的零拷贝，因为仍然需要通过 CPU 把内核缓冲区的数据拷贝到 socket 缓冲区里，而且仍然需要 4 次上下文切换，因为系统调用还是 2 次")]),a._v(" "),t("h3",{attrs:{id:"sendfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendfile"}},[a._v("#")]),a._v(" sendfile")]),a._v(" "),t("p",[a._v("在 Linux 内核版本 2.1 中，提供了一个专门发送文件的系统调用函数 sendfile()，函数形式如下：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("#include "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sys"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("h"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nssize_t "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" out_fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" in_fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" off_t "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("offset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" size_t count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("它的前两个参数分别是目的端和源端的文件描述符，后面两个参数是源端的偏移量和复制数据的长度，返回值是实际复制数据的长度。")]),a._v(" "),t("p",[a._v("首先，它可以替代前面的 read() 和 write() 这两个系统调用，这样就可以减少一次系统调用，也就减少了 2 次上下文切换的开销。")]),a._v(" "),t("p",[a._v("其次，该系统调用，可以直接把内核缓冲区里的数据拷贝到 socket 缓冲区里，不再拷贝到用户态，这样就只有 2 次上下文切换，和 3 次数据拷贝。如下图：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675841291592-92991a99-c149-45a5-946a-ef5a3d7c9e48.png#averageHue=%23f4f1e6&clientId=u5019c8d8-5634-4&from=paste&height=686&id=u61de8e1e&name=image.png&originHeight=686&originWidth=1100&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109896&status=done&style=none&taskId=u22c13282-aeb9-40e5-934a-9a242822dbf&title=&width=1100",alt:"image.png"}}),a._v("\n但是这还不是真正的零拷贝技术，如果网卡支持 SG-DMA（The Scatter-Gather Direct Memory Access）技术（和普通的 DMA 有所不同），我们可以进一步减少通过 CPU 把内核缓冲区里的数据拷贝到 socket 缓冲区的过程。")]),a._v(" "),t("p",[a._v("你可以在你的 Linux 系统通过下面这个命令，查看网卡是否支持 scatter-gather 特性：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ ethtool "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("k eth0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" grep scatter"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("gather\nscatter"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("gather"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" on\n")])])]),t("p",[a._v("于是，从 Linux 内核 2.4 版本开始起，对于支持网卡支持 SG-DMA 技术的情况下， sendfile() 系统调用的过程发生了点变化，具体过程如下：")]),a._v(" "),t("ul",[t("li",[a._v("第一步，通过 DMA 将磁盘上的数据拷贝到内核缓冲区里；")]),a._v(" "),t("li",[a._v("第二步，缓冲区描述符和数据长度传到 socket 缓冲区，这样网卡的 SG-DMA 控制器就可以直接将内核缓存中的数据拷贝到网卡的缓冲区里，此过程不需要将数据从操作系统内核缓冲区拷贝到 socket 缓冲区中，这样就减少了一次数据拷贝；")])]),a._v(" "),t("p",[a._v("所以，这个过程之中，只进行了 2 次数据拷贝，如下图：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675841541272-11eb940d-ce4e-43d4-a847-299d4b8d75f8.png#averageHue=%23f2f0e1&clientId=u5019c8d8-5634-4&from=paste&height=686&id=u6176d037&name=image.png&originHeight=686&originWidth=1160&originalType=binary&ratio=1&rotation=0&showTitle=false&size=117260&status=done&style=none&taskId=uf5784bc7-e6b1-444d-8ee2-949622fee2a&title=&width=1160",alt:"image.png"}})]),a._v(" "),t("p",[t("strong",[a._v("零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。")])]),a._v(" "),t("p",[t("strong",[a._v("所以，总体来看，零拷贝技术可以把文件传输的性能提高至少一倍以上")])]),a._v(" "),t("h2",{attrs:{id:"使用零拷贝技术的项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用零拷贝技术的项目"}},[a._v("#")]),a._v(" 使用零拷贝技术的项目")]),a._v(" "),t("h3",{attrs:{id:"kafka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[a._v("#")]),a._v(" Kafka")]),a._v(" "),t("p",[a._v("事实上，Kafka 这个开源项目，就利用了「零拷贝」技术，从而大幅提升了 I/O 的吞吐率，这也是 Kafka 在处理海量数据为什么这么快的原因之一。")]),a._v(" "),t("p",[a._v("如果你追溯 Kafka 文件传输的代码，你会发现，最终它调用了 Java NIO 库里的 transferTo 方法：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Overridepublic")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileChannel")]),a._v(" fileChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" fileChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferTo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" socketChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("如果 Linux 系统支持 sendfile() 系统调用，那么 transferTo() 实际上最后就会使用到 sendfile() 系统调用函数。")]),a._v(" "),t("p",[a._v("曾经有大佬专门写过程序测试过，在同样的硬件条件下，传统文件传输和零拷拷贝文件传输的性能差异，你可以看到下面这张测试数据图，使用了零拷贝能够缩短 65% 的时间，大幅度提升了机器传输数据的吞吐量：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675841675715-319792d8-4ac2-4ba6-a230-715bd547b5af.png#averageHue=%23efefef&clientId=u5019c8d8-5634-4&from=paste&height=443&id=ub10df11a&name=image.png&originHeight=443&originWidth=770&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21468&status=done&style=none&taskId=u2c0e5032-898f-4b24-ad49-b237141f25c&title=&width=770",alt:"image.png"}})]),a._v(" "),t("blockquote",[t("p",[a._v("数据来源于：https://developer.ibm.com/articles/j-zerocopy/")])]),a._v(" "),t("h3",{attrs:{id:"rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq"}},[a._v("#")]),a._v(" RocketMQ")]),a._v(" "),t("ul",[t("li",[a._v("RocketMQ 使用 mmap 是因为 RocketMQ 实现的很多功能要内存处理，例如消息过滤，顺序消息等")]),a._v(" "),t("li",[a._v("Kafka应该没在内存中做一些事情")])]),a._v(" "),t("h3",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),t("p",[a._v("另外，Nginx 也支持零拷贝技术，一般默认是开启零拷贝技术，这样有利于提高文件传输的效率，是否开启零拷贝技术的配置如下：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    sendfile on\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("sendfile 配置的具体意思:")]),a._v(" "),t("ul",[t("li",[a._v("设置为 on 表示，使用零拷贝技术来传输文件：sendfile ，这样只需要 2 次上下文切换，和 2 次数据拷贝")]),a._v(" "),t("li",[a._v("设置为 off 表示，使用传统的文件传输技术：read + write，这时就需要 4 次上下文切换，和 4 次数据拷贝")])]),a._v(" "),t("p",[a._v("当然，要使用 sendfile，Linux 内核版本必须要 2.1 以上的版本")]),a._v(" "),t("h2",{attrs:{id:"pagecache有什么作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pagecache有什么作用"}},[a._v("#")]),a._v(" PageCache有什么作用")]),a._v(" "),t("p",[a._v("回顾前面说道文件传输过程，其中第一步都是先需要先把磁盘文件数据拷贝「内核缓冲区」里，这个「内核缓冲区」实际上是 "),t("strong",[a._v("磁盘高速缓存（PageCache）")]),a._v("。")]),a._v(" "),t("p",[a._v("由于零拷贝使用了 PageCache 技术，可以使得零拷贝进一步提升了性能，我们接下来看看 PageCache 是如何做到这一点的。")]),a._v(" "),t("p",[a._v("读写磁盘相比读写内存的速度慢太多了，所以我们应该想办法把「读写磁盘」替换成「读写内存」。于是，我们会通过 DMA 把磁盘里的数据搬运到内存里，这样就可以用读内存替换读磁盘。")]),a._v(" "),t("p",[a._v("但是，内存空间远比磁盘要小，内存注定只能拷贝磁盘里的一小部分数据。")]),a._v(" "),t("p",[a._v("那问题来了，选择哪些磁盘数据拷贝到内存呢？")]),a._v(" "),t("p",[a._v("我们都知道程序运行的时候，具有「局部性」，所以通常，刚被访问的数据在短时间内再次被访问的概率很高，于是我们可以用 PageCache 来缓存最近被访问的数据，当空间不足时淘汰最久未被访问的缓存。")]),a._v(" "),t("p",[a._v("所以，读磁盘数据的时候，优先在 PageCache 找，如果数据存在则可以直接返回；如果没有，则从磁盘中读取，然后缓存 PageCache 中。")]),a._v(" "),t("p",[a._v("还有一点，读取磁盘数据的时候，需要找到数据所在的位置，但是对于机械磁盘来说，就是通过磁头旋转到数据所在的扇区，再开始「顺序」读取数据，但是旋转磁头这个物理动作是非常耗时的，为了降低它的影响，PageCache 使用了「预读功能」。")]),a._v(" "),t("p",[a._v("比如，假设 read 方法每次只会读 32 KB 的字节，虽然 read 刚开始只会读 0 ～ 32 KB 的字节，但内核会把其后面的 32～64 KB 也读取到 PageCache，这样后面读取 32～64 KB 的成本就很低，如果在 32～64 KB 淘汰出 PageCache 前，进程读取到它了，收益就非常大。")]),a._v(" "),t("p",[a._v("所以，PageCache 的优点主要是两个：")]),a._v(" "),t("ul",[t("li",[a._v("缓存最近被访问的数据；")]),a._v(" "),t("li",[a._v("预读功能；")])]),a._v(" "),t("p",[a._v("这两个做法，将大大提高读写磁盘的性能。")]),a._v(" "),t("p",[t("strong",[a._v("但是，在传输大文件（GB 级别的文件）的时候，PageCache 会不起作用，那就白白浪费 DMA 多做的一次数据拷贝，造成性能的降低，即使使用了 PageCache 的零拷贝也会损失性能")])]),a._v(" "),t("p",[a._v("这是因为如果你有很多 GB 级别文件需要传输，每当用户访问这些大文件的时候，内核就会把它们载入 PageCache 中，于是 PageCache 空间很快被这些大文件占满。")]),a._v(" "),t("p",[a._v("另外，由于文件太大，可能某些部分的文件数据被再次访问的概率比较低，这样就会带来 2 个问题：")]),a._v(" "),t("ul",[t("li",[a._v("PageCache 由于长时间被大文件占据，其他「热点」的小文件可能就无法充分使用到 PageCache，于是这样磁盘读写的性能就会下降了；")]),a._v(" "),t("li",[a._v("PageCache 中的大文件数据，由于没有享受到缓存带来的好处，但却耗费 DMA 多拷贝到 PageCache 一次")])]),a._v(" "),t("p",[a._v("所以，针对大文件的传输，不应该使用 PageCache，也就是说不应该使用零拷贝技术，因为可能由于 PageCache 被大文件占据，而导致「热点」小文件无法利用到 PageCache，这样在高并发的环境下，会带来严重的性能问题")]),a._v(" "),t("h2",{attrs:{id:"大文件传输用什么方法实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大文件传输用什么方法实现"}},[a._v("#")]),a._v(" 大文件传输用什么方法实现")]),a._v(" "),t("p",[a._v("那针对大文件的传输，我们应该使用什么方式呢？")]),a._v(" "),t("p",[a._v("我们先来看看最初的例子，当调用 read 方法读取文件时，进程实际上会阻塞在 read 方法调用，因为要等待磁盘数据的返回，如下图：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675842245959-6cbcf32e-1625-423b-b7f4-18f757ec6c07.png#averageHue=%23f9f8f7&clientId=u5d35375c-1353-4&from=paste&height=785&id=ud00106e7&name=image.png&originHeight=785&originWidth=1157&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94645&status=done&style=none&taskId=u6afe10b0-6929-4e3c-a0f8-734b0199c85&title=&width=1157",alt:"image.png"}}),a._v("\n具体过程：")]),a._v(" "),t("ul",[t("li",[a._v("当调用 read 方法时，会阻塞着，此时内核会向磁盘发起 I/O 请求，磁盘收到请求后，便会寻址，当磁盘数据准备好后，就会向内核发起 I/O 中断，告知内核磁盘数据已经准备好；")]),a._v(" "),t("li",[a._v("内核收到 I/O 中断后，就将数据从磁盘控制器缓冲区拷贝到 PageCache 里；")]),a._v(" "),t("li",[a._v("最后，内核再把 PageCache 中的数据拷贝到用户缓冲区，于是 read 调用就正常返回了。")])]),a._v(" "),t("p",[a._v("对于阻塞的问题，可以用异步 I/O 来解决，它工作方式如下图：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675842273364-372189df-ea47-4cbe-9724-e26de8eba1a7.png#averageHue=%23fafaf9&clientId=u5d35375c-1353-4&from=paste&height=725&id=u6026e0d2&name=image.png&originHeight=725&originWidth=1211&originalType=binary&ratio=1&rotation=0&showTitle=false&size=82132&status=done&style=none&taskId=u236a06fc-99b1-4fe4-a5c9-82ceb5c7b54&title=&width=1211",alt:"image.png"}}),a._v("\n它把读操作分为两部分：")]),a._v(" "),t("ul",[t("li",[a._v("前半部分，内核向磁盘发起读请求，但是可以不等待数据就位就可以返回，于是进程此时可以处理其他任务；")]),a._v(" "),t("li",[a._v("后半部分，当内核将磁盘中的数据拷贝到进程缓冲区后，进程将接收到内核的通知，再去处理数据；")])]),a._v(" "),t("p",[a._v("而且，我们可以发现，异步 I/O 并没有涉及到 PageCache，所以使用异步 I/O 就意味着要绕开 PageCache。")]),a._v(" "),t("p",[a._v("绕开 PageCache 的 I/O 叫直接 I/O，使用 PageCache 的 I/O 则叫缓存 I/O。通常，对于磁盘，异步 I/O 只支持直接 I/O。")]),a._v(" "),t("p",[a._v("前面也提到，大文件的传输不应该使用 PageCache，因为可能由于 PageCache 被大文件占据，而导致「热点」小文件无法利用到 PageCache。")]),a._v(" "),t("p",[a._v("于是，在高并发的场景下，针对大文件的传输的方式，应该使用「异步 I/O + 直接 I/O」来替代零拷贝技术。")]),a._v(" "),t("p",[a._v("直接 I/O 应用场景常见的两种：")]),a._v(" "),t("ul",[t("li",[a._v("应用程序已经实现了磁盘数据的缓存，那么可以不需要 PageCache 再次缓存，减少额外的性能损耗。在 MySQL 数据库中，可以通过参数设置开启直接 I/O，默认是不开启；")]),a._v(" "),t("li",[a._v("传输大文件的时候，由于大文件难以命中 PageCache 缓存，而且会占满 PageCache 导致「热点」文件无法充分利用缓存，从而增大了性能开销，因此，这时应该使用直接 I/O。")])]),a._v(" "),t("p",[a._v("另外，由于直接 I/O 绕过了 PageCache，就无法享受内核的这两点的优化：")]),a._v(" "),t("ul",[t("li",[a._v("内核的 I/O 调度算法会缓存尽可能多的 I/O 请求在 PageCache 中，最后「合并」成一个更大的 I/O 请求再发给磁盘，这样做是为了减少磁盘的寻址操作；")]),a._v(" "),t("li",[a._v("内核也会「预读」后续的 I/O 请求放在 PageCache 中，一样是为了减少对磁盘的操作；")])]),a._v(" "),t("p",[a._v("于是，传输大文件的时候，使用「异步 I/O + 直接 I/O」了，就可以无阻塞地读取文件了。")]),a._v(" "),t("p",[a._v("所以，传输文件的时候，我们要根据文件的大小来使用不同的方式：")]),a._v(" "),t("ul",[t("li",[a._v("传输大文件的时候，使用「异步 I/O + 直接 I/O」；")]),a._v(" "),t("li",[a._v("传输小文件的时候，则使用「零拷贝技术」；")])]),a._v(" "),t("p",[a._v("在 nginx 中，我们可以用如下配置，来根据文件的大小来使用不同的方式：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("location "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("video"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    sendfile on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n    aio on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n    directio "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("当文件大小大于 directio 值后，使用「异步 I/O + 直接 I/O」，否则使用「零拷贝技术」")])])}),[],!1,null,null,null);t.default=n.exports}}]);