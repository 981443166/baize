import { useState, useEffect } from "react";

// 自定义 Hook：监听页面滚动，控制"回到顶部"按钮的显示与隐藏
export const useScrollToTop = () => {
  // 控制回到顶部按钮是否显示
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 为 html 元素添加平滑滚动效果
    document.documentElement.style.scrollBehavior = "smooth";

    // 滚动事件处理函数：滚动超过 400px 时显示按钮
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // 监听页面滚动事件
    window.addEventListener("scroll", handleScroll);

    // 组件卸载时清理副作用
    return () => {
      // 移除滚动事件监听
      window.removeEventListener("scroll", handleScroll);
      // 恢复默认滚动行为
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // 返回按钮的显示状态
  return showScrollTop;
};
