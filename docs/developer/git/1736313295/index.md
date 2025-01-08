---
title: "Git"
titleTemplate: 初始化远程仓库
date: 2025-01-08 13:15:15
---


# 概述

其实这个命令在新建仓库的时候就会提供给你，不过放在这里我感觉更好找


## ssh

从命令行创建一个新的仓库

```bash
touch README.md
git init
git checkout -b main
git add README.md
git commit -m "first commit"
git remote add origin ssh://git@1142.s.kuaicdn.cn:11422/heyuhang/shell.git
git push -u origin main
```

从命令行推送已经创建的仓库

```bash
git remote add origin ssh://git@1142.s.kuaicdn.cn:11422/heyuhang/shell.git
git push -u origin main
```



## http

从命令行创建一个新的仓库

```bash
touch README.md
git init
git checkout -b main
git add README.md
git commit -m "first commit"
git remote add origin https://1142.s.kuaicdn.cn:11428/heyuhang/shell.git
git push -u origin main
```


从命令行推送已经创建的仓库

```bash
git remote add origin https://1142.s.kuaicdn.cn:11428/heyuhang/shell.git
git push -u origin main
```