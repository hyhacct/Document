---
title: "逆向破解"
titleTemplate: hydra-九头蛇
---

# 概述

> 这是什么？

Hydra（九头蛇）是一款由著名黑客组织THC开发的开源暴力破解工具，支持大部分协议的在线密码破解，是网络安全渗透测试必备的一款工具。它几乎支持所有协议的在线破解

支持的协议（包括但不限于）：

> Asterisk, AFP, Cisco AAA, Cisco auth, Cisco enable, CVS, Firebird, FTP, HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-POST, HTTP-PROXY, HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTPS-POST, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MEMCACHED, MONGODB, MS-SQL, MYSQL, NCP, NNTP, Oracle Listener, Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, Radmin, RDP, Rexec, Rlogin, Rsh, RTSP, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5, SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC and XMPP


## 如何开始

如果是Linux系统，例如`Ubuntu`系统，直接使用`apt`安装即可，但是可能要换源

```bash
sudo apt -y install hydra
```


## 如何使用

示例：

```bash
hydra -l root -P /opt/new_password 192.168.110.110 ssh -o respon.txt
```

命令解析：

- `-l`：指定用户名
- `-P`：指定密码字典文件（字典越大越好）
- `192.168.110.110`：指定IP地址
- `ssh`：指定协议
- `-o`：指定输出文件


## 参数介绍

`-l`：指定用户名进行破解。当知道系统中预期的用户名时，可以使用此参数。 <br />
`-L`：指定用户的用户名字典文件。当不确定用户名时，可以使用用户名字典文件进行爆破。 <br />
`-p`：用于指定密码进行破解，但此参数很少使用，因为一般采用密码字典进行爆破。 <br />
`-P`：指定密码字典文件。密码字典文件包含了多个可能的密码，Hydra会逐一尝试这些密码。 <br />
`-e` ns：额外的选项。其中，n表示空密码试探，s表示使用指定账户和密码试探。 <br />
`-M`：指定目标IP列表文件，用于批量破解。 <br />
`-f`：找到第一对登录名或者密码时中止破解。 <br />
`-t`：指定同时运行的线程数，默认是16。增加线程数可以提高破解速度。 <br />
`-w`：设置最大超时时间，单位为秒。 <br />
`-v/-V`：显示详细过程。此参数可以帮助用户了解Hydra的破解进度和尝试的用户名/密码组合。 <br />
`-R`：恢复爆破。如果破解中断了，下次执行 hydra -R /path/to/hydra.restore 就可以继续任务。 <br />
`-x`：自定义密码，用于指定特定的密码格式或模式。 <br />
`-s`：指定非默认端口进行破解。 <br />
`-o`：指定结果输出到文件，方便后续分析和处理。 <br />

其他选项

`-C`：指定所用格式为“user:password”的字典文件。<br />
`-e`：可选选项，n：空密码试探，s：使用指定用户和密码试探，或“r”反向登录。<br />
`-u`：循环用户，而不是密码（有效!用-x表示）。<br />
`-b FORMAT`：指定-o文件的格式:text(默认)，json, jsonv1。<br />
`-T TASKS`：run TASKS connects in parallel overall (for -M, default: 64)。<br />
`-c TIME`：所有线程上每次登录尝试的等待时间(强制执行-t 1)。<br />
`-4 / -6`：使用IPv4(默认)/ IPv6地址(将always放在[]中，也放在-M中)。<br />
`-O`：使用旧的SSL v2和v3。<br />



## 程序输出

```log
[STATUS] 70.00 tries/min, 70 tries in 00:01h, 14347083 to do in 3415:59h, 13 active
[STATUS] 63.67 tries/min, 191 tries in 00:03h, 14346962 to do in 3755:45h, 13 active
[STATUS] 61.14 tries/min, 428 tries in 00:07h, 14346725 to do in 3910:43h, 13 active
[22][ssh] host: 192.168.110.110   login: admin   password: P@ssw0rd! -- 破解成功
```

这些状态信息是由Hydra工具在进行密码破解时输出的，用于显示当前破解进度和效率：

> - [STATUS] 70.00 tries/min, 70 tries in 00:01h, 14347083 to do in 3415:59h, 13 active<br />
70.00 tries/min：表示当前破解速度为每分钟70次尝试。<br />
70 tries in 00:01h：表示在1分钟内已经进行了70次尝试。<br />
14347083 to do in 3415:59h：表示还有14,347,083次尝试需要进行，预计还需要3415小时59分钟才能完成所有尝试。<br />
13 active：表示当前有13个活跃的连接正在进行尝试。<br />

> - [STATUS] 63.67 tries/min, 191 tries in 00:03h, 14346962 to do in 3755:45h, 13 active<br />
63.67 tries/min：表示当前破解速度为每分钟63.67次尝试。<br />
191 tries in 00:03h：表示在3分钟内已经进行了191次尝试。<br />
14346962 to do in 3755:45h：表示还有14,346,962次尝试需要进行，预计还需要3755小时45分钟才能完成所有尝试。<br />
13 active：表示当前有13个活跃的连接正在进行尝试。<br />

> - [STATUS] 61.14 tries/min, 428 tries in 00:07h, 14346725 to do in 3910:43h, 13 active <br />
61.14 tries/min：表示当前破解速度为每分钟61.14次尝试。 <br />
428 tries in 00:07h：表示在7分钟内已经进行了428次尝试。 <br />
14346725 to do in 3910:43h：表示还有14,346,725次尝试需要进行，预计还需要3910小时43分钟才能完成所有尝试。 <br />
13 active：表示当前有13个活跃的连接正在进行尝试。 <br />


> - [22][ssh] host: 192.168.110.110   login: admin   password: P@ssw0rd!
22端口表示使用的协议是SSH。<br />
host: host: IP_ADDRESS10：表示目标主机host: IP_ADDRESS10：表示目标主机的IP地址是IP_ADDRESS.110.110。<br />
login: admin：表示使用的用户名是admin。<br />
password: P@ssw0rd!：表示成功破解出的密码是P@ssw0rd!。<br />

出现这条信息，说明破解成功，并且提供给你了用户名和密码
