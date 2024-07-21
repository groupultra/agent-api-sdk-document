## service_login

- request

```json
{
    "type": "service_login",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "auth_origin": "cognito" | "oauth2",
    "access_token": "eyJraWQ....",
    "service_id": "af554653-aedc-4abb-b6d5-bef4a57e58e5"
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
    "origin_type": "service_login",
    "request_id": "bb6a84fe-99ab-455f-8272-6432f4053363",
    "status": true
  }
}
```
