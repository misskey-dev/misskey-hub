# O Misskey

Misskey jest to owartoźródłowa i zdecentralizowana platforma do mikroblogowania. Praca nad nią rozpoczęła się w 2014 roku przez syuilo w Japonii. Posiada mnóstwo funkcji takich jak Dysk lub Reakcje, a także bardzo dużą możliwość dostosowywania interfejsu użytkownika.

## Historia

Na początku Misskey było głównie usługą z Tablicami Bulletowymymi, jednak stawał się coraz popularniejszy po dodaniu ośi czasu pozwalającej użytkownikom postować krótkie wiadomości i odczytywać je w kolejności chronologicznej. To doprowadziło do stopniowego przesunięcia głównego nacisku na rozwój w stronę takiej funkcjonalności. Misskey nie był zawsze usługą zdecentralizowaną, ale stał się zdecentralizowany dzięki dodaniu wsparicia ActivityPub w 2018 roku. Od tego czasu stał się usługą, która jest uznawana i używana przez wielu.

::: tip
Nazwa "Misskey" pochodzi z piosenki "Brain Diver" zespołu May'n, którego syuilo wtedy słuchał .
:::

Z każdym zainteresowanym z możliwością dołączenia do jego rozwoju, Misskey będzie ciągle rozwijany.

## Co znaczy "Dystrybułowany"?

<b>Dystrybułowana</b> usługa, równierz nazywana <b>zdecentralizowaną</b>, nawiązuje do usługi która zawiera społeczność podzieloną na serwery które z sobą się <b>komunikują (federują)</b> udostępniając ich materiały i tworząc <b>sieć (Fediwersum)</b>. Usługi dla których istnieje tylko jeden serwer, albo dla których istnieją niezależne serwery, są nazywane centralizowanymi. Większość usług zalicza się do kategorii centralizowanych, na przykład Twitter lub Facebook. Zaletą usług zdecentralizowanych jest możliwość wybrania administacji lub tematyki serwera która najlepiej do cienie pasuje. Jest też możliwość postawienia twojego własnego serwera. Dzięki federowanej naturze usługi, masz dostęp do tej samej społeczności, niezależnie z jakiego serwera skorzystasz.

## Zawsze Open-Source

Misskey zawsze był i zawsze będzie open source. Open Source oznacza po prostu, <b> udostępnianie publiczności kodu (programu)</b>. W to równierz włącza się możliwość dostosowania i redystrybułowania kodu źródłowego tak jak mówi tego definicja. [Cały kod Misskey](https://github.com/misskey-dev) jest na dostępny na otwartoźródłowej licencji [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE), co oznacza że każdy może sprawdzić, używać, dostosowywać lub zmieciać jak im się to podoba. Open source ma wiele zalet, między innymi pozwala każdemu na wprowadzanie zmian według własnego uznania, upewnienie się, że kod nie zawiera żadnych szkodliwych komponentów oraz możliwość łatwego uczestnictwa w jego rozwoju. Dla realizacji rozproszonej natury Misskey, ta koncepcja otwartego źródła jest niezbędna. Używając tego samego przykładu co poprzednio, większość serwisów nastawionych na zysk, takich jak Twitter, Facebook itp. nie jest (w pełni) open source.

::: tip
Technicznie mówiąc, kod Misskey jest zarządzany przez Git, a jego repozytorium jest przechowywane na [GitHub.](https://github.com/misskey-dev)
:::

## Dołączanie do pracy i wspieranie projektu

Jeśli lubisz Misskey, prosze wesprzyj projekt. Wspieranie projektu może być wykonane w wiele sposobów, z których kilka jest przedstawionych poniżej. Niektóre z nich nie wymagają umiejętności programistycznych, więc każdy może wesprzeć Misskey swoim własnym sposobem. Zawsze czekamy na ciebie.

### Dodawanie funkcji i naprawianie błędów

Jeżeli znasz się na programowaniu, możesz wesprzeć projekt poprzez edycję jego kodu źródłowego. Aby uzyskać więcej informacji na ten temat, proszę zobacz [tutaj](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).

### Branie udziału w dyskusjach

Możesz wesprzeć nas poprzez udział w dyskusjach na temat nowych lub istniejących funkcji, a także poprzez zgłaszanie błędów. Takie dyskusje mogą odbywać się na [GitHub](https://github.com/misskey-dev) lub [Forum](https://forum.misskey.io/) i [Discord](https://discord.gg/Wp8gVStHW3).

### Tłumaczenie tekstu

Misskey jest dostępne w wielu językach (tak zwane i18n, które jest skrótem od Internationalization). Podczas gdy oryginalny język jest ogólnie japoński, wolontariusze tłumaczą Misskey na inne języki. Pomoc w tłumaczeniu jest również formą wspierania. Misskey korzysta z usługi [Crowdin do zarządzania swoimi tłumaczeniami.](https://crowdin.com/project/misskey)

### Udostępnianie wrażeń

Poza zgłaszniem błędów, proszę podziel się wrażeniami o tym co uwielbiasz w Misskey, lub co uważasz za zabawne. Takie rzeczy są motywacją dla deweloperów, a także są bezpośrednim wsparciem dla projektu.

### Zwiększanie liczby Misskistów

"Misskistsy" to użytkownicy Misskey. Mówiąc światu o Misskey poprzez pokazywanie go innym może zwiększyć liczbę Misskistów co motywuje deweloperów.

### Dotacje?

[O tym dowiesz się tutaj](./donate.md)

## Często zadawane pytania

### Co ten projekt chce osiągnąć?

W skrócie, Misskey jest platformą, która ma być używana przez wielu użytkowników. W przeciwieństwie do innych platform, Misskey nie jest związany z konkretną ideą (na przykład anty-centralizacją) lub wizją, dlatego jest trochę "bezcelowy". Z drugiej strony, to daje pewną elastyczność, ponieważ nie jest związany z konkretnym kierunkiem rozwoju.

<!-- TODO: Dodać mapę rozwoju -->

### Czy nad Misskey pracuje jakaś firma?

Nie. Misskey jest tworzone przez jedną osobę i nie jest komercjalizowane przez połączenia z jakąkolwiek firmą. Członkowie zespołu deweloperskiego są zwykle wolontariuszami. Ponadto, mimo że istnieją pewne sponsory korporacyjne, rozwój nadal jest skupiony wokół społeczności.

### Kto zarządza Misskey?

Z racji na dystrybułowaną naturę Misskey, każdy serwer ma swoją własną administrację. Dlatego też nie wszystko w Misskey jest zarządzane przez jedną osobę lub firmę. Oznacza to, że ponieważ zespół deweloperski nie kontroluje poszczególnych serwerów, dla pytań związanych z zarządzaniem należy skontaktować się z administracją swojego serwera. Możesz zweryfikować, kto zarządza twoim indywidualnym serwerem na [tej stronie](/about). Jeśli utworzysz serwer, stajesz się jego administratorem.

### Jaki serwer powinienem wybrać?

[(Niepełną) Listę serwerów możesz znaleść tutaj.](../instances.md) W zależności od serwera, jego społeczności lub jego tematyki (np. ulubionego show) serwery mogą się różnić, więc jeśli jest taki co do ciebie pasuje, to dołączanie do niego będzie dobrym wyborem. Poza tym rozmiar serwera, baza użytkowników, kraj lub język używany, zawodność oraz zaufanie administracji to wiele z rzeczy, które mogą być brane pod uwagę jako kryterium. Nie ma natomiast jednego serwera który jest oficjalnym serwerem Misskey. Masz też wybór stworzenia własnego serwera.

Teoretycznie istnieje [misskey.io](Misskey.io) czyli serwer publiczny stworzony przez twórcę Misskey, jednak niczym szczególnym się on nie wyróżnia.

BTW - nie ważne z jakiego serwera dołączysz, nadal będziesz mógł się połączyć z użytkownikami z innych serwerów.

### Jak mogę postawić swój własny serwer Missskey?

Dziękujemy za zaintereswanie w tworzeniu serwera Misskey. Aktualnie nie ma dostępnego serwu hostingowego dla Misskey, więc tworzenie nowego serwera wymaga pewnej wiedzy. Więcej informacji na ten temat znajdziesz [tutaj](./install.md).

### Z jakich technologii Misskey korzysta?

Kiedy trwała praca nad Misskey, technologia używana często się zmieniała. Na początku używano kombinacji MySQL + PHP + jQuery, jednak teraz używa :

- Strona serwerowa: Node.js
- Baza danych: PostgreSQL, Redis
- Biblioteka UI: Vue.js
- Język programowania: TypeScript

Poza tym, z Misskey pochodzą technologie takie jak MFM lub AiScript, które równierz są używane.

### Czy to jest fork Mastodona?

Nie. Misskey jest kompletnie innym projektem od Mastodona lub innych podobnych projektów. Jest w rozwoju od dłuższego czasu. Jednak, stał się siecią rozproszoną dopiero po pojawieniu się Mastodona. Oprócz tego, że oba projekty implementują protokół ActivityPub, nie ma żadnego związku między nimi.

### Czy są jakieś aplikacje na Androida / iOS?

Nie ma oficjalnej aplikacji Misskey dla Androida lub iOS. Istnieją jednak aplikacje stworzone przez społeczność. Więcej informacji na ten temat znajdziesz [tutaj](./apps.md).

Jednakże, funkcjonalność aplikacji trzech będzie w tyle za oficjalnym klientem przeglądarkowym, więc jeżeli chcesz używać natywnej aplikacji, radzimy używać oficjalnego przeglądarkowego klienta. Ponieważ klient przeglądarkowy Misskey obsługuje PWA, jest również możliwe, aby działał jak natywna aplikacja. Więcej informacji na ten temat znajdziesz [tutaj](todo).

### Gdzie mogę pobrać logo i ikony Misskey?

[tutaj - w kolekcji materiałów :-)](../appendix/assets.html).

### Kim jest ta słodka dziewczyna z kocimi uszamy którą czasem widzisz?

To jest bogini "broniąca" Misskey, Ai(Oni ją nazywali słodką, yay!)
<div class="info">ℹ️ Aby dowiedzieć się więcej o Ai zajrzyj na stronę o niej <a href="https://xn--931a.moe/" target="_blank">tutaj</a> (Po japońsku).</div>
