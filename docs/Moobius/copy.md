## Copy

> moobius sends "copy" to confirm a packet is sent to the moobius, no matter if packets come from users or services.

> System level, uses the same request_id as the packet that triggers the copy. Body contains messages to indicate whether the packet is processed correctly or some error occurs. Status indicates success or failure; message in the content indicates extra info or error details.

Moobius confirms it has received a packet:

```json
{
  "type": "copy",
  "body": {
    "request_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "origin_type": "message_up",
    "status": true,
    "context": {}
  }
}
```

| origin_type   | status_type | Desc                                            | Context    |
| ------------- | ----------- | ----------------------------------------------- | ---------- |
| message_up    | true        | Upward message sent successful                  | message_id |
| message_up    | false       | Upward message sent failed due to some reason   | reason     |
| message_down  | true        | Downward message sent successful                |            |
| message_down  | false       | Downward message sent failed due to some reason | reason     |
| user_login    | true        |                                                 |            |
| user_login    | false       |                                                 | reason     |
| service_login | true        |                                                 |            |
| service_login | false       |                                                 | reason     |
