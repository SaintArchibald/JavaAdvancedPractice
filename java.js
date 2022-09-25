// Q1
function showRating (rating) {
    let starRating = ''
    for (let i = 0; i < rating; i++) {
        starRating += '*'
        if (i !== Math.floor(rating)-1) {
            starRating += " "
        }
    }
    if (!Number.isInteger(rating)) {
        starRating += " ."
    }
    return starRating
   
}
 
console. log(showRating(3))
console. log(showRating(4.5))
console. log(showRating(0.5))

// Q2
function sortLowToHigh (arr) {
    return arr.sort((a, b) => a - b)
}
 
console. log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
console. log(sortLowToHigh([5, 10, 0, -5]))
console. log(sortLowToHigh([3, 2, 1, 0]))

// Q3
function sortHighToLow (arr) {
    return arr.sort((a, b) => b.price - a.price)
}
 
console. log(sortHighToLow([
    {id:1, price:50}, {id:2, price:30}, {id:3, price:60}, {id:4, price:10}]))

// Q4
    async function postByUser (userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
 
    const result = await promise.json()
 
    const posts = result.filter(elem => elem.userId === userId)
 
    console.log(posts)
}
 
postByUser(4)

// Q5
async function firstSixIncomplete (userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
 
    const result = await promise.json()
 
    const taskStatus = result.filter(elem => !elem.completed).slice(0, 6)
 
    console.log(taskStatus)
}
 
firstSixIncomplete(6)
