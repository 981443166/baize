import { useState, useEffect } from "react";

//// 自定义 Hook：用于检测元素是否进入视口，并记录哪些元素已经触发过动画（每个元素仅触发一次）
export const useIntersectionObserver = () => {
  // 状态：记录每个元素（通过 id 标识）是否已经播放过动画
  // 初始值为空对象，形如 { "element-id": true }
  const [hasAnimated, setHasAnimated] = useState({});
  // 副作用：创建 IntersectionObserver，观察所有带有 id 属性的元素
  useEffect(() => {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(
      (entries) => {
        //// 当被观察元素与视口的交叉状态发生变化时触发
        entries.forEach((entry) => {
          //only animate if it hasn't been animated before   // 仅当元素进入视口（entry.isIntersecting 为 true），并且该元素尚未被标记为已动画时
          if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
            // 更新状态：将该元素对应的 id 标记为已动画
            // 注意：此处使用了展开运算符保留原有状态，然后添加/更新当前元素的标记
            setHasAnimated({ ...hasAnimated, [entry.target.id]: true });
          }
        });
      },
      { threshold: 0.1 }, // 触发阈值：元素可见度达到 10% 时触发回调
    );
    // 查询文档中所有带有 id 属性的元素，并对每个元素启动观察
    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    // 清理函数：组件卸载时断开 observer 连接，释放资源
    return () => observer.disconnect();
  }, [hasAnimated]); // 依赖项：当 hasAnimated 变化时重新执行 effect
  // 注意：这样的依赖可能导致反复创建 observer，实际推荐使用回调 ref 或更稳定的写法
  // 返回记录哪些元素已经触发过动画的状态对象，供外部组件使用
  return hasAnimated;
};
