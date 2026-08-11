// Copyright (c) 2026 AcmeX. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root.

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署时会以子路径形式访问：
//   https://<你的用户名>.github.io/<仓库名>/
// 所以 base 必须设置为 '/<仓库名>/'
// 如果你的仓库名不同，请修改下面这行
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode === 'production' ? '/portfolio/' : '/',
}))
