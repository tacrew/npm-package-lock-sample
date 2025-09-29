# pnpm-security-demo

pnpmを使ったサンプルプロジェクトです。Node.jsとpnpmがインストールされている前提です。

## セットアップ

1. 依存関係をインストールします。
   ```sh
   pnpm install
   ```
   ※ ネットワーク制限がある場合はリトライしてください。

2. サンプルコードを実行します。
   ```sh
   pnpm start
   ```

## セキュリティ確認

依存関係の脆弱性を確認するには次のコマンドを実行します。
```sh
pnpm audit
```

## プロジェクト構成

- `package.json`: pnpm用のプロジェクト定義
- `pnpm-lock.yaml`: 依存関係のロックファイル
- `src/index.js`: サンプルコード
# npm-package-lock-sample
