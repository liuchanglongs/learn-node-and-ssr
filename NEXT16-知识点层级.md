# Next.js 16 重要知识点（分层沉淀）

面向：**已会 React**，直接学 **App Router + Next 16**。  
用途：自检清单与复习索引，细节以 [官方文档](https://nextjs.org/docs) 为准。

---

## 层级总览

| 层级 | 名称 | 目标 |
|------|------|------|
| L0 | 心智与目录 | 知道代码跑在服务端还是客户端、文件放哪 |
| L1 | 路由与 UI 骨架 | 能搭多页面、布局、导航 |
| L2 | 数据与渲染 | 能取数、控制缓存、处理加载与错误 |
| L3 | 变更与接口 | 能写服务端写库/写 API 的完整链路 |
| L4 | 横切能力 | 鉴权、中间件、运行时、SEO、资源优化 |
| L5 | 进阶与运维 | 缓存治理、性能、部署与排错 |

---

## L0 心智与目录

### L0.1 渲染位置

- **默认**：`app/` 下的组件多为 **React Server Component（RSC）**，在服务端执行，**不写** `useState` / `useEffect` / 浏览器 API。
- **客户端**：文件顶部 `'use client'` 的组件在浏览器（含 hydration）执行，可交互、可用 Hooks。
- **原则**：组件树尽量「服务端为大、客户端为小」，把交互拆到叶子 Client Component。

### L0.2 关键目录与文件

- `app/`：App Router、页面、布局、路由特殊文件。
- `public/`：静态资源直链。
- `next.config.ts`：构建与运行时行为配置。
- `middleware.ts`（项目根）：请求进入前的横切逻辑（Edge）。

### L0.3 与「纯 React SPA」的差异

- 路由由 **文件系统** 约定，而非仅客户端路由配置。
- **数据可在服务端组件中直接请求**，不必一切皆 `useEffect` + API。

---

## L1 路由与 UI 骨架

### L1.1 核心文件约定

- **`page.tsx`**：对应路由的 UI，**必须**存在才构成可访问路由。
- **`layout.tsx`**：共享壳子，可嵌套；子路由继承父 layout。
- **`template.tsx`**（可选）：与 layout 类似但每次导航会重新挂载（适合需要重置内部状态的场景）。

### L1.2 动态与分组

- **动态段**：`[id]`、`[...slug]` 捕获路径参数；`page` 里通过 `params`（异步时注意 Next 15+ 的 `params` Promise 约定，以当前版本文档为准）。
- **路由组**：`(folderName)` 不改变 URL，仅组织文件。
- **`@slot` 并行路由、`(.)` 拦截路由**：有模态框、并列面板等需求再学。

### L1.3 导航

- **`<Link href>`**：客户端导航，预取可配。
- **`useRouter()`**（客户端）：`push` / `replace` / `refresh` 等。
- **重定向**：服务端 `redirect()`、配置 `redirects` 等。

---

## L2 数据与渲染

### L2.1 在服务端组件中取数

- `async function Page()` 内直接 `await fetch(...)` 或访问 DB/SDK。
- **`fetch` 缓存语义**（先掌握三种心智模型即可）：
  - 默认：**尽量缓存**（类似静态数据，适合可接受的延迟一致性）。
  - **`cache: 'no-store'`**：每次请求重新拉（类似每次 SSR 动态数据）。
  - **`next: { revalidate: 秒 }`**：时间窗内用缓存，过期后后台刷新（ISR 心智）。

### L2.2 与缓存相关的后续（L5 会加深）

- **`revalidatePath` / `revalidateTag`**：在 mutation 后主动失效相关页面或标签缓存。
- **`unstable_cache`**：对非 `fetch` 的数据源做可缓存包装（按需深入）。

### L2.3 流式与反馈

- **`loading.tsx`**：Suspense 边界的加载 UI，改善首屏与导航体验。
- **`error.tsx`**：错误边界；**`global-error.tsx`**：根布局级错误（用法见文档）。

### L2.4 其他数据入口

- **`generateStaticParams`**：静态/预渲染路径列表（动态路由预生成）。
- **`generateMetadata` / 静态 `metadata`**：与 SEO 强相关，常与 L2 数据一起考虑。

---

## L3 变更与接口

### L3.1 Server Actions（优先掌握）

- 在 Server Component 或 Server Action 文件中用 **`'use server'`** 标记可在服务端调用的函数。
- 表单：**`action={async (formData) => { ... }}`** 或与 `useActionState` 等模式结合（以 React 19 + 当前 Next 文档为准）。
- **适用**：改库、改文件、发邮件等**必须服务端执行**且希望少写样板 HTTP 的场景。

### L3.2 Route Handlers

- **`app/api/.../route.ts`**：`GET` / `POST` 等导出函数。
- **适用**：Webhook、给移动端/第三方调用的 HTTP、下载流、与 Server Action 并存的 BFF。

### L3.3 安全与校验

- 所有来自客户端的输入：**在服务端校验**（如 zod）；Action / Route 都要当**不可信入口**。
- **敏感环境变量**：仅 `NEXT_SERVER_*` 或不含 `NEXT_PUBLIC_` 前缀，避免进客户端包。

---

## L4 横切能力

### L4.1 中间件 `middleware.ts`

- 匹配路径、重写、重定向、**轻量鉴权**（注意 Edge 限制：部分 Node API 不可用）。
- 与 **Cookie / Header** 协作做会话门槛。

### L4.2 运行时

- **Node.js runtime** vs **Edge runtime**：能力集不同；依赖原生模块、长 CPU 任务时优先 Node。

### L4.3 资源与展示

- **`next/image`**：尺寸、占位、`priority` 等与 LCP 相关。
- **字体优化**：`next/font` 减少布局偏移与请求链。

### L4.4 国际化与多环境

- i18n 路由策略、环境变量分环境（开发/预发/生产）——按项目需要展开。

---

## L5 进阶与运维

### L5.1 缓存治理

- 列表与详情、后台修改后的**一致性**：`revalidateTag` 设计标签粒度。
- 理解 **Full Route Cache / Data Cache / Router Cache** 等概念边界（以官方「Caching」章节为准），避免「改了数据页面不变」。

### L5.2 性能

- **RSC Payload** 与客户端 JS 体积；避免在 Client 大包中引入仅服务端需要的依赖。
- **分析工具**：bundle 分析、Chrome Performance、Next 自带提示。

### L5.3 构建与部署

- **`next build` / `next start`** 与托管平台（Vercel、Docker、Node 服务器）的环境变量与 `output` 模式。
- **日志与监控**：服务端错误、边缘函数超时。

---

## 建议学习顺序（与层级对应）

1. **L0 → L1**：能搭出多页面 + 布局，并明确哪些组件是 client。
2. **L2**：`fetch` 三种缓存心智 + `loading` / `error`。
3. **L3**：Server Actions 打通「读列表 → 表单提交改数据 → 再读」。
4. **L4**：按项目需要补 middleware、Route Handlers、`metadata` / `image`。
5. **L5**：上线前后遇到真实问题再深入缓存与性能。

---

## 自检一句话

- **路由**：URL 能否由 `app/` 文件树解释清楚？  
- **边界**：每个组件是否明确「服务端还是客户端」？  
- **数据**：每条数据是「可缓存 / 每次新鲜 / 定时刷新」哪一种？  
- **写入**：优先 Server Action，必要时 Route Handler。  
- **体验**：导航是否有 `loading`、失败是否有 `error`？

---

*文档随 Next 小版本迭代，请以你项目 `package.json` 中的 `next` 版本对应官方文档为准。*
