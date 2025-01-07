---
title: "Git"
titleTemplate: 设置本地Git用户名和邮箱
date: 2025-01-07 13:24:04
---


# 概述

记录一下这两命令，虽然看着简单，但是记不住 :)

## 设置本地Git用户名和邮箱

```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱地址"
```

例如
```bash
git config --global user.name "hyhacct"
git config --global user.email "hyhacct@outlook.com"
```

## 查看当前的Git配置

```bash
git config --list
```
