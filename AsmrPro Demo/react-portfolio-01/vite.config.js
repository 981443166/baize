import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // 插件配置：启用 React 和 Tailwind CSS 支持
  plugins: [react(), tailwindcss()],
  // 构建配置
  build: {
    // 输出目录
    outDir: "dist",
    // 静态资源目录
    assetsDir: "assets",
    // 是否生成 sourcemap 文件（生产环境建议关闭）
    sourcemap: false,
    // 代码压缩工具（terser 压缩率高，esbuild 速度快）
    minify: "terser",
    // Rollup 打包选项
    rolldownOptions: {
      // 输出配置
      output: {
        // 手动分包：将公共依赖拆分为独立 chunk，减少重复加载
        manualChunks: {
          // React 核心库单独打包
          vendor: ["react", "react-dom"],
          // 图标库单独打包
          icons: ["lucide-react"],
        },
      },
    },
  },
  // 预览服务器配置（npm run preview 时生效）
  preview: {
    // 预览端口号
    port: 3000,
    // 启动时自动打开浏览器
    open: true
  },
});
