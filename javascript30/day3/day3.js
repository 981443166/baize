const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.value);
    // console.log(this.dataset);// 输出自定义数据集对象，包含所有自定义属性
    const suffix = this.dataset.sizing || '';// 获取自定义属性data-sizing的值，若不存在则为空字符串
    // console.log(this.name);// 输出输入元素的name属性值
    //setProperty() 方法用于设置 CSS 样式的对象设置一个新的值。
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);// 设置CSS变量值，包含单位
    
}

// 遍历所有输入元素，添加change事件监听器
inputs.forEach(input => input.addEventListener('change', handleUpdate));// 当输入值改变时触发事件
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));// 鼠标移动时也触发事件
