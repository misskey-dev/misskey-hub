# Managing Custom Emoji

Custom emoji can be managed by administrators or moderators by going to the instance settings and then the custom emoji submenu.
By default you will see a list of the current locally installed emoji.
At the start this list will be empty, but you can add custom emoji in different ways.

## Copying Emoji from another Instance

Emoji can be easily copied from another instance.
To do this, switch to the "remote" tab in the custom emoji settings.
You can search emoji by name and/or host they are from.

When you have found an emoji you want, click it to open a small menu which will allow you to import the emoji.

Please note that Emoji may be subject to copyright and you are responsible for checking whether you may legally use another emoji.

## Individual Emoji Import

If you have an image file that you would like to turn into a custom emoji you can import the image as an emoji.
This works just like attaching files to a note:
You can choose to upload a new file, pick a file from your Misskey drive or upload a file from another URL.

::: danger
When you import emoji from your drive, the file will remain inside your drive.
Misskey does not make a copy of this file so if you delete it, the emoji will be broken.
:::

The emoji will be added to the instance and you will then be able to edit or delete it as usual.

## Bulk Emoji import

Emojis can be imported in bulk as packed ZIP files with a special format.
This ability can be found in the three dots menu in the top right corner of the custom emoji menu.

::: warning
Bulk emoji import may overwrite existing emoji or otherwise mess up your instance.
Be sure to only import emoji from trusted sources, ideally only ones you exported yourself.
:::

### Packed emoji format

At the top level is a file called `meta.json` which contains information about the emoji contained in the packed file.
A type definition for this file would look like this, where `Meta` is the structure of the whole file.

```typescript
class Meta {
	metaVersion: number;
	host: string;
	/**
	 * Date and time representation returned by ECMAScript `Date.prototype.toString`.
	 */
	exportedAt: string;
	emojis: Emoji[];
}

class Emoji {
	downloaded: boolean;
	fileName: string;
	emoji: {
		id: string;
		updatedAt: string;
		name: string;
		host: null;
		category: string;
		originalUrl: string;
		publicUrl: string;
		uri: null;
		type: string;
		aliases: string[];
	};
}
```

The fields of `Meta` are currently not used or checked when importing emoji, except for the `emojis` field.

For each `Emoji`:
- `downloaded`: should always be true. If the field is missing or not truthy, the emoji will not be imported.
- `fileName`: name of the image file inside the packed file.
- `emoji`: data associated with the emoji as it was stored in the database. Currently most of these fields are
  not even checked for existence. The following are currently used:
  - `name`: name of the emoji for the user, e.g. `blobfox` if a user should type in `:blobfox:` to get the emoji.
    If a previous emoji with the same name exists, it **will be overwritten**!
  - `category`: category of the emoji
  - `aliases`: list of strings that should be added as aliases. The admin UI calls these "tags".

## Editing and Deleting Emoji

The properties of an emoji can be edited by clicking it in the list of local emoji.
When you click on a custom emoji, a dialog for editing the properties will open.
This dialog will also allow you to delete an emoji.

::: danger
When you delete a custom emoji, old notes that contain it will still have the text name of the emoji in it.
The emoji will no longer be rendered correctly.
:::

Note that remote emoji can not be edited or deleted.

Each emoji can have a name and a category and several tags.
The category is used for structuring the emoji picker.
Meanwhile the tags can be used as alternate names by which the emoji can be found when searching in the emoji picker.

When you are done editing, save your changes by clicking the check mark in the top right corner of the dialog.

### Bulk Editing

Emoji can be edited in bulk by checking the box below the search field.
With this enabled, clicking on an emoji will select it instead of opening the editing dialog.

The Editing options will be displayed as buttons below the checkbox.
To return to the normal behaviour just uncheck the box again.
