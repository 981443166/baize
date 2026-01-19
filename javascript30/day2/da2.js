//监听秒针s
const secondHand = document.querySelector('.second-hand')
console.log(secondHand);

//监听分针m
const minHand = document.querySelector('.min-hand')
//监听时针h
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    //获取当前时间
    const now = new Date();
    console.log(now);

    //获取当前时间的秒数
    const seconds = now.getSeconds();
    // console.log(seconds);
    //将秒数转换为角度
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //将秒针旋转到对应的角度
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    //获取当前时间的分钟数
    const mins = now.getMinutes();
    // console.log(mins);
    //将分钟数转换为角度
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    //将分针旋转到对应的角度
    minHand.style.transform = `rotate(${minsDegrees}deg)`
    //获取当前时间的小时数
    const hours = now.getHours();
    // console.log(hours);
    //将小时数转换为角度
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    //将时针旋转到对应的角度
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

//每1000毫秒钟调用一次setDate函数，也就是1秒调用一次
setInterval(setDate, 1000);

setDate();
