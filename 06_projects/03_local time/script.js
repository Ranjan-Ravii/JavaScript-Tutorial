const clock = document.querySelector('.clock')


setInterval(function(){
    const date = new Date()
    let day = date.toLocaleDateString()
    let time = date.toLocaleTimeString()
    clock.innerHTML = `${time}, ${day}`
}, 1000)