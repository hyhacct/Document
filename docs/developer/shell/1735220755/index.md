---
title: "Shell"
titleTemplate: dmidecode 命令介绍
---

# 概述

`dmidecode` 命令用于显示系统硬件信息，包括 `CPU`、`主板`、`内存`、`BIOS`、`机箱`等。

例如你想查看你的服务器SN是多少，什么型号的主板，什么型号的CPU，以及各种硬件信息，全都可以通过它来查看。

## 使用方法

```bash
#!/usr/bin/env bash

{
    dmidecode -s system-serial-number   # 获取本机序列号(SN)
    dmidecode -s bios-vendor            # 获取主板厂商
    dmidecode -s system-product-name    # 获取本机型号
    dmidecode -s system-uuid            # 获取本机UUID
    dmidecode -s processor-frequency    # 获取CPU频率
    dmidecode -s processor-version      # 获取CPU型号
    dmidecode -s processor-manufacturer # 获取CPU厂商
    dmidecode -s processor-family       # 获取CPU系列
    dmidecode -s chassis-type           # 获取机箱类型
}
```


## 选项介绍

| 选项        |  用途 |
| ------------- | ----: |
| `-t` , `--type` | 显示指定类型信息。 |
| `-s` , `--string` | 显示指定字符串信息。 |
| `-q` , `--quiet` | 减少输出的详细程度。 |
| `-h` , `--help` | 显示帮助信息。 |
| `-V` , `--version` | 显示版本信息。 |
| `-u` , `--dump` | 显示原始 DMI 数据。 |
| `--dump-bin` | 将 DMI 数据转储到二进制文件。 |
| `--from-dump` | 从二进制文件中读取 DMI 数据。 |
| `--no-sysfs` | 不从 sysfs 文件系统中读取 DMI 数据。 |
| `--oem-string` | 显示指定 OEM 字符串信息。 |
| `-d` , `--dev-mem` | 指定从哪个设备文件中读取内存信息。 |
| `--no-quirks` | 不使用厂商修正。 |
| `-H` , `--handle` | 显示指定句柄的 DMI 条目。 |

