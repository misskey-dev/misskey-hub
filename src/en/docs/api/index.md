---
description: 'Misskey exposes an API that you can use to develop Misskey clients, Misskey-connected web services, bots, etc. ("Applications").'
---

# Misskey API
Misskey exposes an API that you can use to develop Misskey clients, Misskey-connected web services, bots, etc. ("Applications").
We also have a streaming API, so you can create applications with real-time capabilities.

::: tip
By using the official Misskey SDK or third party libraries, you can use the API more conveniently, for example by simplifying some of the steps described in this document.
See [here](TODO) for more information about libraries.
:::

To start using the API, you will need to obtain an **access token** associated with the account you wish to use the API with.
This document will walk you through the process of obtaining an access token and then show you how to use the API in a basic way.

## Getting an access token
The API generally requires an access token to make a request.
An access token is a set of credentials associated with a user, which identifies the user using the API and controls what operations each access token is authorised to perform.

::: tip
There is a one-to-many relationship between a user and the access token associated with that user, and multiple access tokens can be issued for a given user.
:::

You can easily [obtain an access token for yourself](#Manually-issue-an-access-token), or you can [obtain an access token for an user who will be using your application](#Request-an-access-token-to-be-issued).

### Manually issue an access token
You can issue your own access token in Misskey Web under 'Settings > API'.

::: danger
Please do not share your access token with anyone.
:::

### Request an access token to be issued
To obtain an access token for a user of the application ( simply "the user"), you can request it to be issued in the following way.

::: tip
The method described below is called MiAuth, ant it issues an instant access token without creating an app.

You can still [create an app to obtain access token](./app.md).
:::

#### Step 1
Generate a UUID. This will be referred to as the **session ID** from now on.

::: danger
This session ID should be generated each time and should not be reused.
:::

#### Step 2
The application authentication form should be displayed in the user's browser. The authentication form can be opened with a URL similar to this:

```:no-line-numbers
https://{host}/miauth/{session}
```

where
- `{host}` is the host of the user's instance (usually this is entered by the user) and
- `{session}` is the session ID.

You can also set a few options as query parameters to the URL:

| name | description |
| ---- | ---- |
| `name` | application name |
| `icon` | application icon image URL。 |
| `callback` | The URL to which the user will be redirected after authentication, with the session ID added to the redirect with the query parameter `session`. |
| `permission` | The permissions that the application requires. <br>List the permissions to be requested, separated by `,`. The list of permissions can be found [here](TODO). |

::: tip Example
```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permisson=write:notes,write:following,read:drive
```
:::

#### Step 3
After the user has been granted application access, a POST request to a URL of the following form will return JSON containing the access token as a response.

```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

where
- `{host}` is the host of the user's instance and
- `{session}` is the session ID.

The properties included in the response are as follows:

| name | description |
| ---- | ---- |
| `token` | access token for the user |
| `user` | information about the user |

## Using the API
Once you have your API access token, you can use the API by making requests to the various endpoints.

::: tip

- All HTTP APIs are POST, and both request and response are in JSON format (excluding drive/files/create).
- Specify `Content-Type: application/json` in the request header.
- The access token is included in the request body JSON with the parameter name `i`.

:::

Example of a body with an access token (for meta):

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

The access token is included in the request body JSON at the parameter `i`.

For more information on the API, see the [API Reference](./endpoints.html).

::: warning
Misskey does not use REST.
:::

In addition to the HTTP API, Misskey also provides a streaming API. More information about the streaming API can be found [here](./streaming/).

::: tip
Your Misskey instance also provides API documentation at `/api-doc`.
:::
