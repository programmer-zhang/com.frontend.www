# com.frontend.www

> 自用代码测试与部分功能实现项目

说明：此仓库基于 Vue 2 + webpack 3 的旧版构建链。已进行依赖调整以兼容 Node 18/22 LTS 环境（详见下文）。后续建议进行一次完整的现代化迁移（webpack 5 / Babel 7 / Vue 3 或 Vue 2.7）。

## 主要变更（摘要）
- 将 `node-sass` 替换为 Dart Sass（包名：`sass`），避免对 node-sass 原生绑定的依赖问题。
- 将 `webpack-cli` 与 `webpack-dev-server` 移入 `devDependencies`（它们为构建工具，不应作为运行时依赖）。
- 将 `sass-loader` 升级到兼容当前构建链的版本（保留 webpack@3 支持范围）。
- 升级 `axios` 到 `^0.21.4`（非破坏性修复）。
- **[Node 22 兼容]** 移除未使用的依赖 `es6-promise`、`qrcodejs2`（源码无引用）。
- **[Node 22 兼容]** `shelljs` `0.7 → 0.8`（修复 Node 12+ 循环引用警告）。
- **[Node 22 兼容]** `rimraf` `2 → 3`（更好的 Node 22 兼容性，仍支持 callback API）。
- **[Node 22 兼容]** `semver` `5 → 7`（API 兼容，check-versions.js 无需改动）。
- **[Node 22 兼容]** `chalk` `2 → 4`（最后一个 CJS 版本，API 兼容）。
- **[Node 22 兼容]** `dev` 和 `build` 脚本添加 `NODE_OPTIONS=--openssl-legacy-provider`，兜底 uglifyjs-webpack-plugin 内部 MD4 哈希在 Node 17+ 的 `ERR_OSSL_EVP_UNSUPPORTED` 问题。
- `engines` 字段更新为 `node >= 18.0.0`、`npm >= 8.0.0`。

## 环境要求
- Node.js: `>= 18.0.0`（推荐 Node 18 或 Node 22 LTS）。
- npm: `>= 8.0.0`。

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
- 在空闲周期里规划一次"现代化迁移"：升级到 webpack 4/5、Babel 7、替换 extract-text-webpack-plugin 为 mini-css-extract-plugin、评估 Vue 版本（2.7 vs 3）和 UI 库（iview 已较老）。
- `webpack-dev-server@2` 使用了已废弃的 `process.binding('http_parser')` API，在 Node 22 下会产生 deprecation 警告（不影响运行），升级到 webpack 4+ 后可一并解决。
- 在完成迁移前，尽量在 CI 中固定 Node 版本（例如使用 .nvmrc 或在 CI 配置中指定 Node 18/22）。

---

若需我将这些文档更新提交为一个 commit/PR、或把 lockfile 从 .gitignore 中移除并提交，请告知.
