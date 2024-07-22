## Update

> service event, updates what the users see

> service -> moobius -> user: service sends to user directly, won't be recorded to the db, moobius acts like a messenger

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

| Field                       | Type     | Value                                                                                                     | Desc                                    |
| --------------------------- | -------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| type                        | string   | update                                                                                                    | Type of the packet                      |
| request_id                  | uuid     | uuid                                                                                                      |                                         |
| user_id                     | uuid     | uuid                                                                                                      | Culled by moobius                       |
| body - subtype              | string   | "update_characters" / "update_buttons" / "update_channel_info" / "update_canvas"                          |                                         |
| body - content - characters | uuid     | Passes a uuid of a group that is controlled by the service; shows everyone in the group to the receipient | Used when subtype is update_characters  |
| body - content - buttons    | button[] |                                                                                                           | Used when subtype is update_buttons     |
| body - channel_id           | uuid     |                                                                                                           |                                         |
| body - recipients           | uuid     |                                                                                                           | Target of the action. Culled by moobius |
| body - context              | object   |                                                                                                           | Optional                                |

### Character

- a Character can be defined as follows:

```json
{
  "character_id": "0c7d4295-d89c-4cf1-aafc-aec33ea2ae33",
  "context": {
    "name": "",
    "description": "",
    "avatar": ""
  }
}
```

### Button

> There are two types of buttons. The first type only needs a click to work, but the second type pops up a window, acting like a form. new_window: true/false decides which type it is. The frontend could verify whether the user fills the optional or required arguments correctly (recommended to do so), but it's not guaranteed that all the fields are filled correctly when passing the invoke of the buttons to the backend.

> ![new_window: true的时候类似这样](/img/img-1.jpeg)

> Every pop-up-window button has exactly one button, but it is subject to change in the future. button_text indicates text on the button.

> Now there's only one widget type: input. Pull-down menu is an enum-typed input. File upload is a file-typed input.

> a button can be defined as follows:

```json
{
  "button_id": "button_id",
  "button_name": "Meow",
  "button_text": "Meows a lot",
  "new_window": false
}
```

```json
{
  "button_id": "button_id",
  "button_name": "Some lists",
  "button_text": "Click to send",
  "new_window": true,
  "arguments": [
    {
      "name": "arg1",
      "type": "enum",
      "values": ["Choose me!", "Don't choose me!"],
      "placeholder": "You can choose one!"
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

| Field                     | Type     | Value                                                                                                                             | Desc                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button_id                 | string   |                                                                                                                                   | Defined by the service to distinguish buttons                                                                                                                                                                                                                                                                                                                                                |
| button_name               | string   |                                                                                                                                   | Button name shown to the users                                                                                                                                                                                                                                                                                                                                                               |
| new_window                | bool     |                                                                                                                                   | Whether pops up a new window; optional, false by default                                                                                                                                                                                                                                                                                                                                     |
| button_text               | string   |                                                                                                                                   | Text on the button of the pop-up window, if not the same as button_name. new_window: false doesn't need this                                                                                                                                                                                                                                                                                 |
| disable                   | bool     |                                                                                                                                   | Optional, false by default; True makes the button unable to be clicked (but the user can still invoke this by using cmd)                                                                                                                                                                                                                                                                     |
| arguments                 | object   |                                                                                                                                   | Arguments for pop-up window. Optional, new_window: false doesn't need this; If not offered when new_window: true, only a button will be shown on the pop-up window.                                                                                                                                                                                                                          |
| arguments - name          | string   |                                                                                                                                   | Name of the argument                                                                                                                                                                                                                                                                                                                                                                         |
| arguments - optional      | bool     |                                                                                                                                   | Whether the argument is optional; optional, false by default                                                                                                                                                                                                                                                                                                                                 |
| arguments - type          | string   | "string" / "number" / "enum" / "password" / "invalid" / "file" / "image" / "textbox" 等,TODO: "group", choose a group by the user | Type of the argument; frontend is recommended to verify whether the input meets the condition. If type is password, all input should show like \*\*\*\*; If type is invalid, it shows as an invalid input bar; The difference between image and file is that image shows a preview before uploading; The difference between textbox and string is that users can break lines in the textbox. |
| arguments - placeholder   | string   |                                                                                                                                   | Placeholder for the input, optional; auto ignored when is a file of image. Shows in gray, and will disappear when clicked or some words in the input bar.                                                                                                                                                                                                                                    |
| arguments - default_value | string   |                                                                                                                                   | Default value for the input, optional; auto ignored when is a file of image. Acts like the user has already inputted something. If type is enum, must be a valid selection.                                                                                                                                                                                                                  |
| arguments - values        | string[] |                                                                                                                                   | If type is enum, becomes a pull-down menu. This describes the values that can be selected. If is empty, becomes an invalid input bar.                                                                                                                                                                                                                                                        |

We would introduce more widgets, such as scrollbar; these structs are to change at that time.

### Channel Info

- Info of every channel can be automatically changed over time or some user actions (or messages).

  Note not fully implemented

```json
{
  "channel_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "channel_name": "CH114514",
  "context": {
    "channel_description": "Example channel",
    "channel_type": "dcs"
  }
}
```

| Field        | Type   | Value                 | Desc                |
| ------------ | ------ | --------------------- | ------------------- |
| channel_type | string | "scs" / "dcs" / "ccs" | Type of the channel |

### Display / Canvas

> service controls the display of the canvas

> content is a list, and every member of it describes a page on the canvas. Every page can contain one text at most and one image at most.

```json
{
  "type": "update",
  "request_id": "120cb5bf-a2b3-4d19-b8f4-b2058d7182cc",
  "service_id": "65202a1d-41cc-4e7b-bc6c-81fa9662076a",
  "body": {
    "subtype": "update_canvas",
    "content": [
      {
        "path": "path/to/first/image",
        "text": "some texts bluhbluh"
      },
      {
        "path": "path/to/second/image",
        "text": "more texts i have had enough of this"
      }
    ],
    "channel_id": "50fb775a-508d-40ef-b80b-de1ef3bf791a",
    "recipients": "",
    "context": {}
  }
}
```

| Field                 | Type   | Value           | Desc                                    |
| --------------------- | ------ | --------------- | --------------------------------------- |
| body - subtype        | string | "update_canvas" |                                         |
| body - content - text | string |                 | The text to show; optional              |
| body - content - path | string |                 | The image to show; optional             |
| body - channel_id     | uuid   |                 |                                         |
| body - recipients     | uuid   |                 | Target of the packet, culled by moobius |
| body - context        | object |                 | Optional                                |

### Context Menu

- Right-click menu on messages, provided by the service

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
            "values": ["saint", "grinch"],
            "placeholder": "choose wisely"
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

Same as button arguments. Arguments are optional. new_window defaults to be false.

Use item_name and item_id to distinguish different buttons. Can specify some types, and users can only call the ctx_menu_click on these message_down types.

### Style (not recommended to use)

- service controls the frontend view

Considering that you can make a new frontend, this part can be handled and redesigned at your own demand. These parts are for the official moobius frontend.

service->moobius->client

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

| Field                        | Type   | Value                                                                                                          | Desc                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| body - content - widget      | string | "canvas" / "whisper" / "characters" / "input" / "channel" / "buttons" /"message"                               | whisper also controls whether the group-selection bar adjacent to the input box shows                                                                                                                                                                                                                        |
| subwidget of the widgets     | string | Use - as separator to specify one certain part of one bigger widget. whisper-edit whisper-add input-typebutton |                                                                                                                                                                                                                                                                                                              |
| body - content - display     | string | "visible" / "invisible" /"highlight"                                                                           | display shows, invisible hides, highlight highlights (and shades other widgets). When highlighted, if the target widget is invisible, it becomes "display" automatically. Only one widget can be highlighted at one time; specifying a new highlight one will turn the previous one falls back to "display". |
| body - content - expand      | bool   |                                                                                                                | Controls canvas expand or not when subtype is canvas.                                                                                                                                                                                                                                                        |
| body - content - button_hook | object |                                                                                                                | If there's mask (highlight or channel_popup), when the mask is clicked, this hook will be invoked. It's like a normal button but not shown in button lists. new_window is always false.                                                                                                                      |
| body - content - text        | string |                                                                                                                | If the subtype is highlight or channel_popup, this is the text to show.                                                                                                                                                                                                                                      |
| body - content - index       | string |                                                                                                                | button or characters, insert a specified button_id or uuid to the specified position.                                                                                                                                                                                                                        |
