# 姨妈们官网

静态响应式官网，直接以 Nginx 提供，无 Node 生产依赖。介绍文案均为 HTML 文本，月历为非真实数据的功能示意。小程序码使用用户提供的原始图片。

本地预览：`python -m http.server 8080`，打开 http://localhost:8080 。

上线域名：http://aunts.21ido.com/ 。启用 HTTPS 后统一修改 canonical、Open Graph URL、robots.txt 和 sitemap.xml 中的协议。备案完成后在页脚补充实际备案号和链接，不使用虚构编号。

部署目录：`/var/www/aunts-web`。现有 Nginx 的 `/api/`、`/admin/` 等接口路由保持代理，官网仅接管 `/`、`/index.html`、`/styles.css`、`/app.js`、`/assets/`、`/robots.txt`、`/sitemap.xml`。
