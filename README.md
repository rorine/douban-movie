## 仿豆瓣电影

一个仿豆瓣电影站点, 使用 [豆瓣电影 API.](https://developers.douban.com/wiki/?title=movie_v2) 获取数据，

完成三个功能模块（首页列表、搜索列表、详情页）。

访问链接：http://47.95.6.177/

## 相关技术栈（应用环境）

- Vue 2.x.x + Vuer-Router
- Axios
- Vue-infinite-scroll
- CSS

### 开发环境下解决跨域请求问题

Vue 通过 Webpack 进行配置，可在 config/index.js 文件下的 proxyTable 配置代理：

```
proxyTable: {
  '/api': {
    target: 'https://api.douban.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
```

### 生产环境下解决跨域请求问题

首先将 config/index.js 文件下的 build 对象中的 assetsPublicPath " / " 改成 " ./ "后， 再 npm run build.

然后就是用 nginx 反向代理：
```
server {
    listen 80;
    server_name  你的Ip;

    # root 即指向服务器存放的编译出的 index.html 目录
    root /var/www/dist;

    # 设定根路由
    location / {

        # 指定 index 文件
        index index.html;

        # 将其他任何路由都交给 index.html 处理，保证能使用 HTML5 History 模式
        try_files $uri $uri/ /index.html;
    }

    # 设定转发豆瓣 API，即 localhost/api/XXX -> api.douban.com/v2/XXX
    location /api {

        rewrite  ^/api/(.*)$ /$1 break;    <---（这最重要，记得添加!!!）

        # 设定代理目标
        proxy_pass https://api.douban.com/v2/;
    }
}
```
## 如何运行

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

## 应用演示

![豆瓣电影](./static/result.gif)
