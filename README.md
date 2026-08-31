# Lab 3.2 — MCP + Playwright E2E

Tests E2E generados a partir de criterios de aceptación, con selectores y mensajes
verificados contra el sitio real usando Playwright MCP (ver `EXPLORACION.md`).

```bash
npm install
npx playwright install chromium
npx playwright test
```

- `playwright.config.ts` — baseURL `https://practice.expandtesting.com`
- `tests/` — un spec por criterio (login exitoso, username inválido, password inválido, logout)
- `.mcp.json` — config MCP para Claude Code
- `.vscode/mcp.json` — config MCP para VS Code / Copilot
