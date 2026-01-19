function playSound(e) {
  // 增加一个监听器，名字叫keydown
  // window.addEventListener("keydown", function (event) {
    // console.log(event.keyCode);     测试
    // 找到对应的audio元素
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    //    console.log(key);
    if (!audio) return; // 如果没有找到audio元素，就直接返回
    audio.currentTime = 0; // 重新设置audio元素的播放时间为0，防止重复播放
    audio.play(); // 播放audio元素
    key.classList.add("playing");
  // });
}

function removeTransiton(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// 匹配数组元素
const keys = document.querySelectorAll(".key");
// // 监听transitionend过渡，监听后移除过渡
keys.forEach((key) => key.addEventListener("transitionend", removeTransiton));
window.addEventListener("keydown", playSound);