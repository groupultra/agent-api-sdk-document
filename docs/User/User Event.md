## Message Up

> 由用户发起的上行消息

这里的 group_id 是用户发给 moobius 的，(用户-channel-groupid)唯一确定接收者，要入库。

- 发送文件的一个样例 request：

```json

{
    "type": "message_up",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "body": {
        "subtype": "file",
        "content": {
            "path": "xxxx", // path由文件上传部分获取
            "filename": "original.txt",
            "size": xxxx
        },
        "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
        "recipients": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
        "timestamp": 1687418564123,
        "context": {}
    }
}
```

- 一般的 request

```json
{
  "type": "message_up",
  "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "text",
    "content": {
      "text": "this is an example message"
    },
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "timestamp": 1687418564123,
    "context": {}
  }
}
```

| Field                     | Type   | Value                               | Desc                                 |
| ------------------------- | ------ | ----------------------------------- | ------------------------------------ |
| type                      | string | message_up                          | 消息类型                             |
| request_id                | uuid   | uuid                                |                                      |
| user_id                   | uuid   | uuid                                |
| body - subtype            | string | "text" / "file" / "audio" / "image" |                                      |
| body - content - text     | string |                                     | subtype 为 text 时使用               |
| body - content - path     | string |                                     | subtype 不为 text 时使用             |
| body - content - filename | string |                                     | subtype 为 file 时使用，指定文件名   |
| body - content - size     | int    |                                     | subtype 为 file 时使用，显示文件尺寸 |
| body - channel_id         | uuid   |                                     |                                      |
| body - recipients         | uuid   |                                     | 该消息的目标接收者                   |
| Body - message_id         | uuid   |                                     | moobius 生成                         |
| body - timestamp          | int    |                                     | 以毫秒为单位                         |
| body - sender             | uuid   |                                     | 上行无，moobius 添加，service 收到   |
| body - context            | object |                                     | 非必须                               |

- response 携带 message_id 即为 moobius 标注的 id

```json
{
  "type": "copy",
  "body": {
    "context": {
      "message": "Message received",
      "message_id": "d3141b6d-07ef-4189-9259-572bf41225f8"
    },
    "origin_type": "message_up",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "status": true
  }
}
```

- Service 收到的格式一般形如：

```json
{
  "type": "message_up",
  "body": {
    "subtype": "text",
    "content": {
      "text": "this is an example message"
    },
    "channel_id": "10c0133f-3fb5-4803-b40e-9bc6c516eec0",
    "timestamp": 1688481188282,
    "message_id": "d3141b6d-07ef-4189-9259-572bf41225f8",
    "sender": "d3141b6d-07ef-4189-9259-572bf41225f8",
    "recipients": "d3141b6d-07ef-4189-9259-572bf41225f8",
    "context": {}
  }
}
```

## Roger

User -> moobius，用于确认一条消息是否已正确发送到用户，以区分历史消息等。

```json
{
  "type": "roger",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "user_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "message_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "context": {}
  }
}
```

## Heartbeat

对于客户端，可以使得 websocket 连接不断开；对于 server，可以刷新在 redis 中的 connectId 的过期时间

- request

```json
{
  "type": "heartbeat",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "body": {}
}
```

- response

```json
{
  "type": "copy",
  "body": {
    "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
    "origin_type": "heartbeat",
    "status": true,
    "context": {}
  }
}
```
