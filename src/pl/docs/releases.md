# Informacje o wydaniach

Z racji na to że strona bardzo szybko staje się przestażała - radzę skorzystać z translatora i strony Japońskiej/Angielskiel albo z informacji o wydaniu z GitHuba.

Notes for indivudual misskey releases.

::: tip
Information updates may not be translated yet. For the latest information see [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md).
:::

## 13.0.0

Released at: 2023/01/16

### TL;DR

- New features (Role system, Misskey Play, New widgets, New charts, 🍪👈, etc)
- Rewriten backend
- Better performance (backend and frontend)
- Various usability improvements
- Various UI tweaks

### Notable features

- Role
  - User policies can be managed more flexibly than before. For example, "instance patrons can create up to 30 antennas," "many users cannot see LTL, but only those who have permission can view it," "it is an invitation-only instance, but any user can invite others," and of course, it is also possible to set up automatic role assignment by combining multiple conditions, such as "Local users and users who have created their accounts less than one day ago are not allowed to make public posts."
- Misskey Play
  - Misskey Play is a new platform that replaces the traditional dynamic Pages. It specializes in dynamic content (applications) and allows for the creation of much more flexible applications than Pages.

### Changes

#### For server admins

- Node.js 18.x or later is required
- PostgreSQL 15.x is required
  - Misskey not using 15 specific features at 13.0.0, but may do so in the future.
- Elasticsearch support has been removed
  - Instead, we envision a mechanism that allows you to set up an arbitrary search provider in the future. With this mechanism, Elasticsearch will still be available.
- Migrated from Yarn to pnpm  
  It is recommended to activate corepack: `sudo corepack enable`
- Instance blocking will now also apply to subdomains
- With the introduction of roles, several functions have been integrated with roles
  - Moderators have been merged into roles. Please keep a record of the moderator list in advance and create a moderator role and reassign it. After the update, the moderator information will be lost.
  - Silences have been merged into roles. It is recommended to record the list of silences beforehand, as previous users will be pardoned.
  - Per-user drive capacity settings have been integrated into roles.
  - Instance default drive capacity settings have been integrated into roles. After updating, please edit the drive capacity for the base role or conditional role.
  - LTL/GTL release status has been integrated into the role.
- Docker is no longer run as root; if you are running Docker and not using object storage, run `chown -hR 991.991 . /files`.
  <https://github.com/misskey-dev/misskey/pull/9560>

#### For users

- Note watch function has been removed
- Notification of poll voted has been removed
- Formula embedding in notes has been removed
- It is no longer possible to create new dynamic Pages
  - Instead, a Misskey Play feature is implemented that allows for more flexible dynamic content creation using AiScript.
- AiScript has been updated to 0.12.2
  - About changengs of 0.12.x: <https://github.com/syuilo/aiscript/blob/master/CHANGELOG.md#0120>
  - Plug-ins less than 0.12.x cannot be loaded
- iOS 15 and below are no longer supported
- Firefox 110 and below are no longer supported
  - In 109, you can use it without problems by enabling the ContainerQueries flag.

#### For app developers

- API: meta responses no longer include the `emojis` property
  - To get custom emoji list information, request to `emojis` endpoint
- API: custom emoji entities no longer include the `url` property
  - To display an emoji image, request `<instance host>/emoji/<emoji name>.webp` which will return the image.
  - e.g. `https://p1.a9z.dev/emoji/misskey.webp`
  - remote: `https://p1.a9z.dev/emoji/syuilo_birth_present@mk.f72u.net.webp`
- API: `user` and `note` entities no longer contain the `emojis` property
- API: `user` entities no longer contain the `avatarColor` and `bannerColor` properties
- API: `instance` entities no longer contain the `latestStatus`, `lastCommunicatedAt`, and `latestRequestSentAt` properties
- API: The `caughtAt` of the `instance` entity has been renamed to `firstRetrievedAt`.

### Improvements

- Role system @syuilo
- Misskey Play @syuilo
- Introduce retention-rate aggregation @syuilo
- Make possible to export favorited notes @syuilo
- Add per user pv chart @syuilo
- Push notification of Antenna note @tamaina
- AVIF support @tamaina
- Add Cloudflare Turnstile CAPTCHA support @CyberRex0
- Rate limits can now be adjusted per user @syuilo
- Non-moderator users assigned to roles with permissions can now issue instance invitation codes @syuilo
- Non-moderator users with assigned roles can now add, edit, and delete custom emoji @syuilo
- Allow users to set the number of clips and notes within a clip @syuilo
- Allowed to set the number of users in user list and user list @syuilo
- Maximum number of characters for hardword mute @syuilo
- Maximum number of webhooks that can be created @syuilo
- Can set the number of notes that can be pinned @syuilo
- Server: signToActivityPubGet is set to true by default @syuilo
- Server: improve syslog performance @syuilo
- Server: Use undici instead of node-fetch and got @tamaina
- Server: Judge instance block by endsWith @tamaina
- Server: improve note scoring for featured notes @CyberRex0
- Server: Relaxed character limit for survey choices @syuilo
- Server: Relaxed character limit for profile @syuilo
- Server: add rate limits for some endpoints @syuilo
- Server: improve stats api performance @syuilo
- Server: improve nodeinfo performance @syuilo
- Server: delete outdated notifications regularly to improve db performance @syuilo
- Server: delete outdated hard-mutes regularly to improve db performance @syuilo
- Server: delete outdated notes of antenna regularly to improve db performance @syuilo
- Server: improve activitypub deliver performance @syuilo
- Client: use tabler-icons instead of fontawesome to better design @syuilo
- Client: Add new gabber kick sounds (thanks for noizenecio)
- Client: Add link to user RSS feed in profile menu @ssmucny
- Client: Compress non-animated PNG files @saschanaz
- Client: YouTube window player @sim1222
- Client: show readable error when rate limit exceeded @syuilo
- Client: enhance dashboard of control panel @syuilo
- Client: Vite is upgraded to v4 @syuilo, @tamaina
- Client: HMR is available while yarn dev @tamaina
- Client: Implement the button to subscribe push notification @tamaina
- Client: Implement the toggle to or not to close push notifications when notifications or messages are read @tamaina
- Client: show Unicode emoji tooltip with its name in MkReactionsViewer.reaction @saschanaz
- Client: OpenSearch support @SoniEx2 @chaoticryptidz
- Client: Support remote objects in search @SoniEx2
- Client: user activity page @syuilo
- Client: Make widgets of universal/classic sync between devices @tamaina
- Client: add user list widget @syuilo
- Client: Add AiScript App widget
- Client: add profile widget @syuilo
- Client: add instance info widget @syuilo
- Client: Improve RSS widget @tamaina
- Client: add heatmap of daily active users to about page @syuilo
- Client: introduce fluent emoji @syuilo
- Client: add new theme @syuilo
- Client: add new mfm function (position, fg, bg) @syuilo
- Client: show fireworks when visit user who today is birthday @syuilo
- Client: show bot warning on screen when logged in as bot account @syuilo
- Client: AiScript can refer to custom emoji list @syuilo
- Client: improve overall performance of client @syuilo
- Client: ui tweaks @syuilo
- Client: clicker game @syuilo

### Bugfixes

- Server: Fix @tensorflow/tfjs-core's MODULE_NOT_FOUND error @ikuradon
- Server: Fixed a problem that sentences in quotes are nyaized @kabo2468
- Server: Bug fix for Pinned Users lookup on instance @squidicuzz
- Server: Fix peers API returning suspended instances @ineffyble
- Server: trim long text of note from ap @syuilo
- Server: Ap inbox max payload size limited to 64kb @syuilo
- Server: add limit to number of antennae created @syuilo
- Server: Fixed duplicate error IDs in pages/like @syuilo
- Server: Fixed that summary values are not updated depending on pages/update parameters @syuilo
- Server: Escape SQL LIKE @mei23
- Server: fix problem with certain PNG image uploads failing @usbharu
- Server: fix problem with OGP rendering with URLs of non-public clips @syuilo
- Server: Antenna timeline (streaming) picks up key posts of users not followed @syuilo
- Server: follow request list api pagination @sim1222
- Server: Fixed an issue where an error when drive capacity is exceeded is not properly responded @syuilo
- Client: Fixed a problem that user name is not auto-completed in password manager @massongit
- Client: Fixed a problem that date strings are displayed as custom pictograms @syuilo
- Client: case insensitive emoji search @saschanaz
- Client: Fixed that there is no way to close widget drawer when screen width is narrow @syuilo
- Client: Fixed InApp window sometimes becoming inoperable @tamaina
- Client: use proxied image for instance icon @syuilo
- Client: Fixed an issue where the content cannot be saved in the Webhook edit screen @m-hayabusa
- Client: Fixed issue where blocks cannot be moved in Page edit @syuilo
- Client: update emoji picker immediately on all input @saschanaz
- Client: fixed tooltip of chart may remain on screen @syuilo
- Client: fix wrong link in tutorial @syuilo

### Special thanks

- All contributors
- All who have created instances for the beta test
- All who participated in the beta test

## 12.119.1

Released at: 2022/12/03

### Bugfixes

- Server: Mitigate AP reference chain DoS vector @skehmatics

## 12.119.0

Released at: 2022/09/10

### Improvements

- Client: Add following badge to user preview popup @nvisser
- Client: mobile twitter url can be used as widget @caipira113
- Client: Improve clock widget @syuilo

### Bugfixes

- Fix an issue that can cause migration failures
- Server: Fix an issue that allows marking others' notification as read @syuilo
- Client: Fix an issue where 'Manage access tokens' and 'Manage Accounts' page is not shown @futchitwo

## 12.118.0

Released at: 2022/08/07

### Improvements

- Client: Preference backups feature
- Client: Add vi-VN language support
- Client: Add unix time widget @syuilo

### Bugfixes

- Server: Fix blocking users from remote instances @xianonn
- Client: Fix webhook page freeze after webhook is first created @syuilo
- Client: Fix broken MiAuth page @syuilo
- Client: Fix an issue where drag-and-drop to the post form doesn't work with some applications @m-hayabusa

## 12.117.1

Released at: 2022/07/19

### Improvements

- Client: UI brushup @syuilo

### Bugfixes

- Server: Fix an issue where upload fails intermittently @acid-chicken
- Client: Fix an issue where reaction picker is shown behind other in-app windows @syuilo
- Client: Fix user information lookup retry feature @xianonn
- Client: Update MFM cheatsheet behavior @syuilo
- Client: Fix an issue that prevents changing 'Receive notifications from this instance' setting @syuilo

## 12.117.0

Released at: 2022/07/18

### Improvements

- Client: Support maximizing windows @syuilo
- Client: Shift-clicking on the link opens it in-app @syuilo
- Client: Ctrl-clicking on the link will force page transition on Deck UI @syuilo
- Client: UI brushup @syuilo

## 12.116.1

Released at: 2022/07/17

### Bugfixes

- Client: Fix an issue that prevents 'Show in page' button from working on Deck UI @syuilo
- Error During Migration Run to 12.111.x

## 12.116.0

Released at: 2022/07/16

### Improvements

- Client: registry editor @syuilo
- Client: UI brushup @syuilo

### Bugfixes

- Error During Migration Run to 12.111.x
- Server: TypeError: Cannot convert undefined or null to object @syuilo

## 12.115.0

Released at: 2022/07/16

### Improvements

- Client: Easier account switching on the Deck @syuilo
- Client: UI brushup @syuilo

## 12.114.0

Released at: 2022/07/15

### Improvements

- Add article order shuffle feature to the RSS ticker @syuilo

### Bugfixes

- Fix an issue that prevents client from booting @syuilo

## 12.113.0

Released at: 2022/07/13

### Improvements

- Support `<plain>` syntax for MFM

### Bugfixes

- Server: Fix crash at startup if TensorFlow is not supported @mei23
- Client: Fix routing of the URL encoded string

## 12.112.3

Released at: 2022/07/09

### Improvements

- Make active email validation configurable

### Bugfixes

- Server: Fix Attempts to update all notifications @mei23

## 12.112.2

Released at: 2022/07/08

### Bugfixes

- Fix Docker doesn't work @mei23  
  Still not working on arm64 environment. (See 12.112.0)

## 12.112.1

Released at: 2022/07/07

same as 12.112.0

## 12.112.0

Released at: 2022/07/07

### Known issues

- Installation is currently not working on arm64 environment. This will be fixed in the next version.

### Changes

- Highlight menu has been merged into the Explore menu.
- Custom Emoji page has been merged into the Instance Information page.
- Federation page has been merged into the Instance Information page.
- Mentions menu has been merged into the Notification menu.
- Direct notes menu has been merged into the Notifications menu.
- You can now access Antennas via the top icon of the Timeline, instead of the main menu.
- You can now access Lists via the top icon of the Timeline, instead of the main menu.

### Improvements

- Server: Allow GET method for some endpoints @syuilo
- Server: Auto NSFW detection @syuilo
- Server: Add rate limit to i/notifications @tamaina
- Client: Improve control panel @syuilo
- Client: Show warning in control panel when there is an unresolved abuse report @syuilo
- Client: Statusbars @syuilo
- Client: Add instance-cloud widget @syuilo
- Client: Add rss-ticker widget @syuilo
- Client: Removing entries from a clip @futchitwo
- Client: Poll highlights in explore page @syuilo
- Client: Improve deck UI @syuilo
- Client: Word mute also checks content warnings @Johann150
- Client: Page reload from menu @syuilo
- Client: Improve emoji picker performance @syuilo
- Client: For notes with specified visibility, show recipients when hovering over visibility symbol. @Johann150
- Client: Make widgets available again on a tablet @syuilo
- Add possibility to leave moderation notes on users @syuilo
- Make possible to delete an account by admin @syuilo
- Improve player detection in URL preview @mei23
- Add Badge Image to Push Notification #8012 @tamaina
- Server: Improve performance
- Server: Supports IPv6 on Redis transport. @mei23  
  IPv4/IPv6 is used by default. You can tune this behavior via `redis.family`.
- Server: Add possibility to log IP addresses of users @syuilo
- Add additional drive capacity change support @CyberRex0

### Bugfixes

- Server: Fix GenerateVideoThumbnail failed @mei23
- Server: Ensure temp directory cleanup @Johann150
- favicons of federated instances not showing @syuilo
- Admin: The checkbox for blocking an instance works again @Johann150
- Client: Prevent access to user pages when not logged in @pixeldesu @Johann150
- Client: Disable some hotkeys (e.g. for creating a post) for not logged in users @pixeldesu
- Client: Ask users that are not logged in to log in when trying to vote in a poll @Johann150
- Instance mutes also apply in antennas etc. @Johann150

## 12.111.1

Released at: 2022/06/13

### Bugfixes

- some fixes of multiple notification read @tamaina
- some GenerateVideoThumbnail failed @Johann150
- Client: fix problem with widget information not being saved in Deck mode @syuilo
- Client: edit screen appears when trying to open gallery posts @futchitwo

## 12.111.0

Released at: 2022/06/11

### Note

- Node.js 16.15.0 or later is required

### Improvements

- Supports Unicode Emoji 14.0 @mei23
- Push notifications for multiple accounts #7667 @tamaina
- Set click and `action` for Push notifications #7667 @tamaina
- Option to discard original image and only keep `WebPublic` one when uploading it to Drive @tamaina
- Server: always remove completed tasks of job queue @Johann150
- Client: allow cropping of images in avatar settings @syuilo
- Client: make emoji stand out more on reaction button @Johann150
- Client: display URL of QR code for TOTP registration @tamaina
- Client: render quote renote CWs as MFM @pixeldesu
- API: `notifications/read` also accepts in arrays #7667 @tamaina
- API: if the query meets the `username` condition, `username` is also `LIKE` searched when searching users @tamaina
- MFM: Allow speed changes in all animated MFMs @Johann150
- The theme color is now better validated. @Johann150
  Your own theme color may be unset if it was in an invalid format.
  Admins should check their instance settings if in doubt.
- Perform port diagnosis at startup only when Listen fails @mei23
- Rate limiting is now also usable for non-authenticated users. @Johann150 @mei23
  Admins should make sure the reverse proxy sets the `X-Forwarded-For` header to the original address.

### Bugfixes

- Server: keep file order of note attachement @Johann150
- Server: fix missing foreign key for reports leading to reports page being unusable @Johann150
- Server: fix internal in-memory caching @Johann150
- Server: prevent crash when processing certain PNGs @syuilo
- Server: Fix unable to generate video thumbnails @mei23
- Server: Fix `Cannot find module` issue @mei23
- Federation: Add rel attribute to host-meta @mei23
- Federation: add id for activitypub follows @Johann150
- Federation: use `source` instead of `_misskey_content` @Johann150
- Federation: ensure resolver does not fetch local resources via HTTP(S) @Johann150
- Federation: correctly render empty note text @Johann150
- Federation: Fix quote renotes containing no text being federated correctly @Johann150
- Federation: remove duplicate br tag/newline @Johann150
- Federation: add missing authorization checks @Johann150
- Client: fix profile picture height in mentions @tamaina
- Client: fix abuse reports page to be able to show all reports @Johann150
- Client: fix settings page @tamaina
- Client: fix profile tabs @futchitwo
- Client: fix popout URL @futchitwo
- Client: correctly handle MiAuth URLs with query string @sn0w
- Client: correct behavior of the function to display new Note on its details page @xianonn
- MFM: more animated functions support `speed` parameter @futchitwo
- MFM: limit large MFM @Johann150

## 12.110.1（2022/04/23）

### Bugfixes

- Fix GOP rendering @syuilo
- Improve performance of antenna, clip, and list @xianonn

## 12.110.0

Released at: 2022/04/11

### Improvements

- Improve webhook @syuilo
- Client: Show loading icon on splash screen @syuilo

### Bugfixes

- API: parameter validation of users/show was wrong
- Federation: fixed problem with direct posts to remote instances not reaching @syuilo

## 12.109.2

Released at: 2022/04/03

### Bugfixes

- API: admin/update-meta was not working @syuilo
- Client: fix issue where meta[name="theme-color"] content was undefined when switching or loading themes @tamaina

## 12.109.1

Released at: 2022/04/02

### Bugfixes

- API: Fixed problem with Renote

## 12.109.0

Released at: 2022/04/02

### Improvements

- Webhooks @syuilo
- Bull Dashboard built in to check and manipulate job queues @syuilo
  - To open the Bull Dashboard, you must relog (log out and log back in) to misskey once with your admin account
- Check that installed Node.js version fulfils version requirement @ThatOneCalculator
- Server: overall performance improvements @syuilo
- Federation: avoid duplicate activity delivery @Johann150
- Federation: limit federation of reactions on direct notes @Johann150
- Client: improved deck handling on touchpad/touchscreen @tamaina

### Bugfixes

- Email address validation was not working @ybw2016v
- API: fix endpoint endpoint @Johann150
- API: fix admin/meta endpoint @syuilo
- API: improved validation and documentation for endpoints that accept different variants of input @Johann150
- API: `notes/create`: The `mediaIds` property is now deprecated.
  - Use `fileIds` instead, it has the same behaviour.
- Client: fixed problem with URLs not displaying if decodeURIComponent fails due to abnormal URI encoding @tamaina

## 12.108.1

Released at: 2022-03-12

### Bugfixes

- Fixed relay not working @xianonn
- Fixed problem with ulid not working @syuilo
- Fixed a problem that OGP cannot be obtained correctly from outside @syuilo
- Instance can't get the files from other instance when there are items in allowedPrivateNetworks in .config/default.yml @ybw2016v

## 12.108.0

Released at: 2022-03-09

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

## 12.107.0

Released at: 2022/02/12

### Improvements

- Client: add theme @syuilo

### Bugfixes

- API: fixed internal error in stats API @syuilo
- Client: Fixed soft mute sometimes causing everything to match @tamaina
- Client: take screen safe area into account of the device @syuilo
- Client: Fixed issue with sidebar post button not showing in some environments @syuilo

## 12.106.3

Released at: 2022/02/11

### Improvements

- Client: adjust margins on smart phones @syuilo

### Bugfixes

- Client: fixed issue with note details not showing @syuilo

## 12.106.2

Released at: 2022/02/11

### Bugfixes

- Client: Fixed an issue where deleted notes did not automatically disappear from the timeline @syuilo
- Client: Fixed an issue where the number of reactions may be incorrect @syuilo
- Fixed problem with migration not working in some environments @syuilo

## 12.106.1

Released at: 2022/02/11

### Bugfixes

- Client: fixed problem with word mute not saving @syuilo

## 12.106.0

Released at: 2022/02/11

### Improvements

- Improve federation chart @syuilo
- Client: Allow to set the size of the reaction picker @syuilo
- Client: Relaxed reaction picker width and height restrictions @syuilo
- Docker: Update to Node v16.13.2 @mei23
- Update dependencies

### Bugfixes

- validate regular expressions in word mutes @Johann150

## 12.105.0

Released at: 2022/02/09

### Improvements

- Allow to set the theme color of the instance @syuilo

#### Bugfixes

- Fixed migration failure in some environments @syuilo

## 12.104.0

Released at: 2022/02/09

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

## 12.103.1

Released at: 2022/02/02

### Bugfixes

- Client: Fixed an issue with tooltip display position being incorrect.

## 12.103.0

Released at: 2022/02/02

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

## 12.102.1

Released at: 2022/01/27

### Bugfixes

- Fixed problem with chat not displaying

## 12.102.0

Released at: 2022/01/27

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

## 12.101.1

Released at: 2021/12/29

### Bugfixes

- Fixed SVG emoji not displaying
- Fixed a case where the extension of exported emoji is false.

## 12.101.0

Released at: 2021/12/29

### Improvements

- Client: Improved accuracy of note previews
- Client: Improvement of MFM sparkle effect
- Client: Design adjustments
- Security Improvements

### Bugfixes

- Client: Fixed some components being hidden behind the scenes
- Fix html blockquote conversion

## 12.100.2

Released at: 2021/12/18

### Bugfixes

- Client: Fixed issue where Deck column increases/decreases were not properly reflected until page was reloaded.
- Client: Fixed some components being hidden behind the scenes
- Client: Fixed heavy load on custom emoji list page

## 12.100.1

Released at: 2021/12/17

### Bugfixes

- Client: Design coordination
- Client: Improved display of various menus and reaction picker on mobile

## 12.100.0

Released at: 2021/12/17

### Improvements

- Client: Improved display of various menus and reaction picker on mobile

### Bugfixes

- Client: Fixed some components hiding in the background

## 12.99.3

Released at: 2021/12/14

### Bugfixes

- Client: Fixed problem with autocomplete being hidden behind dialogs

## 12.99.2

Released at: 2021/12/14

## 12.99.1

Released at: 2021/12/14

## 12.99.0

Released at: 2021/12/14

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

## 12.98.0

Released at: 12/03/2021

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
