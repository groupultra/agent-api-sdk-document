## Message Down

> Service Event, downward message initiated by service. sender is a character_id claimed by the service.

group_id is sent by service to moobius, created and managed by service using HTTP API.

- service send to moobius be like:

```json
{
  "type": "message_down",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "af554653-aedc-4abb-b6d5-bef4a57e58e5",
  "body": {
    "subtype": "text",
    "content": {
      "text": "test message down"
    },
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "sender": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "timestamp": 1687418564123,
    "context": {}
  }
}
```

| Field                        | Type               | Value                                                     | Desc                                                                                                                                                                  |
| ---------------------------- | ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                         | string             | message_down                                              | Type of the packet                                                                                                                                                    |
| request_id                   | uuid               | uuid                                                      |                                                                                                                                                                       |
| service_id                   | uuid               | uuid                                                      | Culled by moobius                                                                                                                                                     |
| body - subtype               | string             | "text" / "file" / "audio" / "image" / "separator" /"card" | separator shows a line-shaped separator                                                                                                                               |
| body - content - text        | string             |                                                           | Used when subtype is text or is card                                                                                                                                  |
| body - content - path        | string             |                                                           | Used when subtype is not text or is not separator                                                                                                                     |
| body - content - filename    | string             |                                                           | Used when subtype is file to indicate filename                                                                                                                        |
|                              |
| body - content - size        | int                |                                                           | Used when subtype is file to indicate file size                                                                                                                       |
| body - content - link        | string             |                                                           | Used when subtype is card; click button to redirect                                                                                                                   |
| body - content - title       | string             |                                                           | Used when subtype is card; card title                                                                                                                                 |
| body - content - button      | string             |                                                           | Used when subtype is card; words on the button                                                                                                                        |
| body - content - text        | string             |                                                           | Used when subtype is card                                                                                                                                             |
| Body - content - tool        | Object or [object] |                                                           |                                                                                                                                                                       |
| Body - content - tool - name | string             |                                                           |                                                                                                                                                                       |
| Body - content - tool -input | string             |                                                           |                                                                                                                                                                       |
| Body -content - tool -output | string             |                                                           |                                                                                                                                                                       |
| body - channel_id            | uuid               |                                                           |                                                                                                                                                                       |
| body - recipients            | uuid               |                                                           | Target of the message. Culled by moobius                                                                                                                              |
| body - message_id            | uuid               |                                                           | Generated by moobius                                                                                                                                                  |
| body - sender                | uuid               |                                                           | The sender that shows as the sender of the msg                                                                                                                        |
| body - timestamp             | int                |                                                           | In millisecs                                                                                                                                                          |
| body - context               | object             |                                                           | Optional                                                                                                                                                              |
| body - context - is_active   | bool               |                                                           | true if a service is bound to the channel, otherwise false; Added by service. Service claiming is_active is false is invalid, and moobius will always tell the truth. |

- response

```json
{
  "type": "copy",
  "body": {
    "request_id": "1584f3bc-a378-4c86-bf0f-4fec2e78ea19",
    "origin_type": "message_down",
    "status": true,
    "context": {
      "message": "Message received",
      "message_id": "9a2d8801-d776-4c04-a193-647011b157e8"
    }
  }
}
```

- User receives be like

```json
{
  "type": "message_down",
  "body": {
    "subtype": "text",
    "content": {
      "text": "test message down"
    },
    "channel_id": "10c0133f-3fb5-4803-b40e-9bc6c516eec0",
    "sender": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "timestamp": 1688485872385,
    "context": {
      "channel_type": "CCS"
    },
    "message_id": "9a2d8801-d776-4c04-a193-647011b157e8"
  }
}
```

Markdown type is supported in text messages.
