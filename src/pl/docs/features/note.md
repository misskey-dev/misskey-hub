# Wpisy/Notki

Notki to główny koncept Misskey. Opiera on się na zawartości która może być tekstem, obrazem, ankietą itp. co zostało zapostowane na Misskey.

Tworząc wpis, zostanie ona dodana na [oś czasu](./timeline) i wysłana do twoich obserwujących.

Na Misskey można też dodawać [Reakcje](./reaction) notkom. Na dodatek możesz też komentować, udostępniać i cytować je.
Możesz dodać wpis do [Ulubionych](./favorite) dzięki czemu łatwiej możesz ją znaleść.

## Tworzenie postów

Aby utworzyć post kliknij ikonkę z ołówkiem aby otworzyć formularz postowania. Podaj jego treść. Wyślij post. Posty mogą zawierać tekst, pliki, [Ankiety](./poll). Na dodatek używając [MFM](./mfm) w tekście możesz korzystać z [wzmianek](./mention) i [Hasztagów](./hashtag). Poza tym są też inne tagi jak na przykład CW (Content Warning) lub widoczność posta.

::: tip
Materiały które skopiowałeś do schowka możesz wkleić
:::

::: tip
Możesz też kliknąć <kbd class="key">Control + Enter</kbd> aby opublikować notkę
:::

## Udostępnianie / Renote

Cytowanie lub udostępnianie treści notki

::: tip
Jeśli ustawiłeś widoczność posta na "tylko obserwujący" lub "bezpośrednio" to nie będzie można renotować posta
:::

Aby usunąć udostępnienie posta po prostu kliknij w opcję "usuń" w opcjach posta.

## CW

Jest to skrót od "Ostrzeżenie o treści". Funkcja ukrywająca zawartość posta, chyba że użytkownik wyraźnie zażąda jej pokazania. Zazwyczaj używana do ukrywania treści długich postów, spojlerów albo materiałów kontrowersyjnych. Aby oznaczyć CW w poście kliknij w ikonę z okiem przekreślonym.

## Widoczność

Możesz zmienić widoczność każdej notki klikająć w ikonkę obok przycisku postowania.

### Publiczne

Twój post będzie publiczny i będzie widoczny na każdej ośi czasów (Domowa, Lokalna, Społeczność, global).

::: warning
Ta widoczność nie jest dostępna dla użykowników <a href="./silence">wyciszonych</a>.
:::

### Główna

Twoja notka będzie widoczna dla każdego, ale nie pokaże się w lokalnej, społecznej, globalnej ośi czasów dla tych co nie obserwują.

### Obserwujący

Notka tylko widoczna dla osób obserwujących ciebie.

### Post bezpośredni

Post będzie widoczny tylko dla osób wspomnianych w poście.

### Opcja "Tylko lokalna instancja"

Po wybraniu tej opcji, post nie będzie rozprowadzany na inne instancje

### Porównanie widoczności ośi

<table>
    <tr><th></th><th>Publiczba</th><th>Główna</th><th>Obserwowani</th><th>Bezpośrednio</th></tr>
    <tr><th>LTL/STL/GTL obserwowanych</th><td>✔</td><td>✔</td><td>✔</td><td></td></tr>
    <tr><th>LTL/STL/GTL innych</th><td>✔</td><td></td><td></td><td></td></tr>
</table>

## Przypnij do profilu

Przypinając notkę do profilu będzie pierwszą widoczną notką na stronie profilu

::: tip
Można przypiąć kilka postów
:::

## Powiadomienia

Możesz odtrzymywać powiadomienia dla odpowiedzi, reakcji itp. Dla posta czyjegoś innego możesz włączyć powiadomienia korzystając z opcji "obserwuj" w menu notki.
