# 테마

You can change the look and feel of the Missky client by applying a theme.

## Theme Settings

Settings > Themes

## Creating a Theme

The theme object code is written using JSON5.
The theme has an object type like the one shown below.

``` js
{
	id: '17587283-dd92-4a2c-a22c-be0637c9e22a',

	name: 'Danboard',
	author: 'syuilo',

	base: 'light',

	props: {
		accent: 'rgb(218, 141, 49)',
		bg: 'rgb(218, 212, 190)',
		fg: 'rgb(115, 108, 92)',
		panel: 'rgb(236, 232, 220)',
		renote: 'rgb(100, 152, 106)',
		link: 'rgb(100, 152, 106)',
		mention: '@accent',
		hashtag: 'rgb(100, 152, 106)',
		header: 'rgba(239, 227, 213, 0.75)',
		navBg: 'rgb(216, 206, 182)',
		inputBorder: 'rgba(0, 0, 0, 0.1)',
	},
}

```

* `id` ... Unique theme ID. A UUID is recommended.
* `name` ... Theme name
* `author` ... Theme author
* `desc` ... Theme description (Object)
* `base` ... light or dark theme
	* Use `light` for a light theme and `dark` for a dark theme.
	* The theme inherits the base theme that is set here.
* `props` ... Theme style definition. Explained in the following sections.

### Theme Style Definition

Define the theme style within the `props`.
The keys are the names of CSS variables, and the values specify the contents.
Furthermore, this `props` object inherits from the base theme.
The base theme is [_light.json5](https://github.com/misskey-dev/misskey/blob/develop/src/client/themes/_light.json5) if the `base` of this theme is `light` and [_dark.json5](https://github.com/misskey-dev/misskey/blob/develop/src/client/themes/_dark.json5) if `dark`.
That is, if there is no `props` key named `panel` in this theme, then it is set to the `panel` in the base theme.

#### Value Syntax

* Colors expressed with hexadecimal
	* example: `#00ff00`
* Colors expressed with `rgb(r, g, b)` format
	* example: `rgb(0, 255, 0)`
* Colors that contain alpha/transparency values expressed with `rgb(r, g, b, a)` format
	* example: `rgba(0, 255, 0, 0.5)`
* Other key value reference
	* `@{key name}` is a reference to the value of another key. Replace `{key name}` with the name of the key you wish to reference.
	* example: `@panel`
* Constant (discussed below) reference
	* `${constant name}` is a reference to a constant. Replace `{constant name}` with the name of the constant you with to reference.
	* example: `$main`
* Functions (discussed below)
	* `:{関数名}<{引数}<{色}`

#### Constants

Constants are useful when you have values that you do not want to output as CSS variables, but want to use as values for other CSS variables."I don't want to output it as a CSS variable, but I do want to use it as a value for other CSS variables.

#### Functions

WIP
