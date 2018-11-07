# demo

>使用vue-cli2.9.6来搭建干净的项目，使用vue2.5.x+vue-router+vuex全家桶进行开发，完成简单登录验证。
其中ajax使用[axios](https://github.com/axios/axios),懒加载图片使用[vue-lazyload](https://github.com/hilongjw/vue-lazyload),滚动加载更多使用[vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll),其他插件可以使用[vux](https://github.com/airyland/vux)进行开发

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## What's included
Within the download you'll find the following directories and files.
You'll see something like this:

```
├── build/
│   ├── build.js                               // 运行 npm run build 配置等
│   ├── check-version.js                       // 检查 node npm 版本信息
│   ├── utils.js                               // css-loader配置
│   ├── vue-loader.conf.js                     // vue-loader配置
│   ├── webpack.base.conf.js                   // webpack打包基础配置
│   ├── webpack.dev.conf.js                    // webpack打包开发环境配置
│   ├── webpack.prod.conf.js                   // webpack打包生产环境配置
│   ├── webpack.test.conf.js                   // webpack测试环境配置
├── config/
│   ├── dev-env.js                             // 开发环境配置
│   ├── index.js                               // 生成文件位置端口代理等设置
│   ├── prod.env.js                            // 生产环境配置
│   ├── prod.env.js                            // 测试环境配置
├── dist/                                      // 打包生成文件存放目录
├── node_modules/                              // 你懂的
├── src/                                       // 存放项目内容
│   ├── assets/                                // 项目资源图片或者是非第三方文件，可创建文件夹，这里的资源会被wabpack构建
│   ├── components/                            // 组件，可创建文件夹
│   ├── pages/                                 // pages 文件
│   │  ├── index/                              // module index
│   │       ├── index.vue/                     // vue文件
│ 	├── router/								   // vue-router路由管理
│ 	├── store/								   // vuex的状态管理
│ 	├── utils/								   // 雪碧图模板文件
│ 	├── App.vue								   // 根组件
│ 	├── main.js								   // 入口js文件
├── static/                                    // 纯静态资源，不会被wabpack构建，必须使用绝对路径引用这些文件,一般放第三方文件
│   ├── .gitkeep                               // 用于static为空时可以提交
├── .babelrc                                   // babel将ES6语法转为ES5
├── .editorconfig                              // 语法风格等配置
├── .gitgnore                                  // git 提交仓库忽略文件
├── favicon.ico                                // 网站的图标
├── .postcssrc.js                              // postcss配置
├── package.json                               // 依赖文件
├── README.md                                  // 向导文件
```

## Other
Thank you for your support and guidance.