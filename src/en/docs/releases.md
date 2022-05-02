# Release Notes
Notes for indivudual misskey releases.

::: tip
Information updates may not be translated yet. For the latest information see [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md).
:::

## 12.110.1（2022/04/23）

### Bugfixes
- Fix GOP rendering @syuilo
- Improve performance of antenna, clip, and list @xianonn

## 12.110.0 (2022/04/11)

### Improvements
- Improve webhook @syuilo
- Client: Show loading icon on splash screen @syuilo

### Bugfixes
- API: parameter validation of users/show was wrong
- Federation: fixed problem with direct posts to remote instances not reaching @syuilo

## 12.109.2 (2022/04/03)

### Bugfixes
- API: admin/update-meta was not working @syuilo
- Client: fix issue where meta[name="theme-color"] content was undefined when switching or loading themes @tamaina

## 12.109.1 (2022/04/02)

### Bugfixes
- API: Fixed problem with Renote

## 12.109.0 (2022/04/02)

### Improvements
- Webhooks @syuilo
- Bull Dashboard built in to check and manipulate job queues @syuilo
  - To open the Bull Dashboard, you must relog (log out and log back in) to misskey once with your admin account
- Check that installed Node.js version fulfils version requirement @ThatOneCalculator
- Server: overall performance improvements @syuilo
- Federation: avoid duplicate activity delivery @Johann150
- Federation: limit federation of reactions on direct notes @Johann150
- Client: improved deck handling on touchpad/touchscreen @tamaina

### Bugfixes.
- Email address validation was not working @ybw2016v
- API: fix endpoint endpoint @Johann150
- API: fix admin/meta endpoint @syuilo
- API: improved validation and documentation for endpoints that accept different variants of input @Johann150
- API: `notes/create`: The `mediaIds` property is now deprecated.
  - Use `fileIds` instead, it has the same behaviour.
- Client: fixed problem with URLs not displaying if decodeURIComponent fails due to abnormal URI encoding @tamaina

## 12.108.1 (2022-03-12)

### Bugfixes
- Fixed relay not working @xianonn
- Fixed problem with ulid not working @syuilo
- Fixed a problem that OGP cannot be obtained correctly from outside @syuilo
- Instance can't get the files from other instance when there are items in allowedPrivateNetworks in .config/default.yml @ybw2016v

## 12.108.0 (2022-03-09)

### Note
- Node v16.14.0 or later is required from this version

### Changes
- The ability to set the maximum number of characters in a note has been removed and the default is now a flat 3000 characters @syuilo
- Misskey can no longer terminate HTTPS connections. @Johann150
  - If you did not use a reverse proxy (e.g. nginx) before, you will probably need to adjust your configuration file and set up a reverse proxy. The https configuration key is no longer    recognized!

### Improvements
- Instance default theme can be set @syuilo
- Allow mute to set expiration date @syuilo
- Create a notification when a survey is closed @syuilo
- Allow up to 16 profile fields to be saved @syuilo
- Add Pub&Sub to federation chart @syuilo
- Add Active to federation chart @syuilo
- Queries to databases that take longer than 10 seconds by default will be aborted @syuilo
	- You can change the timeout period by setting `statement_timeout` in the configuration file `db.extra`
- Client: display instance icon on splash screen @syuilo

### Bugfixes
- Client: Fixed reaction picker height sometimes remains low and does not return @syuilo
- Client: Fixed username autocomplete not working properly @syuilo
- Client: Fixed difficulty in editing widgets with touch operation @xianonn
- Client: Fixed register_note_view_interruptor() not working @syuilo
- Client: iPhone X or later(?) Fixed: Fixed page content not being fully displayed on iPhone X or later(?) @tamaina
- Client: Fix image caption on mobile @nullobsi

## 12.107.0 (2022/02/12)

### Improvements
- Client: add theme @syuilo

### Bugfixes
- API: fixed internal error in stats API @syuilo
- Client: Fixed soft mute sometimes causing everything to match @tamaina
- Client: take screen safe area into account of the device @syuilo
- Client: Fixed issue with sidebar post button not showing in some environments @syuilo

## 12.106.3 (2022/02/11)

### Improvements
- Client: adjust margins on smart phones @syuilo

### Bugfixes
- Client: fixed issue with note details not showing @syuilo

## 12.106.2 (2022/02/11)

### Bugfixes
- Client: Fixed an issue where deleted notes did not automatically disappear from the timeline @syuilo
- Client: Fixed an issue where the number of reactions may be incorrect @syuilo
- Fixed problem with migration not working in some environments @syuilo

## 12.106.1 (2022/02/11)

### Bugfixes
- Client: fixed problem with word mute not saving @syuilo

## 12.106.0 (2022/02/11)

### Improvements
- Improve federation chart @syuilo
- Client: Allow to set the size of the reaction picker @syuilo
- Client: Relaxed reaction picker width and height restrictions @syuilo
- Docker: Update to Node v16.13.2 @mei23
- Update dependencies

### Bugfixes
- validate regular expressions in word mutes @Johann150

## 12.105.0 (2022/02/09)

### Improvements
- Allow to set the theme color of the instance @syuilo

#### Bugfixes
- Fixed migration failure in some environments @syuilo

## 12.104.0 (2022/02/09)

### Note
Please run `npm run clean` before building.

Due to the large scale of migration in this release, migration may take some time for some instances.
If the migration does not finish, you can delete all **records** in the table starting with `__chart__` (do not delete the table itself) and try again, although the chart information will be reset.

### Improvements
- Chart engine enhancements @syuilo
	- Reduced table size
	- Added number of notes with attachments to notes/instance/perUserNotes chart
	- Added new entry to activeUsers chart
	- Added new entry to federation chart
	- Added apRequest chart
	- network chart eliminated
- Client: Enable to see the chart on own instance info page @syuilo
- Client: Allow manual specification of device type @syuilo
- Client: updated UI icons @syuilo
- Client: self-hosting UI icons @syuilo
- Review NodeInfo user and post count content @xianonn

### Bugfixes
- Client: Fixed "There is a new note" display remains when switching timeline type @tamaina
- Client: fix UI size issue @tamaina
- Client: Setting instance information of notes to always show breaks the timeline @Johann150
- Client: Fixed an issue where the cursor position was not correct when replying depending on the environment @syuilo
- Client: Fixed a problem that switching the display range of instances does not work in the control panel users and files @syuilo
- Client: Fixed no update notification dialog @syuilo
- Client: Follows/Followers Visibility changes won't be saved unless clicking on an other checkbox @Johann150
- API: Fix API cast @mei23
- Add instance favicon where it's missing @solfisher
- Fixed problems with periodic resync of charts not working @syuilo

## 12.103.1 (2022/02/02)

### Bugfixes
- Client: Fixed an issue with tooltip display position being incorrect.

## 12.103.0 (2022/02/02)

### Improvements
- Client: Allow instance information to be reacquired from the coalition instance page.

### Bugfixes
- Client: Fixed an issue where images are hidden when reactions are updated after displaying NSFW images of a post.
- Client: Fixed problem with "Clip" page not opening
- Client: Fixed Trends widget not working
- Client: Fixed Federation widget not working
- Client: Fixed emoji picker not opening in reaction settings
- Client: Fixed issue with inclusion of mentions on DM page
- Client: hashtag retention field in submission form not working
- Client: Fixed side view not working
- Client: ensure that specified users does not get duplicates
- Add `img-src` and `media-src` directives to `Content-Security-Policy` for files and media proxy

## 12.102.1 (2022/01/27)

### Bugfixes
- Fixed problem with chat not displaying

## 12.102.0 (2022/01/27)

### Note
After the update, some custom emoji may not be displayed. In this case, batch exporting the emoji from the emoji management page and then batch importing them again from the control panel will fix the problem.

⚠ It is not compatible with zips exported prior to 12.102.0. Please update before exporting.

### Changes
- Room functionality has been removed.
  - It will be restored as a separate repository at a later date.
- Reversi function has been removed.
  - It will be restored as a separate repository at a later date.
- Chat UI has been removed.
- The number of files that can be attached to a note has been increased to 16.
- SVG custom emoji are now converted to PNGs for display

### Improvments
- Custom emoji batch editing function
- Batch import of custom emoji
- Posting form now allows temporary switching of posting accounts
- Unifying Misskey-specific IRIs in JSON-LD `@context`.
- Improved client performance
- Security Improvements

### Bugfixes
- Fixed handling of upload errors

## 12.101.1 (2021/12/29)

### Bugfixes
- Fixed SVG emoji not displaying
- Fixed a case where the extension of exported emoji is false.

## 12.101.0 (2021/12/29)

### Improvements
- Client: Improved accuracy of note previews
- Client: Improvement of MFM sparkle effect
- Client: Design adjustments
- Security Improvements

### Bugfixes
- Client: Fixed some components being hidden behind the scenes
- Fix html blockquote conversion

## 12.100.2 (2021/12/18)

### Bugfixes
- Client: Fixed issue where Deck column increases/decreases were not properly reflected until page was reloaded.
- Client: Fixed some components being hidden behind the scenes
- Client: Fixed heavy load on custom emoji list page

## 12.100.1 (2021/12/17)

### Bugfixes
- Client: Design coordination
- Client: Improved display of various menus and reaction picker on mobile

## 12.100.0 (2021/12/17)

### Improvements
- Client: Improved display of various menus and reaction picker on mobile

### Bugfixes
- Client: Fixed some components hiding in the background

## 12.99.3 (2021/12/14)

### Bugfixes
- Client: Fixed problem with autocomplete being hidden behind dialogs

## 12.99.2 (2021/12/14)

## 12.99.1 (2021/12/14)

## 12.99.0 (2021/12/14)

### Improvements
- Added a user-level instance mute in user settings
- Added option to not include muted users in follow export
- Added option to not include unused accounts in follow export
- Custom emoji export function
- Chart performance improvements
- Allowed to exit from a group

### Bugfixes
- Client: Fixed a problem that prevented some functions from working when using a display with touch functionality and mouse operation.
- Client: Fixed an issue where clip settings could not be edited.
- Client: Fixed a problem with menus etc. being hidden behind windows

## 12.98.0 (12/03/2021)

### Improvements
- API: /antennas/notes API now allows filtering by date
- Client: Confirmation dialog box when voting on a survey
- Client: Renote note detail page to the original note page.
- Client: Image popups can be closed by clicking on them.
- Client: Design adjustments
- Ability to remove followers

### Bugfixes
- Client: fixed the issue of tabs being displayed on the UI even when LTL and GTL are disabled
- Client: Fixed problem with incorrect error message for incorrect password in login
- Client: Corrected the order of users in the Reaction tooltip and Renote tooltip.
- Client: Fixed problem with master volume of sound not being saved correctly.
- Client: Fixed an inoperability issue in some environments when notifications are displayed.
- Client: Fixed problem with tooltips when tapped on mobile
- Client: Fixed an issue where, when replying to a note in a remote instance, if the target note contained a mentions to a user in that remote instance, it was sometimes passed on as a mentions to the local user in the reply text.
- Client: Fixed a problem in the image viewer where only a portion of the top image is displayed when the entire image is displayed.
- API: Fixed an internal error when retrieving users depending on conditions

### Changes
- Client: Moderator badge no longer displayed in notes

## 12.97.0 (2021-11-19)

### Improvements
- client: auto-folding also applies to renotes
- client: improved display of long threads
- client: also apply MFM to translations, so that it retains the formatting (line breaks, etc.) of the original text.
- client: add a confirmation dialog before deleting an account

### Bugfixes
- client: fixed an issue where "All" in user search did not work
- client: fixed the style of the Reaction List and Renote List tooltips

::: warning
Older releases are not translated yet. If you can, please edit this page to add them from the Japanese changelog on [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md).
:::
