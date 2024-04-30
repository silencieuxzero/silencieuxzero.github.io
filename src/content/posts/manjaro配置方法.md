---
title: manjaro配置方法
published: 2024-04-30
description: ''
image: ''
tags: []
category: ''
draft: false 
---
制作linux启动盘
https://manjaro.org/download/
https://www.balena.io/etcher/
下载安装


升级/安装软件而不升级系统
升级系统很容易会出现驱动问题，使用以下命令，可以安装/升级软件而不升级系统：
sudo pacman -Sy package


内核和驱动的相关问题（非常重要）：
sudo pacman -S nvidia
mhwd-kernel -l

把以上两条命令列出来的内核和驱动复制到文本，然后再使用“系统设置”——“硬件设定”检测出可以安装的驱动，然后在文本中筛选出最新版本的内核以及和内核绑定的驱动：

sudo mhwd-kernel -i linuxXXX rmc

其中，linuxXXX 是指列出的最新版本的内核，而 rmc 是删除旧内核。然后：
reboot

重开机后，终端输入：
sudo pacman -S nvidia linuxXXX-nvidia-XXX

其中：linuxXXX-nvidia-XXX 是指最新版的驱动

以下是参考文章：
■Manjaro配置显卡驱动程序■
■manjaro安装nvidia驱动■
■Manjaro的Linux内核管理■



系统设置
【添加删除软件】的软件源设置：
添加/删除软件——首选项——常规——检查更新：不勾选；
     ——使用镜像从：选择“China”，并点击“刷新镜像列表”；

     ——高级——移除不需要的依赖：勾选；
     ——启用降级：勾选；

     ——第三方——启用AUR支持：勾选；
------------------------------------------------------------------------------------------------------------------
添加/删除软件——刷新数据库；



【系统设置】：
外观——全局主题——选择“Breath2 2021”；
——Plasma样式——选择“Breeze微风深色”；
——窗口装饰元素——主题——选择“Breeze微风”；
——标题栏按钮——移除“？”；
——颜色——选择“Breeze微风”；
——字体——调整所有字体——选择“文泉驿微米黑”；
——图标——获取新图标主题——搜索“fluent”安装使用；下载附件解压，下载以下附件：

解压后，分别替换 ~/.local/share/icons/Fluent 当中的 /16/places/ 、/22/places/ 和 /24/places/ 文件夹。

更换panel输入法图标：
mv ~/.local/share/icons/Fluent/symbolic/devices/input-keyboard-symbolic.svg ~/.local/share/icons/Fluent/symbolic/devices/input-keyboard-symbolic.svg.bak
  
cp /usr/share/icons/breeze/devices/22/input-keyboard.svg ~/.local/share/icons/Fluent/symbolic/devices/input-keyboard-symbolic.svg


下载附件后：
mv 5120x2880.png.zip 5120x2880.png && sudo cp 5120x2880.png /usr/share/sddm/themes/breeze && sudo mv 5120x2880.png /usr/share/wallpapers/Bamboo/contents/images

工作区——工作区行为——屏幕边缘：取消所有边缘操作；
——桌面特效——外观增强——勾选“最小化过渡动画（神灯）；
              ——勾选“窗口透明度”；
——窗口管理功能——桌面总览图——显示隐藏桌面总览：Ctrl+Meta+D；
——虚拟桌面：删除第二个虚拟桌面；
——锁屏——自动锁定屏幕：不勾选；
——添加图像：选择“Bamboo”；
    ——窗口管理——任务切换器——主窗口——微风：改为“大图标”；
    ——快捷键——KRunner：改为“Meta + F”；
    ——开机与关机——登录屏幕——选择“微风”；
——自动启动：删除多余启动项；
——桌面会话——登入时：选择“以空会话启动”；
    ——搜索——文件搜索：勾选“索引隐藏文件和文件夹”；
    ——KRunner——屏幕上的位置：选择“居中”；
  
硬件——输入设备——键盘——硬件——Plasma启动时NumLock状态：“开启”；
——显卡与显示器——夜间颜色——激活夜间颜色：勾选；
——音频——回放流——通知声音——点击静音。


【任务管理器排列顺序】：
开始按钮、便利贴、Dolphin、okular、konsole、微信、blender、gimp、inkscape、wps、scribus、kate、kdenlive、davinci、vscode、edge……


 【字体下载与设置】：
安装的字体太多，在使用 Davinci Resolve 这类型软件的时候，可能会显示宋体。如果遇到这种情况，可以进行以下操作：

首先，备份一下：
cp ~/.config/fontconfig/fonts.conf ~/.config/fontconfig/fonts.conf.bak

下载附件，放到主文夹：
https://pan.baidu.com/s/155DNfpT2pir-K38jOqa_FA
 提取码: rg4y

然后：
mv ~/fonts.conf ~/.config/fontconfig/



【隐藏文件】：
在主文件夹新建一个 .hidden 文本文件，然后把需要隐藏的文件夹名字写在文本文件里，每一行隐藏一个文件。


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


相关软件的安装与设置

【删除无用预装软件】：
sudo pacman -R k3b kcalc kget konversation kwalletmanager qbittorent khelpercenter steam elisa htop yakuake timeshift timeshift-autosnap-manjaro matray manjaro-hello ksystemlog manjaro-documentation-en ksysguard onlyoffice-desktopeditors

删除无用的软件：
sudo pacman -R $(pacman -Qdtq) 

清除软件缓存：
sudo pacman -Scc


【安装常用软件】：
sudo pacman -S blender inkscape gimp scribus kdenlive libreoffice-still libreoffice-still-zh-cn lmms krita lmms audacity freecad vlc v2ray obs-studio yay gthumb opencl-nvidia 


【fcitx5的安装与设置】：
sudo pacman -S fcitx5 fcitx5-configtool fcitx5-chinese-addons fcitx5-gtk fcitx5-qt fcitx5-rime rime-wubi wqy-microhei

kate ~/.xprofile
把以下内容粘贴进去：
export GTK_IM_MODULE=fcitx5
export QT_IM_MODULE=fcitx5
export XMODIFIERS="@im=fcitx5"
fcitx5 &

kate ~/.xinitrc
把以下内容粘贴到 exec $(get_session) 之前：
export GTK_IM_MODULE=fcitx5
export XMODIFIERS=@im=fcitx5
export QT_IM_MODULE=fcitx5

kate /usr/share/rime-data/default.yaml
把以下内容代替原文件中相应的内容：
schema_list:
  - schema: wubi_pinyin
  - schema: wubi_trad
  - schema: luna_pinyin_fluency
  - schema: luna_pinyin_simp
  - schema: terra_pinyin
  - schema: emoji

kate /usr/share/rime-data/wubi86.dict.yaml
把以下自定义短语加到列表当中：
▲	sjx
●	yx
■	fk
√	dg
￥	rmb
★	wjx
°C	ssd
+	jh
-	jh
*	ch
×	ch
	ch
÷	ch
>	dyh
<	yh
=	dyh
（	zkh
）	ykh
“	zyh
”	yyh
！	gth
？	wh
	

下载以下附件，解压到 ~/.local/share/fcitx5/themes

https://pan.baidu.com/s/1axTyfXgHkIYKTTkbSfEPqw
提取码: ansq

Fcitx 5 配置——添加输入法——“中州韻”——添加；
     配置附加组件——经典用户界面——字体——“文泉驿微米黑 14”、；
             ——菜单字体——“文泉驿微米黑”；
             ——主题——“珍珠白（无阴影版）”；
     
“珍珠白（无阴影版）”设置：
托盘字体——“文泉驿微米黑”；
一般文字颜色——“#5d5d5d”；
高亮候选词颜色——“#4891d9”；
高度文字颜色——“#3c3c3c”；

重启 fcitx5，ctrl + 空格 是切换中英文，ctrl + ~ 是切换不同输入法；


【微信的安装与设置】：
添加/删除软件——AUR——输入“weixin”——安装“deepin-wine-wechat”；

如果安装了很多字体，又或者你安装了很多其它字体，导致对话框输入文字出现框框，则下载以下附件的字体，
https://pan.baidu.com/s/1NfkDOrekacFfpQHQZoFs8w
提取码: fe2p

放到主文件夹，然后：
sudo cp ~/111.ttf /usr/share/fonts/

sudo fc-cache -f -v

务份 system.reg文件：
cp ~/.deepinwine/Deepin-WeChat/system.reg ~/.deepinwine/Deepin-WeChat/system.reg.bak


然后：
cp ~/111.ttf ~/.deepinwine/Deepin-WeChat/drive_c/windows/Fonts/

kate ~/.deepinwine/Deepin-WeChat/system.reg

使用Ctrl + F 搜索 MS Shell Dlg ，得到：
"MS Shell Dlg"="SimSun"
"MS Shell Dlg 2"="Tahoma"

把这两行改为：
"MS Shell Dlg"="111"
"MS Shell Dlg 2"="111"

重新启动微信。

另外，微信安装可能会现的问题
■aur报错（错误：一个或多个文件没有通过有效性检查）■



【WPS安装】：
添加/删除软件——AUR——输入“wps”：安装 wps-office-cn 与 wps-office-mui-zh-cn 。


【坚果云安装】：
添加/删除软件——AUR——输入“nutstore”：安装 nutstore-experimental。


【Edge浏览器安装与设置】：
添加/删除软件——AUR——输入“microsoft-edge”：安装 microsoft-edge-beta-bin。

设置：
设置——外观——自定义外观——主题——选择“凉风”；
——自定义工具栏——显示选项卡操作菜单：不勾选；
——选择要在工具栏上显示的按钮：不勾选“性能按钮”、“网页捕获按钮”、“共享按钮”、“反馈按钮”；
——上下文菜单——显示智能操作：不勾选；
——字体——自定义字体——标准字体：“文泉驿微米黑”；


设置——系统和性能——优化性能——使用标签页休眼功能节约资源：勾选；
    ——优化性能——淡出眨眼标签页：选择“15分钟不活动”；


■油猴脚本■

Tampermonkey必装脚本：
●强制使用思源黑体●

●youtube视频下载●

●视频网站VIP破解●

●百度搜索优化●

●移除百度搜索广告●



■smartUp手势■

设置：
选项——鼠标手势——设置——操作模式——选择“鼠标中键”；
——操作——修改操作——保留“向上滚动”、“向下滚动”、“到顶部”、“到底部”、“关闭当前标签页”；


■uBlock Origin■

■沙拉查词■

■Circle阅读助手■

设置：
样式——字体大小：16 px；
页面宽度：1000 px；
字体粗细：200；
内容对齐：两边对齐；

布局——页外边距：10 px；

工具栏——保留“全屏查看”、“打印”、“调整页面”、“隐藏图片”、“信纸效果”；


■Speed dial 2新标签■

■onetab■

■书签侧边栏■



【darktable的安装与汉化】：
wget https://raw.githubusercontent.com/darktable-org/darktable/master/po/zh_CN.po && sudo pacman -S poedit && msgfmt -o darktable.mo zh_CN.po && sudo mv darktable.mo /usr/share/locale/zh_CN/LC_MESSAGES/ && sudo pacman -R poedit && rm zh_CN.po


【Okular设置】：
 菜单栏——设置——配置工具栏——批注工具栏<okular_part>：“查找”、“添加书签”、“保持开启”、“高亮笔”、“下划线”、“删除线”、“打字机”、“行内笔记”、“弹出式笔记”、“手绘线条”、颜色；
 ——主工具栏<okular_part>：“显示侧边栏”、“浏览”、“选择工具”、“页数”、“缩小”、“缩放”、“放大”、“快速批注”。


【Dolphin设置】：
菜单栏——配置——配置工具栏——当前操作：后退、前进、分隔栏、图标、紧凑、详情、位置栏、搜索、拆分视图、排序方式、筛选、终端、显示隐藏文件、打开菜单；

菜单栏——配置——配置Dophin——常规——行为——视图风格：“单独记忆每个文件夹的显示风格；
——预览——本机文件超过此大小时不显示预览：100 Mib；
——状态栏：显示状态栏、显示缩放滑动条；

 ——启动——启动时显示：设置自己的主文件夹；
 ——常规功能：在新标签页中打开新文件夹、位置栏显示完整路径；
 ——图标——默认图标大小：64；
 ——预览图标大小：80；
 ——标签宽度：中；
 ——最大行数：3；

  ——导航——新标签页位置：在当前标签页右侧；

菜单栏——显示33种额外操作——视图——分组显示：勾选或者不勾选；


【Ark解压乱码问题解决方法】：
yay -S p7zip-natspec

菜单栏——设置——配置Ark——插件：不勾选“Libzip”、勾选“P7zip”；


【Davinci Resolve 17相关设置】：
无法检测显卡：
sudo pacman -S opencl-nvidia

图标问题：
kate /usr/share/applications/com.blackmagicdesign.resolve.desktop
把 “Icon=/opt/resolve/graphics/DV_Resolve.png”改为“Icon=davinci-resolve”。