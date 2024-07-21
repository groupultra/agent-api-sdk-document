## WS_URL

```
wss://ws.moobius.net
```

## 说明

1. 本文档仅阐述 websocket 的沟通协议，所有不在此文档里的 functionality 都使用 HTTP 接口实现。
2. 任何人均可以与 websocket 的公开链接建立 connection，但是要执行 login 之后，才能进行具体的操作。用户的 login 需要执行 user_login，用 access_token 进行登录。登录之后，需要在所有的交互里都带上自己的 user_id。user_id 是分配的用户的唯一识别 id，无论何时登录都保持不变。
3. service 用 access_token 和 service_id 进行登录，登录之后，需要在所有的交互里都带上自己的 service_id。每个 service_id 唯一，保持不变。
4. 同一个 user 或 service，当前只能一个设备登录，另一个设备登录时，会自动顶掉原本登录的设备。
5. 与 websocket 交互所发送的所有内容，都是 json 格式的，不要求美观，可以忽略所有换行与空格；其中顶层的 type、request_id、user_id、body 是必填的。body 是一个 object，其中所有下面文档中写出来的 key 都是其 subtype 下必填的，所有选填的在 context 里面。
6. 下文中的所有 uuid 均为 uuid4。

```python
import uuid
print(str(uuid.uuid4()))
```

7. 本文档对于每个具体 type 会给出一个 JSON 的示例，其中的值是随机生成的仅作参考，不能直接用来测试。表格中会对该 type 的 JSON 的每个字段做详细的解释。
8. 对于每个 type 而言，发起和收到的消息结构会有些微的变化，具体请参考表格中的说明。对于开发者而言，对接时会针对发送和接收做不同的解析处理。标注“moobius 生成”的在发送时不需带，标注“moobius 剔除”的接收者不会实际收到，但是应当带，以便 moobius 处理。
9. 目前用户和 channel 的一些交互由 moobius 负责：获取 channel 列表是 moobius 负责的，channel 本身不能选择是否对某个特定用户可见；join 或 leave channel 一定是用户发起的，channel 不能诱导用户进行这些行为；channel 不能拒绝用户 join，但可以不给用户提供服务。
10. 所有对用户的指代均使用 group_id 完成，永远不裸传 uuid[]（by 猫猫猫）
