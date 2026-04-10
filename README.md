<p align="center">
  <img src="./icons/icon-192.png" alt="Chaoxing Student Portal icon" width="96" height="96">
</p>

# 超星学习通学生门户 / Chaoxing Student Portal

[English](./README.en.md)

[![Open in Cloudflare Pages](https://img.shields.io/badge/Open-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create)
[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal&project-name=chaoxingportal&output-directory=.)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal)

一个面向学生的静态学习通门户页，用来汇总常用的超星学习通入口。它不依赖后端、不需要构建，适合直接部署到 GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel，或者本地直接打开使用。

## 项目简介

这个项目主要用于：

- 汇总学生常用的学习通入口，方便统一访问
- 帮助已经在浏览器中登录相关服务的用户更快进入目标页面
- 以纯静态方式部署，降低维护成本

它本质上是一个轻量导航页，不代理请求、不处理账号数据，也不替代学习通本身。

## 在线体验

- [Cloudflare Pages](https://chaoxing.gorowan.dev)（[pages.dev](https://chaoxingportal.pages.dev/)）
- [EdgeOne Pages](https://xuexitong.gorowan.dev)
- [Vercel](https://chaoxingportal.vercel.app/)
- [GitHub Pages](https://helloene.github.io/chaoxing-xuexitong-student-portal/)

## 功能特性

- 内置 10 个学生常用学习通入口
- Material Design 3 风格界面
- 支持浅色 / 深色模式
- 支持中文 / 英文切换
- 根路径会根据设备语言自动进入对应语言页，并记住手动切换结果
- 中文 / 英文使用独立入口页，Safari 分享与安装名称会跟随当前页面语言
- 支持安装为 PWA
- 纯静态、零依赖、无构建步骤

## 适用场景

- 想把常用学习通入口集中到一个起始页
- 想在手机或桌面浏览器中安装成类应用入口
- 想部署一个无需后端的个人学习门户

## 使用说明与隐私

- 本项目**不会**绕过学习通登录。
- 本项目**不会**破解限制，也**不会**获取、存储或上传 Cookie。
- 用户只能在**自己已经登录**相关服务的前提下访问**自己的**页面。
- PWA 只缓存本门户自身的静态资源，不缓存学习通站内个人内容。
- 如果浏览器中没有对应登录态，目标站点会正常跳转到登录页。

## 内置入口

| 入口 | 地址 |
|------|------|
| 我的作业 | `https://mooc1-api.chaoxing.com/mooc-ans/mooc2/work/all-task` |
| 考试列表 | `https://mooc1-2.chaoxing.com/exam-ans/exam/test/examcode/examlist` |
| 收件箱 | `https://notice.chaoxing.com/pc/notice/myNotice` |
| 我的课程 | `https://mooc1.chaoxing.com/visit/interaction` |
| 笔记本 | `https://noteyd.chaoxing.com/pc/note_notebook/myNotebooksLatest` |
| 云盘 | `https://pan-yz.chaoxing.com/pcuserpan/index` |
| 课表 | `https://kb.chaoxing.com/res/pc/curriculum/schedule.html` |
| 微读书 | `https://rec2.chaoxing.com/h5/new/dist/index.html#/` |
| 知视频 | `https://homepage.chaoxing.com/knowData` |
| 大雅论文相似度检测 | `https://dsa.dayainfo.com/smas/show/upload` |

## 快速开始

### 方式 1：直接本地打开

直接用浏览器打开 `index.html`（中文）或 `en.html`（英文）即可使用。

这种方式更适合快速查看页面结构、文案和跳转入口；如果你是通过 `file://` 直接打开，PWA 安装、Service Worker 缓存和离线外壳等能力通常不能按真实部署环境完整工作。

如果你希望验证更接近真实部署环境的语言跳转、安装体验和离线能力，建议在项目目录运行：

```bash
python3 -m http.server
```

然后访问 `http://localhost:8000`。

### 方式 2：部署到 GitHub Pages

1. 新建一个 GitHub 仓库
2. 上传本项目全部文件
3. 在仓库设置中启用 GitHub Pages
4. 选择从默认分支根目录部署
5. 打开生成的网站地址开始使用

如果你希望安装为 PWA，建议通过 HTTPS 环境访问。GitHub Pages 默认满足这一条件。

### 方式 3：部署到 Cloudflare Pages

[![Open in Cloudflare Pages](https://img.shields.io/badge/Open-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create)

1. 点击上面的按钮，登录 Cloudflare 后进入 `Workers & Pages -> Create application`
2. 选择 `Pages`
3. 选择 `Import an existing Git repository`
4. 选择当前仓库，或你自己的 fork 仓库
5. 按下面的配置填写部署参数：

| 配置项 | 值 |
|------|------|
| Production branch | `main` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory (advanced) | 留空 |

6. 点击 `Save and Deploy`
7. 部署完成后，使用 Cloudflare 提供的 `*.pages.dev` 地址访问

这个项目的静态文件位于仓库根目录，且已经包含顶层 `index.html`，因此可以直接按上述配置部署。

### 方式 4：部署到 EdgeOne Pages

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal&project-name=chaoxingportal&output-directory=.)

1. 点击上面的按钮，登录 EdgeOne Pages
2. 授权并选择当前 GitHub 仓库，或你自己的 fork 仓库
3. 如果页面没有完全自动带出配置，可按下面的参数确认：

| 配置项 | 值 |
|------|------|
| Production branch | `main` |
| Build command | 留空 |
| Output directory | `.` |
| Root directory | 留空 |

4. 点击 `Create now` 或控制台中的部署按钮
5. 部署完成后，使用 EdgeOne Pages 分配的域名访问

这是一个纯静态项目，仓库根目录已经包含可直接访问的 `index.html`，通常不需要额外构建步骤。通过上面的按钮也可以直接把仓库地址和输出目录预填到 EdgeOne Pages 中。

### 方式 5：部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal)

1. 点击上面的按钮，登录 Vercel
2. 选择自己的 Git 平台账号与目标仓库名称
3. 导入后，如需手动确认构建配置，可使用以下设置：

| 配置项 | 值 |
|------|------|
| Framework Preset | `Other` |
| Build Command | 留空 |
| Output Directory | `.` |
| Root Directory | 留空 |

4. 点击 `Deploy`
5. 部署完成后，使用 Vercel 提供的域名访问

这是一个纯静态项目，仓库根目录已经包含可直接访问的 `index.html`，通常不需要额外构建步骤。

## 可定制内容

如果你想把它改成自己的门户，通常只需要改这几个文件：

- `index.html` / `en.html`：中英文入口页、静态文案、分享元数据
- `faq.html` / `faq.en.html`：FAQ 页面、补充说明、实际链接列表
- `script.js`：中英文文案、主题切换、PWA 安装逻辑
- `styles.css`：视觉样式
- `app.webmanifest` / `app.en.webmanifest`：中英文 PWA 名称、描述、主题色
- `icons/icon.svg`：图标

## 项目结构

```text
.
├── index.html
├── en.html
├── faq.html
├── faq.en.html
├── styles.css
├── script.js
├── sw.js
├── app.webmanifest
├── app.en.webmanifest
├── icons/
│   └── icon.svg
├── README.md
├── README.en.md
├── LICENSE
└── .gitignore
```

## 技术说明

- 无框架、无打包器、无第三方依赖
- 使用 `localStorage` 保存主题偏好
- 使用 Service Worker 缓存静态资源，实现基础离线外壳
- 通过中英文独立页面保证 Safari 分享卡片和安装名称与当前页面语言一致
- Safari 中会显示“添加到主屏幕”或“Add to Dock”的分平台安装引导
- 外部学习通页面通过新标签页打开

## 注意事项

- 学习通及相关服务的页面结构或地址如果后续变动，入口链接可能需要手动更新。
- Safari 不支持像 Chromium 那样由网页直接弹出安装提示，因此需要通过浏览器菜单手动完成安装：iPhone/iPad 使用“添加到主屏幕”，Mac 使用“Add to Dock”。
- 某些浏览器对 PWA 安装按钮的触发条件不同，若页面未显示安装按钮，可使用浏览器菜单中的“安装应用”或“添加到主屏幕”。
- 本项目只负责入口聚合，不保证第三方站点始终可用。

## License

MIT
