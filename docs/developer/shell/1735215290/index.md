---
title: "Shell"
titleTemplate: mtr 命令选项介绍
---

# 概述

mtr是一款开源的网络探测工具，可以用来测试网络连接、路由、DNS解析、以及其它网络相关问题。

## 安装

::: code-group

```bash [CentOS]
yum install -y mtr
```

```bash [Ubuntu/Debian]
apt install -y mtr
```

:::


## 使用

```
mtr [options] [host]
```

## 选项



| 选项        |  用途 |
| ------------- | ----: |
| `-4` , `--ipv4` | 仅使用IPv4。 |
| `-6` , `--ipv6` | 仅使用IPv6。 |
| `-u` , `--udp` | 使用UDP代替ICMP进行探测。 |
| `-T` , `--tcp` | 使用TCP代替ICMP进行探测。 |
| `-I` , `--interface` | 使用指定的网络接口。 |
| `-a` , `--address` | 将出站socket绑定到指定的地址。 |
| `-f` , `--first-ttl` | 设置开始的TTL值。 |
| `-m` , `--max-ttl` | 设置最大TTL值，即最大跳数。 |
| `-U` , `--max-unknown` | 设置未知主机的最大数量。 |
| `-P` , `--port` | 设置TCP、SCTP或UDP的目标端口号。 |
| `-L` , `--localport` | 设置UDP的源端口号。 |
| `-s` , `--psize` | 设置用于探测的数据包大小。 |
| `-B` , `--bitpattern` | 设置在负载中使用的位模式。 |
| `-i` , `--interval` | 设置ICMP echo请求的间隔时间。 |
| `-G` , `--gracetime` | 设置等待响应的秒数。 |
| `-Q` , `--tos` | 设置IP头中的服务类型字段。 |
| `-e` , `--mpls` | 显示ICMP扩展中的MPLS信息。 |
| `-Z` , `--timeout` | 设置探针socket保持打开的秒数。 |
| `-M` , `--mark` | 标记每个发送的数据包。 |
| `-r` , `--report` | 以报告模式输出。 |
| `-w` , `--report-wide` | 以宽报告模式输出。 |
| `-c` , `--report-cycles` | 设置发送的ping数量。 |
| `-j` , `--json` | 以JSON格式输出。 |
| `-x` , `--xml` | 以XML格式输出。 |
| `-C` , `--csv` | 以逗号分隔值格式输出。 |
| `-l` , `--raw` | 以原始格式输出。 |
| `-p` , `--split` | 分割输出。 |
| `-t` , `--curses` | 使用curses终端界面。 |
| `-g` , `--gtk` | 使用GTK+ xwindow界面。 |
| `-n` , `--no-dns` | 不解析主机名。 |
| `-b` , `--show-ips` | 显示IP地址和主机名。 |
| `-o` , `--order` | 选择输出字段。 |
| `-y` , `--ipinfo` | 选择IP信息输出。 |
| `-z` , `--aslookup` | 显示AS号码。 |
| `-h` , `--help` | 显示帮助信息并退出。 |
