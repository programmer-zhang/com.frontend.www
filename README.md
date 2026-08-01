# com.frontend.www

> 自用代码测试与部分功能实现项目

说明：此仓库基于 Vue 2 + webpack 3 的旧版构建链。已进行小规模依赖调整以便在现代开发环境下继续构建（详见下文）。后续建议进行一次完整的现代化迁移（webpack 5 / Babel 7 / Vue 3 或 Vue 2.7）。

## 主要变更（摘要）
- 将 `node-sass` 替换为 Dart Sass（包名：`sass`），避免对 node-sass 原生绑定的依赖问题。
- 将 `webpack-cli` 与 `webpack-dev-server` 移入 `devDependencies`（它们为构建工具，不应作为运行时依赖）。
- 将 `sass-loader` 升级到兼容当前构建链的版本（保留 webpack@3 支持范围）。
- 升级 `axios` 到 `^0.21.4`（非破坏性修复）。

这些改动都是“最小兼容性更新”，目的是保持现有代码/配置的兼容性同时修复 node-sass 的构建失败问题。

## 环境要求（建议）
- Node.js: 推荐使用 Node 16 或 Node 18 LTS（部分历史依赖在非常新或非常旧的 Node 版本上可能不可编译）。
- npm: 推荐使用项目贡献者常用的稳定版本（>=6/7 均可）。

备注：当前仓库中仍含大量已弃用或过时的依赖（例如 webpack@3、Babel 6、html-webpack-plugin@2 等）。这些并不会阻止本仓库在短期内运行，但建议计划一次完整迁移以降低长期维护成本。

## 快速开始
```bash
# 安装依赖
npm install

# 本地开发（热重载）
npm run dev

# 生产构建
npm run build

# 查看打包分析报告（若脚本支持）
npm run build --report
```

如果团队协作，建议把 `package-lock.json` 提交到仓库以保证每个开发者/CI 使用一致的依赖树。当前仓库的 `.gitignore` 可能忽略了 lockfile（请根据团队策略决定是否提交）。

## 构建细节与注意事项
- 样式编译：现使用 Dart Sass（`sass`）+ `sass-loader`；不再依赖 `node-sass` 的二进制编译步骤。
- 由于部分依赖较旧，构建时会看到许多 deprecation 警告（例如 Dart Sass 的 legacy JS API 警告、多个包已弃用警告）。这些警告部分来源于第三方库，短期可以忽略，但长期应逐个升级或替换相应库。

## 建议的后续工作
- 在空闲周期里规划一次“现代化迁移”：升级到 webpack 4/5、Babel 7、替换 extract-text-webpack-plugin 为 mini-css-extract-plugin、评估 Vue 版本（2.7 vs 3）和 UI 库（iview 已较老）。
- 在完成迁移前，尽量在 CI 中固定 Node 版本（例如使用 .nvmrc 或在 CI 配置中指定 Node 16/18）。

---

若需我将这些文档更新提交为一个 commit/PR、或把 lockfile 从 .gitignore 中移除并提交，请告知.
