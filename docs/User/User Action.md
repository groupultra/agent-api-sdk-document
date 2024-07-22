## Action

> User actions to be handled by the service. On the opposite of User Event (message_up+button_click), these actions are called at a relatively low frequency. Currently the frontend will send all kinds of fetch actions when user opens a channel (or join).

> user -> moobius -> service

- request

```json
{
  "type": "action",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "join_channel",
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "context": {}
  }
}
```

| Field             | Type   | Value                                                                                                                                                  | Desc                                                                                                                                                                                                                                 |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type              | string | action                                                                                                                                                 | Type of the packet                                                                                                                                                                                                                   |
| request_id        | uuid   |                                                                                                                                                        |                                                                                                                                                                                                                                      |
| user_id           | uuid   |                                                                                                                                                        |
| body - subtype    | string | "join_channel" / "leave_channel" / "fetch_characters" / "fetch_buttons" / "fetch_channel_info" / "fetch_canvas" / "fetch_style" / "fetch_context_menu" | Fetch and update don't necessarily have a one-to-one relationship. They can be isolated, but we suppose most of the services would offer feasible updates when receiving fetches. Updates notice the frontend to update the webview. |
| body - channel_id | uuid   |                                                                                                                                                        |                                                                                                                                                                                                                                      |
| body - context    | object |                                                                                                                                                        | Optional                                                                                                                                                                                                                             |

- Service received be like:

```json
{
  "type": "action",
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "join_channel",
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "context": {}
  }
}
```

## Button Click

- When a user clicks a button.

  User -> moobius -> service: moobius acts like a messenger, won't be recorded to db.

```json
{
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "type": "button_click",
  "request_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "button_id": "button_id",
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "arguments": [
      {
        "name": "arg1",
        "value": 123
      },
      {
        "name": "arg2",
        "value": "also could be a string"
      }
    ],
    "context": {}
  }
}
```

Value could be string or int; it's recommended that the frontend verifies these arguments.

## Context Menu Click

- Clicks a button in the right-click menu.

  User -> moobius -> service: moobius acts like a messenger, won't be recorded to db.

```json
{
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "type": "menu_click",
  "request_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "item_id": "item_id",
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "message_id": "35880247-99ba-48c6-8283-b5e87159ce38",
    "message_subtype": "text",
    "message_content": {
      "text": "test message"
    },
    "arguments": [
      {
        "name": "arg1",
        "value": 123
      },
      {
        "name": "arg2",
        "value": "also could be a string"
      }
    ],
    "context": {}
  }
}
```

Almost the same as above; the only difference is that the message is also passed as context. message_id, message_subtype and message_content describe the message, same as message_down.
