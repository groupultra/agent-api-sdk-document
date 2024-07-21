## Message Down

> Service Event，由 service 发起的下行消息，sender 是 service 向接收者声称的发送者 character_id。

这里的 group_id 是 service 发给 moobius 的，由 service 创建管理，HTTP 接口管理

- service 发给 moobius 的形如：

- request

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

| Field                        | Type               | Value                                                     | Desc                                                                                       |
| ---------------------------- | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| type                         | string             | message_down                                              | 消息类型                                                                                   |
| request_id                   | uuid               | uuid                                                      |                                                                                            |
| service_id                   | uuid               | uuid                                                      | moobius 剔除                                                                               |
| body - subtype               | string             | "text" / "file" / "audio" / "image" / "separator" /"card" | separator 显示一个分割线                                                                   |
| body - content - text        | string             |                                                           | subtype 为 text 时使用                                                                     |
| body - content - path        | string             |                                                           | subtype 不为 text 和 separator 时使用                                                      |
| body - content - filename    | string             |                                                           | subtype 为 file 时使用，指定文件名                                                         |
| body - content - size        | int                |                                                           | subtype 为 file 时使用，显示文件尺寸                                                       |
| body - content - link        | string             |                                                           | subtype 为 card 时使用                                                                     |
| body - content - title       | string             |                                                           | subtype 为 card 时使用                                                                     |
| body - content - button      | string             |                                                           | subtype 为 card 时使用                                                                     |
| body - content - text        | string             |                                                           | subtype 为 card 时使用                                                                     |
| Body - content - tool        | Object or [object] |                                                           |                                                                                            |
| Body - content - tool - name | string             |                                                           |                                                                                            |
| Body - content - tool -input | string             |                                                           |                                                                                            |
| Body -content - tool -output | string             |                                                           |                                                                                            |
| body - channel_id            | uuid               |                                                           |                                                                                            |
| body - recipients            | uuid               |                                                           | 该消息的目标接收者，moobius 剔除                                                           |
| body - message_id            | uuid               |                                                           | 在 service 发到 moobius 时不带，moobius 生成                                               |
| body - sender                | uuid               |                                                           | 该消息展示出来的发送者                                                                     |
| body - timestamp             | int                |                                                           | 以毫秒为单位                                                                               |
| body - context               | object             |                                                           | 非必须                                                                                     |
| body - context - is_active   | bool               | true 有 service，false 没有                               | service 不需要自己加，moobius 会加；即使 service 试图加上，也会由 moobius 强行改为正确的值 |

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

- User 收到的 moobius 发出的格式

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
