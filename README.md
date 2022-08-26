# 開発環境構築及びイメージの作成方法
### Docker Imageの作成及びContainerの起動
<span style="color: red; ">docker上に作成する場合のみ実行</span>  
Dockerfile及びdocker-compose.ymlを作成し以下を実行
```shell
docker-compose up -d
```
-dオプションでバックグラウンド実行となる

## 必要となるパッケージのインストール（イメージ作成時のみ）
Docker Containerへcliで接続
```shell
docker container exec -it react-sample_app_1 sh
```
`react-sample_app_1`はコンテナ名、コンテナ名の確認は`docker-compose ps`を実行する
### package.jsonの作成
```shell
yarn init -y
```

### typescript、webpackの導入
```shell
yarn -D add webpack webpack-cli typescript ts-loader
yarn -D add webpack-dev-server
yarn -D add clean-webpack-plugin html-webpack-plugin
```
### reactの導入
```shell
yarn add react react-dom @types/react @types/react-dom
yarn add react-router-dom @types/react-router-dom
```
### material-uiの導入
```shell
yarn add @mui/material @emotion/react @emotion/styled
```

### eslintの導入
```shell
yarn -D add eslint
yarn eslint --init
```

### tsconfig.jsonの作成
### index.htmlの作成
### index.tsxの作成
### webpack.config.jsの作成
