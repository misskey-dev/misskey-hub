# Zarządzanie dodatkowymi emotikonami

Dodatkowe emotikony są zarządzane przez administratorów lub moderatorów poprzez ustawienia instancji i menu z dodatkowymi emotkami.
Domyślnie będzie widoczna lista lokalnie zainstalowanych emoji.
Początek tej listy będzie pusty, ale możesz dodać dodatkowe emotki w różny sposób.

## Kopiowanie Emoji z innych instancji

Emoji mogą być łatwo kopiowane z innych instancji.
Aby to wykonać przejdź do zakładki "zdalne" w ustawieniach dodatkowych emoji.
Możesz wyszukać emoji po nazwie i/lub serwerze z którego one są.

Kiedy znajdziesz emoji które chcesz, kliknij aby otworzyć niewielkie menu, które pozwoli ci zaimportować emoji.
Proszę pamiętać że Emotikony mogą być pokryte prawami autorskimi i twoją zasługą jest sprawdzenie legalności używania innej emotikony.

## Indywidualny import emoji

Jeżeli masz plik z obrazkiem z którego chciałbyć zrobić dodatwkową emotikonę, możesz zaimportować obrazek jako emoji.
To działa tak samo jak dodawanie pliku do posta:
Możesz wybrać czy chcesz wysłać nowy plik, lub wybrać plik z Dysku Misskey albo wysłać plik z innego URL

::: info
Kiedy importujesz emotikony z twojego dysku, pliki zostaną na dysku.
Misskey nie tworzy kopii tego pliku więc jak go usuniesz, emotikona będzie zepsuta.
:::

Emoji zostanie dodane do instancji i wtedy będziesz mógł je edytować lub usunąć jak zawsze.

## Hurtowe dodawanie emoji

Emotikony mogą być dodane hurtowo, jako paczka ZIP w specjalnym formacie.
Ta możliwość jest dostępna w menu z 3 kropkami w prawym górnym rogu menu z emoji.

::: warning
Emoji dodane hurtowo mogą nadpisać istniejące emoji lub inaczej popsuć twoją instację.
Bądź pewien że importujesz emoji tylko z zaufanych źródeł, najlepiej tylko te które wyexportowałeś sam.
:::

### Format paczek z emoji

Na najwyższym poziomie znajduje się plik o nazwie `meta.json`, który zawiera informacje o emoji zawartych w spakowanym pliku.
Definicja typu dla tego pliku wyglądałaby tak, gdzie `Meta` to struktura całego pliku.

```typescript
class Meta {
 metaVersion: number;
 host: string;
 /**
  * Data i czas reprezentowane zwrócone przez ECMAScript `Date.prototype.toString`.
  */
 exportedAt: string;
 emojis: Emoji[];
}

class Emoji {
 downloaded: boolean;
 fileName: string;
 emoji: {
  id: string;
  updatedAt: string;
  name: string;
  host: null;
  category: string;
  originalUrl: string;
  publicUrl: string;
  uri: null;
  type: string;
  aliases: string[];
 };
}
```

Pola `Meta` nie są obecnie używane ani sprawdzane podczas importu emoji, z wyjątkiem pola `emojis`.

Dla każdego `Emoji`:

- `downloaded`: powinno być zawsze 'True'. Jeśli brakuje tego pola lub nie jest ono prawdziwe, emoji nie zostanie zaimportowane.
- `fileName`: nazwa pliku graficznego wewnątrz spakowanego pliku.
- `emoji`: dane związane z emoji, tak jak było to zapisane w bazie danych. Obecnie większość z tych pól jest
  nie jest nawet sprawdzana pod kątem istnienia. Obecnie używane są następujące:
  - `name`: nazwa emoji dla użytkownika, np. `blobfox`, jeśli użytkownik powinien wpisać `:blobfox:`, aby uzyskać emoji.
    Jeśli istnieje poprzedni emoji o tej samej nazwie, zostanie on **nadpisany**!
  - `category`: kategoria emoji
  - `aliases`: lista ciągów znaków, które powinny być dodane jako aliasy. W admin UI nazywa się to "tagami".

## Edytowanie i usuwanie emoji

Właściwości emoji mogą być edytowane klikając na nie w liście lokalnych emotek.
Kiedy klikniesz na dodatkową emoji, dialog z edycją właściwości się otworzy.
Ten dialog pozwoli ci również usunąć emoji.

::: tip
Kiedy usuniesz dodatkową emotkę, stare posty które ją zawierają nadal będą miały jej nazwe w nich.
Ta emotka nie będzie się prawidłowo wyświetlać.
:::

Informacja - Emoji na innych serwerach nie mogą być edytowane lub usuwane.

Każda emotikona ma nazwę, kategorię i tagi.
Kategoria jest używana w menu wyboru emotki.
W międzyczasie tagi mogą być używane jako inne nazwy za pomocą których emoji może zostać znalezione kiedy jest wyszukiwane.

When you are done editing, save your changes by clicking the check mark in the top right corner of the dialog.

### Edytowanie hurtowe

Emoji mogą być edytowane hurtowo zaznaczająć opcje pod wyszukiwarką.
Kiedy to jest włączone kliknięcie w emoji wybierze je, zamiast otwierać panel edycji.

Opcje edycji będą wyświetlone jako przyciski pod polem wyboru.
Aby wrócić do normalnego trybu wystarczy odznaczyć pole jeszcze raz.
