
const counter = document.querySelector('#counter')
let countClicks = function () {
    let i = 0
    
}

window.addEventListener('load', () => {countUp = setInterval(() => {counter.innerText++}, 1000)})

document.querySelector('#minus').addEventListener('click', () => {counter.innerText--})

document.querySelector('#plus').addEventListener('click', () => {counter.innerText++})

document.querySelector('#heart').addEventListener('click', () => {
    const likeList = document.querySelector('.likes')
    let li = document.createElement('li')
    li.innerText = countClicks === 1 ? `${counter.innerText} has been liked 1 time` : `${counter.innerText} has been liked ${countClicks} times`
    likeList.appendChild(li)
})

document.querySelector('#pause').addEventListener('click', pauseTimer)

document.querySelector('#comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let comment = document.createElement('p')
    comment.innerText = e.target.comment_input.value
    document.querySelector('#list').appendChild(comment)
    document.querySelector('#comment-form').reset()
})

function pauseTimer () {
    clearInterval(countUp)
    document.querySelector('#pause').innerText = 'resume'
    document.querySelector('#minus').disabled = true
    document.querySelector('#plus').disabled = true
    document.querySelector('#heart').disabled = true
}

function resumeTimer () {

}


