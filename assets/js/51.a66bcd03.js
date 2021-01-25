(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1986:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"单词统计实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单词统计实例"}},[s._v("#")]),s._v(" 单词统计实例")]),s._v(" "),t("p",[s._v("到目前为止，hadoop所有的环境都搭建完成了，现在来看个hadoop运行实例（单词统计）。在主节点node01上操作：")]),s._v(" "),t("p",[s._v("1、在hdfs上创建一个目录，并在本地文件系统创建一个words文件（随便写几个单词）")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hdfs dfs -mkdir /test\nhdfs dfs -ls /test\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /home/hadoop/words\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" words \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" words\n")])])]),t("p",[s._v("2、把words文件推送到hdfs上：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hdfs dfs -put /home/hadoop/words /test\nhdfs dfs -ls -r /test\n")])])]),t("p",[s._v("3、执行示例：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hadoop jar /kkb/install/hadoop-2.6.0-cdh5.14.2/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.6.0-cdh5.14.2.jar wordcount /test/words /test/output\n")])])]),t("p",[s._v("4、查看结果输出文件：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hdfs dfs -text /test/output/part-r-00000\nhdfs dfs -ls /test/output/\n")])])]),t("p",[s._v("5、从web页面下载part-r-00000")]),s._v(" "),t("p",[s._v("配置windows的hosts文件，用管理员身份修改"),t("code",[s._v("windows")]),s._v("的文件"),t("code",[s._v("C:/windows/system32/drivers/etc/hosts")])]),s._v(" "),t("p",[s._v("添加下列内容：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".52.101 node01\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".52.102 node02\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".52.103 node03\n")])])]),t("p",[s._v("使用浏览器访问"),t("code",[s._v("node01:50070")]),s._v("，进到文件系统页面找到文件下载即可")]),s._v(" "),t("h2",{attrs:{id:"创建快捷脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建快捷脚本"}},[s._v("#")]),s._v(" 创建快捷脚本")]),s._v(" "),t("h3",{attrs:{id:"xcall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcall"}},[s._v("#")]),s._v(" xcall")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("所有节点创建"),t("strong",[s._v("快速在所有节点执行命令")]),s._v("的脚本"),t("code",[s._v("xcall")])])]),s._v(" "),t("p",[s._v("在node01执行：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - hadoop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/bin  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/bin/xcall\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("params")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" $i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$params")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" node0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /etc/profile;'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$params")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" xcall\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" xcall node02:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#node02要创建一个bin目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" xcall node03:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#node03要创建一个bin目录")]),s._v("\n")])])]),t("p",[s._v("所有机器为"),t("code",[s._v("~/bin")]),s._v("目录添加环境变量：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /home/hadoop/.bash_profile\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/hadoop/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.local/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/sbin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZOOKEEPER_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_HOME")]),s._v("/bin\n")])])]),t("p",[s._v("查看效果：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hadoop@node01 bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ xcall jps\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node01 jps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27395")]),s._v(" DataNode\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27270")]),s._v(" NameNode\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27799")]),s._v(" NodeManager\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27544")]),s._v(" SecondaryNameNode\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29195")]),s._v(" QuorumPeerMain\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28172")]),s._v(" JobHistoryServer\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27679")]),s._v(" ResourceManager\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29599")]),s._v(" Jps\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node02 jps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17698")]),s._v(" NodeManager\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19155")]),s._v(" Jps\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18908")]),s._v(" QuorumPeerMain\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17598")]),s._v(" DataNode\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node03 jps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19376")]),s._v(" Jps\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17686")]),s._v(" DataNode\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19128")]),s._v(" QuorumPeerMain\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17786")]),s._v(" NodeManager\n")])])]),t("h3",{attrs:{id:"xsync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xsync"}},[s._v("#")]),s._v(" xsync")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("在主节点"),t("code",[s._v("node01")]),s._v("上创建"),t("code",[s._v("xsync")]),s._v("脚本文件，方便快速同步所有机器的文件。")]),s._v(" "),t("p",[s._v("xsync脚本里面用到了rsync命令，rsync命令是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。rsync使用所谓的“rsync算法”来使本地和远程两个主机之间的文件达到同步，这个算法"),t("strong",[s._v("只传送两个文件的不同部分")]),s._v("，而不是每次都整份传送，因此速度相当快。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://man.linuxde.net/rsync",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看rsync命令更多信息"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/bin/xsync\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 获取输入参数个数，如果没有参数，直接退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pcount")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("pcount"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" no args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2 获取文件名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" $p1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fname")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3 获取上级目录到绝对路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pdir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),s._v("dirname $p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pdir")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4 获取当前用户名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5 循环")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ------------------- node0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" --------------\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pdir")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("@node0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pdir")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("chmod 777 ~/bin/xsync\n")])])]),t("h3",{attrs:{id:"hadoop-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-sh"}},[s._v("#")]),s._v(" hadoop.sh")]),s._v(" "),t("p",[s._v("创建"),t("strong",[s._v("快速启动和停止hadoop")]),s._v("的脚本：hadoop.sh")]),s._v(" "),t("p",[s._v("主节点node01执行以下操作：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" hadoop.sh\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /home/hadoop/.bash_profile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/start-dfs.sh\n /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/start-yarn.sh\n /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/mr-jobhistory-daemon.sh start historyserver\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stop"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/stop-dfs.sh\n /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/stop-yarn.sh\n /kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/mr-jobhistory-daemon.sh stop  historyserver\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" ~/bin/hadoop.sh\n")])])]),t("p",[s._v("验证效果：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("hadoop.sh start\nhadoop.sh stop\n")])])]),t("h3",{attrs:{id:"zkhadoop-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zkhadoop-sh"}},[s._v("#")]),s._v(" zkhadoop.sh")]),s._v(" "),t("p",[s._v("主节点node01创建快速启动zookeeper集群和hadoop集群的脚本：zkhadoop.sh：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/bin/zkhadoop.sh\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n/kkb/install/zookeeper-3.4.5-cdh5.14.2/bin/zkServer.sh start\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" node02 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /etc/profile;/kkb/install/zookeeper-3.4.5-cdh5.14.2/bin/zkServer.sh start"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" node03 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /etc/profile;/kkb/install/zookeeper-3.4.5-cdh5.14.2/bin/zkServer.sh start"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" node01 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/start-dfs.sh;/kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/start-yarn.sh"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n/kkb/install/hadoop-2.6.0-cdh5.14.2/sbin/mr-jobhistory-daemon.sh start historyserver\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" ~/bin/zkhadoop.sh\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("zkhadoop.sh\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);