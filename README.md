# artemis-fe

**更多基于此框架进行工作平台开发的Vue问题笔记：https://www.yuque.com/liveonce/wiki**

> 项目原名autool-fe，现更名为artemis-fe
> 
> 在原项目基础上用户新增：
> - 登录退出与token凭证功能
> - 单元测试集成
> - Docker化
> - SetTimeOut递归调用
> - FormData上传多文件与Json等代码以供学习参考
> - 修复若干bug

如果本项目对你起到了学习或工作的帮助，请点个star，我会在今后的工作中不断充实改骨架工程，有意见问题也请在issue里提出~

## 技术栈
vue.js/vuex/ant-design-vue/axios/vue-test-utils/jest/prettier

## 特点
本骨架工程采用了顶部菜单加侧边菜单分别渲染的方式，为了可以直接通过复制网址打开对应页面且能正确高亮顶部与侧边菜单，本工程并未使用浏览器本地存储数据的方式，而是对url进行了解析，所以对于地址命名与项目文件命名有着一定的规范。请阅读骨架工程代码学习约定规约。

## 使用
- 请根据自己的需要删除页面和代码
- 本项目所涉及后端代码请看仓库：https://github.com/tangyiming/artemis

## 部署
### 常规部署方式
拉取代码
```bash
[root@localhost conf.d]# npm install
[root@localhost conf.d]# npm run build
```
配置nginx server项


```bash
[root@localhost conf.d]# vi default.conf
```

> listen 8080;
>
> location / {
>
> root /opt/artemis-fe/dist/;
>
> try_files $uri $uri/ /index.html = 404;
>
> }

```bash 
[root@localhost conf.d]# nginx -c /etc/nginx/nginx.conf
[root@localhost conf.d]# nginx -s reload
```
关闭防火墙，以防止外面无法访问
```bash
[root@localhost conf.d]# systemctl stop firewalld.service
```
 
### Docker化部署方式（暂不用这种方式部署）
在项目中添加docker与nginx配置
给服务器生成sshkey添加到gitlab
在服务器上拉取前端代码
进行image构建（tag随版本变更），和容器运行
```bash
[root@localhost opt]# docker build artemis-fe/ -t artemis-fe:1.0.0
[root@localhost opt]# docker run -d -p 8080:80 artemis-fe:1.0.0
```
 
参考：https://cli.vuejs.org/guide/deployment.html#docker-nginx