// import React from "react";
import Navigation from "./components/Navigation";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const App = () => {
    const showScrollTop = useScrollToTop();
    const hasAnimated = useIntersectionObserver();

    return (
       <div className="min-h-screen bg-white text-black">
        <Navigation />
       </div>
    );
}

export default App;
// 