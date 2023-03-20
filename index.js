import dogs from './data.js'
import DogHtml from './Dog.js'

let moreDogs = [ "teddy", "bella", "rex"] 

const getNewDog = () => {
    const nextDogData = dogs[moreDogs.shift()]
    return nextDogData ? new DogHtml(nextDogData) : {}
}

const liked = () => {
    document.getElementById('like-badge').style.display = 'block'
    if(moreDogs.length > 0) {
        setTimeout(() => {
            tinDog = getNewDog()
            render()
        }, 3000)
    }
}

const crossed = () => {
        document.getElementById('nope-badge').style.display = 'block'
        if(moreDogs.length > 0) {
            setTimeout(() => {
                tinDog = getNewDog()
                render()
            }, 3000)
        }
}

document.getElementById('like-btn').addEventListener('click', liked)
document.getElementById('nope-btn').addEventListener('click', crossed)

function render(){
    document.getElementById('main').innerHTML = tinDog.getDogHtml()
}

let tinDog = getNewDog()
render()