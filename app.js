
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const url = document.querySelector('.url')

const resultTitle = document.querySelector('.titleResult')
const resultDescription = document.querySelector('.descriptionResult')
const resultUrl = document.querySelector('.urlResult')

const h1Title = document.createElement("h1")
const pDescription = document.createElement("p")
const imgUrl = document.createElement("img")
function createCard(){  
    //title
    resultTitle.appendChild(h1Title) 
    h1Title.innerHTML = ''
    h1Title.innerHTML += title.value
    //description
    resultDescription.appendChild(pDescription)
    pDescription.innerHTML= ''
    pDescription.innerHTML += description.value
    //url
    resultUrl.appendChild(imgUrl)
    imgUrl.setAttribute("src",`${url.value}`)
}

