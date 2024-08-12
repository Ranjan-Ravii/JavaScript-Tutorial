const body = document.querySelector('body')
const buttons = document.querySelectorAll('.childBox')
const info = document.querySelector('.info')
const title = document.querySelector('.title')

 


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'gray'){
            // body.style.backgroundColor =  "gray"
            body.style.backgroundColor = e.target.id
            info.style.color = "white"
            title.style.color = "white"
        }
        else if(e.target.id === "white"){
            // body.style.backgroundColor =  "white"
            body.style.backgroundColor = e.target.id
            info.style.color = "black"
            title.style.color = "black"
        }
        else if(e.target.id === "red"){
            // body.style.backgroundColor =  "red"
            body.style.backgroundColor =  e.target.id
            info.style.color = "white"
            title.style.color = "white"
        }
        else if(e.target.id === 'green'){
            // body.style.backgroundColor =  "green"
            body.style.backgroundColor =  e.target.id
            title.style.color = "white"
            info.style.color = "white"

        }
        
        console.log(e.target);
    })
});

 