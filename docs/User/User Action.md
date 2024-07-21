## Action

> 由 service 处理的用户操作，从业务功能角度讲属于低频操作（相对于 User Event (message_up+button_click)），因此合并为一个，各 subtype 中定义具体类型。目前的前端会在用户打开 channel 的时候发送各种 fetch action。

user -> moobius -> service

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

| Field             | Type   | Value                                                                                                                                                  | Desc     |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| type              | string | action                                                                                                                                                 | 消息类型 |
| request_id        | uuid   |                                                                                                                                                        |          |
| user_id           | uuid   |                                                                                                                                                        |
| body - subtype    | string | "join_channel" / "leave_channel" / "fetch_characters" / "fetch_buttons" / "fetch_channel_info" / "fetch_canvas" / "fetch_style" / "fetch_context_menu" |
| body - channel_id | uuid   |                                                                                                                                                        |          |
| body - context    | object |                                                                                                                                                        | 非必须   |

- service 收到的 response：

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

- 用户发起的 service 特定功能调用（按钮）
  User -> moobius -> service: moobius 仅仅起到传递消息的角色，不入库

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

arguments 参见 update 中的 button，value 可能为 string 或 int，由前端校验，service 也会校验

## Context Menu Click

- 用户点击右键菜单
  User -> moobius -> service: moobius 仅仅起到传递消息的角色，不入库

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

arguments 与 button click 基本一致，不再赘述。
