---
title: "逆向破解"
titleTemplate: Nmap-端口扫描
---

# 概述

最流行的端口扫描和网络发现工具之一，功能强大，适用于各种操作系统。


## 如何开始

如果是Linux系统，例如`Ubuntu`系统，直接使用`apt`安装即可，但是可能要换源

```bash
sudo apt -y install nmap
```


## 基本使用方法

扫描单个主机：nmap 目标IP地址 <br />
扫描特定端口：nmap -p 端口号 目标IP地址，例如扫描80和443端口：nmap -p 80,443 目标IP地址 <br />
扫描特定网段：nmap 网段地址，例如扫描192.168.1.0/24网段：nmap 192.168.1.0/24 <br />
Ping扫描：nmap -sn 目标IP地址或网段，只进行主机发现，不进行端口扫描。 <br />



## 参数选项

`-sS`：TCP SYN扫描，这是Nmap默认的扫描方式，适用于大多数情况。<br />
`-sT`：TCP connect()扫描，这种方式会在目标主机的日志中记录大批连接请求和错误信息。<br />
`-sU`：UDP扫描，但UDP扫描是不可靠的。<br />
`-sA`：这项高级的扫描方法通常用来穿过防火墙的规则集。<br />
`-sV`：探测端口服务版本。<br />
`-Pn`：扫描之前不需要用ping命令，有些防火墙禁止ping命令。可以使用此选项进行扫描。<br />
`-v`：显示扫描过程，推荐使用。<br />
`-p`：指定端口，如“1-65535、1433、135、22、80”等。<br />
`-O`：启用远程操作系统检测，存在误报。<br />
`-A`：全面系统检测、启用脚本检测、扫描等。<br />
`-oN/-oX/-oG`：将报告写入文件，分别是正常、XML、grepable 三种格式。<br />
`-T4`：针对TCP端口禁止动态扫描延迟超过10ms。<br />
`-iL`：读取主机列表，例如，“-iL C:\ip.txt”。<br />
`-A`：选项用于使用进攻性方式扫描。<br />
`-T4`： 指定扫描过程使用的时序，总有6个级别（0-5），级别越高，扫描速度越快，但也容易被防火墙或IDS检测并屏蔽掉，在网络通讯状况较好的情况下推荐使用T4。<br />
`-oX test.xml`： 将扫描结果生成 test.xml 文件，如果中断，则结果打不开。<br />
`-oA test.xml`： 将扫描结果生成 test.xml 文件，中断后，结果也可保存。<br />
`-oG test.txt`： 将扫描结果生成 test.txt 文件。<br />
`-sn`： 只进行主机发现，不进行端口扫描。<br />
`-O`： 指定Nmap进行系统版本扫描。<br />
`-sV`： 指定让Nmap进行服务版本扫描。<br />
`-p`： 扫描指定的端口。<br />
`-sS/sT/sA/sW/sM`：指定使用 TCP SYN/Connect()/ACK/Window/Maimon scans的方式来对目标主机进行扫描。<br />
`-sU`： 指定使用UDP扫描方式确定目标主机的UDP端口状况。<br />
`-script`：执行Nmap的NSE（Nmap Scripting Engine）脚本，用于执行更复杂的任务，如漏洞检测、服务识别等。<br />
`-F`：快速模式，仅扫描TOP 100的端口。<br />
`-S <IP_Address>`：伪装成其他 IP 地址。<br />
`–ttl`：设置 time-to-live 时间。<br />
`–badsum`：使用错误的 checksum 来发送数据包（正常情况下，该类数据包被抛弃，如果收到回复，说明回复来自防火墙或IDS/IPS）。<br />
`–dns-servers`：指定DNS服务器。<br />
`–system-dns`：指定使用系统的DNS服务器。<br />
`–traceroute`：追踪每个路由节点。<br />
`–scanflags`：定制TCP包的flags。<br />
`–top-ports`：扫描开放概率最高的number个端口。<br />
`–port-ratio`：扫描指定频率以上的端口。与上述–top-ports类似，这里以概率作为参数。<br />
`–version-trace`：显示出详细的版本侦测过程信息。<br />
`–osscan-limit`：限制Nmap只对确定的主机的进行OS探测（至少需确知该主机分别有一个open和closed的端口）。<br />
`–osscan-guess`：大胆猜测对方的主机的系统类型。由此准确性会下降不少，但会尽可能多为用户提供潜在的操作系统。<br />
`–data-length`：填充随机数据让数据包长度达到 Num。<br />
`–ip-options`：使用指定的 IP 选项来发送数据包。<br />
`–spoof-mac <mac address/prefix/vendor name>`：伪装 MAC 地址。<br />
`–version-intensity`：指定版本侦测强度（0-9），默认为7。数值越高，探测出的服务越准确，但是运行时间会比较长。<br />
`–version-light`：指定使用轻量侦测方式 (intensity 2)。<br />
`–version-all`：尝试使用所有的probes进行侦测 (intensity 9)。<br />
`–version-trace`：显示出详细的版本侦测过程信息。<br />
