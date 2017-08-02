# install yarn(包管理)
npm install -g yarn / npm install
yarn config set registry 'https://registry.npm.taobao.org'
yarn config set registry https://registry.npm.taobao.org(windows系统下)

# install dependencies
yarn install(遇到node-sass装不上的情况，先执行 set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ 再执行 yarn add node-sass / npm install node-sass --save-dev)

# serve with hot reload at localhost:8080
yarn run dev / npm run dev

# build for production with minification
yarn run build / npm run dev


######### vue项目开发模板
#配置文件说明
.eslintignore 添加可忽略eslint的文件
.gitignore 添加可忽略的git提交文件

#config-build
跨域设置
proxyTable: {
  '/index.php': {
    target: 'http://api.xxxxxxxx.com',
    changeOrigin: true,
    pathRewrite: {
      '^/index.php': '/index.php'
    }
  }
}