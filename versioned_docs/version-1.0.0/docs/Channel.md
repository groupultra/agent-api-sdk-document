---
description: Channel-related methods, such as creating channels and querying channel lists, etc.
---

> Channel-related methods, such as creating channels and querying channel lists, etc.

### channel.create

> Create a channel

- Example:

```javascript
moobius_client.channel.create({
  channel_name: "channel_name",
  channel_description: "channel_description",
});
```

### channel.update

> Update channel information

```javascript
moobius_client.channel.update("channel_id", {
  channel_name: "new channel name",
  channel_description: "new channel description",
});
```

### channel.popular

> Get the recommended channel list

```javascript
moobius_client.channel.popular();
```

### channel.list

> Get a list of all channels for the current user

```javascript
moobius_client.channel.list();
```

### channel.history_message

> Get the historical messages of the specified channel

```typescript
moobius_client.channel.history_message("channel_id", {
  before: 1722349742162,
  limit: 30,
});
moobius_client.channel.history_message("channel_id", {
  after: 1722349742162,
  limit: 30,
});
```

- before: Specify the historical messages before the query timestamp
- after: Specify the historical messages after the query timestamp
  - Only one of before and after can be passed
