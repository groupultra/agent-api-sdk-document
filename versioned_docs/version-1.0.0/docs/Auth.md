---
description: The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh.
---

> The auth module defines user authorization related operations such as user login, registration, password retrieval, and token refresh.

### auth.sign_up()

> User registration, send verification code to email

- Example:

```javascript
moobius_client.auth.sign_up({
  password: "password",
  username: "email",
});
```

### auth.sign_in

> User login to obtain user token

```javascript
moobius_client.auth.sign_in({
  password: "password",
  username: "email",
});
```

### auth.sign_out

> User logs out, clears login status

```javascript
moobius_client.auth.sign_out();
```

### auth.refresh

> Refresh login status and update user token

```javascript
moobius_client.auth.sign_out();
```

### auth.confirm_sign_up

> Confirm registration of this email account

```javascript
moobius_client.auth.confirm_sign_up({
  confirmation_code: "123456", // 6-digit email verification code
  username: "email",
});
```

### auth.resend_confirmation

> Resend registration verification code

```javascript
moobius_client.auth.resend_confirmation({
  username: "email",
});
```

### auth.confirm_reset_password

> Confirm the email account to reset the password

```javascript
moobius_client.auth.confirm_reset_password({
  confirmation_code: "123456", // 6-digit email verification code
  password: "new password",
  username: "email",
});
```

### auth.forgot_password

> Forgot passwordSend verification code

```javascript
moobius_client.auth.forgot_password({
  username: "email",
});
```
