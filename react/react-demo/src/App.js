//受控绑定表单
// import { useState } from "react";

// function App() {
//   //1 首先声明一个useState状态
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <input
//         //2 核心绑定流程
//         //  1 通过value属性绑定raact状态
//         value={value}
//         //  2 通过onChange事件 通过参数e获取到用户输入的内容 再反向修改到react状态
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//         type="text"
//       />
//     </div>
//   );
// }


// react 获取 DOM
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const showDown = () => {
    console.dir(inputRef.current);
  }
  return (
    <div>
      <input
        type="text"
        id="myInput"
        ref={inputRef}
      />
      <button onClick={showDown}>获取DOM</button>
    </div>
  );
}
export default App;

