---
description: 'MFM adalah bahasa markup yang dapat digunakan pada berbagai tempat di dalam Misskey'
---

# MFM
MFM, yang merupakan singkatan dari Misskey Flavoured Markdown, adalah bahasa markup yang dapat digunakan pada berbagai tempat di dalam Misskey.

::: tip
Beberapa dari sintaks MFM memiliki kompatibilitas dengan Markdown.
:::

## Contoh dimana MFM diperbolehkan dalam Misskey
- Konten dalam catatan
- Spoiler konten peringatan
- Nama Pengguna
- Profil Bio Pengguna

## Sintaks
### Sebutan
::: tip
Untuk informasi lebih lanjut mengenai Sebutan, lihat [disini](./mention.md).
:::

```:no-line-numbers
@alice
```
```:no-line-numbers
@alice@example.com
```

### Tagar

::: tip
Untuk informasi lebih lanjut mengenai tagar, lihat [disini](./hashtag).
:::

```:no-line-numbers
#misskey
```

### Emoji Kustom

::: tip
Untuk informasi lebih lanjut mengenai emoji kustom, lihat [disini](./custom-emoji).
:::

```:no-line-numbers
:misskey:
```

### Tautan

```:no-line-numbers
[contoh tautan](https://example.com)
```

### Tebal

```:no-line-numbers
**Tebal**
```

---

::: tip
Sintaks lainnya yang tersedia dapat ditemukan di **contekan MFM** yang disediakan oleh antarmuka web Misskey pada URL `/mfm-cheat-sheet` di instansi peladenmu.
:::

## Informasi untuk Pengembang

Implementasi parser dari MFM tersedia sebagai library, hal ini memudahkan kamu untuk menyematkan MFM pada klien buatan kamu.
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - implementasi parser dalam JavaScript
