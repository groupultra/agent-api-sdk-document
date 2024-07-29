---
description: Quote in your code, you can refer to the example
---

### Instantiate the Moobius client object

```javascript
import moobius from "moobius";
const moobius_client = moobius({
  httpUrl: "https://api.moobius.net/",
  wsUrl: "wss://ws.moobius.net",
});
```

### Example in browser environment

```html
<input type="text" id="username" placeholder="Email" />
<input type="text" id="password" placeholder="Password" />
<button id="loginBtn">Login</button>
<script src="/moobius.js"></script>
<script>
  const loginBtn = document.getElementById("loginBtn");
  const _mSdk = moobius({
    httpUrl: "https://api.moobius.net/",
    wsUrl: "wss://ws.moobius.net",
  });

  loginBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      await _mSdk.auth.signIn({
        username,
        password,
      });
      _mSdk.send("message_up", {
        type: "text",
        channel_id: "1c25e743-bb8d-44c6-9c43-ee4493d07aa3",
        content: "hello world",
      });
    } catch (e) {
      console.log(e);
    }
  });
</script>
```
