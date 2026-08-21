# VALENCE Site

VALENCE 产品故事展示站。

## 产品故事

- **ION** — Data Intelligence
- **VALENCE** — Enterprise Intelligence
- **CATALYST** — Chief AI Agent
- **REACTOR** — Control Intelligence

核心叙事：

> From Data to Intelligence to Action.

## 本地预览

直接打开 `index.html`，或使用任意静态 Web Server。

例如：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## Docker

构建：

```bash
docker build -t valence-site .
```

运行：

```bash
docker run -d --name valence-site -p 127.0.0.1:8080:80 valence-site
```

## GHCR 自动镜像

仓库 push 到 `main` 后，GitHub Actions 会自动构建并推送：

```text
ghcr.io/renyumm/valence-site:latest
```

服务器部署：

```bash
docker pull ghcr.io/renyumm/valence-site:latest
docker run -d \
  --name valence-site \
  --restart unless-stopped \
  -p 127.0.0.1:8080:80 \
  ghcr.io/renyumm/valence-site:latest
```

也可以：

```bash
docker compose pull
docker compose up -d
```

## Caddy

`valence.chat` 指向服务器公网 IP 后：

```caddyfile
valence.chat {
    reverse_proxy 127.0.0.1:8080
}
```

Caddy 会自动申请 HTTPS 证书。

## 注意

当前页面是产品品牌/故事展示页，不接真实后端。
