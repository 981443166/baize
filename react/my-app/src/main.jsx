//整个项目的入口文件 从这里开始运行
// 引入react和react-dom，react最重要的两个核心库
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//导入项目的根组件
import App from './App.jsx'

// 创建react-dom的根实例，用于渲染react组件
// 渲染项目的根组件到页面的root元素中
createRoot(document.getElementById('root')).render(
    <App />
)
