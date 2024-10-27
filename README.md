# vue-ts-shuangzhao

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# 路由
router
  index.ts                       // 路由管理主页

# 项目页面结构
views
  login
    index.vue                    // 登录页
    serviceAgree.vue             // 服务协议
    privatePolicy.vue            // 隐私政策
  task
    index.vue                    // 任务主页
    search.vue                   // 任务搜索
    details.vue                  // 任务详情
    companySource.vue            // 公司任务主页
  contract                       
    index.vue                    // 合约主页
    details.vue                  // 合约详情
    progress.vue                 // 合约进度
  message
    index.vue                    // 消息主页 
    systemList.vue               // 消息列表
    systemDetails.vue            // 消息详情
    talk.vue                     // 对话
  my
    index.vue                    // 我的主页
    user                         // 用户中心
      index.vue                  // 个人信息
      autheReal.vue              // 实名认证
      certifeild.vue             // 已完成实名认证
      identitySwitch.vue         // 切换身份
    set                          // 我的设置
      index.vue                  // 设置页
    feedback                     // 意见反馈
      index.vue                  // 反馈主页
    account                      // 账户
      index.vue                  // 账户主页
      advance.vue                // 账户提现
      coinExplain.vue            // 无忧币说明
      depositExplain.vue         // 押金说明
    resume                       // 我的简历
      index.vue                  // 简历主页
      preview.vue                // 简历预览
    collect                      // 收藏
      index.vue                  // 收藏主页
  talent                         // 人才主页
    index.vue                    // 人才详情
