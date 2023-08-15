---
description: 'MFM is a dedicated markup language that can be used in various places on Misskey.'
---

# MFM
MFM, which stands for Misskey Flavoured Markdown, is a dedicated markup language that can be used in various places on Misskey.

::: tip
Some of the syntax is compatible with Markdown.
:::

## examples of where misskey is allowed
- note body
- content warnings
- user name
- user profile

## Syntax
### Mentions
::: tip
For more information about Mentions, see [here](./mention.md).
:::

```:no-line-numbers
@alice
```
```:no-line-numbers
@alice@example.com
```

### Hashtags

::: tip
For more information about hashtags, see [here](./hashtag).
:::

```:no-line-numbers
#misskey
```

### Custom Emoji

::: tip
For more information about custom emoji, see [here](./custom-emoji).
:::

```:no-line-numbers
:misskey:
```

### Links

```:no-line-numbers
[example link](https://example.com)
```

### Bold

```:no-line-numbers
**Bold**
```

---

::: tip
More available syntax can be found in the **MFM cheat sheet** provided by the Misskey web UI under `/mfm-cheat-sheet` on your instance.
:::

## Information for Developers

The parser implementation of MFM is available as a library, making it easier to embed MFM in your clients.
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - parser implementation in JavaScript
