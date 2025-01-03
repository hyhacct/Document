---
title: 工具分享
description: 介绍一款开源工具
---

## 介绍

<Badge type="info" text="GitHub" /> [项目开源地址](https://github.com/hyhacct/grapic)

这里介绍一款开源工具，名字叫 Grapic, 功能可能不全，还在开发中，因为前后端基础不是很牢固(非专业开发)所以代码可能会看起来比较乱。

开发这款工具主要是因为看见朋友在用类似功能的一款工具，就是他:point_right: [苦瓜](https://www.yuque.com/wangsendi) :point_left:

当时看他正好在使用一个叫`PrivateBin`的工具,觉得好像不错的样子，然后就想着能不能开发一个类似的东西，再然后就直接开搞了。


## 功能

1. `文本分享`: 可以将文本内容推送到网页上，供他人查看，并且推送者可以设置访问次数，IP白名单，过期时间以及密码保护等措施。
2. `原始数据`: 文本内容可以是任何文本，如果是代码，可以通过原始链接，直接在Linux中使用 `curl` 去下载。
3. `访问限制`: 可以设置访问次数，IP白名单，过期时间以及密码保护等措施, 保障数据的安全。
4. `完全开放`: 服务运行起来后，任何人都可以在你这里推送数据，相当于你启动了这个服务，他就完全免费的公开给了所有人使用。
5. `待开发...`: 其他功能暂时没想好怎么开发，慢慢来~


## 部署

首先在部署之前，你需要准备好以下环境:

1. node.js <Badge type="tip" text="v20.x" />
2. go语言 <Badge type="tip" text="^1.22.x" />
3. Git <Badge type="tip" text="随意" />


我这边使用的是CentOS7.x的系统，所以就先用这个来做个示例了。

### 安装node.js【若已有则可跳过】

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

### 安装go环境【若已有则可跳过】

```bash
wget https://dl.google.com/go/go1.22.5.linux-amd64.tar.gz

sudo tar -C /usr/local -xzf go1.22.5.linux-amd64.tar.gz

echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc

source ~/.bashrc

go version # should print `go version go1.22.5 linux/amd64`
```


### 克隆项目到本地【必须】

```bash
cd ~

git clone https://github.com/hyhacct/grapic.git
```

编译前端项目

```bash
cd ~/grapic/vite-project/
yarn
yarn build
```

编译后端项目

```bash
cd ~/grapic/go-admin/
go build -o grapic cmd/main.go
```

### 启动服务【必须】

```bash
mkdir -p ~/grapic/run/default
mv ~/grapic/vite-project/dist ~/grapic/run/default
mv ~/grapic/go-admin/grapic ~/grapic/run/
cd ~/grapic/run/ && chmod +x ./grapic
./grapic
```


> [!IMPORTANT]
> 这里需要稍微注意下，首次启动服务时他会交互式的让你输入一些参数，比如端口号，地址等，请务必按照提示输入，否则服务会异常。
>
> 另外首次必须手动启动服务，因为需要创建配置，配置存在后，以后启动就不需要手动去填写这些参数了。


### 后台运行【可选】

```bash
nohup ./grapic &
```

这样的话，服务会在后台运行，不会影响到你的终端。

或者使用 `screen` 新开独立的会话来管理你的服务，需要安装 `yum -y install screen`

```bash
screen -dmS grapic ./grapic
```

如果后期需要去修改配置的话，可以直接找到程序所在目录的 `config/config.json` 文件进行修改。

到这里就结束了，程序运行起来后可以前往浏览器访问你的域名/IP+端口号，进行文本分享了 ：） 感谢支持。