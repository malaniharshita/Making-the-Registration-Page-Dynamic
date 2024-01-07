const posts = [
    {title: 'Post One'},
    {title: 'Post Two'}
]
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve(post.title);
            }
            else{
                reject('error : Something went wrong')
            }
        },1000);
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
        }, 1000)
    })
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    })
}
 async function fun() {
    try{
        const msg = await createPost({title: 'newPOST'});
        printPost();
        const msg1 = await updateLastUserActivityTime()
        console.log(`is created ${msg1} minutes ago`);
        const msg2 = await deletePost();
        console.log(`note that the ${msg2.title} is deleted`);
        const msg3 = await deletePost();
        console.log(`note that the ${msg3.title} is deleted`);
        printPost();
    }
    catch(err){
        console.log(error)
    }
 }
fun();