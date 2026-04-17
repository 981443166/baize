// day1 1.0: 学习React的基础知识
// function App() {
//   const name = 'React';
//   const age = 18;
//   const test = (
//     <div>
//       <p>Hello: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   )
//   const getName = () => {
//     return 'baize'
//   }
//   return (
//     <div className="App">
//      {test}
//      {/* 函数调用 */}
//      {getName()}
//      {/* 方法调用 */}
//      {new Date().getDate()}
//      {/* 使用JS对象 */}
//      <div><p style={{color: 'red'}}>HelloJS</p></div>
//     </div>
//   );
// }

// day1 1.1: 实现列表渲染
// const list = [
//   { id: 1, name: "vue" },
//   { id: 2, name: "react" },
//   { id: 3, name: "angulara" },
// ];
// function App() {
//   return (
//     <div className="App">
//       <p>Hello React</p>
//       <ul>
//         {/* 列表渲染 */}
//         {list.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   );
// }

// day1 1.2: 实现基础条件渲染
// const isLogin = true;

// function App(){
//   return(
//     <div>
//       {/* {逻辑与运算} */}
//       {/* 仅当isLogin为true时，渲染<p>已登录</p> */}
//       <p>逻辑与运算</p>
//       {isLogin && <p>已登录</p>}
//       {/* {三元运算符} */}
//       {isLogin ? <p>已登录</p> : <p>未登录</p>}
//     </div>
//   )
// }

// day1 1.3: 实现复杂条件渲染
// const getNameType = 0;

// function getName(){
//   if(getNameType === 0){
//     return <div>周杰伦</div>
//   }else if(getNameType === 1){
//     return <div>谢霆锋</div>
//   }else{
//     return <div>黎明</div>
//   }
// }

// function App(){
//   return(
//     <div className="App">
//       {getName()}
//     </div>
//   )
// }

// day1 1.4: 事件绑定
// 基础事件绑定
// function handleClick(){
//   console.log('点击了按钮')
// }
// 事件参数e
// function handleClick(e){
//   console.log('点击了按钮', e)
// }
//  自定义参数
// function handleClick(name){
//   console.log('点击了按钮', name)
// }
//  同时传递事件参数e和自定义参数
// function handleClick(e, name){
//   console.log('点击了按钮', e, name)
// }

// function App(){
//   return(
//     // 基础事件绑定
//     // <div className="App">
//     //   <button onClick={handleClick}>点击我</button>
//     // </div>
//     // 事件参数e
//     <div className="App">
//       <button onClick={(e) => handleClick(e, 'baize')}>点击我</button>
//     </div>
//   )
// }

// day1 1.5: useState状态管理
// 引入useState组件
// import { useState } from 'react'

// function App(){
//   // 调用useState组件，定义状态变量count和状态更新函数setCount
//   // 定义状态更新函数setCount
//   const [count, setCount] = useState(0)
//   // 点击事件回调函数
//   function handleClick(){
//     setCount(count + 1)
//   }
//   return(
//     <div className="App">
//       <button onClick={handleClick}>{count}</button>
//     </div>
//   )
// }

// day1 1.6: useState修改状态
// 引入useState组件
// import { useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);
//   function handleClick() {
//     // 直接修改状态变量count，会导致渲染失败
//     // count++;
//     // console.log(count)
//     // 正确的修改状态变量count的方式是调用状态更新函数setCount
//     setCount(count + 1);
//     console.log(count)
//   }
//   const [name, setName] = useState({name: '王杰'})
//   const changeName = () => {
//     // 直接修改状态变量name.name，会导致渲染失败
//     // name.name = '周杰伦'
//     setName({
//       ...name,
//       name: '周杰伦'
//     })
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={changeName}>修改姓名{name.name}</button>
//       </div>
//   );
// }

// day1 1.7: 基础样式
// 引入样式
// import './App.css'

// function App(){
//   return(
//     <div className="App">
//       <h1 className="title">Hello React</h1>
//     </div>
//   )
// }

// day1 1.8: 评论案例渲染
// 引入样式
import "./index.scss";
import avatar from "./images/bozai.png";
import { useState } from "react";
import _ from "lodash";
import classNames from "classnames";
// 评论列表数据
const list = [
  {
    rpid: 3,
    user: {
      uid: "13258165",
      avatar:
        "https://img2.woyaogexing.com/2025/04/11/ac1f790fc92ec3be7e4d58f3a5319512.jpg",
      uname: "周杰伦",
    },
    content: "哎哟，不错哦",
    ctime: "10-18 08: 15",
    like: 126,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar:
        "https://img2.woyaogexing.com/2025/04/11/399d2649f54188d5e5b02240cec4517b.jpg",
      uname: "许嵩",
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11: 29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar: avatar,
      uname: "黑马前端",
    },
    content: "学前端就来黑马",
    ctime: "10-19 09: 00",
    like: 66,
  },
];

// 当前登录用户信息
const user = {
  uid: "30009257",
  avatar,
  uname: "bo",
};

// 导航 Tab 数组
const tabs = [
  { type: "hot", text: "最热" },
  { type: "time", text: "最新" },
];

function App() {
  //渲染评论列表
  const [commentList, setCommentList] = useState(
    _.orderBy(list, "like", "desc"),
  );
  // const handleDel = (id) => {
  //   setCommentList(commentList.filter(item => item.rpid !== id))
  // }
  function handleDel(id) {
    setCommentList(commentList.filter((item) => item.rpid !== id));
  }

  // 1,点击谁就把谁的type记录下来
  // 2,通过记录的type与tabs数组中的type进行对比，判断是否需要添加active类名
  const [type, setType] = useState("hot");
  const handleTabs = (type) => {
    // console.log(type);
    setType(type);
    //基于列表的排序
    if (type === "hot") {
      //按照点赞数排序
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      //按照评论时间排序
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 首先map遍历Tabs，渲染每个Tab */}
            {tabs.map((item) => (
              <span
                key={item.type}
                onClick={() => handleTabs(item.type)}
                // 原生写法比较混乱且后期难以维护
                // className={`nav-item ${type === item.type ? "active" : ""}`}
                // 使用classnames库，根据type判断是否需要添加active类名
                className={classNames("nav-item", {
                  active: type === item.type,
                })}
              >
                {item.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              // ref={inputRef}
              // value={content}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {/* 使用map方法遍历commentList数组，渲染每条评论 */}
          {commentList.map((item) => (
            // 每条评论使用唯一的rpid作为key，确保React能正确识别和更新列表项
            <div key={item.rpid} className="reply-item">
              {/* 头像区域：显示评论用户的头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名区域：显示评论用户的名称 */}
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                {/* 评论内容区域：包含评论文本、时间、点赞数和删除按钮 */}
                <div className="root-reply">
                  {/* 评论的文本内容 */}
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    {/* 评论发布时间 */}
                    <span className="reply-time">{item.ctime}</span>
                    {/* 评论的点赞数量 */}
                    <span className="reply-time">点赞数:{item.like}</span>
                    {/* 删除按钮：用于删除当前评论 */}
                    {/* 点击删除按钮时，调用handleDel函数，传递当前评论的rpid作为参数 */}
                    {user.uid === item.user.uid && (
                      <span
                        className="delete-btn"
                        onClick={() => handleDel(item.rpid)}
                      >
                        删除
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
