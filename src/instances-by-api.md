---
ts:
  setting: "リスト設定"
  order: "並び順"
  orders:
    default: "デフォルト"
    version: "バージョン"
    originalNotesCount: "ノート数"
    originalUsersCount: "ユーザー数"
    reactionsCount: "リアクション数"
  descending: "降順"
  ascending: "昇順"
  repository: "リポジトリ"
  language: "言語"
  registration: "新規登録"
  registration-statuses:
    open: "解放"
    close: "不可"
  accept: "適用"
---

# インスタンス一覧
Misskeyインスタンスを一覧で表示します。

<Instances :ts="$frontmatter.ts" />
