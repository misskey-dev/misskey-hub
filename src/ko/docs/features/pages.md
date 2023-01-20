# Pages

Misskey Pages are a feature where you can create custom web pages. In them you can include different types of media and formatting. and even run programming scripts. Like with many other areas of Misskey, you can format your content using [MFM](./mfm.md).

Pages in Misskey are composed of different types of Blocks, and the blocks can be moved around using drag-and-drop.

## Content Blocks

Content blocks display different types of content to the user.

### Section

A grouping block that can contain other blocks. Each content block has a title that it will display at its top.

### Text

Displays text content to the user. The text content can be formatted and can include variables interpolation (See Variables below).

### Images
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

Displays an image that you can select from your drive.

### Text Area
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

Displays text in a text area tag. This block does not support MFM but variable interpolation is allowed.

### Embedded Note

TODO

### Canvas
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

TODO

## Input Blocks
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

Input blocks can be used to create interactive pages with form elements. These blocks can be used to interact with the variables and scripts in a page.

## Special Blocks
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

Special blocks provide unique features for your page. This includes a note posting form and page control flow.

## Variables
::: 팁
이 기능은 Misskey v12까지만 지원됩니다. Misskey v13에서는 해당 기능이 삭제되었습니다.
:::

Variables can be used to create dynamic pages. You can embed the value of a variable by writing <b>{ variable name }</b> in the text. For example, in <b>Hello { thing } world!</b>, if the value of the variable (thing) was <b>ai</b>, then the text would become <b>Hello ai world!</b>.

Variables are evaluated from top to bottom, so you cannot refer to a variable defined below you in a given variable. For example, if there are three variables, <b>A, B, C</b>, that are defined in that order, <b>A</b> and <b>B</b> can be referenced inside of <b>C</b>'s definition; however, <b>B</b> and <b>C</b> cannot be referenced inside of <b>A</b>'s.

To receive input from the user, place an "Input" block on the page and set the "Variable Name" to the name of the variable in which you want to store the value (the variable will automatically be created by the block).
The variable can the be used to perform actions in response to user input.

Functions can be used to encapsulate value calculations in a reusable form. To create a function, create a variable of type "Function". A function can have slots (arguments), and the values of the slots are available as variables within the function. There are also functions called higher-order functions that take another function as an argument. Functions can be predefined or instantiated in-line in slots of such higher order functions.
