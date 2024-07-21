## Copy

> moobius 对请求（包括 User 和 Service）的状态回复，每当收到一条消息的时候都发回一条 copy
> 系统级，对应 request_id，body 里有细节；用 status 表示是否成功，true 表示成功，false 表示失败；context 中的 message 表示额外的信息或错误详情。

moobius 对消息收到的确认：

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

用 status 表示是否成功，true 表示成功，false 表示失败
| origin_type | status_type | Desc | Context |
| -------- | ------ | ---------- | -------- |
| message_up |true|消息上行成功 |message_id |
| message_up | false|消息由于某种原因发送失败|reason|
| message_down | true|消息下行成功 | |
| message_down | false|消息由于某种原因发送失败 |reason |
| user_login |true | | |
| user_login | false| | reason|
| service_login | true| | |
| service_login | false| | reason|
