# gshop

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 创建项目模板
vue init webpack gshop

# 项目源码目录设计
src
    api  # 与后台交互模块文件夹
    common # 通用资源文件夹，如font/img/styuls
    components # 费路由组件文件夹
    filters # 自定义过滤器模块文件夹
    mock # 模拟数据接口文件夹
    pages # 路由组件文件夹
    router # 路由器文件夹
    store # vuex相关模块文件夹
        App.vue # 应用组件
        main.js # 入口JS
# 安装stylus依赖包
npm install stylus stylus-loader --save-dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
