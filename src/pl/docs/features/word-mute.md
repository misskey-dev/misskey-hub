# Wyciszanie słowami

Tworząc filtry wyciszania za pomocą słów, możesz sprawić, aby notki spełniające określone warunki nie pojawiały się na ośi czasu.

Są dwa rodzaje wyciszeń słow: miękkie i twardzie. Poniżej masz wyjaśnienie procesu konfiguracji i efektów obu.

## Miękkie wyciszenie słów

Z miękkimi wyciszeniami słow, słowo wyciszenia jest przetwarzane w aplikacji (kliencie), której używasz.

Kiedy wpis spełni zasady spełni zasady, zostanie ukryty za tekstem "(username) coś powiedział". Możesz wyświetlić ukrytą zawartość notki, klikając na ten tekst.

## Twarde wyciszenie słów

Z twardym wyciszeniem to serwer decyduje czy zawartość nowej przychodzącej notki spełnia ustawione warunki podobnie jak anteny, i w takim przypadku całkowicie ją wykluczy z twojej ośi czasu.

Podsumuwując twarde wyciszenie działa następująco:

- Tylko nowe notki utworzone po konfiguracji będą miały wpływ na wyciszenie.
- Jeżeli warunki zostaną zmienione, wcześniej wyciszone notki nadal pozostaną wyciszone.
- Osie czasu nie zostaną zapełnione tekstem "(username) coś powiedział".
- Wyciszenie nie będzie działać dla aplikacji, które nie obsługują wyciszenia słow.
