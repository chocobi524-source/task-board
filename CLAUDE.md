# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git 運用ルール

**コードを変更するたびに必ず GitHub にプッシュすること。**

具体的な手順:

```bash
git add <変更ファイル>
git commit -m "変更内容の説明"
git push origin <ブランチ名>
```

- `git add .` や `git add -A` は使用せず、変更したファイルを明示的に指定する
- コミットメッセージは変更内容が分かる日本語または英語で記述する
- プッシュ前に `git status` と `git diff` で変更内容を確認する
- `main` または `master` ブランチへの force push は行わない

## デプロイ先

https://chocobi524-source.github.io/task-board/

`main` ブランチへのプッシュで GitHub Actions が自動的にビルド＆デプロイする（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

## 技術スタック

- **React 18** — UI フレームワーク（Hooks のみ使用、クラスコンポーネントは使わない）
- **Vite 6** — ビルドツール・開発サーバー（`npm run dev` で起動、`npm run build` で `dist/` に出力）
- **CSS Modules 不使用** — コンポーネントごとに `.css` ファイルを import するフラットな CSS 管理
- **外部 UI ライブラリなし** — スタイルはすべて手書き CSS

## コンポーネント命名規約

- コンポーネントファイルは **PascalCase** + `.jsx` 拡張子（例: `TaskItem.jsx`）
- CSS クラス名は **kebab-case**（例: `.task-item`, `.add-button`）
- コンポーネントに対応する CSS は同名の `.css` ファイルに記述し、同ディレクトリに置く（例: `App.jsx` / `App.css`）
- `src/` 直下にすべてのソースファイルを配置する（現状はコンポーネントを分割していないがファイルが増えたら `src/components/` に移す）
