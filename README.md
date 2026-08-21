# VALENCE Site — Advanced Industrial Enterprise Intelligence

VALENCE 企业智能操作系统官方展示站，已完成视觉重构与中英文国际化（i18n）升级。

## 升级亮点

1. **中英文双语一键无缝切换**：
   - 默认显示**中文（简体）**，支持切换为 **English**。
   - 语言偏好自动缓存至 `localStorage`，平滑无刷新更新所有视图。
2. **高端工业科技与量子化学美学**：
   - 增强了深色调玻璃拟态（Glassmorphism）、动态分子价键轨道与实时遥测波形动效。
   - 优化了产品卡片（`ION`, `VALENCE`, `CATALYST`, `REACTOR`）的交互反馈与移动端响应式排版。
3. **完整工业叙事体系**：
   - 从数据智能（ION） $\rightarrow$ 价键网络（VALENCE） $\rightarrow$ 首席调度（CATALYST） $\rightarrow$ 控制执行（REACTOR），贯通工业制造核心场景。

## 本地快速预览

```bash
# 启动轻量静态服务器
python3 -m http.server 8080
```

浏览器访问：`http://localhost:8080`

## Docker 构建与部署

```bash
# 构建镜像
docker build -t valence-site .

# 启动容器
docker run -d --name valence-site -p 127.0.0.1:8080:80 valence-site

# 或直接使用 Docker Compose
docker compose up -d
```
