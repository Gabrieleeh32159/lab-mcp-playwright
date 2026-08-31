# Paso 1 — Exploración con Playwright MCP

Sitio: https://practice.expandtesting.com/login
Los 4 criterios se ejecutaron manualmente en el navegador vía Playwright MCP.
Todo lo de abajo salió del DOM real (no está inventado).

## Selectores reales del formulario

```html
<form name="login" id="login" action="/authenticate" method="post">
  <input type="text"     name="username" id="username">
  <input type="password" name="password" id="password">
  <button id="submit-login" name="submit-login" type="submit">Login</button>
</form>
```

| Elemento | Selector |
|---|---|
| Username | `#username` |
| Password | `#password` |
| Botón Login | `#submit-login` (role: button, name "Login") |
| Mensaje flash | `#flash` |
| Logout | `a[href="/logout"]` |

## Mensajes EXACTOS observados

| Criterio | URL final | Texto de `#flash` | Clase |
|---|---|---|---|
| 1. Login exitoso (`practice` / `SuperSecretPassword!`) | `/secure` | `You logged into a secure area!` | `alert-success` |
| 2. Username inválido | `/login` | `Your username is invalid!` | `alert-danger` |
| 3. Password inválido | `/login` | `Your password is invalid!` | `alert-danger` |
| 4. Logout | `/login` | `You logged out of the secure area!` | `alert-info` |

En `/secure` el `<h1>` es: `Secure Area page for Automation Testing Practice`.

## Hallazgo (username inválido)

La documentación de la página describe un "mensaje de error de usuario" genérico, pero
el sitio devuelve el texto literal **`Your username is invalid!`** — distinto de
`Your password is invalid!` que sale sólo cuando el username SÍ existe. Es decir, el
sitio distingue ambos casos y filtra qué usuarios existen. Un test escrito "a ciegas"
habría usado un único mensaje genérico y habría fallado.
