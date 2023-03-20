import dogs from './data.js'

class DogHtml{
    constructor(data){
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
                <img src="${avatar}" alt="dog" class="main-img" />
                <div class='main-text'>
                    <p class='name-age'>${name}, ${age}</p>
                    <p class='hud'>${bio}</p>
                </div><div class='badge like' id='nope-badge'>
                    <img src='images/badge-nope.png' width='172.32' />
                </div>
                <div class='badge nope' id='like-badge'>        
                    <img src='images/badge-like.png' width='172.32' />
                </div>
            `
        }
}

export default DogHtml