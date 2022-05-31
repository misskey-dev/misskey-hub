# Changing the default Reaction
You can change the default reaction that is used when an ActivityPub "Like" is received from '👍' to '⭐' by changing the boolean value `meta.useStarForReactionFallback` in the databse respectively.

```
sudo -u postgres psql
\c misskey
ALTER TABLE meta ALTER COLUMN "useStarForReactionFallback" SET DEFAULT 'true';
\q
```

In the psql prompt, when connected to the database `misskey`  you can use command `\d meta` to check the default value for the `useStarForReactionFallback` column.
