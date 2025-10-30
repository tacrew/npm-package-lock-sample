# pnpm-security-demo

「スクリプトを default で許可しない」かつ「リリース直後のバージョンの待機時間設定機能」を備える pnpm を活用したnpmサプライチェーン攻撃の予防環境の構築例です。

## セットアップ

Nodeのバージョン管理にはVoltaを利用しています

```sh
corepack enable
pnpm install
```

## 構成内容
- Node, pnpmのバージョン固定（`package.json`）
- npm追加時のバージョン固定（`.npmrc`）
- npmパッケージのバージョンlinter（`.npmpackagejsonlintrc.json`）
- pnpm設定（`pnpm-workspace.yaml`）
- renovate設定例（`.github/renovate.json`）