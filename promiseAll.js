const posts = [
    {
        title: 'Post One'
        
    }

]
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve(post);
            }
            else{
                reject('error : Something went wrong')
            }
        },8000);
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            const poppedElement = posts.pop();
            resolve(poppedElement);
        } else {
            reject('ERROR');
        }
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myTime = new Date().getMinutes();
            resolve(myTime);
        }, 9000)
    })
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    })
}
Promise.all([createPost({ title: 'newPOST' }), updateLastUserActivityTime()])
    .then((values) => {
        lastActivityTime = values[1];
        printPost();
        console.log(`is created @ ${(lastActivityTime)} minutes ago`);
    })
    .then(() => {
        deletePost().then((deletedPost) => {
            console.log(`note that the ${deletedPost.title} is deleted`)
        })
    })
    .then(() => {
        printPost();
    })
    .catch((msg) => console.log('error'))

//if only promise is used in place of promise.all so here is the code - 
 /*createPost({title: 'newPOST'}).then(() => {
     updateLastUserActivityTime().then((values) => {
        printPost();
         let currentTime = new Date().getTime();
           console.log((currentTime - values)/1000 +'seconds ago');
    })
 })*/