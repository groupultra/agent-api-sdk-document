## Update

> 更新用户看到的内容
> service -> moobius -> user: service 给 user 发东西，不入库，moobius 只传递

```json
{
  "type": "update",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "update_characters",
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
    "content": {
      "characters": "65202a1d-41cc-4e7b-bc6c-81fa9662076a"
    },
    "context": {}
  }
}
```

| Field                       | Type     | Value                                                                            | Desc                                |
| --------------------------- | -------- | -------------------------------------------------------------------------------- | ----------------------------------- |
| type                        | string   | update                                                                           | 消息类型                            |
| request_id                  | uuid     | uuid                                                                             |                                     |
| user_id                     | uuid     | uuid                                                                             | moobius 剔除                        |
| body - subtype              | string   | "update_characters" / "update_buttons" / "update_channel_info" / "update_canvas" |                                     |
| body - content - characters | uuid     | 传递一个由 service 控制的 group 的 uuid，直接显示该 group 下的所有用户           | subtype 为 update_characters 时使用 |
| body - content - buttons    | button[] |                                                                                  | subtype 为 update_buttons 时使用    |
| body - channel_id           | uuid     |                                                                                  |                                     |
| body - recipients           | uuid     |                                                                                  |                                     |
| body - context              | object   |                                                                                  | 非必须                              |

### 角色 Character

- 使用如下格式表示一个 character

```json
{
  "character_id": "0c7d4295-d89c-4cf1-aafc-aec33ea2ae33",
  "context": {
    "name": "张三",
    "description": "这个人太懒了，什么都没有写",
    "avatar": ""
  }
}
```

### Button

> button 分大致两类，一类会位于输入框的上侧点一下就能用，另一类会弹出一个窗口、感觉像是个表单，这两者用一个 new_window: true/false 决定。optional 与否前端可以核验，但其有效性校验实际由 service 负责。

> ![new_window: true的时候类似这样](/img/img-1.jpeg)

> 目前一个 button 一定有一个提交按钮，并且每个 button 除该按钮外绝对没有其他按钮，未来可能会做出调整。button_text 代表着这个 button 提交按钮上显示的文字。

> 目前只有一种 button 组件：输入框。下拉选单是一种 enum 输入框，文件上传是一种 file 输入框。

> 使用如下格式表示一个 button：

```json
{
  "button_id": "button_id",
  "button_name": "喵喵喵",
  "button_text": "一键猫叫",
  "new_window": false
}
```

```json
{
  "button_id": "button_id",
  "button_name": "一些列表",
  "button_text": "点击发送",
  "new_window": true,
  "arguments": [
    {
      "name": "arg1",
      "type": "enum",
      "values": ["选我", "别选我"],
      "placeholder": "可选的"
    },
    {
      "name": "arg2",
      "type": "string",
      "placeholder": "optional"
    },
    {
      "name": "file uploader",
      "type": "file"
    }
  ]
}
```

| Field                     | Type     | Value                                                                                                                       | Desc                                                                                                                                                                                                |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button_id                 | string   |                                                                                                                             | 由 service 定义的、区分每个 button 的名称                                                                                                                                                           |
| button_name               | string   |                                                                                                                             | 展示出来的 button 名称                                                                                                                                                                              |
| new_window                | bool     |                                                                                                                             | 点一下就调用还是需要展开一个新窗口填东西                                                                                                                                                            |
| button_text               | string   |                                                                                                                             | 可选，按钮上的字；对 new_window: false 无效                                                                                                                                                         |
| disable                   | bool     |                                                                                                                             | optional，默认为 false                                                                                                                                                                              |
| arguments                 | object   |                                                                                                                             | 如果是 function，它描述多个输入框的结构；对 new_window: false 无效                                                                                                                                  |
| arguments - name          | string   |                                                                                                                             | 该参数的名称                                                                                                                                                                                        |
| arguments - optional      | bool     |                                                                                                                             | 该参数是否为可选参数，可选，默认为 false                                                                                                                                                            |
| arguments - type          | string   | "string" / "number" / "enum" / "password" / "invalid" / "file" / "image" / "textbox" 等,TODO: "group"，由用户选择一个 group | 该参数的类型，前端验证输入是否合法；如果是 password，打进去的会变成\*\*\*\*；如果是 invalid 则显示为禁用的输入框;image 和 file 的区别是 image 有个预览; textbox 和 string 的区别是 textbox 支持换行 |
| arguments - placeholder   | string   |                                                                                                                             | 该输入框的占位符，可选；对于文件自动忽略；显示为浅灰色，点一下就看不见                                                                                                                              |
| arguments - default_value | string   |                                                                                                                             | 该输入框的默认值，可选；对于文件自动忽略                                                                                                                                                            |
| arguments - values        | string[] |                                                                                                                             | 如果是 enum，则是下拉选择框，这个描述了都有哪些可选值，可为空，为空则是显示禁用的下拉框                                                                                                             |

此处的 button_text 预计会挪到别的地方，但要等到有第三种 button 上线，因为不是所有的 button 都有按钮（比如一个滑动条就没有）。

### Channel Info

- 使用如下格式表示 channel 的 info：

```json
{
  "channel_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "channel_name": "CH114514",
  "context": {
    "channel_description": "这是一个示例channel",
    "channel_type": "dcs"
  }
}
```

| Field        | Type   | Value                 | Desc           |
| ------------ | ------ | --------------------- | -------------- |
| channel_type | string | "scs" / "dcs" / "ccs" | channel 的类型 |

### Display / Canvas

> service 发起的 canvas 显示

> content 是一个数组，每个成员表示一个页面，每个页面有最多一个图片最多一个文字

```json
{
  "type": "update",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "update_canvas",
    "content": [
      {
        "path": "第一张图片",
        "text": "第一段文字"
      },
      {
        "path": "第二张图片",
        "text": "第二段文字"
      }
    ],
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "",
    "context": {}
  }
}
```

| Field                 | Type   | Value           | Desc                             |
| --------------------- | ------ | --------------- | -------------------------------- |
| body - subtype        | string | "update_canvas" |                                  |
| body - content - text | string |                 | 显示的文字，无或为空串则清除     |
| body - content - path | string |                 | 显示的图片，无或为空串则清除     |
| body - channel_id     | uuid   |                 |                                  |
| body - recipients     | uuid   |                 | 该消息的目标接收者，moobius 剔除 |
| body - context        | object |                 | 非必须                           |

### Context Menu

- service 发起的右键菜单内容显示

```json
{
  "type": "update",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "update_context_menu",
    "content": [
      {
        "item_name": "",
        "item_id": "",
        "support_subtype": ["text", "file"],
        "new_window": true,
        "arguments": [
          {
            "name": "arg1",
            "type": "enum",
            "values": ["选我", "别选我"],
            "placeholder": "可选的"
          }
        ]
      }
    ],
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "",
    "context": {}
  }
}
```

具体的 arguments 参数与 Button 一致，不再赘述。arguments 可选，new_window 默认为 false

### Style (带维护)

- 后端（service）控制前端样式，仅由后端发出

service->moobius->user

```json
{
  "type": "update",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "update_style",
    "content": [
      {
        "widget": "channel",
        "display": "invisible"
      },
      {
        "widget": "button",
        "display": "highlight",
        "button_hook": {
          "button_id": "button_id",
          "button_text": "done",
          "arguments": []
        },
        "text": "<h1>Start from here.</h1><p>This is a button, what the most channles has</p>"
      }
    ],
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "",
    "context": {}
  }
}
```

| Field                        | Type   | Value                                                                                       | Desc                                                                                                                                                                                                   |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| body - content - widget      | string | "canvas" / "whisper" / "characters" / "input" / "channel" / "buttons" /"message"            | whisper 同时控制输入框右下角是否出现 whisper                                                                                                                                                           |
| widget 的小 widget           | string | 如果希望指定某个 widget 的一部分，那么用-做分隔。 whisper-edit whisper-add input-typebutton |                                                                                                                                                                                                        |
| body - content - display     | string | "visible" / "invisible" /"highlight"                                                        | display 表示显示，invisible 表示隐藏，highlight 表示高亮遮罩；当 highlight 时，之前是 invisible 也会变成 display；同一时间只有一个东西能 highlight，一个 highlight 时别的会自动变回 display；highlight |
| body - content - expand      | bool   |                                                                                             | 可选，subtype 为 canvas 时，通过该选项控制 canvas 展开还是收回                                                                                                                                         |
| body - content - button_hook | object |                                                                                             | 如果是遮罩，用户点掉这个遮罩的时候会 trigger 这个 hook。对其的描述见 update - button，new_window 强制为 false。                                                                                        |
| body - content - text        | string |                                                                                             | 若为 highlight 或 channel_popup，显示的文字。                                                                                                                                                          |
| body - content - index       | string |                                                                                             | button 或 characters 时，传 button_id 或 user 的 uuid 指定特定位置。                                                                                                                                   |
