# learning-google-spread-sheet.gas

😖😖😖 GASでGoogleスプレッドシートを操作してみる！  

## 準備方法

### 1. Google Apps Script APIの有効化

[Google Apps Script API](https://script.google.com/home/usersettings)を有効化します。  

### 2. Claspのインストール

以下のコマンドでClaspをインストールします。  

```shell
yarn global add clasp
```

### 3. Claspのログイン

以下のコマンドでログインします。  
ブラウザが立ち上がり、Googleアカウントの認証を行います。  

```shell
clasp login
```

### 4. プロジェクトの作成

Node.jsプロジェクトを初期化します。  
また、GASの型定義ファイルをインストールします。  

```shell
yarn init
yarn add -D @types/google-apps-script
```

### 5. Claspプロジェクトの作成

以下のコマンドでClaspプロジェクトを作成します。  

```shell
clasp create
```

### 6. その他イロイロのコマンド

```shell
# ローカルのファイルをGASにアップロード
clasp push

# GASのファイルをローカルにダウンロード
clasp pull

# GASのファイルを開く
clasp open
```
