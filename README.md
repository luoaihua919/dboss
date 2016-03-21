dboss+angular+mod+fis3
===========================

基于 https://github.com/hefangshi/fis-pure-angular-demo 移植到FIS3，使用了 https://github.com/fex-team/mod 进行模块化管理与依赖加载，同时通过ng-annotate实现依赖注入注解的自动添加

## 使用方法

```
# 安装fis3
npm install -g fis3

# 下载demo
git clone github.com:kentpan/dboss

# 安装相关插件
cd dboss
npm install 

# bower安装依赖
bower install

# 使用FIS编译DEMO
fis3 release 

# 预览效果,推荐安装php-cgi和java，这样支持调试php程序，也可以直接fis3 server start 启动服务器
fis3 server  start --type node

# 生产环境打包压缩MD5戳等
fis3 release prod