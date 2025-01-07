---
title: "MacOS"
titleTemplate: oh-my-zsh安装
---

# 概述

好东西

## 下载安装

克隆仓库项目到本地的用户目录下。

```bash
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```

然后将默认的`zshrc`配置替换为项目里面的模板配置。

```bash
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

## 主题

主题具体有哪些可以参考这个[markdown文档](https://github.com/ohmyzsh/wiki/blob/main/Themes.md)

比如我使用主题：`bira`

```bash
vi ~/.zshrc
```

找到`ZSH_THEME`这一行，将其值内容改为`bira`。

然后重启终端生效。

## 效果

![001](./001.png)
