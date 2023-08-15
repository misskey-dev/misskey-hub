---
description: 'Jeśli naportkasz na problem, proszę najpierw sprawdź tą stronę'
---

# Rozwiązywanie problemów
::: tip
Proszę równierz korzystać z strony z [często zadawanymi pytaniami(FAQ)](./faq.md)
:::
Jeżeli napotkasz problem, proszę najpierw sprwadź tą stronę. W przypadku kiedy nie możesz znaleść twojego problemu tutaj, albo kroki podane tutaj nie rozwiązują problemu, proszę skontakuj się z administratorem twojego serwera lub [Zgłoś błąd](./report-issue).

## Klient się nie uruchamia
W większości przypadków jest to spowodowane przez przestarzałą przeglądarkę lub system operacyjny. Proszę spróbuj zaktualizować twój system lub przeglądarkę do najnowszej wersji i wtedy spróbuj ponownie.

Mimo iż to nie dzieje się zbyt często, jeżeli twój klient nadal się nie uruchamia, jest możliwe że cache/bufor może być problemem. W tym przypadku proszę wyczyść pamięć cache i spróbuj ponownie.

## Strony nie mogą się załadować
Jeżeli twój klient się uruchamia, ale widzisz błąd przy załadowaniu strony, proszę sprawdź twoje połączenie sieciowe w poszukiwaniu błędów. Na dodatek sprawdź czy serwer z którym chcesz się połączyć nie jest wyłączony.

Mimo iż to nie dzieje się zbyt często, przypadki gdzie pamięć podręczna/cache/bufor mogą być problemem. W tym przypadku wyczyść ją i spróbuj ponownie.

Wszystkie inne problemy najpewniej są związane z serwerem z którego chcesz skorzystać więc skontaktuj się z jego administratorem.

## Klient jest wolny
Proszę wypróbuj którąś z opcji:

- Aktywuj "Redukuj animacje interfejsu" w ustawieniach klienta
- Wyłącz "Użyj efektu rozmycja dla modułów" w ustawieniach klienta
- Włącz akcelerację sprzętową w ustawieniach przeglądarki
- Ulepsz specyfikację twojego urządzenia (heh)

## Części interfejsu działają dziwnie (Na przykład: tło jest przezroczyste)
Zepsuty interfejs może być spowodowany przez system buforów motywów kiedy interfejs jest zmieniony jako część aktualizacji. Korzystajnie z opcji "Wyczyść bufor" w ustawieniach powinno rozwiązać problem.

::: warning
Wyczyść bufor/cache "Klienta". Nie czyść buforu/cache "Przeglądarki".
:::

## Migające światło powiadomień lub antena nie znika
Migające światło pokazuje nieprzeczytane materiały. W przypadkach, gdy ta lampka nie znika, zazwyczaj jest to nieprzeczytana zawartość, która została wyparta przez nową, przychodzącą zawartość. Jeśli uważasz, że przeczytałeś całą zawartość, ale kontrolka nadal nie znika (prawdopodobnie jest to błąd), możesz siłą zaznaczyć całą zawartość jako przeczytaną w ustawieniach użytkownika.

## Przycisk do renotowania jest zablokowany
Postów udostępnionych tylko "dla obserwujących" nie można renotować

## Określone części Przeglądarkowego Interfejsu Misskey are nie są wyświetlane
Problemy tego typu mogą się pojawić jeżeli korzystasz z narzędzi do blokowania reklam(np. Adblock). Dla poprawnego działania Misskey spróbuj je wyłączyć.

## Niektóre części Interfejsu Przeglądarkowego Misskey nie są przetłumaczone
W większości przypadków jest to powód tego że tłumaczenie nie jest jeszcze wykonane zamiast bycia błędem. Proszę poczekać dopóki tłumaczenie danej częsci zostanie ukończone. Możesz równierz samemu [przyłączyć się do tłumaczenia Interfejsu Misskey](./misskey).
