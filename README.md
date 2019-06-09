## Installation
Clone repo and run:

```sh
yarn
yarn start
```

## Build
```sh
yarn build
```

## Deploy
直接举例子：假设nginx静态文件默认目录为系统目录
`/usr/local/var/www`

一般会存在如下文件：
```
/usr/local/var/www/index.html
/usr/local/var/www/50x.html
```
在此结构下，添加目录：
`/usr/local/var/www/rspa/msh5`

针对测试环境，将
```sh
yarn build:test
```
打包后生成的`build`文件夹中所有资源放入
`/usr/local/var/www/rspa/msh5`
目录下。
```sh
cd /usr/local/etc/nginx
cat nginx.conf
```
此时`nginx.conf`中存在默认配置
```sh
location / {
  root   html;
  index  index.html index.htm;
}
```
在此配置下方，添加如下配置，

```sh
location ~ ^/rspa/(?<subapp>\w+)/.* {
  root   html;
  index  index.html index.htm;
  try_files  $uri $uri/ /rspa/$subapp/index.html;
}
```
保存并重启nginx，
然后访问`domain/rspa/msh5`
即可访问登录页面。

