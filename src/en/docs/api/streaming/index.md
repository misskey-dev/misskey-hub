---
description: 'The streaming API provides real-time information (e.g., new posts in the timeline, reactions, followers, etc.) and various other operations.'
---

# Streaming API

::: tip
You should read the [Misskey API documentation](../index.md) first.
:::

The streaming API provides real-time information (e.g., new posts in the timeline, reactions, followers, etc.) and various other operations.

## Connecting to the stream.

To use the streaming API, you have to connect to the Misskey server using **websocket**.

The websocket URL looks like this:

```:no-line-numbers
wss://{host}/streaming?i={token}
```

where
- `{host}` is the host of the instance you want to connect to.
- `{token}` is the users access token.

::: tip
You can also connect without the access token, but this will limit the information you receive and operations you can perform.
:::

Once you are connected to the stream, you can subscribe to posts as described below, but at this stage you cannot, for example, receive new posts from your timeline.

To receive such events, you need to join a **channel** on the stream, as described below.

**All data should be encoded as JSON.**

## Channel
Misskey's streaming API has the concept of channels. This is a mechanism for separating the information to be sent and received.
By joining channels on the stream, you will be able to receive various kinds of information and send information.

::: tip
You can join multiple channels simultaneously on a single stream connection.
:::

The following sections describe how to use the channels. To see what channels are available, please refer to the [Channel List](./channel/index.md).

### Joining a channel
To join a channel, send the following JSON data on the stream:

```js
{
	type: 'connect',
	body: {
		channel: 'xxxxxxxx',
		id: 'foobar',
		params: {
			...
		}
	}
}
```

where
- `channel` is the name of the channel you want to connect to. The types of channels are described later in this section.
- `id` is an arbitrary ID for interacting with that channel. This is necessary to identify which channel the message is coming from, because a stream contains multiple channels. This ID can be something like a UUID or a random number.
- `params` are parameters required when joining a channel. Different channels require different parameters when connecting. When connecting to a channel that does not require parameters, this property can be omitted.

::: tip
The ID is not per channel but per channel connection, because a channel may be needed multiple times but with different parameters.
:::

### Receiving messages from channels
For example, a timeline channel will send out a message when there is a new post. By receiving the message, you will know in real time that a new post has been published on your timeline.

When a channel issues a message, the following JSON data is sent:
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

where
- `id` is the ID that you set when connecting to that channel as mentioned above. This lets you know from which channel (instantiation) this message is coming.
- `type` is the type of message. The types of messages that get sent depend on the channel.
- `body` holds the content of the message. The content of the message depends on the channel.

### Sending a message to a channel
On some channels, it is also possible to send messages and perform other operations in addition to receiving messages.

To send a message to a channel, send the following JSON data to the stream:
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

where
- `id` is the ID that you set when connecting to that channel as mentioned above. This lets you determine which channel (instantiation) the message is for.
- `type` is the type of message. Different channels accept different types of messages.
- `body` contains the content of the message. Different channels accept different message contents.

### Disconnecting from a channel
To disconnect from a channel (instantiation), send the following JSON data to the stream:
```js
{
	type: 'disconnect',
	body: {
		id: 'foobar'
	}
}
```

where
- `id` is the ID that you set when connecting to that channel as mentioned above. This lets you determine which channel (instantiation) you want to disconnect from.

## Capturing Notes
Misskey provides a mechanism called note capture. This is the ability to receive a stream of events for a given note.

For example, let's say you grab a timeline and display it to your users. Let's say someone reacts to one of the posts in the timeline.
However, since the client has no way of knowing that a note has been reacted to, it is not possible to reflect the reaction in the timeline in real time.

To solve this problem, Misskey provides a note capture mechanism. When you capture a note, you will receive events related to that note, and you can display reactions to it in real time.

The following sections describe how to use the note capture function. To see what kind of capture events are available, see the [Capture Events List](./note-capture-events.md).

### Capturing a Note

To capture a note, send the following JSON data to the stream:
```js
{
	type: 'subNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

where
- `id` is the ID of the note you want to capture.

When you send this message, you are asking Misskey to capture the note, and events related to that note will then be streamed to you.

For example, when a note gets a reaction, you will see a message like the following:
```js
{
	type: 'noteUpdated',
	body: {
		id: 'xxxxxxxxxxxxxxxx',
		type: 'reacted',
		body: {
			reaction: 'like',
			userId: 'yyyyyyyyyyyyyyyy'
		}
	}
}
```

where
- `body.id` will be set to the ID of the post that triggered the event.
- `body.type` will be the type of the event.
- `body.body` will contain the details of the event.

### Un-capturing a Note

If you no longer want to receive events related to a note, such as when it no longer appears on your screen, you can remove the capture request.

Send the following JSON data:
```js
{
	type: 'unsubNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

where
- `id` is the ID of the note you want to uncapture.

Once you send this message, no more events related to that note will be sent to you.
