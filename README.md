# VALENCE Site

VALENCE 企业智能协作 Runtime 官方展示站。

## 页面主线

- **VALENCE**：统一承载 Pod 上下文、Agent、专家、Skill、任务、自动化与运行结果。
- **Catalyst**：首席智能体与调度中枢，负责意图理解、能力发现、动态委派、跟踪与汇总。
- **ION**：企业本体与可治理语义运行层，可独立部署或作为插件接入 VALENCE。
- **Reactor**：运筹建模、仿真验证与策略运行层，可独立部署或作为插件接入 VALENCE。
- **开放接入**：支持 HTTP、MCP、自定义 Agent 与 Skill，也可向既有门户和业务系统开放能力。

## 本地预览

```bash
python3 -m http.server 8080
```

访问 `http://127.0.0.1:8080`。追加 `?lang=en` 可直接预览英文页面。

## 容器部署

```bash
podman build --no-cache -t valence-site:latest .
podman rm -f valence-site 2>/dev/null || true
podman run -d --name valence-site --restart=always \
  -p 127.0.0.1:8080:80 \
  valence-site:latest
```
