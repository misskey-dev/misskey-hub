# Misskey Extensions to ActivityPub

This page documents the extensions to ActivityPub that Misskey uses. This page lists some context items defined in JSON-LD contexts and explains their semantics.

This document uses [compact IRIs](https://www.w3.org/TR/json-ld/#dfn-compact-iri).
The prefix `ap` is used to refer to `https://www.w3.org/ns/activitystreams#`.
The prefix `misskey` is used to refer to `https://misskey-hub-net/ns#`.

## `_misskey_content`

- compact IRI: `misskey:_misskey_content`
- canonical IRI: `https://misskey-hub.net/ns#_misskey_content`

::: warning
This value is deprecated and might be removed in the future.
See also <https://github.com/misskey-dev/misskey/pull/8787>.
:::

This value is identical to having a `source` property like this:

```js
source: {
	content: _misskey_content,
	mediaType: "text/x.misskeymarkdown"
}
```

Where `_misskey_content` represents the value of the field described in this section.

## `_misskey_quote`

- compact IRI: `misskey:_misskey_quote`
- canonical IRI: `https://misskey-hub.net/ns#_misskey_quote`

::: tip
Ways to potentially provide this information using the core ActivityPub vocabulary are currently underway, see <https://github.com/misskey-dev/misskey/issues/8722>.
:::

Indicates that this note is quoting another note. It contains the `id` of the note being quoted.

This seems to be identical to `https://fedibird.com/ns#quoteUri`.
Misskey also uses `as:quoteUrl` for this but this was not adopted to the ActivityPub specification.

## `_misskey_reaction`

- compact IRI: `misskey:_misskey_reaction`
- canonical IRI: `https://misskey-hub.net/ns#_misskey_reaction`

Misskey federates its reactions as `Like` activities.
What kind of reaction was used is conveyed using this field.
Misskey also sets `ap:content` of the `Like` activity to the same value.

The content will be a string that either contains a single Unicode Emoji or a string that starts and ends with a colon. In the latter case the reaction uses a custom emoji, and the `tag` property will be set to contain the data of the respective emoji.

## `_misskey_votes`

- compact IRI: `misskey:_misskey_votes`
- canonical IRI: `https://misskey-hub.net/ns#_misskey_votes`

This value is used for `Question` activities to indicate the number of votes an option currently has.
This value is identical to having a `replies` property like this:

```js
replies: {
	type: 'Collection',
	totalItems: _misskey_votes
}
```

Where `_misskey_votes` represents the value of the field described in this section.

## `_misskey_talk`

- compact IRI: `misskey:_misskey_talk`
- canonical IRI: `https://misskey-hub.net/ns#_misskey_talk`

This value is used for `Note` type objects to indicate that they are a Misskey chat message.
Misskey handles these kinds of messages specially, e.g. it will apply different audience scoping rules and show them via a different API than usual `Note` objects.

This field can only take the value of `true` (or be absent).

## `isCat`

- compact IRI: `misskey:isCat`
- canonical IRI: `https://misskey-hub.net/ns#isCat`

Used on actors to indicate that they in some way identify as a cat, expressed as a boolean value.
If this property is set to `true`, displaying the actor or their notes will have some special effects attached in some clients.
