const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 429
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const nameCourbEl = document.getElementById('name-courb')
const userLocationCourbEl = document.getElementById('userLocation-courb')
const likesCourbEl = document.getElementById('likes')
const likeIconCourbEl = document.getElementById('like-icon-courb')
const userNameCourbEl = document.getElementById('userName-courb')
const commentCourbEl = document.getElementById('comment-courb')
const postCourbEl = document.getElementById('post-courb')

nameCourbEl.textContent = posts[1].name
userLocationCourbEl.textContent = posts[1].location
likesCourbEl.textContent = posts[1].likes + " likes"
userNameCourbEl.textContent = posts[1].username
commentCourbEl.textContent = posts[1].comment
postCourbEl.addEventListener('dblclick', function () {
    posts[1].likes += 1
    likesCourbEl.textContent = posts[1].likes + " likes"
})
likeIconCourbEl.addEventListener('click', function () {
    posts[1].likes += 1
    likesCourbEl.textContent = posts[1].likes + " likes"
})

const nameVanEl = document.getElementById('name-van')
const userLocationVanEl = document.getElementById('userLocation-van')
const postVanEl = document.getElementById('post-van')
const likeIconVanEl = document.getElementById('like-icon-van')
const likesVanEl = document.getElementById('likes-van')
const userNameVanEl = document.getElementById('userName-van')
const commentVanEl = document.getElementById('comment-van')

nameVanEl.textContent = posts[0].name
userLocationVanEl.textContent = posts[0].location
likesVanEl.textContent = posts[0].likes + ' likes'
userNameVanEl.textContent = posts[0].username
commentVanEl.textContent = posts[0].comment

postVanEl.addEventListener('dblclick', function () {
    posts[0].likes += 1
    likesVanEl.textContent = posts[0].likes + " likes"
})
likeIconVanEl.addEventListener('click', function () {
    posts[0].likes += 1
    likesVanEl.textContent = posts[0].likes + " likes"
})
