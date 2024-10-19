---
title: 关于配置Astro的Fuwari主题
published: 2024-05-01
description: ''
image: ''
tags: [web, Astro]
category: '创作类'
draft: false 
---
***读前提示：该文档仅为Fuwari主题的用户所写，具体问题请前往[Fuwari的GitHub](https://github.com/saicaca/fuwari)反馈***
# 对Fuwari主题进行配置
**前言：该部分主要说明如何配置Fuwari主题，想查阅关于配置Fuwari过程中可能出现的漏洞请看第二部分**
## 准备工作
### 准备所需软件
Fuwari是一个Astro主题，因此我们需要先安装Astro，执行以下命令安装Astro
``` bash
npm create astro@latest
```
如未安装npm或node.js，可以前往[node.js](https://nodejs.org/en)官网下载，debian系Linux用户推荐使用apt进行安装
``` bash
sudo apt-get install nodejs npm    #安装nodejs和npm
```

在完成node.js和Astro的安装后，接下来你需要准备一个GitHub账号以及git工具<br>
GitHub网站链接：https://github.com/<br>
git官网：https://git-scm.com/
debian系Linux用户可以通过apt进行安装
``` bash
sudo apt-get install git
```

为了便于编辑，推荐使用微软开发的VS code进行编辑，网站链接：https://code.visualstudio.com/<br>
**在您准备好所有需要准备的东西后便可以进入下一小节**
### 将仓库克隆到本地及部署前的准备
首先，你需要使用Fuwari进行fork操作，这一般会在其页面下方README文件中给出链接。（仓库名应为你的用户名.github.io）

在成功fork仓库之后将你的仓库克隆到本地
``` bash
cd /d E:/    #适用于Windows操作系统
cd /home/你的用户名/    #适用于Linux发行版
git clone (你的仓库链接)
```

在克隆成功后，打开你准备好的VS code（Linux用户可以使用终端+kate编辑器的搭配），选择你克隆到本地的仓库，启动VS code自带的终端或Windows命令提示符。输入以下命令
``` bash
npm install -g pnpm    #如未安装pnpm可选
pnpm install    #安装依赖
pnpm add sharp    #同上
```
在安装完依赖之后通过src/config.ts进行对博客的自定义，执行pnpm new-post <filename>以创建新文章，通过该命令创建的文章通常会存储在src/content/posts/目录中。
### 部署
请参考[官方文档](https://docs.astro.build/zh-cn/guides/deploy/)进行部署准备

## 编辑博客内容
成功部署了？不错，那么恭喜你，你已经成功搭建了一个个人博客。接下来我们要对博客进行自定义编辑以让它变得更丰富多彩！
### 修改站点内容
编辑src目录下的config.ts
``` bash
export const siteConfig: SiteConfig = {
  title: '#随便填，网站标题前半段#',
  subtitle: '#随便填，网站标题后半段#',
  lang: '#你的网站语言，在src/i18n/languages中查找#',
  themeHue: 250,
  banner: {
    enable: false,
    src: '#assets/images/图片文件名#',
  },

//……………………//

  xport const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.Links,
    LinkPreset.About,    #导航栏设置，该部分的修改会在后面提到
    {
      name: 'GitHub',    #导航栏链接名称
      url: 'https://github.com/saicaca/fuwari',    #快速链接导航栏链接
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/Executor.jpg',    #你的头像图片路径
  name: '送葬人',    #你的用户名
  bio: '思想即浪潮',    #你的个性签名
  links: [
    {
      name: 'GitHub',    #侧边栏链接名
      icon: 'fa6-brands:github',    #图标
      url: 'https://github.com/silencieuxzero',    #侧边栏链接
    },
  ],
}
```
以上的内容为我的博客设置，供参考

### 为导航栏添加新的链接
你需要修改以下文件：
``` bash
src/i18n/i18nKeys.ts    #i18n的配置文件
src/i18n/languages/zh_CN.ts    #在中文语言中添加对应文字以显示导航栏文字
src/content/link-presets.ts    #配置导航栏链接对应页面
src/config.ts    #在导航栏中添加链接
src/types/config.ts    #设置导航栏链接顺序位置
```
接下来，我将会详细说明这些文件该如何修改
#### src/i18n/zh_CN.ts
``` bash
#不要动import，除非你有相关经验
import Key from '../i18nKey'
import type { Translation } from '../translation'

#主题自带的控件文字
export const zh_CN: Translation = {
#导航栏文字
  [Key.home]: '主页',
  [Key.about]: '关于',
  [Key.archive]: '归档',
  [Key.links]: '友链',
  [Key.pictures]: '图库',

#正常汉化
  [Key.tags]: '标签',
  [Key.categories]: '分类',
  [Key.recentPosts]: '最新文章',

#未在主题内发现，暂时不做解释
  [Key.comments]: '评论',

  [Key.untitled]: '无标题',
  [Key.uncategorized]: '未分类',
  [Key.noTags]: '无标签',

#文档数据
  [Key.wordCount]: '字',
  [Key.wordsCount]: '字',
  [Key.minuteCount]: '分钟',
  [Key.minutesCount]: '分钟',
  [Key.postCount]: '篇文章',
  [Key.postsCount]: '篇文章',

#调色盘汉化
  [Key.themeColor]: '主题色',

  [Key.more]: '更多',

#文章页尾汉化
  [Key.author]: '作者',
  [Key.publishedAt]: '发布于',
  [Key.license]: '许可协议',
}
```
如您需要在导航栏区域添加链接，请先将您的链往页面页面的中文名加入到**导航栏文字**栏目中。

#### src/i18n/i18nKeys.ts
``` bash
enum I18nKey {
#导航栏文字配置，注意，该文件中不能出现大写
  home = 'home',
  about = 'about',
  archive = 'archive',
  links = 'links',
  pictures = 'pictures',

#其他都与前文配置相同，该文件被用于配置i18n
  tags = 'tags',
  categories = 'categories',
  recentPosts = 'recentPosts',

  comments = 'comments',

  untitled = 'untitled',
  uncategorized = 'uncategorized',
  noTags = 'noTags',

  wordCount = 'wordCount',
  wordsCount = 'wordsCount',
  minuteCount = 'minuteCount',
  minutesCount = 'minutesCount',
  postCount = 'postCount',
  postsCount = 'postsCount',

  themeColor = 'themeColor',

  more = 'more',

  author = 'author',
  publishedAt = 'publishedAt',
  license = 'license',
}

export default I18nKey
```
编辑方法同前文，但请注意不要把引号删除了，且引号必须是英文半角引号，如果是中文全角引号会导致报错

#### src/content/link-presets.ts
``` bash
import { i18n } from '@i18n/translation'

#这一部分配置较为简单，就是简单的将各个链接链往指定页面，没有什么顺序问题，直接复制粘贴即可，注意大小写
export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about',
  },
  [LinkPreset.Links]: {
    name: i18n(I18nKey.links),
    url: '/links',
  },
  [LinkPreset.Pictures]: {
    name: i18n(I18nKey.pictures),
    url: '/pictures',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive',
  },
}
```

#### src/config.ts
``` bash
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.Links,
    LinkPreset.Pictures,
    LinkPreset.About,    #在LinkPreset中配置即可，注意大小写，顺序注意一下，不要搞混了
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',
      external: true,
    },
  ],
}
```

#### src/types/config.ts
``` bash
export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeHue: number
  banner: {
    enable: boolean
    src: string
  }

  favicon: Favicon[]
}

export type Favicon = {
  src: string
  theme?: 'light' | 'dark'
  sizes?: string
}

#编辑这部分即可，其他地方无需修改，调一下他们的顺序就行
#注意，导航栏链接的顺序是从0开始的，因此不要将顺序弄混了，注意大小写
export enum LinkPreset {
  Home = 0,
  Archive = 1,
  Links = 2,
  Pictures = 3,
  About = 4,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}
```
以上文件中对比原仓库新增的部分为该文档作者所添加，作参考

### 为导航栏链接制作一个链入页面
需要修改以下文件
``` bash
/src/content/spec/<your text name>.md
/src/pages/<your text name>.astro
```

#### /src/content/spec/<your text name>.md
这里无需多说，想写啥就写啥，但注意，不要加分类和标签

#### /src/pages/<your text name>.astro
``` bash
---

import MainGridLayout from "../layouts/MainGridLayout.astro";

import { getEntry } from 'astro:content'
import {i18n} from "../i18n/translation";
import I18nKey from "../i18n/i18nKey";
import Markdown from "@components/misc/Markdown.astro";

const aboutPost = await getEntry('spec', 'links')    #页面名称（只需修改后一部分即可）

const { Content } = await aboutPost.render()

---
<MainGridLayout title={i18n(I18nKey.links)} description={i18n(I18nKey.links)}>    #改成前面i18nkey文件里面的文字即可（注意，是I18nKey.之后的）
    <div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32">
        <div class="card-base z-10 px-9 py-6 relative w-full ">
            <Markdown class="mt-2">
                <Content />
            </Markdown>
        </div>
    </div>
</MainGridLayout>
```
至此，你成功的在导航栏中添加了一个链接，恭喜<br>

其他的页面也可以像我这样配置

# 结束语
Astro相对于hexo来说总体上配置较为复杂，但若仔细阅读文件其实也并不难修改，如果这篇文档能帮到你那就再好不过了。

在这里祝大家五一快乐！