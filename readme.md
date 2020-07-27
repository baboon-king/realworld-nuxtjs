#### realworld nuxtjs 实现版本

## Project setup

```
npm install

```

### dev

```
nuxt	// 启动一个热加载的Web服务器（开发模式） localhost:3000。
```

### build

```
nuxt build	// 利用webpack编译应用，压缩JS和CSS资源（发布用）。
```

### start

```
nuxt start	// 以生产模式启动一个Web服务器 (需要先执行nuxt build)。
```

### generate

```
nuxt generate	// 编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署)
```

#### 可用账号密码

> email: 'zhazhahui@xn--65wa18o.com', password: 'zhazhahui'

#### 外部资料

```
realworld : https://demo.realworld.io/#/ //realworld 演示地址

realworld-github: https://github.com/gothinkster/angularjs-realworld-example-app // realworld 地址

realworld-template: https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md#templates // realworld Html 模板地址

realworld-api: https://github.com/gothinkster/realworld/tree/master/api // realworld 接口文档 地址

NuxtJs: https://zh.nuxtjs.org/guide/installation // NuxtJs 官网

NuxtJs-Jwt: https://zh.nuxtjs.org/examples/auth-external-jwt // 跨域身份验证 (JWT) 示例 ,解决服务端客户端状态管理问题

NuxtJs-Jwt-online-examples: https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/auth-jwt?from-embed // 跨域身份验证 (JWT) 代码示例

NuxtJs-auth: https://zh.nuxtjs.org/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6 // 未登录时，访问登录才能访问的页面，跳转到首页

```

#### 剩余实现

首页模块

1. 基本的文章列表展示
2. 文章列表分页
3. 展示首页文章标签列表
4. 根据文章标签筛选文章列表
5. SEO 优化

文章详情页模块

1. 同构渲染文章详情内容
2. 同构渲染文章作者信息
3. 通过纯客户端渲染完成文章评论功能
