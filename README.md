## Running
Clone repo then run
```sh
yarn
yarn start
```

## Build
```sh
yarn build
```
## Static Deploy
For example, first dive into the server you need for deploying, if the default place of your nginx static files is
`/usr/local/var/www`
usually, blow files would be inside nginx by default
```
/usr/local/var/www/index.html
/usr/local/var/www/50x.html
```
now let's add this one
`/usr/local/var/www/rspa/mall`
after this repo is cloned to server, run `yarn` to install all dependencies，after running
```sh
yarn build
```
a new folder named "build" will be generated under root directory, then you should remove all files inside "build" folder to
`/usr/local/var/www/rspa/mall`
then
```sh
cd /usr/local/etc/nginx
cat nginx.conf
```
now you will find blow code section inside `nginx.conf`
```sh
location / {
  root   html;
  index  index.html index.htm;
}
```
under this section, add blow section
```sh
location ~ ^/rspa/(?<subapp>\w+)/.* {
  root   html;
  index  index.html index.htm;
  try_files  $uri $uri/ /rspa/$subapp/index.html;
}
```
save `nginx.conf` then restart nginx, then access `your-domain/rspa/mall`
your built-resources will be accessed based on the running nginx server now.

## API Deploy
- add your api proxy address inside the nginx config file
- api service and static resources are recommended to put under the same domain for omitting cross-domain configuration

