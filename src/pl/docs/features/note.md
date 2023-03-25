# Notes

Notes are a central concept within Misskey, and refer to content that may include text, images, polls and more that has been posted to Misskey. In this context, "to note" is also used as a verb referring to the creation of a note.

By composing a note, it will be added to the [timeline](./timeline) and sent to your followers and other users from your server.

On Misskey, it is also possible to add [Reactions](./reaction) to notes. Additionally, you can reply to or quote notes.

By adding a note to your [Favorites](./favorite), you can easily find it at a later point in time.

## Composing Notes

To compose a note, press one of the buttons with a pencil icon on your screen to open the posting form (either at the top of your timeline or at the bottom of the navigation menu). Enter the content you want to post in the form, and press the "Note" button to publish it. Notes can contain text, files such as images or videos, and [Polls](./poll). In addition, by using [MFM](./mfm) within your text, you can include [Mentions](./mention) and [Hashtags](./hashtag). There are also other settings such as CW (Content Warning) or note visibility that are explained below.

::: tip
If you are on a computer and have an image saved in your clipboard, you can attach it to your note by using the usual paste keyboard shortcut within the text box.
:::

::: tip
You can also press <kbd class="key">Ctrl + Enter</kbd> within the text box to publish your note.
:::

## Renote

The act of quoting an existing note or sharing an existing note. The note created as a result of these acts are all called a Renote/RN (or "renoting" as verb). Most of the time, this is used when you want to share a note you like to your own followers, or when you want a share a note that you posted in the past once more. While it is possible to renote the same note multiple times, please be aware that doing so may be seen as annoying by others.

::: warning
If you've set your note's visibility to Followers-only or Direct, then others will not be able to renote it.
:::

To take back a renote, press the "..." next to the renote timestamp and select "Take back Renote".

## CW

An abbreviation of "Content Warning", resulting in the content of a note being hidden unless explicitly requested to be shown by a viewing user. It is mainly used to hide the content of long notes or to prevent posting spoilers publicly. To enable CW for a note, press the "Hide content" button (eye icon) in the post form. By doing so a new text input area will appear, where you can write a summary of the content hidden by the CW.

## Visiblility

It's possible to individually set where your note will be visible (Visibility) for each of your notes. By pressing the icon to the left of the "Note" button in the post form, you can choose from the visibility settings listed below.

### Public

Your note will be visible to all users and will show up on all timelines (home, local, social, global).

::: warning
This visibility will be unavailable if your account is <a href="./silence">silenced</a>.
:::

### Home

Your note will be visible to all users, but will not show up on the local, social or global timeline for non-followers.

### Followers

Your note will only be visible to those that are following you. The note will show up on all timelines of your followers.

### Direct

Your note will only be visible to individually specified users. The note will show up on all timelines of the specified users.

### The "Local only" option

If you enable this option, your note won't be federated to remote instances.

### Visibility comparison

<table>
    <tr><th></th><th>Public</th><th>Home</th><th>Followers</th><th>Direct</th></tr>
    <tr><th>LTL/STL/GTL of Followers</th><td>✔</td><td>✔</td><td>✔</td><td></td></tr>
    <tr><th>LTL/STL/GTL of Others</th><td>✔</td><td></td><td></td><td></td></tr>
</table>

## Pin to profile

By pinning a note to your profile it will be constantly displayed on your profile page. To pin a note, open the note menu and press "Pin to profile".

::: tip
It's possible to pin multiple notes to your profile.
:::

## Watch

You can get notifications for replies, reactions etc. for a note that is not yours by watching it. To watch a note, select "Watch" from the note's menu.
