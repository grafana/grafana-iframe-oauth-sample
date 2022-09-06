# Grafana iframe with JWT embedded token sample

## Setting up this sample

- Clone grafana repo

`git clone https://github.com/grafana/grafana.git` 

- Setup the [jwt-proxy development environment](https://github.com/grafana/grafana/tree/main/devenv/docker/blocks/auth/jwt_proxy)

`make devenv sources="auth/jwt_proxy"`

Add the following to your grafana configuration.

You may need to copy the [jwks.json](https://github.com/grafana/grafana/blob/main/devenv/docker/blocks/auth/jwt_proxy/jwks.json) and change the path of `jwk_set_file` accordingly.

```ini
[auth.jwt]
enabled = true
enable_login_token = true
header_name = X-Forwarded-Access-Token
username_claim = login
email_claim = email
jwk_set_file = devenv/docker/blocks/auth/oauth/jwks.json
cache_ttl = 60m
expected_claims = {"iss": "http://env.grafana.local:8087/auth/realms/grafana", "azp": "grafana-oauth"}
auto_sign_up = true
url_login = true

[security]
allow_embedding = true
```

- Start the sample repository

`yarn && yarn start`

Example login:
`jwt-admin:grafana`

## What's going on?

- Sample app authenticates against keycloak (oauth provider) and retrieves JWT token

- Sample app builds a grafana URL to the dashboard with the JWT token embbeded in the URL

Example: `http://env.grafana.local:3000/d/RciOKLR4z/bob-the-board?orgId=1&kiosk&auth_token=eyJhbxxxxxxxxxxxxx`

- This URL is used to display an iframe

![image](https://user-images.githubusercontent.com/8071073/180830605-1aca5062-9d7a-4ed2-8a31-d744ec6ae9ae.png)
