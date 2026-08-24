# VALENCE Site

VALENCE 三产品体系官方展示站。

## 产品关系

- **ION · Data Intelligence**：负责连接、治理与理解企业数据，让数据成为可被 AI 调用的“离子”。
- **VALENCE · Enterprise Intelligence**：三产品体系的智能中枢，连接人、Agent、专家、Skill、任务与自动化。
- **Catalyst · Chief Orchestrator**：VALENCE 内部的 AI 协调者，不是第四款产品；负责理解、协调、委派与汇总。
- **REACTOR · Control & Feedback**：把智能决策转化为经过约束与安全校验的控制策略，并回传执行反馈。

三款产品共享同一 Runtime，可单独部署，也可自由组合为 `ION → VALENCE → REACTOR` 的完整反应链。ION、REACTOR 和第三方能力可作为插件接入 VALENCE；VALENCE 也可整体作为 API 接入其他系统。

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
