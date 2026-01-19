let data = [
  {
    img: "./img/course01.png",
    title: "java",
    num: "1126",
  },
  {
    img: "./img/course02.png",
    title: "html",
    num: "1126",
  },
  {
    img: "./img/course03.png",
    title: "css",
    num: "115",
  },
  {
    img: "./img/course04.png",
    title: "js",
    num: "15",
  },
  {
    img: "./img/course05.png",
    title: "vue",
    num: "11225",
  },
  {
    img: "./img/course06.png",
    title: "react",
    num: "11225",
  },
  {
    img: "./img/course07.png",
    title: "angular",
    num: "11325",
  },
  {
    img: "./img/course08.png",
    title: "node",
    num: "11425",
  },
  {
    img: "./img/course09.png",
    title: "mysql",
    num: "11525",
  },
  {
    img: "./img/course10.png",
    title: "mongodb",
    num: "11525",
  },
];

// 获取ul.h元素
const ul = document.querySelector('.course .h');

for (let i = 0; i < data.length; i++) {
  // 创建li元素
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="">
        <img src=${data[i].img} alt="" />
        <h3>${data[i].title}</h3>
        <div class="into"><span>高级</span>${data[i].num}人正在学习</div>
    </a>
  `;
  // 将li元素添加到ul中
  ul.appendChild(li);
}
