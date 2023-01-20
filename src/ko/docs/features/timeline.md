# 타임라인

The timeline displays [notes](.note) in reverse chronological order.
There are different types of timelines as shown below, and the notes displayed differ depending on the type.
Note that some types of timelines may be disabled by the instance.

## Home

Posts by users you are following will be displayed. Abbreviated as HTL.

## Local

All local users' posts that do not have the visibility of "Home" will be shown. Abbreviated as LTL.

## Social

Posts of users you are following and all local users's posts that do not have the visibility of "Home" will be shown. Abbreviated as STL. Think of it as STL = HTL + LTL.

## Global

All local users' posts that do not have the visibility of "Home" and all remote users' posts that do not have the visibility of "Home" that reach the server. Abbreviated as GTL.

## Custom Timelines

Misskey has other features where you can create timelines with more granularity. See [Lists](./list.md) and [Antennas](./antenna.md) for details.

## Comparison

| Source                |            |        |   Timeline |       |            |
|-----------------------|------------|--------|---------|------------|------------|
| User                  | Visibility | Home   | Local    | Social     | Global |
| Local (Followers)     | Public     | ✔      | ✔        | ✔          | ✔          |
|                       | Home       | ✔      |          | ✔          |            |
|                       | Followers  | ✔      |          | ✔          |            |
| Remote (Followers)    | Public     | ✔      |          | ✔          | ✔          |
|                       | Home       | ✔      |          | ✔          |            |
|                       | Followers  | ✔      |          | ✔          |            |
| local (Non-followers) | Public     |        | ✔        | ✔          | ✔          |
|                       | Home       |        |          |            |            |
|                       | Followers  |        |          |            |            |
| Remote (Non-followers)| Public     |        |          |            | ✔          |
|                       | Home       |        |          |            |            |
|                       | Followers  |        |          |            |            |
