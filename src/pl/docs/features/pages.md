# Strony

Strony na Misskey pozwalają utworzyć personalizowane strony internetowe. Możesz w nich zawrzeć dowolne media i formatowanie, a nawet uruchamiać zaprogramowane skrypty. Podobnie jak z wieloma innymi funcjami Misskey, możesz formatować swoją zawartość używając [MFM](./mfm.md).

Strony Misskey są składowe z różnych typów bloków, które możesz przeciągać i upuszczać.

## Bloki z zawartością

Bloki z zawartością wyświetlają określoną treść użytkownikowi

### Sekcje

Grupowanie bloków w sekcje.

### Tekst

Wyświetla użytkownikowi tekst. Oczywiście ten tekst może też być formatowany za pomocą MFM.

### Obrazy

Pokazuje obrazy wybrane z Dysku użytkownika

### Pole tekstowe

Wyświela pole tekstowe. Nie obsługuje formatowania

### Dołączona notka

Dołącza notkę do strony

## Bloki do uzupełnienia

Bloki do uzupełnienia pozwalają tworzyć interaktywne strony. Dane z tych bloków mogą być wykorzystane w skryptach i zmiennych

## Bloki specjalne

Specjalne bloki pozwalają na tworzenie bardziej zaawansowanych stron. Można za pomocą nich automatycznie tworzyć wpis lub manipulować stroną.

## Zmienne

Zmienne pozwalają tworzyć dynamiczne strony. Możesz dołączać wartości pisząc <b>{ nazwa zmiennej }</b> w tekście. Na przykład, w <b>Witaj { rzecz } świecie!</b>, jeśli wartość zmiennej (rzecz) to <b>ai</b>, to tekst zmieni się na <b>Witaj ai świecie!</b>.

Wartości są obliczane od góry do dołu, więc nie możesz odwołać się do zmiennej zdefiniowanej poniżej w danej zmiennej. Na przykład, jeśli są trzy zmienne, <b>A, B, C</b>, które są zdefiniowane w tej kolejności, <b>A</b> i <b>B</b> mogą być odwoływane w definicji <b>C</b>; jednak <b>B</b> i <b>C</b> nie mogą być odwoływane w definicji <b>A</b>.

Aby uzyskać wynik od użytkownika, umieść blok "Wejście" na stronie i ustaw "Nazwa zmiennej" na nazwę zmiennej, w której chcesz przechować wartość (zmienna zostanie automatycznie utworzona przez blok).

Funkcje mogą być użyte w celu zgrupowania obliczeń w ponownie wykorzystywalnej formie. Aby utworzyć funkcję, utwórz zmienną typu "Funkcja". Funkcja może mieć sloty(Argumenty) i wartości w slotach są dostępne jako wartości funkcji. Poza tym są też funkcje wyższego stopnia które używają innych funkcji jako argument. Funkcje mogą być predefiniowane lub zdefiniowane z slotach wyższych funkcji.
