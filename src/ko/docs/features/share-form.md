# 공유 양식
<!--삭제된 거 같기도 한데 MK12에서 확인 다시 해보고 번역할게요-->
When you open `/share` in Misskey Web, you can open a sharing submission form. This sharing form is useful if you want users to share the content of your page with Misskey from an external web page.

You can specify a number of options for the URL, including the shared content as a query parameter.

## Query parameters

::: tip
All parameters are **optional**.
:::

| name | description |
| ---- | ---- |
| `title` | title, will be inserted before the main body in brackets |
| `text` | main body |
| `url` | URL, inserted after the main body |

### Reply information
You can make the note being composed a reply to a given note by specifying one of the following.

| name | description |
| ---- | ---- |
| `replyId` | ID of the note you are replying to |
| `replyUri` | URL to reply to (specify the remote note object) |

### Renote information
You can make the note being composed a renote of a given note by specifying one of the following.

| name | description |
| ---- | ---- |
| `renoteId` | ID of the note to renote |
| `renoteUri` | URL of the note to renote(specify the remote note object) |

### Publication Scope
The following options allow to select a scope.

| name | description |
| ---- | ---- |
| `visibility` | one of `public`, `home`, `followers`, `specified` |
| `localOnly` | 0(false) or 1(true) |
| `visibleUserIds` | target user IDs |
| `visibleAccts` | target user [acct](../glossary.md#acct)s (comma separated) |

::: warning
If `visibility` is set to `specified`, either `visibleUserIds` or `visibleAccts` must be set too.
:::

### Attachments
You can specify attachments with the following options.

| name | description |
| ---- | ---- |
| `fileIds` | IDs of files to be attached (comma separated) |
