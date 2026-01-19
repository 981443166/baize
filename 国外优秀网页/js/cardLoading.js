const allLoading = document.querySelectorAll(".loading");
const toggler = document.getElementById("toogle");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  //将这些偏好设置保存到本地存储
  const isDarkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkmode", isDarkModeEnabled);
}

toggler.addEventListener("click", toggleDarkMode);

window.addEventListener("load", function () {
  //检查本地存储中是否有保存的偏好设置  检查主题是否为dark-mode
  const isDarkModeEnabled = localStorage.getItem("darkmode");
  if (isDarkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // 遍历所有 loading 元素，为其添加 loading 类 默认加载
  setInterval(() => {
    allLoading.forEach((item) => {
      item.classList.remove("loading");
    });
  }, 1000);
});
