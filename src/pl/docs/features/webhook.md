# Webhooki

::: tip
Ta funkcja jest dostępna w Misskey od wersji 12.109.0.
:::

::: danger
To jest funkcja eksperymentalna, nie jest ona stabilna, oraz w przyszłości może ulec zmianie.
:::

Misskey dostarcza webhook który pozwala na otrzymywanie różnych zdarzeń w czasie rzeczywistym.

Możesz zarządzać Webhookami w Ustawieniach > Webhooki.

Kiedy webhook jes zarejestrowany, żądanie HTTP jest wysłane do określonego URL za każdym razem kiedy określone zdarzenie nastąpi. Metoda żądania będzie POST i zawierać JSON w swoim ciele.
Poza tym nagłówek żądania będzie zawierać sekret ustawiony w czasie rejestracji z nazwą `X-Misskey-Hook-Secret`. Możesz użyć tego sekretu do weryfikacji, czy żądanie jest autentyczne.

Dane będą zawierać następujące pola:

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  hookId: {
   type: 'string',
   description: 'Webhook ID',
  },
  userId: {
   type: 'string',
   description: 'User ID of webhook creator',
  },
  eventId: {
   type: 'string',
   description: 'Event ID',
  },
  createdAt: {
   type: 'integer',
   description: 'Date and time of event occurrence (UNIX time, ms)',
  },
  type: {
   type: 'string',
   description: 'Event type',
  },
  body: {
   type: 'object',
   description: 'Event payload',
  },
 }
}"/>

Jeżeli serwer docelowy zwróci błąd 5XX lub nie odpowie, żądanie jest ponownie wysyłane po pewnym czasie.

Webhooki mogą indywidualnie mieć ich aktywny status zmieniony z ekranu administracji, aby chwilowo zatrzymać wysyłanie żądań.

## Zdarzenia

Wykonanie jego wyśle webhook.

### Obserwacja

Zdarza się gdy kogoś zaobserwujesz.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  user: {
   $ref: 'misskey://User',
   description: 'User that is followed',
  },
 }
}"/>

### Zaobserwowany

Wykona się kiedy zostaniesz zaobserwowany.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  user: {
   $ref: 'misskey://User',
   description: 'User that is following you',
  },
 }
}"/>

### Przestań obserwować

Dzieje się kiedy przestaniesz obserwować kogoś.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  user: {
   $ref: 'misskey://User',
   description: 'The user being unfollowed',
  },
 }
}"/>

### Wpis

Dzieje się kiedy zapostujesz notkę.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  note: {
   $ref: 'misskey://Note',
   description: 'The composed note',
  },
 }
}"/>

### Odpowiedź

Dzieje się kiedy ktoś odpowie na twoją notkę.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  note: {
   $ref: 'misskey://Note',
   description: 'The reply',
  },
 }
}"/>

### Renote

Dzieje się kiedy ktoś zrepostuje twój post.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  note: {
   $ref: 'misskey://Note',
   description: 'Renote',
  },
 }
}"/>

### Wzmianka

Dzieje się kiedy ktoś o tobie wspomni.

<MkSchemaViewerItemObject :schema="{
 type: 'object',
 properties: {
  note: {
   $ref: 'misskey://Note',
   description: 'The note that contains the mention',
  },
 }
}"/>
