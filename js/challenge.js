
const counter = document.querySelector('#counter')

window.addEventListener('load', () => {countUp = setInterval(() => {counter.innerText++}, 1000)})

document.querySelector('#minus').addEventListener('click', () => {counter.innerText--})

document.querySelector('#plus').addEventListener('click', () => {counter.innerText++})

document.querySelector('#heart').addEventListener('click', () => {
    if (document.getElementById(counter.innerText)) {
        let likeLi = document.getElementById(counter.innerText)
        likeLi.innerText = `${counter.innerText} has been liked ${++likeLi.dataset.likecount} times`
    }
    else {
        const likeList = document.querySelector('.likes')
        let li = document.createElement('li')
        li.id = counter.innerText
        li.dataset.likecount = 1
        li.innerText = `${counter.innerText} has been liked 1 time`
        likeList.appendChild(li)
    }
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
    document.querySelector('#pause').innerHTML = 'resume'
    document.querySelector('#minus').disabled = true
    document.querySelector('#plus').disabled = true
    document.querySelector('#heart').disabled = true
}


