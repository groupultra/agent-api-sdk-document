## user_login

- request

```json
{
    "type": "user_login",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "auth_origin": "cognito" | "oauth2",
    "access_token": "eyJraWQ...."
}
```

- response

```json
{
  "type": "copy",
  "body": {
    "context": {
      "message": "Login success"
    },
    "origin_type": "user_login",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "status": true
  }
}
```
