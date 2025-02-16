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

- 扫描单个主机：nmap 目标IP地址 <br />
- 扫描特定端口：nmap -p 端口号 目标IP地址，例如扫描80和443端口：`nmap -p 80,443 目标IP地址` <br />
- 扫描特定网段：nmap 网段地址，例如扫描192.168.1.0/24网段：`nmap 192.168.1.0/24` <br />
- Ping扫描：`nmap -sn 目标IP地址或网段`，只进行主机发现，不进行端口扫描。 <br />

```bash
root@localhost:~# nmap -v
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-02-12 18:54 CST
Read data files from: /usr/bin/../share/nmap
WARNING: No targets were specified, so 0 hosts scanned.
Nmap done: 0 IP addresses (0 hosts up) scanned in 0.05 seconds
           Raw packets sent: 0 (0B) | Rcvd: 0 (0B)
root@localhost:~# 
```


## 参数选项

以下是Nmap各个选项的简单总结：

1. 目标指定<br />
`-iL <file>`：从文件中读取目标。<br />
`-iR <num>`：随机选择目标。<br />
`--exclude <hosts>`：排除指定目标。<br />
`--excludefile <file>`：从文件中读取排除目标。<br />

2. 主机发现<br />
`-sL`：仅列出目标，不扫描。<br />
`-sn`：仅进行主机发现，不扫描端口。<br />
`-Pn`：跳过主机发现，假设所有主机在线。<br />
`-PS/PA/PU/PY`：使用TCP/UDP等特定协议发现主机。<br />
`-PE/PP/PM`：使用ICMP发现主机。<br />
`-PO`：使用IP协议发现主机。<br />
`-n/-R`：禁用/启用DNS解析。<br />
`--dns-servers`：指定DNS服务器。<br />
`--system-dns`：使用系统DNS。<br />
`--traceroute`：追踪到目标的路径。<br />

3. 扫描技术<br />
`-sS`：TCP SYN扫描。<br />
`-sT`：TCP Connect扫描。<br />
`-sA`：TCP ACK扫描。<br />
`-sW`：TCP Window扫描。<br />
`-sM`：TCP Maimon扫描。<br />
`-sU`：UDP扫描。<br />
`-sN/F/X`：TCP Null/FIN/Xmas扫描。<br />
`--scanflags`：自定义TCP扫描标志。<br />
`-sI`：Idle扫描。<br />
`-sY/Z`：SCTP扫描。<br />
`-sO`：IP协议扫描。<br />
`-b：`FTP bounce扫描。<br />

4. 端口指定<br />
`-p`：指定要扫描的端口范围。<br />
`--exclude-ports`：排除指定端口。<br />
`-F`：快速模式，扫描较少端口。<br />
`-r`：顺序扫描端口。<br />
`--top-ports`：扫描最常见的端口。<br />
`--port-ratio`：扫描比指定比率更常见的端口。<br />

5. 服务检测<br />
`-sV`：检测服务和版本。<br />
`--version-intensity`：调整检测强度。<br />
`--version-light`：轻量级检测。<br />
`--version-all`：全面检测。<br />
`--version-trace`：显示检测过程。<br />

6. 脚本扫描<br />
`-sC`：运行默认脚本。<br />
`--script`：指定脚本。<br />
`--script-args`：为脚本提供参数。<br />
`--script-args-file`：从文件读取脚本参数。<br />
`--script-trace`：显示脚本扫描过程。<br />
`--script-updatedb`：更新脚本数据库。<br />
`--script-help`：显示脚本帮助信息。<br />

7. 操作系统检测<br />
`-O`：启用操作系统检测。<br />
`--osscan-limit`：仅对有希望的目标检测。<br />
`--osscan-guess`：更积极地猜测操作系统。<br />

8. 时间和性能<br />
`-T<0-5>`：设置扫描速度。<br />
`--min/max-hostgroup`：设置并行扫描组大小。<br />
`--min/max-parallelism`：设置并行探测数量。<br />
`--min/max/initial-rtt-timeout`：设置探测往返时间。<br />
`--max-retries`：限制重传次数。<br />
`--host-timeout`：放弃目标的时间。<br />
`--scan-delay`：调整探测延迟。<br />
`--min/max-rate`：设置发送速率。<br />

9. 防火墙/IDS规避<br />
`-f`：分片包。<br />
`--mtu`：设置MTU。<br />
`-D`：使用诱饵主机。<br />
`-S`：伪装源地址。<br />
`-e`：指定接口。<br />
`-g`：指定源端口。<br />
`--proxies`：使用代理。<br />
`--data`：附加自定义负载。<br />
`--data-string`：附加ASCII字符串。<br />
`--data-length`：附加随机数据。<br />
`--ip-options`：设置IP选项。<br />
`--ttl`：设置TTL。<br />
`--spoof-mac`：伪装MAC地址。<br />
`--badsum`：发送错误校验和。<br />

10. 输出<br />
`-oN/X/S/G`：以普通/XML/脚本/Grepable格式输出。<br />
`-oA`：同时输出三种格式。<br />
`-v`：增加详细程度。<br />
`-d`：增加调试信息。<br />
`--reason`：显示端口状态原因。<br />
`--open`：仅显示开放端口。<br />
`--packet-trace`：显示所有发送和接收的包。<br />
`--iflist`：打印主机接口和路由。<br />
`--append-output`：追加到输出文件。<br />
`--resume`：恢复中断的扫描。<br />
`--noninteractive`：禁用交互。<br />
`--stylesheet`：指定XSL样式表。<br />
`--webxml`：使用Nmap官网的样式表。<br />
`--no-stylesheet`：不关联XSL样式表。<br />

11. 其他<br />
`-6`：启用IPv6扫描。<br />
`-A`：启用OS检测、版本检测、脚本扫描和追踪。<br />
`--datadir`：指定数据文件位置。<br />
`--send-eth/--send-ip`：使用以太网帧或IP包发送。<br />
`--privileged`：假设用户有完全权限。<br />
`--unprivileged`：假设用户没有原始套接字权限。<br />
`-V`：显示版本号。<br />
`-h`：显示帮助信息。<br />



## 参数内容详情

```bash
root@localhost:~# nmap --help
Nmap 7.94SVN ( https://nmap.org )
Usage: nmap [Scan Type(s)] [Options] {target specification}
TARGET SPECIFICATION:
  Can pass hostnames, IP addresses, networks, etc.
  Ex: scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254
  -iL <inputfilename>: Input from list of hosts/networks
  -iR <num hosts>: Choose random targets
  --exclude <host1[,host2][,host3],...>: Exclude hosts/networks
  --excludefile <exclude_file>: Exclude list from file
HOST DISCOVERY:
  -sL: List Scan - simply list targets to scan
  -sn: Ping Scan - disable port scan
  -Pn: Treat all hosts as online -- skip host discovery
  -PS/PA/PU/PY[portlist]: TCP SYN/ACK, UDP or SCTP discovery to given ports
  -PE/PP/PM: ICMP echo, timestamp, and netmask request discovery probes
  -PO[protocol list]: IP Protocol Ping
  -n/-R: Never do DNS resolution/Always resolve [default: sometimes]
  --dns-servers <serv1[,serv2],...>: Specify custom DNS servers
  --system-dns: Use OS's DNS resolver
  --traceroute: Trace hop path to each host
SCAN TECHNIQUES:
  -sS/sT/sA/sW/sM: TCP SYN/Connect()/ACK/Window/Maimon scans
  -sU: UDP Scan
  -sN/sF/sX: TCP Null, FIN, and Xmas scans
  --scanflags <flags>: Customize TCP scan flags
  -sI <zombie host[:probeport]>: Idle scan
  -sY/sZ: SCTP INIT/COOKIE-ECHO scans
  -sO: IP protocol scan
  -b <FTP relay host>: FTP bounce scan
PORT SPECIFICATION AND SCAN ORDER:
  -p <port ranges>: Only scan specified ports
    Ex: -p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9
  --exclude-ports <port ranges>: Exclude the specified ports from scanning
  -F: Fast mode - Scan fewer ports than the default scan
  -r: Scan ports sequentially - don't randomize
  --top-ports <number>: Scan <number> most common ports
  --port-ratio <ratio>: Scan ports more common than <ratio>
SERVICE/VERSION DETECTION:
  -sV: Probe open ports to determine service/version info
  --version-intensity <level>: Set from 0 (light) to 9 (try all probes)
  --version-light: Limit to most likely probes (intensity 2)
  --version-all: Try every single probe (intensity 9)
  --version-trace: Show detailed version scan activity (for debugging)
SCRIPT SCAN:
  -sC: equivalent to --script=default
  --script=<Lua scripts>: <Lua scripts> is a comma separated list of
           directories, script-files or script-categories
  --script-args=<n1=v1,[n2=v2,...]>: provide arguments to scripts
  --script-args-file=filename: provide NSE script args in a file
  --script-trace: Show all data sent and received
  --script-updatedb: Update the script database.
  --script-help=<Lua scripts>: Show help about scripts.
           <Lua scripts> is a comma-separated list of script-files or
           script-categories.
OS DETECTION:
  -O: Enable OS detection
  --osscan-limit: Limit OS detection to promising targets
  --osscan-guess: Guess OS more aggressively
TIMING AND PERFORMANCE:
  Options which take <time> are in seconds, or append 'ms' (milliseconds),
  's' (seconds), 'm' (minutes), or 'h' (hours) to the value (e.g. 30m).
  -T<0-5>: Set timing template (higher is faster)
  --min-hostgroup/max-hostgroup <size>: Parallel host scan group sizes
  --min-parallelism/max-parallelism <numprobes>: Probe parallelization
  --min-rtt-timeout/max-rtt-timeout/initial-rtt-timeout <time>: Specifies
      probe round trip time.
  --max-retries <tries>: Caps number of port scan probe retransmissions.
  --host-timeout <time>: Give up on target after this long
  --scan-delay/--max-scan-delay <time>: Adjust delay between probes
  --min-rate <number>: Send packets no slower than <number> per second
  --max-rate <number>: Send packets no faster than <number> per second
FIREWALL/IDS EVASION AND SPOOFING:
  -f; --mtu <val>: fragment packets (optionally w/given MTU)
  -D <decoy1,decoy2[,ME],...>: Cloak a scan with decoys
  -S <IP_Address>: Spoof source address
  -e <iface>: Use specified interface
  -g/--source-port <portnum>: Use given port number
  --proxies <url1,[url2],...>: Relay connections through HTTP/SOCKS4 proxies
  --data <hex string>: Append a custom payload to sent packets
  --data-string <string>: Append a custom ASCII string to sent packets
  --data-length <num>: Append random data to sent packets
  --ip-options <options>: Send packets with specified ip options
  --ttl <val>: Set IP time-to-live field
  --spoof-mac <mac address/prefix/vendor name>: Spoof your MAC address
  --badsum: Send packets with a bogus TCP/UDP/SCTP checksum
OUTPUT:
  -oN/-oX/-oS/-oG <file>: Output scan in normal, XML, s|<rIpt kIddi3,
     and Grepable format, respectively, to the given filename.
  -oA <basename>: Output in the three major formats at once
  -v: Increase verbosity level (use -vv or more for greater effect)
  -d: Increase debugging level (use -dd or more for greater effect)
  --reason: Display the reason a port is in a particular state
  --open: Only show open (or possibly open) ports
  --packet-trace: Show all packets sent and received
  --iflist: Print host interfaces and routes (for debugging)
  --append-output: Append to rather than clobber specified output files
  --resume <filename>: Resume an aborted scan
  --noninteractive: Disable runtime interactions via keyboard
  --stylesheet <path/URL>: XSL stylesheet to transform XML output to HTML
  --webxml: Reference stylesheet from Nmap.Org for more portable XML
  --no-stylesheet: Prevent associating of XSL stylesheet w/XML output
MISC:
  -6: Enable IPv6 scanning
  -A: Enable OS detection, version detection, script scanning, and traceroute
  --datadir <dirname>: Specify custom Nmap data file location
  --send-eth/--send-ip: Send using raw ethernet frames or IP packets
  --privileged: Assume that the user is fully privileged
  --unprivileged: Assume the user lacks raw socket privileges
  -V: Print version number
  -h: Print this help summary page.
EXAMPLES:
  nmap -v -A scanme.nmap.org
  nmap -v -sn 192.168.0.0/16 10.0.0.0/8
  nmap -v -iR 10000 -Pn -p 80
SEE THE MAN PAGE (https://nmap.org/book/man.html) FOR MORE OPTIONS AND EXAMPLES
root@localhost:~# 
```

