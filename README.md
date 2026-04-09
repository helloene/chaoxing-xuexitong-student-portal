# Chaoxing Student Portal

[English](./README.en.md)

一个面向学生的静态学习通门户页，用来汇总常用的超星学习通入口。它不依赖后端、不需要构建，适合直接部署到 GitHub Pages，或者本地直接打开使用。

## 项目简介

这个项目主要用于：

- 汇总学生常用的学习通入口，方便统一访问
- 帮助已经在浏览器中登录相关服务的用户更快进入目标页面
- 以纯静态方式部署，降低维护成本

它本质上是一个轻量导航页，不代理请求、不处理账号数据，也不替代学习通本身。

## 功能特性

- 内置 10 个学生常用学习通入口
- Material Design 3 风格界面
- 支持浅色 / 深色模式
- 支持中文 / 英文切换
- 自动根据浏览器语言和系统主题做初始适配
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

直接用浏览器打开 `index.html` 即可使用。

如果你希望更接近真实部署环境，也可以在项目目录运行：

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

## 可定制内容

如果你想把它改成自己的门户，通常只需要改这几个文件：

- `index.html`：入口卡片、页面文案、页面结构
- `script.js`：中英文文案、主题切换、PWA 安装逻辑
- `styles.css`：视觉样式
- `app.webmanifest` / `app.en.webmanifest`：中英文 PWA 名称、描述、主题色
- `icons/icon.svg`：图标

## 项目结构

```text
.
├── index.html
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
- 使用 `localStorage` 保存语言和主题偏好
- 使用 Service Worker 缓存静态资源，实现基础离线外壳
- Safari 中会显示“添加到主屏幕”或“Add to Dock”的分平台安装引导
- 外部学习通页面通过新标签页打开

## 注意事项

- 学习通及相关服务的页面结构或地址如果后续变动，入口链接可能需要手动更新。
- Safari 不支持像 Chromium 那样由网页直接弹出安装提示，因此需要通过浏览器菜单手动完成安装：iPhone/iPad 使用“添加到主屏幕”，Mac 使用“Add to Dock”。
- 某些浏览器对 PWA 安装按钮的触发条件不同，若页面未显示安装按钮，可使用浏览器菜单中的“安装应用”或“添加到主屏幕”。
- 本项目只负责入口聚合，不保证第三方站点始终可用。

## License

MIT
