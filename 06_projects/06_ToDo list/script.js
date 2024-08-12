const createBtn = document.querySelector('.createBtn')
const outerContainter = document.querySelector('.outerContainter')
const innerContainter = document.querySelector('.innerContainer')
const dateTime = document.querySelector('.dateTime')
const addList = document.querySelector('.addList')


function containterStyle() {
    const inputTextBox = document.createElement('input')
    inputTextBox.type = 'text'
    const addBtn = document.createElement('button')
    addBtn.textContent = "Add"
    addList.appendChild(inputTextBox)
    addList.appendChild(addBtn)

}

function getFormatedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formatedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return formatedDate;
}

function getFormatedTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am'; // getting am/pm
    hours = hours % 12;
    hours = hours ? hours : 12
    const formatedTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`
    return formatedTime

}
createBtn.addEventListener('click', function () {
    containterStyle();
    dateTime.innerHTML = `${getFormatedDate()} , ${getFormatedTime()} `;
})

//  script for adding into list
const list = document.querySelector('.list')
const inputText = document.querySelector('.inputText')
const myArray = [];




document.querySelector('.addBtn').addEventListener('click', function (e) {
    const inputTextValue = inputText.value

    if (inputTextValue === '') {
        alert("please enter some Task")
    }
    else {
        const div = document.createElement('div')
        const checkbox = document.createElement('input')
        const deleteBtn = document.createElement('span')
        deleteBtn.style.backgroundImage = 'url("delete-png.png")';
        deleteBtn.style.cursor = 'pointer';
        // deleteBtn.textContent = '🗑️'

        checkbox.type = 'checkbox'
        div.appendChild(checkbox)
        div.appendChild(document.createTextNode(inputTextValue))
        div.appendChild(deleteBtn)
        list.appendChild(div)

        checkbox.addEventListener('change', function(){
            if (checkbox.checked) {
                div.style.textDecoration = 'line-through'
            }
            else{
                div.style.textDecoration = 'none'
            }
        })

        deleteBtn.addEventListener('click', ()=>{
            div.remove()
        })


    }
    inputText.value = '';
})