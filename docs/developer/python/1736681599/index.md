---
title: "Python"
titleTemplate: 执行命令
---

# 概述

使用Python直接执行命令，并且得到命令的输出



## 代码

使用 `subprocess` 模块

```python
import subprocess

# 执行 ls 命令并捕获输出
result = subprocess.run(["ls", "-la"], capture_output=True, text=True)
print(result.stdout)
```

使用 `find` 命令作为示例，执行命令

```python
import subprocess

# 查找当前目录下所有 .txt 文件，并打印文件名
result = subprocess.run(["find", ".", "-name", "*.txt"], capture_output=True, text=True)
for file in result.stdout.splitlines():
    print(file)
```

## 参数介绍


| 参数             |             类型             |                  作用                   |                                                      示例 |
| ---------------- | :--------------------------: | :-------------------------------------: | --------------------------------------------------------: |
| `args`           | 字符串或序列（如列表、元组） |             要执行的命令。              |                                        args=["ls", "-la"] |
| `stdin`          |                              |           子进程的标准输入。            |  stdin=subprocess.PIPE 将子进程的标准输入连接到一个管道。 |
| `stdout`         |                              |           子进程的标准输出。            | stdout=subprocess.PIPE 将子进程的标准输出连接到一个管道。 |
| `stderr`         |                              |           子进程的标准错误。            | stderr=subprocess.PIPE 将子进程的标准错误连接到一个管道。 |
| `capture_output` |             bool             |                                         |                                       capture_output=True |
| `shell`          |             bool             |  如果为 True，则通过 shell 执行命令。   |                                                shell=True |
| `text`           |             bool             | 如果为 True，则输出为文本，否则为字节。 |                                                           |
| `timeout`        |                              |                                         |                                    设置命令执行超时时间。 |