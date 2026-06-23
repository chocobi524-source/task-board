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
